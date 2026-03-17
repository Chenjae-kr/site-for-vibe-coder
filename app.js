const siteCatalog = [
  {
    name: "Godly",
    url: "https://godly.website/",
    category: "UI 영감",
    language: "EN",
    summary:
      "임팩트 있는 웹 디자인을 클린한 인터페이스로 모아 보여주는 큐레이션 쇼케이스.",
    whyItHelps:
      "랜딩 페이지 무드보드나 톤앤매너를 빠르게 잡아야 할 때 가장 먼저 훑기 좋습니다.",
    tags: ["showcase", "landing-page", "visual-inspiration"],
    notes: ["쇼케이스", "빠른 훑어보기", "시각 톤 탐색"],
  },
  {
    name: "Awwwards",
    url: "https://www.awwwards.com/websites/ui-design/",
    category: "UI 영감",
    language: "EN",
    summary:
      "전 세계 웹 디자인 수상작을 볼 수 있는 대표 어워드 아카이브.",
    whyItHelps:
      "트렌드, 인터랙션, 비주얼 완성도를 한 번에 참고하고 싶은 바이브코더에게 유용합니다.",
    tags: ["awards", "interaction", "trend"],
    notes: ["수상작", "최신 UI 흐름", "디자인 밀도"],
  },
  {
    name: "CSS Design Awards",
    url: "https://www.cssdesignawards.com/",
    category: "UI 영감",
    language: "EN",
    summary:
      "CSS와 JavaScript 구현력이 돋보이는 프로젝트를 중심으로 큐레이션하는 디자인 어워드 사이트.",
    whyItHelps:
      "예쁘기만 한 레퍼런스보다 실제 구현 감각까지 같이 보고 싶을 때 참고 가치가 높습니다.",
    tags: ["css", "javascript", "award-winning"],
    notes: ["구현 감각", "프론트엔드 중심", "레퍼런스 탐색"],
  },
  {
    name: "The FWA",
    url: "https://thefwa.com/awards/",
    category: "UI 영감",
    language: "EN",
    summary:
      "실험적이고 혁신적인 디지털 프로젝트를 오래 축적해 온 웹 어워드 아카이브.",
    whyItHelps:
      "평범한 SaaS 화면을 넘어서 브랜딩, 모션, 몰입형 경험까지 확장하고 싶을 때 강한 자극을 줍니다.",
    tags: ["experimental", "branding", "motion"],
    notes: ["실험적 디자인", "브랜드 경험", "모션 참고"],
  },
];

const categories = ["전체", ...new Set(siteCatalog.map((site) => site.category))];

const state = {
  query: "",
  category: "전체",
};

const cardGrid = document.getElementById("card-grid");
const filterGroup = document.getElementById("filter-group");
const searchInput = document.getElementById("search-input");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-button");

function createFilterButtons() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent = category;
    button.dataset.category = category;

    if (category === state.category) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      state.category = category;
      syncFilterButtons();
      render();
    });

    filterGroup.appendChild(button);
  });
}

function syncFilterButtons() {
  const buttons = filterGroup.querySelectorAll(".filter-chip");
  buttons.forEach((button) => {
    const isActive = button.dataset.category === state.category;
    button.classList.toggle("is-active", isActive);
  });
}

function filterSites() {
  const normalizedQuery = state.query.trim().toLowerCase();

  return siteCatalog.filter((site) => {
    const matchesCategory =
      state.category === "전체" || site.category === state.category;

    const searchableText = [
      site.name,
      site.summary,
      site.whyItHelps,
      ...site.tags,
      ...site.notes,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

function createCard(site) {
  const article = document.createElement("article");
  article.className = "site-card";

  const tags = site.tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");

  const notes = site.notes
    .map((note) => `<span class="meta-pill">${note}</span>`)
    .join("");

  article.innerHTML = `
    <div class="site-topline">
      <span class="site-category">${site.category}</span>
      <span class="site-language">${site.language}</span>
    </div>
    <div class="site-name-wrap">
      <h3 class="site-name">${site.name}</h3>
      <p class="site-description">${site.summary}</p>
    </div>
    <p class="site-why">${site.whyItHelps}</p>
    <div class="meta-list">${notes}</div>
    <div class="tag-list">${tags}</div>
    <a class="site-link" href="${site.url}" target="_blank" rel="noreferrer">
      사이트 열기
    </a>
  `;

  return article;
}

function render() {
  const filteredSites = filterSites();
  cardGrid.innerHTML = "";

  filteredSites.forEach((site) => {
    cardGrid.appendChild(createCard(site));
  });

  const countLabel =
    filteredSites.length === siteCatalog.length
      ? `${filteredSites.length}개의 사이트`
      : `${filteredSites.length}개 결과 / 전체 ${siteCatalog.length}개`;

  resultCount.textContent = countLabel;
  emptyState.hidden = filteredSites.length > 0;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

resetButton.addEventListener("click", () => {
  state.query = "";
  state.category = "전체";
  searchInput.value = "";
  syncFilterButtons();
  render();
});

createFilterButtons();
render();

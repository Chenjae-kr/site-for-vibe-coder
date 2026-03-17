const siteCatalog = [
  {
    name: "Godly",
    url: "https://godly.website/",
    category: "UI 영감",
    language: "EN",
    summary: "고감도 웹 디자인을 빠르게 훑기 좋은 쇼케이스 아카이브.",
    whyItHelps: "랜딩 무드보드와 톤앤매너를 잡을 때 시작점으로 좋습니다.",
    tags: ["showcase", "landing-page", "visual-inspiration"],
    notes: ["쇼케이스", "빠른 훑어보기", "시각 톤 탐색"],
  },
  {
    name: "Awwwards",
    url: "https://www.awwwards.com/websites/ui-design/",
    category: "UI 영감",
    language: "EN",
    summary: "전 세계 웹 디자인 수상작을 볼 수 있는 대표 어워드 아카이브.",
    whyItHelps: "최신 인터랙션과 비주얼 흐름을 한 번에 참고하기 좋습니다.",
    tags: ["awards", "interaction", "trend"],
    notes: ["수상작", "최신 UI 흐름", "디자인 밀도"],
  },
  {
    name: "CSS Design Awards",
    url: "https://www.cssdesignawards.com/",
    category: "UI 영감",
    language: "EN",
    summary: "CSS와 JavaScript 구현력이 돋보이는 프로젝트 중심의 디자인 어워드.",
    whyItHelps: "예쁜 화면뿐 아니라 실제 구현 감각까지 같이 보기 좋습니다.",
    tags: ["css", "javascript", "award-winning"],
    notes: ["구현 감각", "프론트엔드 중심", "레퍼런스 탐색"],
  },
  {
    name: "The FWA",
    url: "https://thefwa.com/awards/",
    category: "UI 영감",
    language: "EN",
    summary: "실험적이고 혁신적인 디지털 프로젝트를 오래 축적해 온 아카이브.",
    whyItHelps: "브랜딩과 몰입형 경험을 강하게 밀고 싶을 때 자극이 큽니다.",
    tags: ["experimental", "branding", "motion"],
    notes: ["실험적 디자인", "브랜드 경험", "모션 참고"],
  },
  {
    name: "Collect UI",
    url: "https://collectui.com/",
    category: "UI 영감",
    language: "EN",
    summary: "매일 업데이트되는 UI 영감 모음과 Daily UI 기반 작업물 아카이브.",
    whyItHelps: "가볍게 다양한 패턴과 스타일을 훑으며 아이디어를 넓히기 좋습니다.",
    tags: ["daily-ui", "components", "inspiration"],
    notes: ["매일 업데이트", "트렌디한 UI", "아이디어 확장"],
  },
  {
    name: "Mobbin",
    url: "https://mobbin.com/",
    category: "실무 UI 패턴",
    language: "EN",
    summary: "실제 앱과 웹 스크린샷을 대규모로 모아둔 UI 패턴 라이브러리.",
    whyItHelps: "Dribbble보다 실서비스 화면을 참고하고 싶을 때 특히 강력합니다.",
    tags: ["real-product-ui", "screenshots", "patterns"],
    notes: ["실서비스 UI", "대규모 라이브러리", "필터 탐색"],
  },
  {
    name: "Page Flows",
    url: "https://pageflows.com/",
    category: "UX 플로우",
    language: "EN",
    summary: "가입, 온보딩, 결제, 설정 등 실제 앱의 전체 흐름을 보여주는 UX 아카이브.",
    whyItHelps: "화면 한 장보다 여정 전체를 설계할 때 실무 기준 참고가 됩니다.",
    tags: ["ux-flow", "onboarding", "checkout"],
    notes: ["사용자 여정", "GIF 흐름", "실무 시나리오"],
  },
  {
    name: "Lightpanda",
    url: "https://lightpanda.io/",
    category: "개발 도구",
    language: "EN",
    summary:
      "AI 에이전트와 웹 자동화를 위해 처음부터 새로 만든 헤드리스 브라우저.",
    whyItHelps:
      "공식 소개 기준으로 빠른 실행, 낮은 메모리 사용, 즉시 시작에 초점을 둬서 자동화와 스크래핑 워크플로우 참고에 좋습니다.",
    tags: ["headless-browser", "ai-agents", "web-automation"],
    notes: ["Zig 기반", "헤드리스 브라우저", "자동화 워크로드"],
  },
  {
    name: "Brutalist Websites",
    url: "https://brutalistwebsites.com/",
    category: "크리에이티브 UI",
    language: "EN",
    summary: "브루탈리즘 웹 디자인 사례를 모아둔 아카이브.",
    whyItHelps: "정돈된 미니멀의 반대편에서 강한 브랜드 개성을 참고하기 좋습니다.",
    tags: ["brutalism", "experimental", "brand-expression"],
    notes: ["브루탈리즘", "강한 개성", "거친 미감"],
  },
  {
    name: "Httpster",
    url: "https://httpster.net/",
    category: "크리에이티브 UI",
    language: "EN",
    summary: "독특하고 창의적인 웹 인터페이스를 큐레이션하는 쇼케이스.",
    whyItHelps: "레이아웃과 색 조합이 막혔을 때 새로운 관점을 줍니다.",
    tags: ["creative-layout", "color", "web-showcase"],
    notes: ["독특한 레이아웃", "색 조합", "새로운 관점"],
  },
  {
    name: "Siteinspire",
    url: "https://www.siteinspire.com/",
    category: "크리에이티브 UI",
    language: "EN",
    summary: "스타일과 컬러 필터가 잘 정리된 웹 디자인 갤러리.",
    whyItHelps: "원하는 톤과 구조에 맞는 사례만 빠르게 좁혀볼 수 있습니다.",
    tags: ["curation", "filters", "gallery"],
    notes: ["세밀한 필터", "정돈된 갤러리", "스타일 탐색"],
  },
  {
    name: "Bestfolios",
    url: "https://www.bestfolios.com/",
    category: "크리에이티브 UI",
    language: "EN",
    summary: "포트폴리오와 이력서 레퍼런스를 폭넓게 모아둔 쇼케이스.",
    whyItHelps: "창의적 자기표현 방식과 프로젝트 서술 구성을 참고하기 좋습니다.",
    tags: ["portfolio", "resume", "personal-branding"],
    notes: ["포트폴리오", "이력서", "자기표현"],
  },
  {
    name: "Landingfolio",
    url: "https://www.landingfolio.com/components",
    category: "랜딩/히어로",
    language: "EN",
    summary: "히어로를 포함한 랜딩 섹션 패턴을 폭넓게 모아둔 라이브러리.",
    whyItHelps: "전환형 랜딩 구조를 빠르게 벤치마킹할 수 있습니다.",
    tags: ["hero-sections", "landing-page", "components"],
    notes: ["히어로 섹션", "컴포넌트 라이브러리", "랜딩 참고"],
  },
  {
    name: "Lapa Ninja",
    url: "https://www.lapa.ninja/",
    category: "랜딩/히어로",
    language: "EN",
    summary: "업데이트가 빠른 대규모 랜딩페이지 갤러리.",
    whyItHelps: "최신 랜딩 흐름과 무료 리소스를 함께 보기에 좋습니다.",
    tags: ["landing-gallery", "screenshots", "templates"],
    notes: ["대규모 갤러리", "빠른 업데이트", "무료 리소스"],
  },
  {
    name: "Saaspo Sections",
    url: "https://saaspo.com/sections",
    category: "랜딩/히어로",
    language: "EN",
    summary: "SaaS 랜딩 섹션 예시를 유형별로 모아둔 아카이브.",
    whyItHelps: "B2B SaaS 전환 구조와 히어로 메시징을 참고하기 좋습니다.",
    tags: ["saas", "hero", "conversion"],
    notes: ["SaaS 특화", "전환 구조", "섹션 비교"],
  },
  {
    name: "One Page Love",
    url: "https://onepagelove.com/inspiration",
    category: "랜딩/히어로",
    language: "EN",
    summary: "원페이지 웹사이트 중심의 전문 큐레이션 아카이브.",
    whyItHelps: "스크롤 기반 스토리텔링 레퍼런스를 찾을 때 좋습니다.",
    tags: ["one-page", "storytelling", "promotion"],
    notes: ["원페이지 특화", "스크롤 내러티브", "프로모션 참고"],
  },
  {
    name: "Land-book",
    url: "https://land-book.com/",
    category: "랜딩/히어로",
    language: "EN",
    summary: "매일 업데이트되는 랜딩페이지 갤러리와 템플릿 정보.",
    whyItHelps: "업종과 스타일별로 원하는 랜딩을 빠르게 찾기 편합니다.",
    tags: ["landing-gallery", "filters", "templates"],
    notes: ["매일 업데이트", "정교한 필터", "템플릿 참고"],
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    category: "인터랙티브/애니메이션",
    language: "EN",
    summary: "실행 가능한 프론트엔드 실험을 보고 포크할 수 있는 플레이그라운드.",
    whyItHelps: "인터랙션을 코드와 함께 학습하기에 가장 실전적입니다.",
    tags: ["interactive", "forkable-code", "experiments"],
    notes: ["실행 가능한 코드", "즉시 포크", "개발자 학습용"],
  },
  {
    name: "Codrops",
    url: "https://tympanus.net/codrops/",
    category: "인터랙티브/애니메이션",
    language: "EN",
    summary: "최신 웹 실험과 고급 CSS/JavaScript 튜토리얼을 다루는 매거진.",
    whyItHelps: "멋진 효과를 실제로 어떻게 구현하는지 배우기 좋습니다.",
    tags: ["tutorials", "web-experiments", "css-javascript"],
    notes: ["최신 웹 실험", "상세 튜토리얼", "구현 방법"],
  },
  {
    name: "SVGator Blog",
    url: "https://www.svgator.com/blog/",
    category: "인터랙티브/애니메이션",
    language: "EN",
    summary: "SVG 애니메이션 예제와 구현 팁을 모아둔 블로그.",
    whyItHelps: "가볍고 선명한 웹 애니메이션을 만들고 싶을 때 좋습니다.",
    tags: ["svg-animation", "best-practices", "motion"],
    notes: ["SVG 예제", "트렌드 분석", "구현 팁"],
  },
  {
    name: "Observable Plot",
    url: "https://observablehq.com/plot",
    category: "데이터 시각화",
    language: "EN",
    summary: "문법 기반 차트 라이브러리와 인터랙티브 예제를 함께 제공하는 공식 페이지.",
    whyItHelps: "복잡한 데이터도 우아하게 시각화하는 방식을 빠르게 테스트할 수 있습니다.",
    tags: ["charts", "observable", "interactive-examples"],
    notes: ["문법 기반 차트", "인터랙티브 예제", "우아한 시각화"],
  },
  {
    name: "D3 Graph Gallery",
    url: "https://d3-graph-gallery.com/",
    category: "데이터 시각화",
    language: "EN",
    summary: "D3.js 차트 예제를 코드와 함께 모아둔 대형 갤러리.",
    whyItHelps: "수백 가지 차트와 커스터마이징 출발점을 찾기에 좋습니다.",
    tags: ["d3", "chart-examples", "templates"],
    notes: ["D3 바이블", "코드 예제", "차트 템플릿"],
  },
  {
    name: "Chart.js Samples",
    url: "https://www.chartjs.org/docs/latest/samples/information.html",
    category: "데이터 시각화",
    language: "EN",
    summary: "Chart.js 공식 샘플과 커스터마이징 가이드를 볼 수 있는 페이지.",
    whyItHelps: "반응형 차트를 빠르게 구현하고 싶을 때 매우 실용적입니다.",
    tags: ["chartjs", "samples", "plugins"],
    notes: ["공식 샘플", "반응형 차트", "플러그인 참고"],
  },
  {
    name: "Recharts Examples",
    url: "https://recharts.github.io/en-US/examples",
    category: "데이터 시각화",
    language: "EN",
    summary: "React 전용 차트 컴포넌트 예제를 모아둔 공식 갤러리.",
    whyItHelps: "컴포넌트 기반 차트를 React 프로젝트에 붙일 때 참고하기 좋습니다.",
    tags: ["react-charts", "typescript", "examples"],
    notes: ["React 전용", "예제 갤러리", "TS 친화적"],
  },
  {
    name: "Nivo Components",
    url: "https://nivo.rocks/components/",
    category: "데이터 시각화",
    language: "EN",
    summary: "애니메이션과 인터랙션이 강한 React 데이터 시각화 컴포넌트 모음.",
    whyItHelps: "바로 프로젝트에 적용 가능한 높은 완성도의 차트를 찾을 때 좋습니다.",
    tags: ["nivo", "react", "animated-charts"],
    notes: ["아름다운 애니메이션", "인터랙션", "프로젝트 적용"],
  },
  {
    name: "Shadertoy",
    url: "https://www.shadertoy.com/",
    category: "창의적 코딩",
    language: "EN",
    summary: "세계 최고 수준의 셰이더 아트를 볼 수 있는 갤러리.",
    whyItHelps: "WebGL 배경과 효과, 비주얼 실험의 영감 원천으로 강력합니다.",
    tags: ["shader", "webgl", "visual-art"],
    notes: ["셰이더 아트", "수학적 비주얼", "WebGL 영감"],
  },
  {
    name: "OpenProcessing Browse",
    url: "https://openprocessing.org/browse",
    category: "창의적 코딩",
    language: "EN",
    summary: "Processing과 p5.js 기반의 창의적 코딩 작품을 탐색할 수 있는 아카이브.",
    whyItHelps: "코드가 열려 있는 인터랙티브 아트를 보며 학습하기 좋습니다.",
    tags: ["generative-art", "p5js", "open-source"],
    notes: ["제너레이티브 아트", "코드 공개", "인터랙티브 학습"],
  },
  {
    name: "p5.js Examples",
    url: "https://p5js.org/examples/",
    category: "창의적 코딩",
    language: "EN",
    summary: "p5.js 공식 예제 모음과 창의적 코딩 입문 자료.",
    whyItHelps: "인터랙티브 아트 입문자에게 가장 친절한 출발점 중 하나입니다.",
    tags: ["p5js", "creative-coding", "examples"],
    notes: ["공식 예제", "입문 친화적", "창의적 코딩"],
  },
  {
    name: "Experiments with Google",
    url: "https://experiments.withgoogle.com/",
    category: "창의적 코딩",
    language: "EN",
    summary: "Google의 실험적 웹 프로젝트와 인터랙티브 데모 모음.",
    whyItHelps: "미래형 웹 경험과 최신 기술 활용 방식을 미리 체험하기 좋습니다.",
    tags: ["google-experiments", "ai", "webgl"],
    notes: ["실험적 프로젝트", "미래형 웹", "기술 영감"],
  },
  {
    name: "three.js Examples",
    url: "https://threejs.org/examples/",
    category: "창의적 코딩",
    language: "EN",
    summary: "three.js 공식 예제로 보는 3D 웹 그래픽스와 XR 데모 모음.",
    whyItHelps: "3D 웹, VR, AR 경험 구현 방식을 공식 예제로 참고할 수 있습니다.",
    tags: ["threejs", "3d-web", "vr-ar"],
    notes: ["공식 예제", "3D 그래픽스", "XR 참고"],
  },
  {
    name: "Storybook Showcase",
    url: "https://storybook.js.org/showcase",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "퍼블릭 스토리북과 디자인 시스템 사례를 모아둔 공식 쇼케이스.",
    whyItHelps: "대기업 디자인 시스템의 실제 문서화 방식을 보기 좋습니다.",
    tags: ["storybook", "design-system", "component-docs"],
    notes: ["퍼블릭 스토리북", "문서화", "대기업 사례"],
  },
  {
    name: "Component Gallery",
    url: "https://component.gallery/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "실제 서비스의 컴포넌트를 종류별로 모아둔 갤러리.",
    whyItHelps: "버튼, 카드, 폼 등 세부 컴포넌트 레벨 레퍼런스에 좋습니다.",
    tags: ["component-gallery", "buttons", "forms"],
    notes: ["실서비스 컴포넌트", "세밀한 분류", "디자인 시스템 참고"],
  },
  {
    name: "Material Design 3 Components",
    url: "https://m3.material.io/components",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Google의 Material Design 3 공식 컴포넌트 가이드.",
    whyItHelps: "체계적인 디자인 시스템과 멀티플랫폼 패턴을 참고하기 좋습니다.",
    tags: ["material-3", "google", "design-system"],
    notes: ["체계적 가이드", "멀티플랫폼", "공식 패턴"],
  },
  {
    name: "Ant Design Components",
    url: "https://ant.design/components/overview/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "엔터프라이즈급 React UI 라이브러리의 공식 컴포넌트 개요.",
    whyItHelps: "어드민, 대시보드, 업무용 인터페이스 참고에 강합니다.",
    tags: ["ant-design", "enterprise", "react-ui"],
    notes: ["엔터프라이즈", "어드민 UI", "완성도 높은 컴포넌트"],
  },
  {
    name: "Chakra UI Components",
    url: "https://chakra-ui.com/docs/components/concepts/overview",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "모던한 React 컴포넌트와 접근성 중심 API를 제공하는 공식 문서.",
    whyItHelps: "개발자 친화적 API와 다크 모드, 접근성 기본기를 참고하기 좋습니다.",
    tags: ["chakra-ui", "accessibility", "react-components"],
    notes: ["모던 React", "접근성", "개발자 친화적"],
  },
  {
    name: "Tailwind UI Components",
    url: "https://tailwindui.com/components",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Tailwind CSS 기반 프리미엄 컴포넌트와 패턴 모음.",
    whyItHelps: "복사-붙여넣기 중심으로 빠르게 제품 화면을 조립할 때 좋습니다.",
    tags: ["tailwind-ui", "premium-components", "responsive"],
    notes: ["Tailwind 기반", "실무 속도", "반응형 패턴"],
  },
  {
    name: "MUI Components",
    url: "https://mui.com/material-ui/all-components/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Material UI 전 컴포넌트를 한눈에 볼 수 있는 공식 목록.",
    whyItHelps: "방대한 컴포넌트 범위와 커스터마이징 출발점을 잡기 좋습니다.",
    tags: ["mui", "material-ui", "react-components"],
    notes: ["방대한 라이브러리", "커스터마이징", "React 전용"],
  },
  {
    name: "Mantine Core",
    url: "https://mantine.dev/core/package",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "컴포넌트, 훅, 유틸리티를 함께 제공하는 Mantine의 코어 문서.",
    whyItHelps: "현대적이고 깔끔한 React UI 스택을 참고하기 좋습니다.",
    tags: ["mantine", "react", "hooks"],
    notes: ["풀스택 감각", "유틸리티 포함", "깔끔한 디자인"],
  },
  {
    name: "Flowbite Components",
    url: "https://flowbite.com/docs/components/buttons/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Tailwind CSS 기반 오픈소스 컴포넌트 문서와 예제.",
    whyItHelps: "React, Vue, Angular 등 다양한 스택에서 빠르게 참고할 수 있습니다.",
    tags: ["flowbite", "tailwind", "open-source"],
    notes: ["오픈소스", "다양한 프레임워크", "고품질 컴포넌트"],
  },
  {
    name: "Bootstrap Examples",
    url: "https://getbootstrap.com/docs/5.3/examples/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Bootstrap 공식 예제와 빠른 프로토타이핑 샘플 모음.",
    whyItHelps: "기본기 있는 반응형 화면을 빠르게 뽑을 때 유용합니다.",
    tags: ["bootstrap", "examples", "responsive"],
    notes: ["공식 예제", "빠른 프로토타이핑", "기본기 탄탄"],
  },
  {
    name: "Primer Components",
    url: "https://primer.style/product/components/",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "GitHub의 공식 디자인 시스템 컴포넌트 가이드.",
    whyItHelps: "개발자 도구 UI와 기능 중심 인터페이스 참고에 좋습니다.",
    tags: ["primer", "github", "product-ui"],
    notes: ["GitHub 디자인 시스템", "기능 중심 UI", "개발자 도구 감성"],
  },
  {
    name: "Shopify Polaris Components",
    url: "https://polaris.shopify.com/components",
    category: "컴포넌트 라이브러리",
    language: "EN",
    summary: "Shopify의 공식 디자인 시스템 컴포넌트 허브.",
    whyItHelps: "복잡한 관리자 화면과 e-commerce UI 패턴 참고에 강합니다.",
    tags: ["shopify-polaris", "ecommerce", "admin-ui"],
    notes: ["이커머스 특화", "관리자 UI", "복잡한 데이터 관리"],
  },
  {
    name: "Coolors Gradients",
    url: "https://coolors.co/gradients",
    category: "색상/그라디언트",
    language: "EN",
    summary: "트렌디한 그라디언트와 색 조합을 빠르게 비교할 수 있는 페이지.",
    whyItHelps: "히어로 배경과 브랜딩 컬러 조합 영감을 얻기 좋습니다.",
    tags: ["gradients", "color-palettes", "coolors"],
    notes: ["트렌디한 조합", "팔레트 비교", "브랜딩 영감"],
  },
  {
    name: "WebGradients",
    url: "https://webgradients.com/",
    category: "색상/그라디언트",
    language: "EN",
    summary: "코드를 바로 복사해 쓸 수 있는 CSS 그라디언트 모음집.",
    whyItHelps: "세련된 색 조합을 빠르게 적용할 때 매우 실용적입니다.",
    tags: ["css-gradients", "copy-paste", "collections"],
    notes: ["코드 복사", "180개 컬렉션", "모던 색 조합"],
  },
  {
    name: "Granim.js",
    url: "https://granim.js.org/",
    category: "색상/그라디언트",
    language: "EN",
    summary: "인터랙티브 그라디언트 애니메이션을 만들 수 있는 라이브러리 문서.",
    whyItHelps: "움직이는 배경을 가볍게 구현하고 싶을 때 참고하기 좋습니다.",
    tags: ["animated-gradients", "javascript", "backgrounds"],
    notes: ["움직이는 그라디언트", "라이브러리", "커스터마이징"],
  },
  {
    name: "CSS Gradient",
    url: "https://cssgradient.io/",
    category: "색상/그라디언트",
    language: "EN",
    summary: "시각적 에디터로 그라디언트를 만들고 CSS 코드를 생성해주는 도구.",
    whyItHelps: "그라디언트 실험과 즉시 코드 복사에 편합니다.",
    tags: ["gradient-generator", "css", "visual-editor"],
    notes: ["시각적 에디터", "즉시 코드 생성", "빠른 실험"],
  },
  {
    name: "uiGradients",
    url: "https://uigradients.com/",
    category: "색상/그라디언트",
    language: "EN",
    summary: "엄선된 아름다운 그라디언트 컬렉션을 제공하는 사이트.",
    whyItHelps: "원클릭으로 좋은 색 조합을 골라 히어로에 적용하기 좋습니다.",
    tags: ["gradients", "collections", "one-click-css"],
    notes: ["아름다운 컬렉션", "원클릭 CSS", "디자이너 큐레이션"],
  },
  {
    name: "Vanta.js",
    url: "https://www.vantajs.com/",
    category: "비주얼 효과",
    language: "EN",
    summary: "Three.js 기반 배경 효과를 코드 몇 줄로 적용할 수 있는 라이브러리.",
    whyItHelps: "임팩트 있는 3D 배경을 빠르게 도입하고 싶을 때 좋습니다.",
    tags: ["background-effects", "threejs", "3d"],
    notes: ["3D 배경", "간단한 적용", "임팩트 있는 효과"],
  },
  {
    name: "particles.js",
    url: "https://vincentgarreau.com/particles.js/",
    category: "비주얼 효과",
    language: "EN",
    summary: "파티클 배경 효과를 쉽게 구현할 수 있는 대표 라이브러리 데모.",
    whyItHelps: "가볍고 익숙한 배경 효과를 빠르게 넣고 싶을 때 실용적입니다.",
    tags: ["particles", "background-effects", "lightweight"],
    notes: ["파티클 효과", "가벼운 배경", "프리셋 활용"],
  },
  {
    name: "WeaveSilk",
    url: "https://weavesilk.com/",
    category: "비주얼 효과",
    language: "EN",
    summary: "마우스 움직임으로 패턴을 생성하는 인터랙티브 아트 경험.",
    whyItHelps: "명상적이고 유기적인 움직임 레퍼런스를 얻기 좋습니다.",
    tags: ["interactive-art", "patterns", "motion"],
    notes: ["실크 패턴", "마우스 인터랙션", "치유적 경험"],
  },
  {
    name: "Chrome Music Lab",
    url: "https://musiclab.chromeexperiments.com/",
    category: "비주얼 효과",
    language: "EN",
    summary: "음악과 비주얼을 결합한 인터랙티브 실험 모음.",
    whyItHelps: "교육적이면서도 재미있는 멀티모달 인터랙션 참고에 좋습니다.",
    tags: ["music", "interactive", "visual-experiments"],
    notes: ["음악+비주얼", "교육적 실험", "재미있는 경험"],
  },
  {
    name: "UI Patterns",
    url: "https://ui-patterns.com/patterns",
    category: "패턴/디자인 시스템",
    language: "EN",
    summary: "클래식 UI 패턴을 설명과 함께 정리한 카탈로그.",
    whyItHelps: "패턴별 사용 시기와 목적을 차분히 공부하기 좋습니다.",
    tags: ["ui-patterns", "ux", "catalog"],
    notes: ["클래식 패턴", "사용 시기", "설명 중심"],
  },
  {
    name: "Pattern Lab",
    url: "https://patternlab.io/",
    category: "패턴/디자인 시스템",
    language: "EN",
    summary: "아토믹 디자인 기반 시스템 구축 도구와 방법론 사이트.",
    whyItHelps: "컴포넌트 중심 설계 체계를 잡을 때 참고 가치가 높습니다.",
    tags: ["atomic-design", "patternlab", "system-building"],
    notes: ["아토믹 디자인", "도구+방법론", "재사용 구조"],
  },
  {
    name: "Design Systems Repo",
    url: "https://designsystemsrepo.com/",
    category: "패턴/디자인 시스템",
    language: "EN",
    summary: "전 세계 유명 기업들의 디자인 시스템을 모아둔 저장소.",
    whyItHelps: "벤치마킹 대상을 넓게 잡고 싶을 때 매우 유용합니다.",
    tags: ["design-systems", "benchmarking", "repo"],
    notes: ["유명 기업 모음", "벤치마킹", "가이드라인 탐색"],
  },
  {
    name: "Design Tokens",
    url: "https://www.designtokens.org/",
    category: "패턴/디자인 시스템",
    language: "EN",
    summary: "디자인 토큰 표준과 가이드라인을 다루는 공식 커뮤니티 사이트.",
    whyItHelps: "디자인과 개발의 일관성을 구조적으로 맞출 때 중요합니다.",
    tags: ["design-tokens", "standards", "system-governance"],
    notes: ["표준 가이드", "일관성 유지", "확장 가능한 시스템"],
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    category: "전통 디자인 레퍼런스",
    language: "EN",
    summary: "트렌디한 디자인 작업물을 중심으로 한 크리에이티브 커뮤니티.",
    whyItHelps: "짧고 강한 비주얼 아이디어를 얻기에 빠른 장소입니다.",
    tags: ["design-community", "portfolio", "shots"],
    notes: ["트렌디한 비주얼", "포트폴리오 플랫폼", "샷 중심"],
  },
  {
    name: "Behance",
    url: "https://www.behance.net/",
    category: "전통 디자인 레퍼런스",
    language: "EN",
    summary: "프로젝트 단위의 포트폴리오를 깊게 볼 수 있는 플랫폼.",
    whyItHelps: "비주얼 중심 레이아웃과 프로젝트 내러티브 참고에 좋습니다.",
    tags: ["behance", "portfolio", "project-case-study"],
    notes: ["비주얼 중심", "프로젝트 상세", "창작자 플랫폼"],
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/",
    category: "전통 디자인 레퍼런스",
    language: "EN",
    summary: "이미지 중심의 미니멀한 탐색 경험을 보여주는 대표 사이트.",
    whyItHelps: "콘텐츠가 주인공이 되는 검색 UI를 참고하기 좋습니다.",
    tags: ["imagery", "search-ui", "minimal"],
    notes: ["미니멀 검색", "이미지 중심", "콘텐츠 우선"],
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/",
    category: "전통 디자인 레퍼런스",
    language: "EN",
    summary: "무한 스크롤과 Masonry 그리드 경험의 대표 사례.",
    whyItHelps: "시각적 발견형 인터페이스를 설계할 때 매우 좋은 참고점입니다.",
    tags: ["masonry-grid", "infinite-scroll", "discovery-ui"],
    notes: ["무한 스크롤", "Masonry 그리드", "발견형 UX"],
  },
  {
    name: "Adobe Portfolio",
    url: "https://portfolio.adobe.com/",
    category: "전통 디자인 레퍼런스",
    language: "EN",
    summary: "크리에이터를 위한 포트폴리오 템플릿과 표현 방식을 볼 수 있는 서비스.",
    whyItHelps: "작품을 전문적으로 돋보이게 하는 구조를 참고하기 좋습니다.",
    tags: ["portfolio", "templates", "creative-showcase"],
    notes: ["템플릿 기반", "작품 강조", "크리에이터 친화적"],
  },
  {
    name: "Animated Gradient Background Generator",
    url: "https://animated-gradient-background-generator.netlify.app/",
    category: "도구/생성기",
    language: "EN",
    summary: "움직이는 CSS 그라디언트 배경을 쉽게 생성해주는 도구.",
    whyItHelps: "코드 없이도 히어로 배경용 애니메이션을 빠르게 실험할 수 있습니다.",
    tags: ["gradient-generator", "css-animation", "background-tool"],
    notes: ["애니메이션 그라디언트", "즉시 코드 생성", "히어로 배경"],
  },
  {
    name: "WebGL Fluid Simulation",
    url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
    category: "도구/생성기",
    language: "EN",
    summary: "실시간 유체 시뮬레이션을 체험할 수 있는 유명 WebGL 데모.",
    whyItHelps: "물처럼 흐르는 인터랙티브 효과를 참고하거나 차용하기 좋습니다.",
    tags: ["fluid-simulation", "webgl", "interactive-demo"],
    notes: ["실시간 유체", "마우스 인터랙션", "강한 시각 효과"],
  },
  {
    name: "GLSL Sandbox",
    url: "http://glslsandbox.com/",
    category: "도구/생성기",
    language: "EN",
    summary: "브라우저에서 셰이더 코드를 작성하고 즉시 결과를 볼 수 있는 편집기.",
    whyItHelps: "셰이더 실험을 가볍게 반복하기 좋은 도구입니다.",
    tags: ["glsl", "shader-editor", "browser-tool"],
    notes: ["실시간 셰이더", "브라우저 편집", "즉시 결과 확인"],
  },
  {
    name: "Dwitter",
    url: "https://www.dwitter.net/",
    category: "도구/생성기",
    language: "EN",
    summary: "140자 JavaScript로 만드는 초소형 창의적 코딩 실험 플랫폼.",
    whyItHelps: "극단적으로 압축된 표현 방식이 좋은 자극이 됩니다.",
    tags: ["javascript-art", "creative-coding", "constraints"],
    notes: ["140자 실험", "제약 기반 창의성", "짧은 코드 아트"],
  },
  {
    name: "Vertex Shader Art",
    url: "https://www.vertexshaderart.com/",
    category: "도구/생성기",
    language: "EN",
    summary: "버텍스 셰이더 기반 작품과 고급 3D 표현을 볼 수 있는 사이트.",
    whyItHelps: "고급 그래픽스 기법과 예술적 비주얼 실험의 참고점이 됩니다.",
    tags: ["vertex-shader", "3d-art", "graphics"],
    notes: ["버텍스 셰이더", "3D 아트", "고급 그래픽스"],
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
const siteCountStat = document.getElementById("site-count-stat");
const categoryCountStat = document.getElementById("category-count-stat");

function updateHeroStats() {
  if (siteCountStat) {
    siteCountStat.textContent = String(siteCatalog.length);
  }

  if (categoryCountStat) {
    categoryCountStat.textContent = String(categories.length - 1);
  }
}

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

updateHeroStats();
createFilterButtons();
render();

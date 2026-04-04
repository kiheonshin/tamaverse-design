(() => {
  const STORAGE_KEYS = {
    design: "tama-templates.design.v1",
    layoutUi: "tama-templates.layouts.ui.v1",
    layoutCollection: "tama-templates.layouts.collection.v1",
    layoutSelection: "tama-templates.layouts.selection.v1"
  };

  const TEMPLATE_BASE =
    "https://mymtzfkypzdmsqryuubs.supabase.co/storage/v1/render/image/public/product-assets/templates";

  const designConcepts = [
    {
      id: "basic",
      name: "Basic",
      type: "static",
      typeLabel: "Static Design Template",
      preview: "basic",
      archiveHref: "/archive/design-systems/basic/",
      summary:
        "밝은 서피스, 네이비 구조색, 절제된 모션으로 안정적인 정적 웹페이지를 만들기 위한 기본 템플릿입니다.",
      traits: ["White Surface", "Navy Structure", "Subtle Motion"],
      recommendedUse: "브랜드 소개, 정보 아카이브, 정적 허브 페이지",
      motionNotes: "hover와 전환은 얕고 명확하게만 사용"
    },
    {
      id: "plat",
      name: "PLAT",
      type: "static",
      typeLabel: "Static Design Template",
      preview: "plat",
      archiveHref: "/archive/design-systems/plat/",
      summary:
        "네오-브루탈리스트 보더와 오프셋 그림자를 가진 구조형 템플릿으로, 카드와 모듈이 분명한 정적 페이지에 적합합니다.",
      traits: ["Neo-Brutalist", "Offset Shadow", "Structured Cards"],
      recommendedUse: "서비스 소개, 기능 정리, 대시보드형 랜딩",
      motionNotes: "강한 구조감이 핵심이며 모션보다 시각적 계층을 우선"
    },
    {
      id: "kawaii-cyberpop",
      name: "Kawaii Cyber-Pop",
      type: "motion",
      typeLabel: "Motion Design Reference",
      preview: "kawaii",
      archiveHref: "/archive/motion/kawaii-cyberpop/",
      summary:
        "네온 글로우, 입체감, 파티클, 3D 틸트가 결합된 고감도 인터랙션 레퍼런스입니다.",
      traits: ["Neon Glow", "3D Tilt", "Expressive Motion"],
      recommendedUse: "화려한 인터랙션 중심 웹페이지, 이벤트성 경험",
      motionNotes: "시각 스타일과 인터랙션 설계가 함께 고려되어야 함"
    },
    {
      id: "basic-motion-proof",
      name: "Basic Motion Proof",
      type: "motion",
      typeLabel: "Interactive Proof",
      preview: "proof",
      archiveHref: "/archive/motion/basic-proof/",
      summary:
        "Kawaii Cyber-Pop과 동일한 레이아웃 위에 Basic 디자인을 입히고, 키보드로 두 상태를 실시간 전환하는 proof입니다.",
      traits: ["Shared Layout", "Keyboard Switching", "Transition Proof"],
      recommendedUse: "동일 레이아웃에서 스타일/모션 전환을 검증해야 하는 프로젝트",
      motionNotes: "좌우 화살표로 10단계 스킨 전환을 확인"
    }
  ];

  const layoutFamilySpecs = [
    {
      slug: "tms-portfolio",
      name: "TMS Portfolio",
      count: 11,
      summary: "프로젝트 내러티브와 주요 성과를 시간 축으로 정리하는 포트폴리오형 레이아웃",
      structure: "Intro + Milestones + Evidence",
      density: "Medium",
      tags: ["Portfolio", "Narrative", "Milestones"]
    },
    {
      slug: "tms-marketing",
      name: "TMS Marketing",
      count: 12,
      summary: "캠페인 메시지, 채널, 전환 포인트를 빠르게 배열하는 마케팅 페이지 구조",
      structure: "Hero + Channels + CTA",
      density: "High",
      tags: ["Marketing", "Campaign", "CTA"]
    },
    {
      slug: "tms-brand-guidelines",
      name: "TMS Brand Guidelines",
      count: 10,
      summary: "브랜드 원칙, 시각 요소, 적용 규칙을 계층적으로 보여주는 가이드 구조",
      structure: "Principles + Rules + Samples",
      density: "High",
      tags: ["Guidelines", "System", "Reference"]
    },
    {
      slug: "tms-pitch",
      name: "TMS Pitch",
      count: 10,
      summary: "문제 정의에서 제안과 요청까지 빠르게 연결하는 설득형 피치 구조",
      structure: "Problem + Solution + Ask",
      density: "Medium",
      tags: ["Pitch", "Narrative", "Decision"]
    },
    {
      slug: "tms-finance",
      name: "TMS Finance",
      count: 11,
      summary: "수치, 전망, 근거를 명확하게 분리해 보여주는 재무 중심 구조",
      structure: "Metrics + Forecast + Notes",
      density: "High",
      tags: ["Finance", "Metrics", "Forecast"]
    },
    {
      slug: "tms-portfolio-copy",
      name: "TMS Creative",
      count: 8,
      summary: "시각 결과물과 짧은 설명을 가볍게 보여주는 크리에이티브 쇼케이스 구조",
      structure: "Gallery + Caption + Highlights",
      density: "Low",
      tags: ["Creative", "Gallery", "Showcase"]
    },
    {
      slug: "tms-social",
      name: "TMS Social",
      count: 9,
      summary: "플랫폼별 변형과 캠페인 단위를 빠르게 비교하는 소셜 콘텐츠 구조",
      structure: "Campaign + Platform Tiles",
      density: "Medium",
      tags: ["Social", "Campaign", "Tiles"]
    },
    {
      slug: "tms-strategy",
      name: "TMS Strategy",
      count: 8,
      summary: "의사결정 프레임과 실행 흐름을 도식처럼 읽히게 하는 전략 구조",
      structure: "Frame + Roadmap + Choices",
      density: "Medium",
      tags: ["Strategy", "Framework", "Roadmap"]
    },
    {
      slug: "tms-planning",
      name: "TMS Planning",
      count: 9,
      summary: "타임라인과 마일스톤, 우선순위를 분명히 드러내는 계획형 구조",
      structure: "Timeline + Milestones + Tasks",
      density: "Medium",
      tags: ["Planning", "Timeline", "Milestones"]
    },
    {
      slug: "tms-core",
      name: "TMS Core",
      count: 11,
      summary: "여러 목적에 재사용하기 쉬운 범용형 슬라이드 구조 모음",
      structure: "Modular Core Sections",
      density: "Medium",
      tags: ["Core", "Modular", "Reusable"]
    },
    {
      slug: "tms-case-study",
      name: "TMS Case Study",
      count: 10,
      summary: "문제, 접근, 결과를 선명하게 나눠 보여주는 케이스 스터디 구조",
      structure: "Challenge + Approach + Result",
      density: "Medium",
      tags: ["Case Study", "Narrative", "Results"]
    }
  ];

  const layoutFamilies = layoutFamilySpecs.map((family, familyIndex) => {
    return {
      ...family,
      familyIndex,
      layouts: Array.from({ length: family.count }, (_, layoutIndex) => {
        const layoutNumber = layoutIndex + 1;
        const isCover = layoutNumber === 1;
        const url = isCover
          ? `${TEMPLATE_BASE}/${family.slug}/slides/0.png?width=1200&quality=80&resize=contain`
          : `${TEMPLATE_BASE}/${family.slug}/pdp/${layoutNumber - 2}.webp?width=1200&quality=80&resize=contain`;

        return {
          id: `${family.slug}-${layoutNumber}`,
          familySlug: family.slug,
          familyName: family.name,
          familyIndex,
          layoutIndex,
          layoutNumber,
          totalLayouts: family.count,
          variantLabel: isCover ? "Cover Variant" : "Content Variant",
          url,
          structure: family.structure,
          density: family.density,
          tags: family.tags
        };
      })
    };
  });

  const allLayouts = layoutFamilies.flatMap((family) => family.layouts);
  const designById = new Map(designConcepts.map((concept) => [concept.id, concept]));
  const layoutById = new Map(allLayouts.map((layout) => [layout.id, layout]));

  function readJson(key, fallbackValue) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallbackValue;
    } catch (error) {
      return fallbackValue;
    }
  }

  function writeJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return;
    }
  }

  function getDesignById(id) {
    return designById.get(id) || null;
  }

  function getLayoutById(id) {
    return layoutById.get(id) || null;
  }

  function getSelectedDesign() {
    const stored = readJson(STORAGE_KEYS.design, null);
    return stored ? getDesignById(stored.id) : null;
  }

  function setSelectedDesign(id) {
    const concept = getDesignById(id);
    if (!concept) {
      return null;
    }

    writeJson(STORAGE_KEYS.design, {
      id: concept.id,
      selectedAt: new Date().toISOString()
    });
    return concept;
  }

  function getLayoutCollection() {
    const ids = readJson(STORAGE_KEYS.layoutCollection, []);
    return ids.map((id) => getLayoutById(id)).filter(Boolean);
  }

  function getSelectedLayout() {
    const stored = readJson(STORAGE_KEYS.layoutSelection, null);
    return stored ? getLayoutById(stored.id) : null;
  }

  function setSelectedLayout(layout) {
    if (!layout) {
      return null;
    }

    writeJson(STORAGE_KEYS.layoutSelection, {
      id: layout.id,
      selectedAt: new Date().toISOString()
    });
    return layout;
  }

  function buildLayoutPayload(layout) {
    return {
      id: layout.id,
      familySlug: layout.familySlug,
      familyName: layout.familyName,
      layoutNumber: layout.layoutNumber,
      totalLayouts: layout.totalLayouts,
      variantLabel: layout.variantLabel,
      structure: layout.structure,
      density: layout.density,
      tags: layout.tags,
      url: layout.url
    };
  }

  window.TamaTemplatesData = {
    STORAGE_KEYS,
    designConcepts,
    layoutFamilies,
    allLayouts,
    totalLayoutCount: allLayouts.length,
    readJson,
    writeJson,
    getDesignById,
    getLayoutById,
    getSelectedDesign,
    setSelectedDesign,
    getLayoutCollection,
    getSelectedLayout,
    setSelectedLayout,
    buildLayoutPayload
  };
})();

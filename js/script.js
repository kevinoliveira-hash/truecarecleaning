/**
 * TRUECARE CLEANING - MAIN SCRIPT
 * Handles:
 * - Bilingual translations (EN / PT)
 * - Light / Dark Theme toggle with persistent storage
 * - Accessible Mobile Navigation Menu (with Keyboard ESC & focus handling)
 * - Sticky Header scroll elevation
 * - Subtle Scroll Reveal animations (respecting prefers-reduced-motion)
 */

const translations = {
  en: {
    heroPhotoCaption: "Thoughtful details. A welcoming stay.",
    heroPhotoAlt: "Carefully arranged bed with layered cushions and folded guest towels",
    kitchenPhotoAlt: "Clean kitchen with polished worktops and tiled floor",
    guestPhotoAlt: "Guest bedroom prepared with fresh bedding and folded towels",
    diningPhotoAlt: "Tidy dining area with a wooden table and natural light",
    resultsLabel: "OUR WORK",
    resultsTitle: "See the care in every detail.",
    resultsDescription: "Before and after, from bedroom preparation to the surfaces we touch every day.",
    bedroomResult: "Guest-ready bedroom",
    detailResult: "Care in the details",
    beforeLabel: "Before",
    afterLabel: "After",
    bedroomResultBeforeAlt: "Guest bedroom before preparation, with unmade bedding",
    bedroomResultAfterAlt: "Guest bedroom after preparation, with arranged cushions and folded towels",
    detailResultBeforeAlt: "Stair post with accumulated dirt before cleaning",
    detailResultAfterAlt: "Stair post after cleaning, with existing paint wear still visible",
    // Navigation
    navLabel: "Main navigation",
    navServices: "Services",
    navAbout: "About",
    navAreas: "Areas",
    navQuote: "Get a quote",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",

    // Hero Section
    heroTitle: "Genuine care for the spaces that matter.",
    heroDescription:
      "Cleaning for family homes and short-let properties, with attention to detail and care in every visit.",
    heroBadge1: "Residential & Short-Let",
    heroBadge2: "Canary Wharf & London",
    heroBadge3: "Attention to Detail",
    heroQuote: "Request a quote",
    heroServices: "Explore our services",
    heroLocation: "London and nearby areas • Based in Luton",
    photoPlaceholder: "Your photo goes here",
    photoPlaceholderHint: "Place your photo in assets/images/hero.jpg",

    // Services Section
    servicesLabel: "OUR SERVICES",
    servicesTitle: "A clean space, ready to live in or welcome guests.",
    servicesDescription:
      "Every property is different. We discuss your needs and arrange a service that works for you.",

    homeCleaningTitle: "Home cleaning",
    homeCleaningDescription:
      "Cleaning for houses and flats, helping keep your home pleasant and ready for everyday life.",
    homeFeature1: "Living areas, bedrooms & common spaces",
    homeFeature2: "Kitchens & bathrooms thorough care",
    homeFeature3: "Flexible regular or occasional visits",

    airbnbTitle: "Short-let cleaning",
    airbnbDescription:
      "Cleaning for Airbnb and other short-let properties, helping you prepare for your next guests.",
    airbnbFeature1: "Guest-ready turnaround preparation",
    airbnbFeature2: "Linen & towel organization support",
    airbnbFeature3: "Attention to cleanliness standards",

    oneOffTitle: "One-off cleaning",
    oneOffDescription:
      "Need a helping hand for a specific occasion? Tell us what your space needs.",
    oneOffFeature1: "Ideal for seasonal or specific needs",
    oneOffFeature2: "Focused cleaning plan for your space",
    oneOffFeature3: "Tailored scope agreed in advance",

    serviceQuote: "Get a quote",

    // Process Section
    processLabel: "HOW IT WORKS",
    processTitle: "Simple steps, thoughtful results.",
    processDescription:
      "We keep the process clear and tailored from your first message to the final check.",
    processStep1Title: "Tell us about your space",
    processStep1Text:
      "Share your property type, location, and the kind of cleaning you need.",
    processStep2Title: "We tailor the visit",
    processStep2Text:
      "We listen to your routine, priorities, and preferred timing before confirming the service.",
    processStep3Title: "Enjoy a cared-for space",
    processStep3Text:
      "Receive a clean, welcoming environment that feels ready for everyday life or guests.",

    // About Section
    aboutLabel: "ABOUT TRUECARE",
    aboutTitle: "More than cleaning. It’s caring.",
    aboutParagraphOne:
      "At TrueCare Cleaning, we believe a well-cared-for space makes a difference to the people who live in it and those who visit.",
    aboutParagraphTwo:
      "Our service starts with a conversation. Tell us what you need and we’ll prepare a quote for your property.",
    aboutPillar1Title: "Attention to Detail",
    aboutPillar1Desc: "Care in every surface and corner, respecting your home.",
    aboutPillar2Title: "Tailored Consultation",
    aboutPillar2Desc: "We listen first to arrange a service that fits your requirements.",
    aboutPillar3Title: "Welcoming Spaces",
    aboutPillar3Desc: "Creating pleasant, pristine environments for family and guests.",

    // Areas Section
    areasLabel: "WHERE WE WORK",
    areasTitle: "London and nearby areas",
    areasDescription:
      "Based in Luton, we serve Canary Wharf and other areas of London and the surrounding region, depending on availability and travel.",
    areasCanaryWharf: "Canary Wharf",
    areasFocus: "Primary Focus Area",
    areasCentralLondon: "Central & East London",
    areasByAvailability: "By availability",
    areasLuton: "Luton",
    areasHomeBase: "Operational Base",
    areasSurrounding: "Surrounding Areas",
    areasByRequest: "Upon request",
    areasNote: "Travel and availability are confirmed during your quote inquiry.",
    areasLink: "Check your area →",

    // Contact Section
    contactLabel: "LET’S TALK",
    contactTitle: "Let TrueCare take care of your space.",
    contactDescription:
      "Get in touch and tell us your location and the type of cleaning you need.",
    contactWhatsAppTitle: "Direct WhatsApp Inquiry",
    contactWhatsAppSubtitle: "Fastest way to get in touch and discuss your schedule.",
    contactWhatsAppButton: "Chat on WhatsApp",
    contactReadyNote: "Fastest way to get a quote • Usually replies in a few hours",
    contactQuoteCardTitle: "What to share for your quote",
    contactStep1Title: "Property Type",
    contactStep1: "Home, apartment, or short-let accommodation",
    contactStep2Title: "Location",
    contactStep2: "Canary Wharf, London area, or Luton",
    contactStep3Title: "Timing & Needs",
    contactStep3: "Preferred frequency or target date",

    // Footer
    footerTagline: "Genuine care for the spaces that matter.",
    footerNavTitle: "Navigation",
    footerServicesTitle: "Services",
    footerCoverageTitle: "Coverage",
    footerCoverageText: "Based in Luton, proudly serving Canary Wharf and London areas.",
    footerRights: "All rights reserved.",

    // Controls
    languageButton: "PT",
    languageButtonLabel: "Switch language to Portuguese",
    darkLabel: "Dark",
    lightLabel: "Light",
    darkButtonLabel: "Switch to dark theme",
    lightButtonLabel: "Switch to light theme",

    // Meta
    pageTitle: "TrueCare Cleaning | Home & Short-Let Cleaning",
    metaDescription:
      "Careful cleaning for family homes and short-let properties in London and Luton. Contact TrueCare Cleaning for a quote."
  },

  pt: {
    heroPhotoCaption: "Cuidado nos detalhes. Uma estadia acolhedora.",
    heroPhotoAlt: "Cama organizada com almofadas e toalhas dobradas para os hóspedes",
    kitchenPhotoAlt: "Cozinha limpa com bancadas e piso de cerâmica",
    guestPhotoAlt: "Quarto preparado com roupa de cama organizada e toalhas dobradas",
    diningPhotoAlt: "Sala de jantar organizada com mesa de madeira e iluminação natural",
    resultsLabel: "NOSSO TRABALHO",
    resultsTitle: "Veja o cuidado em cada detalhe.",
    resultsDescription: "Antes e depois: da preparação dos quartos ao cuidado com as superfícies do dia a dia.",
    bedroomResult: "Quarto pronto para receber",
    detailResult: "Cuidado nos detalhes",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    bedroomResultBeforeAlt: "Quarto antes da preparação, com a cama desarrumada",
    bedroomResultAfterAlt: "Quarto após a preparação, com almofadas organizadas e toalhas dobradas",
    detailResultBeforeAlt: "Coluna da escada com sujeira acumulada antes da limpeza",
    detailResultAfterAlt: "Coluna da escada após a limpeza, com o desgaste da pintura ainda visível",
    // Navegação
    navLabel: "Menu principal",
    navServices: "Serviços",
    navAbout: "Sobre",
    navAreas: "Regiões",
    navQuote: "Pedir orçamento",
    menuOpenLabel: "Abrir menu de navegação",
    menuCloseLabel: "Fechar menu de navegação",

    // Seção Hero
    heroTitle: "Cuidado de verdade para os espaços que importam.",
    heroDescription:
      "Limpeza para casas de família e imóveis de curta temporada, com atenção aos detalhes e cuidado em cada serviço.",
    heroBadge1: "Casas e Apartamentos",
    heroBadge2: "Canary Wharf e Londres",
    heroBadge3: "Atenção aos Detalhes",
    heroQuote: "Solicitar orçamento",
    heroServices: "Conhecer os serviços",
    heroLocation: "Londres e regiões próximas • Base em Luton",
    photoPlaceholder: "Sua foto entra aqui",
    photoPlaceholderHint: "Coloque sua foto em assets/images/hero.jpg",

    // Seção Serviços
    servicesLabel: "NOSSOS SERVIÇOS",
    servicesTitle: "Um espaço limpo, pronto para viver ou receber.",
    servicesDescription:
      "Cada imóvel é diferente. Conversamos sobre suas necessidades para combinar um serviço adequado.",

    homeCleaningTitle: "Limpeza residencial",
    homeCleaningDescription:
      "Limpeza para casas e apartamentos, ajudando a manter o ambiente agradável para o dia a dia da sua família.",
    homeFeature1: "Salas, quartos e áreas de convivência",
    homeFeature2: "Cuidado detalhado em cozinhas e banheiros",
    homeFeature3: "Visitas regulares ou conforme sua rotina",

    airbnbTitle: "Limpeza para curta temporada",
    airbnbDescription:
      "Limpeza para imóveis de Airbnb e outras acomodações de curta temporada, ajudando a preparar o espaço para os próximos hóspedes.",
    airbnbFeature1: "Preparação completa para novos hóspedes",
    airbnbFeature2: "Apoio com roupas de cama e toalhas",
    airbnbFeature3: "Atenção rigorosa aos padrões de limpeza",

    oneOffTitle: "Limpeza avulsa",
    oneOffDescription:
      "Precisa de ajuda em uma ocasião específica? Conte para nós o que o seu espaço precisa.",
    oneOffFeature1: "Ideal para ocasiões ou necessidades pontuais",
    oneOffFeature2: "Planejamento focado no que você precisa",
    oneOffFeature3: "Escopo combinado antes do atendimento",

    serviceQuote: "Pedir orçamento",

    // Seção Processo
    processLabel: "COMO FUNCIONA",
    processTitle: "Passos simples, resultados bem cuidados.",
    processDescription:
      "Mantemos o processo claro e personalizado desde a primeira mensagem até a revisão final.",
    processStep1Title: "Conte-nos sobre o seu espaço",
    processStep1Text:
      "Compartilhe o tipo de imóvel, a localização e o tipo de limpeza que você precisa.",
    processStep2Title: "Personalizamos a visita",
    processStep2Text:
      "Escutamos sua rotina, prioridades e preferência de horário antes de confirmar o serviço.",
    processStep3Title: "Aproveite um espaço cuidado",
    processStep3Text:
      "Receba um ambiente limpo, acolhedor e pronto para a rotina ou para receber hóspedes.",

    // Seção Sobre
    aboutLabel: "SOBRE A TRUECARE",
    aboutTitle: "Mais do que limpar. É cuidar.",
    aboutParagraphOne:
      "Na TrueCare Cleaning, acreditamos que um ambiente bem cuidado faz diferença na rotina de quem vive nele e na experiência de quem o visita.",
    aboutParagraphTwo:
      "Nosso atendimento começa com uma conversa. Conte o que você precisa e prepararemos um orçamento para o seu imóvel.",
    aboutPillar1Title: "Atenção aos Detalhes",
    aboutPillar1Desc: "Cuidado em cada superfície e canto, com respeito à sua casa.",
    aboutPillar2Title: "Atendimento Sob Medida",
    aboutPillar2Desc: "Ouvimos você primeiro para combinar o serviço ideal para sua rotina.",
    aboutPillar3Title: "Espaços Acolhedores",
    aboutPillar3Desc: "Ambientes impecáveis e agradáveis para sua família e hóspedes.",

    // Seção Regiões
    areasLabel: "ONDE ATENDEMOS",
    areasTitle: "Londres e regiões próximas",
    areasDescription:
      "Nossa base está em Luton. Atendemos Canary Wharf e outras áreas de Londres e arredores, conforme disponibilidade e deslocamento.",
    areasCanaryWharf: "Canary Wharf",
    areasFocus: "Área de Foco Principal",
    areasCentralLondon: "Centro e Leste de Londres",
    areasByAvailability: "Conforme disponibilidade",
    areasLuton: "Luton",
    areasHomeBase: "Base Operacional",
    areasSurrounding: "Arredores",
    areasByRequest: "Sob consulta",
    areasNote: "Deslocamento e disponibilidade são combinados durante o pedido de orçamento.",
    areasLink: "Consulte sua região →",

    // Seção Contato
    contactLabel: "VAMOS CONVERSAR?",
    contactTitle: "Conte com a TrueCare para cuidar do seu espaço.",
    contactDescription:
      "Fale com a gente e informe sua região e o tipo de limpeza que você precisa.",
    contactWhatsAppTitle: "Contato Direto por WhatsApp",
    contactWhatsAppSubtitle: "Maneira mais rápida de conversar e combinar sua data.",
    contactWhatsAppButton: "Conversar no WhatsApp",
    contactReadyNote: "Forma mais rápida de pedir orçamento • Resposta em algumas horas",
    contactQuoteCardTitle: "O que nos informar para o orçamento",
    contactStep1Title: "Tipo de Imóvel",
    contactStep1: "Casa, apartamento ou curta temporada",
    contactStep2Title: "Região / Localização",
    contactStep2: "Canary Wharf, Londres ou Luton",
    contactStep3Title: "Data e Necessidade",
    contactStep3: "Frequência desejada ou data de preferência",

    // Rodapé
    footerTagline: "Cuidado de verdade para os espaços que importam.",
    footerNavTitle: "Navegação",
    footerServicesTitle: "Serviços",
    footerCoverageTitle: "Atendimento",
    footerCoverageText: "Com base em Luton, atendendo com dedicação Canary Wharf e Londres.",
    footerRights: "Todos os direitos reservados.",

    // Controles
    languageButton: "EN",
    languageButtonLabel: "Mudar idioma para inglês",
    darkLabel: "Escuro",
    lightLabel: "Claro",
    darkButtonLabel: "Ativar tema escuro",
    lightButtonLabel: "Ativar tema claro",

    // Meta
    pageTitle: "TrueCare Cleaning | Limpeza residencial e para curta temporada",
    metaDescription:
      "Limpeza cuidadosa para casas de família e imóveis de curta temporada em Londres e Luton. Solicite um orçamento."
  }
};

// ========================================================
// ELEMENTOS DO DOM
// ========================================================
const headerElement = document.getElementById("header");
const languageButton = document.getElementById("language-toggle");
const langIndicator = document.getElementById("lang-indicator");
const themeButton = document.getElementById("theme-toggle");
const themeLabel = themeButton.querySelector(".theme-label");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const whatsappButtons = document.querySelectorAll("[data-whatsapp]");
const description = document.querySelector('meta[name="description"]');

// ========================================================
// ARMAZENAMENTO LOCAL (LOCALSTORAGE COM FALLBACK SEGURO)
// ========================================================
function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Continua funcionando normalmente se o storage for restrito
  }
}

const savedLanguage = readPreference("truecare-language");
const savedTheme = readPreference("truecare-theme");

let currentLanguage = savedLanguage === "pt" ? "pt" : "en";
let currentTheme = savedTheme === "dark" ? "dark" : "light";

// ========================================================
// ATUALIZAÇÃO DO TEMA
// ========================================================
function updateThemeButton() {
  const text = translations[currentLanguage];
  const isDark = currentTheme === "dark";
  themeButton.setAttribute("aria-pressed", String(isDark));

  if (themeLabel) {
    themeLabel.textContent = isDark ? text.lightLabel : text.darkLabel;
  }
  themeButton.setAttribute(
    "aria-label",
    isDark ? text.lightButtonLabel : text.darkButtonLabel
  );
}

function applyTheme(theme) {
  currentTheme = theme;
  document.body.classList.toggle("dark-theme", theme === "dark");
  updateThemeButton();
  savePreference("truecare-theme", theme);
}

function updateWhatsAppLink() {
  const message = currentLanguage === 'pt'
    ? 'Olá! Gostaria de solicitar um orçamento de limpeza. Poderiam me informar sobre os serviços e a disponibilidade?'
    : 'Hello! I’d like to request a cleaning quote. Could you please tell me about your services and availability?';
  whatsappButtons.forEach((button) => {
    button.href = 'https://wa.me/447522108372?text=' + encodeURIComponent(message);
    button.setAttribute('aria-label', currentLanguage === 'pt'
      ? 'Solicitar orçamento pelo WhatsApp (abre em nova aba)'
      : 'Request a quote on WhatsApp (opens in a new tab)');
  });
}

// ========================================================
// ATUALIZAÇÃO DO IDIOMA (I18N)
// ========================================================
function applyLanguage(language) {
  currentLanguage = language;
  languageButton.setAttribute("aria-pressed", String(language === "pt"));
  const text = translations[language];

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = text.pageTitle;
  if (description) {
    description.setAttribute("content", text.metaDescription);
  }

  document.querySelectorAll('[data-alt]').forEach((element) => {
    if (text[element.dataset.alt]) element.alt = text[element.dataset.alt];
  });

  // Atualiza textos marcados com data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key] !== undefined) {
      element.textContent = text[key];
    }
  });

  // Atualiza atributos aria-label marcados com data-aria
  document.querySelectorAll("[data-aria]").forEach((element) => {
    const key = element.dataset.aria;
    if (text[key] !== undefined) {
      element.setAttribute("aria-label", text[key]);
    }
  });

  // Atualiza botão de idioma
  if (langIndicator) {
    langIndicator.textContent = text.languageButton;
  } else {
    languageButton.textContent = text.languageButton;
  }
  languageButton.setAttribute("aria-label", text.languageButtonLabel);

  // Atualiza aria-label do menu toggle conforme o estado atual
  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? text.menuCloseLabel : text.menuOpenLabel
    );
  }

  updateThemeButton();
  updateWhatsAppLink();
  savePreference("truecare-language", language);
}

// ========================================================
// CONTROLES DE EVENTO (IDIOMA E TEMA)
// ========================================================
languageButton.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "pt" : "en");
});

themeButton.addEventListener("click", () => {
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

// ========================================================
// MENU MOBILE (ACESSIBILIDADE & TECLADO)
// ========================================================
function closeMobileMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.classList.remove("is-active");
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  const text = translations[currentLanguage];
  menuToggle.setAttribute("aria-label", text.menuOpenLabel);
  document.body.classList.remove("menu-open");
}

function openMobileMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.classList.add("is-active");
  mainNav.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  const text = translations[currentLanguage];
  menuToggle.setAttribute("aria-label", text.menuCloseLabel);
  document.body.classList.add("menu-open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Fecha o menu ao clicar em qualquer link de navegação
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Fecha com a tecla ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
      menuToggle.focus();
    }
  });

  // Fecha ao redimensionar além do breakpoint mobile
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
    }
  });
}

applyTheme(currentTheme);
applyLanguage(currentLanguage);
initScrollReveal();

// ========================================================
// CABEÇALHO ELEVADO AO ROLAR (SCROLLED HEADER)
// ========================================================
function handleHeaderScroll() {
  if (!headerElement) return;
  if (window.scrollY > 20) {
    headerElement.classList.add("header--scrolled");
  } else {
    headerElement.classList.remove("header--scrolled");
  }
}

window.addEventListener("scroll", handleHeaderScroll, { passive: true });
handleHeaderScroll();

// ========================================================
// ANIMAÇÕES DE ENTRADA SUAVES (INTERSECTION OBSERVER)
// ========================================================
function initScrollReveal() {
  // Marca o documento como pronto para JS


  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => observer.observe(element));
  document.documentElement.classList.add("js-ready");
}

/**
 * Central source of truth for site-wide content and contact data.
 * Update phone numbers, social links, and copy here — every component reads from this file.
 */

export const SITE = {
  name: "NEO",
  tagline: "Sites que transformam visitas em oportunidades.",
  description:
    "Criamos sites profissionais e catálogos digitais pensados para valorizar sua marca e facilitar o contato com seus clientes.",
  url: "https://neoworks.com.br",
};

export const CONTACT = {
  whatsappNumber: "5575991684494",
  whatsappMessage: "Olá! Vim pelo site da NEO e gostaria de saber mais sobre a criação de um site.",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  instagram: "https://instagram.com/neoworksbr",
  instagramHandle: "@neoworksbr",
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#processo" },
];

// Short, discreet trust badges shown near the hero CTA and repeated in the final CTA.
export const HIGHLIGHTS = [
  { icon: "Clock" as const, label: "Até 30 dias úteis" },
  { icon: "ShieldCheck" as const, label: "Pagamento após a entrega" },
  { icon: "FileText" as const, label: "Nota Fiscal" },
];

export const SERVICES = [
  {
    id: "site-apresentacao",
    title: "Site de Apresentação",
    price: "R$ 399,90",
    priceNote: "a partir de",
    icon: "Smartphone" as const,
    description: "Ideal para empresas, profissionais e marcas que precisam de uma presença digital profissional.",
    items: [
      "Página inicial personalizada",
      "Seção de serviços ou produtos",
      "Sobre a empresa",
      "Contato direto pelo WhatsApp",
      "Links para redes sociais",
      "Site 100% responsivo",
    ],
    cta: "Quero meu site",
    highlight: false,
  },
  {
    id: "catalogo-digital",
    title: "Catálogo Digital",
    price: "R$ 599,90",
    priceNote: "a partir de",
    icon: "LayoutGrid" as const,
    description:
      "Ideal para empresas que precisam apresentar seus produtos de maneira organizada e profissional, sem realizar vendas diretamente pelo site.",
    items: [
      "Tudo do Site de Apresentação",
      "Catálogo completo de produtos",
      "Categorias e organização",
      "Página individual para cada produto",
      "Painel administrativo (CMS)",
      "Gerenciamento de banners",
    ],
    cta: "Quero meu catálogo",
    highlight: true,
  },
];

// Section 4 — "Seu projeto sem complicação." Why hire NEO.
export const WHY_NEO = [
  {
    icon: "ShieldCheck" as const,
    title: "100% após a entrega",
    desc: "Você só realiza o pagamento após o projeto ser desenvolvido, apresentado e aprovado.",
    highlight: true,
  },
  {
    icon: "Clock" as const,
    title: "Entrega em até 30 dias úteis",
    desc: "Após recebermos todas as informações e materiais necessários, iniciamos o desenvolvimento do projeto.",
    highlight: false,
  },
  {
    icon: "FileText" as const,
    title: "Nota Fiscal",
    desc: "Todos os projetos realizados pela NEO possuem emissão de Nota Fiscal.",
    highlight: false,
  },
  {
    icon: "Sparkles" as const,
    title: "Design exclusivo",
    desc: "Cada projeto é desenvolvido pensando na identidade e nas necessidades da empresa.",
    highlight: false,
  },
];

// Section 5 — "O que entregamos."
export const DELIVERABLES = [
  { icon: "Sparkles" as const, title: "Design Exclusivo", desc: "Layouts pensados para valorizar a identidade da sua marca." },
  { icon: "Smartphone" as const, title: "Totalmente Responsivo", desc: "Experiência perfeita em celulares, tablets e computadores." },
  { icon: "MessageCircle" as const, title: "Integração WhatsApp", desc: "Contato direto para transformar visitantes em oportunidades." },
  { icon: "Share2" as const, title: "Redes Sociais", desc: "Conexão com Instagram, LinkedIn e outros canais." },
  { icon: "Gauge" as const, title: "Alta Performance", desc: "Estrutura leve e otimizada para carregamento rápido." },
  { icon: "Search" as const, title: "SEO Básico", desc: "Estrutura preparada para melhor indexação nos mecanismos de busca." },
];

// Section 6 — "Do primeiro contato ao site no ar."
export const PROCESS_STEPS = [
  { n: "01", title: "Alinhamento", desc: "Entendemos sua empresa, seus objetivos e o que o projeto precisa apresentar." },
  { n: "02", title: "Desenvolvimento", desc: "Criamos o design, estrutura e conteúdo do seu site." },
  { n: "03", title: "Revisão", desc: "Você recebe o projeto para analisar e solicitar os ajustes previstos." },
  { n: "04", title: "Entrega e pagamento", desc: "Após sua aprovação, o projeto é entregue/publicado e o pagamento é realizado." },
];

// Commercial terms referenced across the site (services, trust section, footer note).
export const COMMERCIAL_INFO = {
  prazo: "Até 30 dias úteis após o envio das informações e materiais necessários.",
  pagamento: "100% após o desenvolvimento, apresentação e aprovação do projeto.",
  notaFiscal: "Emitida em todos os projetos.",
  hospedagem: "R$ 32,99/mês.",
  dominio: "Valor conforme disponibilidade.",
  observacao: "Hospedagem e domínio não estão incluídos no valor de desenvolvimento.",
};

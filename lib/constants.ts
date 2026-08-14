/**
 * Central source of truth for site-wide content and contact data.
 * Update phone numbers, social links, and copy here — every component reads from this file.
 */

export const SITE = {
  name: "NEO",
  tagline: "Criamos presença digital que gera resultados.",
  description:
    "Sites institucionais, catálogos digitais e soluções online com design minimalista e alta performance.",
  url: "https://neoworks.com.br",
};

export const CONTACT = {
  whatsappNumber: "5575991684494",
  whatsappMessage: "Olá, quero solicitar um orçamento com a NEO",
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
  { label: "Processo", href: "#processo" },
];

export const SERVICES = [
  {
    id: "site-apresentacao",
    title: "Site de Apresentação",
    icon: "Smartphone" as const,
    items: ["Página personalizada", "Sobre a empresa", "Serviços", "Contato via WhatsApp", "Totalmente responsivo"],
  },
  {
    id: "catalogo-digital",
    title: "Catálogo Digital",
    icon: "LayoutGrid" as const,
    items: ["Organização de produtos", "Categorias personalizadas", "Página individual por item", "Painel administrativo"],
  },
  {
    id: "loja-virtual",
    title: "Loja Virtual",
    icon: "ShoppingCart" as const,
    items: ["Carrinho de compras", "Pagamentos online", "Cálculo de frete", "Layout personalizado"],
  },
];

export const DIFFERENTIALS = [
  { icon: "Sparkles" as const, title: "Design exclusivo", desc: "Identidade visual desenvolvida sob medida para a sua marca." },
  { icon: "Smartphone" as const, title: "Totalmente responsivo", desc: "Experiência consistente em desktop, tablet e celular." },
  { icon: "MessageCircle" as const, title: "Integração com WhatsApp", desc: "Contato direto e rápido com seus clientes." },
  { icon: "Share2" as const, title: "Redes sociais", desc: "Conexão com o Instagram integrada ao site." },
  { icon: "Gauge" as const, title: "Alta performance", desc: "Carregamento rápido e navegação fluida em qualquer dispositivo." },
  { icon: "Search" as const, title: "SEO básico", desc: "Estrutura pensada para ser encontrada no Google." },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Aprovação", desc: "Alinhamos escopo, prazo e investimento do projeto." },
  { n: "02", title: "Desenvolvimento", desc: "Design e construção do seu site, do zero." },
  { n: "03", title: "Revisão", desc: "Ajustes finos com base no seu feedback." },
  { n: "04", title: "Publicação", desc: "Seu site no ar, pronto para gerar resultado." },
];

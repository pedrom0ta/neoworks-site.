import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyNeo } from "@/components/why-neo";
import { Deliverables } from "@/components/deliverables";
import { Process } from "@/components/process";
import { Trust } from "@/components/trust";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { CONTACT, SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  sameAs: [CONTACT.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${CONTACT.whatsappNumber}`,
    availableLanguage: "Portuguese",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured data helps search engines understand the business for rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyNeo />
        <Deliverables />
        <Process />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

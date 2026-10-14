import { Header } from "@/components/Header";
import { Contact, Footer, Founder, Hero, HowItWorks, Pathways, WhyAspire } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Pathways />
        <HowItWorks />
        <WhyAspire />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

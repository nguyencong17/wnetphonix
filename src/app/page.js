import Cta from "@/components/Cta/page";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Faq />
      <Pricing />
      <Cta />
    </>
  );
}

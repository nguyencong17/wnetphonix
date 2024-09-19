import Cta from "@/components/Cta/page";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
import Plan from "@/components/Plan/Plan";
import Services from "@/components/Services/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Faq />
      <Plan />
      <Cta />
    </>
  );
}

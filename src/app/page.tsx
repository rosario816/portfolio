import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/sobresection";
import ServicesSection from "@/components/service";
import ContactSection from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import AwardsSection from "@/components/AwardsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BuyOnEnvato from "@/components/BuyOnEnvato";
import NavigateToTop from "@/components/NavigateToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-screen flex items-center justify-center text-foreground/20 uppercase tracking-[0.5em] text-sm">
        Main Content Section
      </div>
      <ContactSection />
      <AwardsSection />
      <TeamSection />
      <FAQSection />
      <BlogSection />
      <Footer />
      <BuyOnEnvato />
      <NavigateToTop />
    </div>
  );
}

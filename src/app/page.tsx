import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import AwardsSection from "@/components/AwardsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BuyOnEnvato from "@/components/BuyOnEnvato";
import NavigateToTop from "@/components/NavigateToTop";
import FeedbackSection from "@/components/FeedbackSection";
import HappyUsersSection from "@/components/HappyUsersSection";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <HappyUsersSection />
      <FeedbackSection />
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

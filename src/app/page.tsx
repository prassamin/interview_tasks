import BuyOnEnvato from "@/components/BuyOnEnvato";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import NavigateToTop from "@/components/NavigateToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-screen flex items-center justify-center text-foreground/20 uppercase tracking-[0.5em] text-sm">
        Main Content Section
      </div>
      <BlogSection />
      <Footer />
      <BuyOnEnvato />
      <NavigateToTop />
    </div>
  );
}

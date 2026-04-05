import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import DoctorSection from "@/components/DoctorSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ConsultantsSection from "@/components/ConsultantsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <DoctorSection />
        <AboutSection />
        <ServicesSection />
        <ConsultantsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

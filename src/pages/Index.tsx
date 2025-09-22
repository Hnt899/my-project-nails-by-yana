import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';

const SectionDivider = () => (
  <div className="h-[3px] w-full bg-[#FF62B1]" aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <CertificatesSection />
      <SectionDivider />
      <Footer />
    </div>
  );
};

export default Index;

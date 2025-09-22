import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <CertificatesSection />
      <Footer />
    </div>
  );
};

export default Index;

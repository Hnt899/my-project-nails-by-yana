import { Button } from '@/components/ui/button';
import pantherHero from '@/assets/panther-hero.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-left space-y-8 animate-slide-up">
          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">КРАСИВЫЕ НОГТИ —</span>
            <br />
            <span className="gradient-text">ЭТО ПРОСТО</span>
          </h1>
          
          <div className="space-y-4 text-lg lg:text-xl">
            <p className="text-foreground">
              ЕСЛИ ВЫ ИСКАЛИ <span className="text-primary font-semibold">ЛУЧШЕГО МАСТЕРА</span>
            </p>
            <p className="text-foreground">
              ПО УХОДУ ЗА СВОИМИ НОГТЯМИ В
            </p>
            <p className="text-foreground">
              ГОРОДЕ
            </p>
            <p className="text-primary text-3xl font-bold font-heading">
              РОСТОВ - НА - ДОНУ
            </p>
            <p className="text-foreground">
              ТО ВЫ ЕГО НАШЛИ
            </p>
          </div>

          <Button 
            onClick={scrollToContact}
            className="btn-hero text-xl px-12 py-6 mt-8"
          >
            ЗАПИСАТЬСЯ
          </Button>
        </div>

        {/* Right side - Panther image */}
        <div className="flex justify-center lg:justify-end animate-float">
          <div className="relative">
            <img 
              src={pantherHero} 
              alt="Элегантная пантера - символ красоты и изящества" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
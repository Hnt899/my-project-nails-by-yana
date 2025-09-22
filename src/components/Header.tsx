import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Send } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ОБО МНЕ
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              УСЛУГИ
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ПОРТФОЛИО
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ОТЗЫВЫ
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              СЕРТИФИКАТЫ
            </button>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                <Instagram className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                <MessageCircle className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                <Send className="h-5 w-5 text-primary" />
              </Button>
            </div>
            <div className="text-foreground font-medium">
              +7 999 (999) 99-99
            </div>
          </div>

          {/* Logo */}
          <div className="text-right">
            <div className="font-heading text-2xl font-bold gradient-text leading-none">
              ЯНА
            </div>
            <div className="font-heading text-2xl font-bold gradient-text leading-none">
              ПИЛ
            </div>
            <div className="font-heading text-2xl font-bold gradient-text leading-none">
              ИТ
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
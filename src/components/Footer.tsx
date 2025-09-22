import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Logo and copyright */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="font-heading text-3xl font-bold gradient-text leading-none">
                ЯНА
              </div>
              <div className="font-heading text-3xl font-bold gradient-text leading-none">
                ПИЛ
              </div>
              <div className="font-heading text-3xl font-bold gradient-text leading-none">
                ИТ
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>© ООО 'ЯНА ПИЛИТ'</p>
              <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="text-center">
            <nav className="space-y-4">
              <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
                ОБО МНЕ
              </a>
              <a href="#services" className="block text-foreground hover:text-primary transition-colors font-medium">
                УСЛУГИ
              </a>
              <a href="#portfolio" className="block text-foreground hover:text-primary transition-colors font-medium">
                ПОРТФОЛИО
              </a>
              <a href="#reviews" className="block text-foreground hover:text-primary transition-colors font-medium">
                ОТЗЫВЫ
              </a>
              <a href="#certificates" className="block text-foreground hover:text-primary transition-colors font-medium">
                СЕРТИФИКАТЫ
              </a>
            </nav>
          </div>

          {/* Right side - Contact info */}
          <div className="text-center lg:text-right space-y-6">
            <div className="flex justify-center lg:justify-end items-center space-x-3 mb-4">
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
            
            <div className="text-foreground font-medium text-lg">
              +7 999 (999) 99-99
            </div>

            <Button className="btn-hero text-lg px-8 py-3">
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
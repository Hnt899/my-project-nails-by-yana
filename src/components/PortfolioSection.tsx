import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nails1 from '@/assets/nails-1.jpg';
import nails2 from '@/assets/nails-2.jpg';

const PortfolioSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const portfolioImages = [
    { src: nails1, alt: 'Дизайн ногтей 1' },
    { src: nails2, alt: 'Дизайн ногтей 2' },
    { src: nails1, alt: 'Дизайн ногтей 3' },
    { src: nails2, alt: 'Дизайн ногтей 4' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Video placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden group cursor-pointer">
              <img 
                src={nails1} 
                alt="Видео портфолио" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xl">ВИДЕО ПОРТФОЛИО</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text and portfolio grid */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="text-center lg:text-right">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text mb-6">
                ПОРТФОЛИО
              </h2>
              <p className="text-lg text-foreground max-w-md mx-auto lg:ml-auto">
                <span className="text-primary font-semibold">МАНИКЮР</span> ЛЮБИМЫЙ <span className="text-primary font-semibold">ЖЕНСКИЙ СПОСОБ ВОССТАНОВЛЕНИЯ</span>
                <br />
                <span className="text-primary font-semibold">ДУШЕВНОГО РАВНОВЕСИЯ</span>
              </p>
            </div>

            {/* Portfolio grid with navigation */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentImage ? 'ring-2 ring-primary scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows on hover */}
                  {index === currentImage && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-between p-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
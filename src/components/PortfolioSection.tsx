import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nails1 from '@/assets/nails-1.jpg';
import nails2 from '@/assets/nails-2.jpg';

const portfolioShots = [
  { src: nails1, alt: 'Глянцевый нюдовый маникюр' },
  { src: nails2, alt: 'Белый градиент с блестками' },
  { src: nails1, alt: 'Дизайн с золотой фольгой' },
  { src: nails2, alt: 'Классический французский маникюр' },
  { src: nails1, alt: 'Минималистичный нюдовый дизайн' },
  { src: nails2, alt: 'Нежный маникюр с камнями' },
  { src: nails1, alt: 'Розовый омбре с градиентом' },
  { src: nails2, alt: 'Лунный маникюр с акцентом' },
  { src: nails1, alt: 'Пастельный дизайн с блестками' },
];

const slideLayouts = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
];

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () =>
      Array.from({ length: 3 }, (_, slideIndex) =>
        Array.from({ length: 7 }, (_, offset) => {
          const shotIndex = (slideIndex + offset) % portfolioShots.length;
          return portfolioShots[shotIndex];
        }),
      ),
    [],
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary tracking-[0.08em]">
            ПОРТФОЛИО
          </h2>
          <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.35em] text-primary/80">
            <span className="block">МАНИКЮР ЛЮБИМЫЙ ЖЕНСКИЙ СПОСОБ ВОССТАНОВЛЕНИЯ</span>
            <span className="mt-1 block">ДУШЕВНОГО РАВНОВЕСИЯ</span>
          </p>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden rounded-[40px] border border-primary/30 bg-background/70 p-6 shadow-lg shadow-primary/10 backdrop-blur">
            <div className="grid auto-rows-[minmax(140px,1fr)] sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[180px] gap-4">
              {slides[currentSlide].map((image, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className={`group relative h-full min-h-[140px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/20 transition-transform duration-500 hover:-translate-y-1 ${
                    slideLayouts[index] ?? ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="pointer-events-auto h-14 w-14 rounded-full border border-primary/50 bg-black/60 text-white shadow-lg shadow-primary/20 hover:bg-primary hover:text-primary-foreground"
              aria-label="Предыдущий слайд портфолио"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="pointer-events-auto h-14 w-14 rounded-full border border-primary/50 bg-black/60 text-white shadow-lg shadow-primary/20 hover:bg-primary hover:text-primary-foreground"
              aria-label="Следующий слайд портфолио"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-10 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
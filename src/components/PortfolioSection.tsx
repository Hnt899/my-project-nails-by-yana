import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import nails1 from '@/assets/nails-1.jpg';
import nails2 from '@/assets/nails-2.jpg';
import { Button } from '@/components/ui/button';

type PortfolioShot = {
  src: string;
  alt: string;
};

const portfolioShots: PortfolioShot[] = [
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

const chunkSize = 7;

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => {
    const totalShots = portfolioShots.length;

    if (totalShots === 0) {
      return [[]] as PortfolioShot[][];
    }

    const slideCount = totalShots > chunkSize ? Math.ceil(totalShots / chunkSize) : 1;

    return Array.from({ length: slideCount }, (_, slideIndex) =>
      Array.from({ length: chunkSize }, (_, offset) => {
        const shotIndex = (slideIndex * chunkSize + offset) % totalShots;
        return portfolioShots[shotIndex];
      }),
    );
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideImages = slides[currentSlide] ?? portfolioShots.slice(0, chunkSize);
  const heroImage = slideImages[0];
  const heroImageSrc = heroImage?.src ?? portfolioShots[0]?.src ?? '';
  const heroImageAlt = heroImage?.alt ?? portfolioShots[0]?.alt ?? 'Работы мастера Яны';
  const supportingImages = slideImages.slice(1);

  return (
    <section id="portfolio" className="bg-[#080808] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="font-heading text-left text-4xl font-bold uppercase tracking-[0.2em] text-primary sm:text-5xl lg:text-7xl">
            ПОРТФОЛИО
          </h2>
          <p className="mt-4 max-w-xl text-left text-xs font-semibold uppercase tracking-[0.32em] text-primary/80 sm:text-sm">
            <span className="block">МАНИКЮР ЛЮБИМЫЙ ЖЕНСКИЙ СПОСОБ ВОССТАНОВЛЕНИЯ</span>
            <span className="mt-1 block">ДУШЕВНОГО РАВНОВЕСИЯ</span>
          </p>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden rounded-[56px] border-[3px] border-primary/60 bg-gradient-to-br from-black via-[#0b0b0b] to-black/90 p-8 shadow-[0_0_80px_rgba(255,92,158,0.25)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(280px,360px)_1fr] xl:grid-cols-[minmax(320px,400px)_1fr]">
              <div className="group relative flex w-full min-h-[520px] rounded-[36px] border-[3px] border-primary/70 bg-black/70 p-4 transition-transform duration-500 hover:-translate-y-1">
                <div className="relative flex-1 overflow-hidden rounded-[28px]">
                  <img
                    src={heroImageSrc}
                    alt={heroImageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <span className="absolute bottom-9 left-9 text-left text-base font-black uppercase tracking-[0.4em] text-[#ff2f5f] drop-shadow-[0_0_18px_rgba(255,47,95,0.6)] sm:text-lg lg:text-xl">
                    ВИДЕО ПОРТФОЛИО
                  </span>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {supportingImages.map((image, index) => (
                  <div
                    key={`${currentSlide}-${index + 1}-${image.alt}`}
                    className="group relative flex w-full min-h-[160px] rounded-[28px] border-[3px] border-primary/60 bg-black/70 p-3 shadow-[0_0_30px_rgba(255,92,158,0.18)] transition-transform duration-500 hover:-translate-y-1 sm:min-h-[180px] lg:min-h-[190px]"
                  >
                    <div className="relative flex-1 overflow-hidden rounded-[22px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                    </div>
                    <div className="pointer-events-none absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_18px_rgba(255,92,158,0.35)] transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <span className="rounded-full border border-primary/60 px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.6em] text-primary/80 sm:text-xs">
                ЭТО БРЕНД ЯНЫ
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="pointer-events-auto h-14 w-14 rounded-full border border-primary/60 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.25)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
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
              className="pointer-events-auto h-14 w-14 rounded-full border border-primary/60 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.25)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
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

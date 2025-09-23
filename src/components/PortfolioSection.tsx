import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import nails1 from '@/assets/nails-1.jpg';
import nails2 from '@/assets/nails-2.jpg';

type PortfolioShot = {
  src: string;
  alt: string;
};

type PortfolioCategory = {
  key: string;
  title: string;
  shots: PortfolioShot[];
};

const portfolioCategories: PortfolioCategory[] = [
  {
    key: 'single-color',
    title: 'SINGLE COLOR',
    shots: [
      { src: nails1, alt: 'Глянцевый однотонный маникюр с нюдовым покрытием' },
      { src: nails2, alt: 'Однотонный маникюр с мягким голубым переливом' },
      { src: nails1, alt: 'Минималистичный однотонный маникюр с блеском' },
    ],
  },
  {
    key: 'french',
    title: 'FRENCH MANICURE',
    shots: [
      { src: nails2, alt: 'Классический французский маникюр с акцентами' },
      { src: nails1, alt: 'Французский маникюр с прозрачной базой' },
      { src: nails2, alt: 'Современный френч в холодной палитре' },
    ],
  },
  {
    key: 'extensions',
    title: 'EXTENSIONS',
    shots: [
      { src: nails1, alt: 'Наращенные ногти с глянцевым покрытием' },
      { src: nails2, alt: 'Миндалевидные наращенные ногти с дизайном' },
      { src: nails1, alt: 'Длина ballerina с нюдовым наращиванием' },
    ],
  },
  {
    key: 'custom',
    title: 'CUSTOM MANICURE',
    shots: [
      { src: nails2, alt: 'Индивидуальный дизайн с блестящим декором' },
      { src: nails1, alt: 'Авторский маникюр с золотой фольгой' },
      { src: nails2, alt: 'Контрастный кастомный маникюр с акцентом' },
    ],
  },
];

const PortfolioSection = () => {
  const [activeShots, setActiveShots] = useState<number[]>(() =>
    portfolioCategories.map(() => 0),
  );

  const showPreviousShot = (categoryIndex: number) => {
    setActiveShots((prev) => {
      const next = [...prev];
      const shots = portfolioCategories[categoryIndex]?.shots ?? [];
      const total = shots.length;

      if (total === 0) {
        next[categoryIndex] = 0;
        return next;
      }

      next[categoryIndex] = (next[categoryIndex] - 1 + total) % total;
      return next;
    });
  };

  const showNextShot = (categoryIndex: number) => {
    setActiveShots((prev) => {
      const next = [...prev];
      const shots = portfolioCategories[categoryIndex]?.shots ?? [];
      const total = shots.length;

      if (total === 0) {
        next[categoryIndex] = 0;
        return next;
      }

      next[categoryIndex] = (next[categoryIndex] + 1) % total;
      return next;
    });
  };

  return (
    <section id="portfolio" className="bg-[#080808] py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[56px] border-[3px] border-primary/60 bg-gradient-to-br from-black via-[#0b0b0b] to-black/90 p-8 shadow-[0_0_80px_rgba(255,92,158,0.25)] sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(320px,1.1fr)_minmax(320px,1fr)]">
            <div className="group relative flex w-full items-stretch justify-center">
              <div className="relative w-full min-h-[520px] overflow-hidden rounded-[48px] border-[3px] border-primary/70 bg-black/70 shadow-[0_0_60px_rgba(255,92,158,0.25)]">
                <img
                  src={nails2}
                  alt="Видео отзыв о маникюре"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_30px_rgba(255,92,158,0.45)] backdrop-blur-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Play className="h-6 w-6" />
                </button>
                <span className="absolute bottom-8 left-8 text-left text-base font-black uppercase tracking-[0.4em] text-[#ff2f5f] drop-shadow-[0_0_18px_rgba(255,47,95,0.6)] sm:text-lg lg:text-xl">
                  VIDEO REVIEW
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end text-right">
              <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.2em] text-primary sm:text-5xl lg:text-6xl">
                PORTFOLIO
              </h2>
              <p className="mt-4 max-w-sm text-xs font-semibold tracking-[0.26em] text-primary/85 sm:text-sm">
                manicure: a woman's favorite way to restore peace of mind.
              </p>

              <div className="mt-12 grid w-full gap-6 sm:grid-cols-2">
                {portfolioCategories.map((category, index) => {
                  const shots = category.shots;
                  const currentIndex = activeShots[index] ?? 0;
                  const currentShot = shots[currentIndex] ?? shots[0];

                  return (
                    <div
                      key={category.key}
                      className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-[30px] border-[3px] border-primary/65 bg-black/70 shadow-[0_0_36px_rgba(255,92,158,0.22)]"
                    >
                      <div className="relative flex-1 overflow-hidden">
                        {currentShot ? (
                          <img
                            src={currentShot.src}
                            alt={currentShot.alt}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
                      </div>

                      <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/20 to-transparent px-6 py-4">
                        <span className="text-left text-sm font-black uppercase tracking-[0.28em] text-white sm:text-base">
                          {category.title}
                        </span>
                      </div>

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-5">
                        <button
                          type="button"
                          onClick={() => showPreviousShot(index)}
                          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_20px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Предыдущая работа категории ${category.title}`}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => showNextShot(index)}
                          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_20px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Следующая работа категории ${category.title}`}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

import video1 from "@/assets/video/portfolio/video1.mp4";
import video2 from "@/assets/video/portfolio/video2.mp4";
import video3 from "@/assets/video/portfolio/video3.mp4";
import video4 from "@/assets/video/portfolio/video4.mp4";
import video5 from "@/assets/video/portfolio/video5.mp4";
import video6 from "@/assets/video/portfolio/video6.mp4";

import blok1foto1 from "@/assets/portfolio/blok1foto1.jpg";
import blok1foto2 from "@/assets/portfolio/blok1foto2.jpg";
import blok1foto3 from "@/assets/portfolio/blok1foto3.jpg";
import blok1foto4 from "@/assets/portfolio/blok1foto4.jpg";
import blok1foto5 from "@/assets/portfolio/blok1foto5.jpg";
import blok1foto6 from "@/assets/portfolio/blok1foto6.jpg";
import blok1foto7 from "@/assets/portfolio/blok1foto7.jpg";

import blok2foto1 from "@/assets/portfolio/blok2foto1.jpg";
import blok2foto2 from "@/assets/portfolio/blok2foto2.jpg";
import blok2foto3 from "@/assets/portfolio/blok2foto3.jpg";
import blok2foto4 from "@/assets/portfolio/blok2foto4.jpg";
import blok2foto5 from "@/assets/portfolio/blok2foto5.jpg";
import blok2foto6 from "@/assets/portfolio/blok2foto6.jpg";
import blok2foto7 from "@/assets/portfolio/blok2foto7.jpg";

import blok3foto1 from "@/assets/portfolio/blok3foto1.jpg";
import blok3foto2 from "@/assets/portfolio/blok3foto2.jpg";
import blok3foto3 from "@/assets/portfolio/blok3foto3.jpg";
import blok3foto4 from "@/assets/portfolio/blok3foto4.jpg";
import blok3foto5 from "@/assets/portfolio/blok3foto5.jpg";
import blok3foto6 from "@/assets/portfolio/blok3foto6.jpg";
import blok3foto7 from "@/assets/portfolio/blok3foto7.jpg";

import blok4foto1 from "@/assets/portfolio/blok4foto1.jpg";
import blok4foto2 from "@/assets/portfolio/blok4foto2.jpg";
import blok4foto3 from "@/assets/portfolio/blok4foto3.jpg";
import blok4foto4 from "@/assets/portfolio/blok4foto4.jpg";
import blok4foto5 from "@/assets/portfolio/blok4foto5.jpg";
import blok4foto6 from "@/assets/portfolio/blok4foto6.jpg";
import blok4foto7 from "@/assets/portfolio/blok4foto7.jpg";

type PortfolioShot = { src: string; alt: string };
type PortfolioCategory = { key: string; title: string; shots: PortfolioShot[] };

const portfolioCategories: PortfolioCategory[] = [
  {
    key: "single",
    title: "ОДНОТОННОЕ ПОКРЫТИЕ",
    shots: [ 
      { src: blok1foto1, alt: "Однотонное покрытие — фото 1" },
      { src: blok1foto2, alt: "Однотонное покрытие — фото 2" },
      { src: blok1foto3, alt: "Однотонное покрытие — фото 3" },
      { src: blok1foto4, alt: "Однотонное покрытие — фото 4" },
      { src: blok1foto5, alt: "Однотонное покрытие — фото 5" },
      { src: blok1foto6, alt: "Однотонное покрытие — фото 6" },
      { src: blok1foto7, alt: "Однотонное покрытие — фото 7" },
    ],
  },
  {
    key: "french",
    title: "ФРЕНЧ",
    shots: [
      { src: blok2foto1, alt: "Французский маникюр — фото 1" },
      { src: blok2foto2, alt: "Французский маникюр — фото 2" },
      { src: blok2foto3, alt: "Французский маникюр — фото 3" },
      { src: blok2foto4, alt: "Французский маникюр — фото 4" },
      { src: blok2foto5, alt: "Французский маникюр — фото 5" },
      { src: blok2foto6, alt: "Французский маникюр — фото 6" },
      { src: blok2foto7, alt: "Французский маникюр — фото 7" },
    ],
  },
  {
    key: "extensions",
    title: "НАРАЩИВАНИЕ",
    shots: [
      { src: blok3foto1, alt: "Наращивание — фото 1" },
      { src: blok3foto2, alt: "Наращивание — фото 2" },
      { src: blok3foto3, alt: "Наращивание — фото 3" },
      { src: blok3foto4, alt: "Наращивание — фото 4" },
      { src: blok3foto5, alt: "Наращивание — фото 5" },
      { src: blok3foto6, alt: "Наращивание — фото 6" },
      { src: blok3foto7, alt: "Наращивание — фото 7" },
    ],
  },
  {
    key: "custom",
    title: "ИНДИВИДУАЛЬНЫЙ ДИЗАЙН",
    shots: [
      { src: blok4foto7, alt: "Индивидуальный дизайн — фото 7" },
      { src: blok4foto2, alt: "Индивидуальный дизайн — фото 2" },
      { src: blok4foto3, alt: "Индивидуальный дизайн — фото 3" },
      { src: blok4foto4, alt: "Индивидуальный дизайн — фото 4" },
      { src: blok4foto5, alt: "Индивидуальный дизайн — фото 5" },
      { src: blok4foto6, alt: "Индивидуальный дизайн — фото 6" },
      { src: blok4foto1, alt: "Индивидуальный дизайн — фото 1" },
    ],
  },
];

const videos = [video1, video2, video3, video4, video5, video6];

const PortfolioSection: React.FC = () => {
  const [activeShots, setActiveShots] = useState<number[]>(
    () => portfolioCategories.map(() => 0)
  );

  const showPrev = (i: number) =>
    setActiveShots((prev) => {
      const next = [...prev];
      const total = portfolioCategories[i].shots.length;
      next[i] = (next[i] - 1 + total) % total;
      return next;
    });

  const showNext = (i: number) =>
    setActiveShots((prev) => {
      const next = [...prev];
      const total = portfolioCategories[i].shots.length;
      next[i] = (next[i] + 1) % total;
      return next;
    });

  const [videoIndex, setVideoIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextVideo = () => setVideoIndex((i) => (i + 1) % videos.length);
  const prevVideo = () => setVideoIndex((i) => (i - 1 + videos.length) % videos.length);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.load();
    v.play().catch(() => {});
  }, [videoIndex]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);
  return (
    <section id="portfolio" className="bg-[#080808] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(380px,1.02fr)_minmax(420px,1.18fr)] lg:gap-16 xl:grid-cols-[minmax(420px,1.05fr)_minmax(500px,1.25fr)] xl:gap-20">

          {/* ПРАВАЯ КОЛОНКА (теперь первой на мобиле) */}
          <div className="order-1 lg:order-2 flex w-full flex-col items-end text-right">
            <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.2em] text-primary sm:text-5xl lg:text-6xl">
              ПОРТФОЛИО
            </h2>
            <p className="mt-4 max-w-md text-xs font-semibold tracking-[0.26em] text-primary/85 sm:text-sm">
              маникюр — любимый способ женщины вернуть спокойствие и гармонию.
            </p>

            <div className="mt-14 grid w-full gap-7 sm:grid-cols-2">
              {portfolioCategories.map((category, index) => {
                const current = category.shots[activeShots[index]] ?? category.shots[0];
                return (
                  <div
                    key={category.key}
                    className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[34px] border-[3px] border-primary/65 bg-black/70 shadow-[0_0_42px_rgba(255,92,158,0.26)] sm:min-h-[240px]"
                  >
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={current.src}
                        alt={current.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/40" />
                    </div>

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/75 via-black/20 to-transparent px-6 py-4">
                      <span className="text-left text-sm font-black uppercase tracking-[0.28em] text-white sm:text-base">
                        {category.title}
                      </span>
                    </div>

                    <div className="pointer-events-none absolute left-3 right-3 top-1/2 -translate-y-1/2 sm:left-4 sm:right-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => showPrev(index)}
                        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        aria-label={`Предыдущая работа: ${category.title}`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => showNext(index)}
                        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        aria-label={`Следующая работа: ${category.title}`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ЛЕВЫЙ БОЛЬШОЙ ВИДЕО-БЛОК (вторым на мобиле) */}
          <div className="order-2 lg:order-1 group relative flex w-full items-stretch justify-center lg:h-full">
            <div className="relative w-full min-h-[520px] overflow-hidden rounded-[48px] border-[3px] border-primary/70 bg-black/70 shadow-[0_0_70px_rgba(255,92,158,0.3)] lg:h-full lg:min-h-0">
              <video
                ref={videoRef}
                key={videoIndex}
                src={videos[videoIndex]}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                autoPlay
                controls
                muted={muted}
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute left-6 right-6 top-1/2 z-10 -translate-y-1/2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevVideo}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Предыдущее видео"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextVideo}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_24px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Следующее видео"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-[0_0_20px_rgba(255,92,158,0.35)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                aria-label={muted ? "Включить звук" : "Выключить звук"}
                title={muted ? "Включить звук" : "Выключить звук"}
              >
                {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <span className="absolute bottom-8 left-8 text-left text-base font-black uppercase tracking-[0.4em] text-[#ff2f5f] drop-shadow-[0_0_18px_rgba(255,47,95,0.6)] sm:text-lg lg:text-xl">
                ВИДЕО-ОТЗЫВЫ
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


import React, { useEffect, useState } from "react";

import sertifikat1 from "@/assets/sertifikat-1.jpg";
import sertifikat2 from "@/assets/sertifikat-2.jpg";
import sertifikat3 from "@/assets/sertifikat-3.jpg";
import sertifikat4 from "@/assets/sertifikat-4.jpg";
import sertifikat5 from "@/assets/sertifikat-5.jpg";
import sertifikat6 from "@/assets/sertifikat-6.jpg";
import sertifikat7 from "@/assets/sertifikat-7.jpg";
import sertifikat8 from "@/assets/sertifikat-8.jpg";

type Cert = { name: string; image: string };

const certificates: Cert[] = [
  { name: "Манекюра emi", image: sertifikat1 },
  { name: "Марафон", image: sertifikat2 },
  { name: "NAIL", image: sertifikat3 },
  { name: "EMI WORLD", image: sertifikat4 },
  { name: "EMI Сертификат", image: sertifikat5 },
  { name: "Мастер-класс", image: sertifikat6 },
  { name: "Нормы Санпина", image: sertifikat7 },
  { name: "Обучающий эфир", image: sertifikat8 },
];

const CertificatesSection: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const next = () =>
    setLightboxIdx((i) => (i === null ? i : (i + 1) % certificates.length));
  const prev = () =>
    setLightboxIdx((i) =>
      i === null ? i : (i - 1 + certificates.length) % certificates.length
    );

  // Esc / arrows + блокировка прокрутки фона
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIdx]);

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] xl:grid-cols-[minmax(0,1fr)_minmax(360px,500px)] lg:items-start lg:gap-x-24 xl:gap-x-28">
          {/* Сетка сертификатов */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {certificates.map((cert, idx) => (
              <article
                key={cert.name}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-background/40 shadow-[0_20px_60px_rgba(15,15,15,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,15,15,0.55)] cursor-zoom-in"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* затемнение снизу для читабельности наших подписей и скрытия чужих ярлыков */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                  {/* подписи поверх фото */}
                  <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5">
                    <h3 className="mt-1 font-semibold text-sm uppercase tracking-[0.3em] text-foreground">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Правая колонка — заголовок и текст */}
          <div className="flex flex-col items-center gap-8 text-center lg:items-end lg:text-right lg:self-start lg:max-w-[440px] xl:max-w-[500px]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.45em] text-muted-foreground/90">
                <span className="h-2 w-2 rounded-full bg-primary" />
                достижения
              </span>
              <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.14em] text-[#FF62B1] lg:text-[2.75rem] xl:text-[3rem] xl:tracking-[0.18em]">
                СЕРТИФИКАТЫ
              </h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed tracking-[0.2em] text-muted-foreground uppercase lg:max-w-none lg:text-base xl:tracking-[0.22em]">
              <span className="text-foreground">Я ГОРЖУСЬ КАЖДЫМ ИЗ ЭТИХ СЕРТИФИКАТОВ</span>
              {" — ОНИ НАПОМИНАЮТ МНЕ О ПУТИ, КОТОРЫЙ Я ПРОШЛА, ЧТОБЫ "}
              <span className="text-primary">ДАВАТЬ ВАМ ТОЛЬКО ЛУЧШЕЕ.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Лайтбокс (простой, без библиотек) */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <figure
            className="relative max-w-[96vw] max-h-[92vh]"
            onClick={(e) => e.stopPropagation()} // чтобы не закрывать при клике на саму картинку
          >
            <img
              src={certificates[lightboxIdx].image}
              alt={certificates[lightboxIdx].name}
              className="max-w-[96vw] max-h-[92vh] object-contain rounded-[16px] shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.35em] text-white/80">
              {certificates[lightboxIdx].name}
            </figcaption>

            {/* Кнопка закрыть */}
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 rounded-full bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white hover:bg-black/85"
              aria-label="Закрыть"
            >
              закрыть
            </button>

            {/* Навигация (простая) */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white/90 hover:bg-black/75"
              aria-label="Предыдущий"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white/90 hover:bg-black/75"
              aria-label="Следующий"
            >
              ›
            </button>
          </figure>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;

import { useEffect, useRef } from 'react';

const highlightPoints = [
  {
    title: 'МОЯ МОТИВАЦИЯ',
    description: 'ВАШИ СЛОВА — МОЯ САМАЯ ЦЕННАЯ НАГРАДА. КАЖДЫЙ ТЕПЛЫЙ КОММЕНТАРИЙ ПОМОГАЕТ СТАТЬ ЕЩЁ ЛУЧШЕ ДЛЯ ВАС.'
  },
  {
    title: 'ИСТОРИИ И ЭМОЦИИ',
    description: 'ЗДЕСЬ СОБРАНЫ ИСКРЕННИЕ ЭМОЦИИ И ВПЕЧАТЛЕНИЯ ТЕХ, КОМУ Я ПОМОГЛА ОБРЕСТИ НЕ ПРОСТО КРАСОТУ, А УВЕРЕННОСТЬ В СЕБЕ.'
  },
  {
    title: 'ДОВЕРИЕ',
    description: 'СПАСИБО, ЧТО ДОВЕРЯЕТЕ МНЕ СВОИ РУКИ, ВРЕМЯ И ОЖИДАНИЯ. ДЛЯ МЕНЯ ЭТО САМАЯ ВЫСОКАЯ ОТВЕТСТВЕННОСТЬ И ЧЕСТЬ.'
  },
  {
    title: 'ВДОХНОВЕНИЕ',
    description: 'КАЖДЫЙ ОТЗЫВ СОГРЕВАЕТ СЕРДЦЕ И ВДОХНОВЛЯЕТ НА НОВЫЕ СВЕРШЕНИЯ, НОВЫЕ ДИЗАЙНЫ И ЗАБОТУ О ВАС.'
  }
];

const reviews = [
  {
    code: 'KL.01',
    name: 'ЮЛЯ',
    text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
  },
  {
    code: 'KL.02',
    name: 'АННА',
    text: 'КАЖДЫЙ ВИЗИТ — ОТДЫХ И ДЛЯ ДУШИ, И ДЛЯ РУК. Я ВЫХОЖУ С НОВЫМ НАСТРОЕНИЕМ И ЧУВСТВОМ, ЧТО О МНЕ ПОЗАБОТИЛИСЬ.'
  },
  {
    code: 'KL.03',
    name: 'СВЕТА',
    text: 'ЯНА СРАЗУ ПОНИМАЕТ, ЧТО МНЕ НУЖНО. ДИЗАЙН ВСЕГДА ТОЧНО В МОЁМ СТИЛЕ, А ПОКРЫТИЕ ДЕРЖИТСЯ ДО ПОСЛЕДНЕГО ДНЯ.'
  },
  {
    code: 'KL.04',
    name: 'КАТЯ',
    text: 'БЛАГОДАРЯ ТЕБЕ Я НАЧАЛА ВЕРИТЬ, ЧТО РУКИ МОГУТ ВЫГЛЯДЕТЬ АККУРАТНО ВСЕГДА. ЭТО ОЧЕНЬ ПОДНИМАЕТ УВЕРЕННОСТЬ.'
  },
  {
    code: 'KL.05',
    name: 'НАТАША',
    text: 'УЮТНО, СПОКОЙНО, ВНИМАТЕЛЬНО — ВСЁ, ЧТО ХОЧЕТСЯ ЧУВСТВОВАТЬ У ЛЮБИМОГО МАСТЕРА. СПАСИБО ЗА ЭТУ АТМОСФЕРУ.'
  },
  {
    code: 'KL.06',
    name: 'ПОЛИНА',
    text: 'ТОЧНОСТЬ ВО ВСЁМ: И ФОРМА, И ЦВЕТ, И УХОД. Я ВСЕГДА ПОЛУЧАЮ ТО, ЧТО ЗАПЛАНИРОВАЛА, И ДАЖЕ БОЛЬШЕ.'
  },
  {
    code: 'KL.07',
    name: 'ЛЕНА',
    text: 'С ПЕРВОГО ВИЗИТА ПОНЯЛА, ЧТО ОСТАНУСЬ. ЛАК ЛОЖИТСЯ ИДЕАЛЬНО, А РУКИ НЕ УСТАЮТ ДАЖЕ ПРИ ДЛИННОЙ РАБОТЕ.'
  },
  {
    code: 'KL.08',
    name: 'ДАРЬЯ',
    text: 'ВСЕГДА ЧИСТО, АККУРАТНО И БЕЗОПАСНО. ЧУВСТВУЮ СЕБЯ В ЗАБОТЕ И ЛЮБВИ, И РЕЗУЛЬТАТЫ ВСЕГДА ВОСХИЩАЮТ.'
  },
  {
    code: 'KL.09',
    name: 'ВИКТОРИЯ',
    text: 'ТЫ УМЕЕШЬ СЛУШАТЬ ЖЕЛАНИЯ И ПРЕДЛАГАТЬ СВОИ ИДЕИ. ИТОГ ВСЕГДА ЛУЧШЕ, ЧЕМ Я СЕБЕ ПРЕДСТАВЛЯЛА!'
  }
];

const reviewColumns = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
  reviews.slice(6, 9)
];

const columnDirections: Array<'up' | 'down'> = ['up', 'down', 'up'];
const columnDurations = ['26s', '32s', '28s'];

const ReviewsSection = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const columnsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMaskOffset = () => {
      if (!headingRef.current || !columnsRef.current) {
        return;
      }

      const headingRect = headingRef.current.getBoundingClientRect();
      const columnsRect = columnsRef.current.getBoundingClientRect();
      const offset = Math.max(0, headingRect.bottom - columnsRect.top);
      const cappedOffset = Math.min(offset, 480);

      columnsRef.current.style.setProperty('--review-mask-top', `${cappedOffset}px`);
    };

    updateMaskOffset();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMaskOffset);
    }

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateMaskOffset());
      if (headingRef.current) {
        resizeObserver.observe(headingRef.current);
      }
      if (columnsRef.current) {
        resizeObserver.observe(columnsRef.current);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateMaskOffset);
      }
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section id="reviews" className="bg-background py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-16 xl:items-end">
          {/* Left side - Header text */}
          <div className="space-y-10 self-start">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                ЖИВЫЕ ЭМОЦИИ
              </span>
              <h2
                ref={headingRef}
                className="font-heading text-4xl lg:text-6xl font-bold gradient-text"
              >
                ОТЗЫВЫ
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                СОБИРАЮ И БЕРЕЖНО ХРАНЮ КАЖДОЕ СЛОВО. ВМЕСТЕ МЫ СОЗДАЁМ НЕ ПРОСТО ДИЗАЙНЫ, А ИСТОРИИ ДОВЕРИЯ И КРАСОТЫ.
              </p>
            </div>

            <div className="rounded-[32px] border border-primary/30 bg-card/80 p-8 shadow-2xl backdrop-blur-md max-w-xl">
              <div className="divide-y divide-primary/15">
                {highlightPoints.map((item) => (
                  <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/90">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Reviews columns */}
          <div
            ref={columnsRef}
            className="review-columns grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 self-end"
          >
            {reviewColumns.map((column, columnIndex) => {
              const direction = columnDirections[columnIndex] ?? 'up';
              const duration = columnDurations[columnIndex] ?? '28s';
              const repeatedColumn = [...column, ...column];

              return (
                <div
                  key={`column-${columnIndex}`}
                  className="review-column h-[520px] sm:h-[560px] lg:h-[620px] xl:h-[680px]"
                >
                  <div
                    className={`flex flex-col gap-6 review-marquee ${direction === 'down' ? 'reverse' : ''}`}
                    style={{ animationDuration: duration }}
                  >
                    {repeatedColumn.map((review, reviewIndex) => {
                      const isDuplicate = reviewIndex >= column.length;

                      return (
                        <div
                          key={`${review.code}-${reviewIndex}`}
                          className="testimonial-card"
                          aria-hidden={isDuplicate}
                        >
                          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-primary-foreground/70">
                            <span>{review.code}</span>
                            <span>{review.name}</span>
                          </div>
                          <p className="mt-5 text-sm leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
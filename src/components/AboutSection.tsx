import { useId } from 'react';
import yanaPortrait from '@/assets/yana-portrait.jpg';

const AboutSection = () => {
  const rawId = useId();
  const circlePathId = `about-circle-${rawId.replace(/:/g, '')}`;

  const infoHighlights = [
    (
      <>
        <span className="font-semibold text-[#FF62B1]">
          Я УЖЕ 15 ЛЕТ
        </span>{' '}
        Я ДЕЛАЮ РУКИ И НОЖКИ МОИХ КЛИЕНТОВ НЕ ПРОСТО УХОЖЕННЫМИ, А{' '}
        <span className="font-semibold text-[#FF62B1]">
          БЕЗУПРЕЧНЫМИ.
        </span>
      </>
    ),
    (
      <>
        <span className="font-semibold text-[#FF62B1]">
          ЖИВУ И РАБОТАЮ В РОСТОВЕ-НА-ДОНУ.
        </span>
      </>
    ),
    (
      <>
        ГЛУБОКАЯ ЭКСПЕРТИЗА ПОЗВОЛЯЕТ МНЕ НЕ ТОЛЬКО{' '}
        <span className="font-semibold text-[#FF62B1]">
          ДЕЛАТЬ СЛОЖНЕЙШИЕ РАБОТЫ,
        </span>{' '}
        НО И УЧИТЬ ЭТОМУ ДРУГИХ — Я С РАДОСТЬЮ ДЕЛЮСЬ СВОИМИ ЗНАНИЯМИ НА КУРСАХ И СМОГУ{' '}
        <span className="font-semibold text-[#FF62B1]">
          ВАС НАУЧИТЬ ЭТОМУ С 0.
        </span>
      </>
    ),
    (
      <>
        ОБОЖАЮ ВЫЗОВЫ И{' '}
        <span className="font-semibold text-[#FF62B1]">
          ТРУДНЫЕ ЗАДАЧИ!
        </span>{' '}
        ЕСЛИ У ВАС ЕСТЬ{' '}
        <span className="font-semibold text-[#FF62B1]">
          ПРОБЛЕМА С НОГТЯМИ,
        </span>{' '}
        КОТОРУЮ НИКТО НЕ МОЖЕТ РЕШИТЬ, — ВАМ КО МНЕ. ВМЕСТЕ НАЙДЁМ{' '}
        <span className="font-semibold text-[#FF62B1]">
          РЕШЕНИЕ И СДЕЛАЕМ ВАМ НОВЫЙ ОБРАЗ ЗА 1.5 ЧАСА
        </span>
      </>
    ),
  ];

  return (
    <section id="about" className="relative bg-background py-24">
      <div className="absolute inset-x-0 top-0 hidden h-64 bg-gradient-to-b from-[rgba(255,98,177,0.12)] to-transparent lg:block" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative flex h-[22rem] w-[22rem] items-center justify-center sm:h-[26rem] sm:w-[26rem] lg:h-[32rem] lg:w-[32rem]">
              <div className="absolute -left-20 top-10 hidden h-[26rem] w-[26rem] rounded-full border border-[rgba(255,98,177,0.28)] lg:block" />
              <div className="absolute -left-10 top-4 hidden h-[24rem] w-[24rem] rounded-full border border-[rgba(255,98,177,0.45)] lg:block" />
              <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,98,177,0.35),_transparent_65%)]" />

              <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-[rgba(255,98,177,0.85)] bg-[#0b050d] shadow-[0_45px_90px_-35px_rgba(255,98,177,0.75)]">
                <img
                  src={yanaPortrait}
                  alt="Яна Пилит - мастер маникюра"
                  className="h-full w-full object-cover"
                />
              </div>

              <svg
                className="pointer-events-none absolute inset-[-18%] h-[136%] w-[136%]"
                viewBox="0 0 400 400"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id={circlePathId}
                    d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0"
                  />
                </defs>
                <text className="font-heading text-[18px] uppercase tracking-[0.55em]" style={{ fill: 'rgba(255, 98, 177, 0.85)' }}>
                  <textPath href={`#${circlePathId}`} startOffset="50%" textAnchor="middle">
                    ЯНА ПИЛИТ • МАСТЕР МАНИКЮРА • НОГТЕВОЙ СЕРВИС • ЯНА ПИЛИТ •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="order-1 space-y-12 text-left lg:order-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[rgba(255,98,177,0.75)]">
                ОБО МНЕ
              </p>
              <h2 className="font-heading text-4xl font-bold uppercase text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                МЕНЯ ЗОВУТ <span className="text-[#FF62B1]">ЯНА</span>
              </h2>
            </div>

            <div className="flex justify-start">
              <div className="relative w-full max-w-[34rem]">
                <div
                  className="pointer-events-none absolute -inset-6 hidden rounded-[3rem] border border-[rgba(255,98,177,0.35)] sm:block"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -inset-12 hidden rounded-[3rem] border border-[rgba(255,98,177,0.18)] lg:block"
                  aria-hidden="true"
                />
                <div className="relative min-h-[28rem] overflow-hidden rounded-[3rem] border-[3px] border-[rgba(255,98,177,0.85)] bg-[rgba(12,3,12,0.78)] px-8 py-10 text-lg font-medium uppercase leading-relaxed text-foreground shadow-[0_35px_90px_-45px_rgba(255,98,177,0.75)] backdrop-blur-sm sm:min-h-[32rem] sm:px-12 sm:py-14 sm:text-xl">
                  <div className="space-y-6 tracking-[0.08em]">
                    {infoHighlights.map((content, index) => (
                      <p key={index} className="text-left">
                        {content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

/** ВНЕШНЯЯ ССЫЛКА ДЛЯ ЗАПИСИ */
const BOOKING_URL = "https://dikidi.ru/1679582";

/* ============ ФОТО ДЛЯ 10 КАРТОЧЕК ============ */
import product1  from "@/assets/services/product1.jpg";  // Роспись на всех пальцах
import product2  from "@/assets/services/product2.jpg";  // Наращивание 4–5
import product3  from "@/assets/services/product3.jpg";  // Наращивание 6–7
import product4  from "@/assets/services/product4.jpg";  // Маникюр с покрытием
import product5  from "@/assets/services/product5.jpg";  // Коррекция 4–5
import product6  from "@/assets/services/product6.jpg";  // Наращивание 1–3
import product7  from "@/assets/services/product7.jpg";  // Педикюр обработка пальцев с покрытием
import product8  from "@/assets/services/product8.jpg";  // Коррекция 1–3
import product9  from "@/assets/services/product9.jpg";  // Педикюр с покрытием
import product10 from "@/assets/services/product10.jpg"; // (новое фото)

/* ------------ Данные услуг (10 шт.) ------------ */
type Service = {
  category: string;
  name: string;
  price: string;   // цена текстом (м.б. с «от» и пробелами)
  image?: string;
};

const services: Service[] = [
  { category: "Дизайн",       name: "Роспись на всех пальцах",                               price: "от 600 ₽",   image: product1  },
  { category: "Наращивание",  name: "Наращивание 4–5",                                       price: "от 2 300 ₽", image: product2  },
  { category: "Наращивание",  name: "Наращивание 6–7",                                       price: "от 3 200 ₽", image: product3  },
  { category: "Покрытие",     name: "Маникюр с покрытием гель-лак",                          price: "1 800 ₽",    image: product4  },
  { category: "Коррекция",    name: "Коррекция 4–5",                                         price: "от 2 300 ₽", image: product5  },
  { category: "Наращивание",  name: "Наращивание 1–3",                                       price: "от 2 300 ₽", image: product6  },
  { category: "Педикюр",      name: "Педикюр: обработка пальцев ног с гель-лаком",   price: "2 000 ₽",    image: product7  },
  { category: "Коррекция",    name: "Коррекция 1–3",                                         price: "от 1 900 ₽", image: product8  },
  { category: "Педикюр",      name: "Педикюр с покрытием гель-лак",                          price: "2 500 ₽",    image: product9  },
  { category: "Коррекция",    name: "Коррекция 1–3",                                         price: "от 1 900 ₽", image: product10 },
];

/* Градиенты рамки/панели */
const frameGradients = [
  "from-brand-pink/80 via-brand-pink/20 to-transparent",
  "from-rose-500/80 via-brand-pink/20 to-transparent",
  "from-purple-500/80 via-rose-500/20 to-transparent",
];
const panelGradients = [
  "from-brand-pink/15 via-transparent to-transparent",
  "from-rose-500/15 via-transparent to-transparent",
  "from-purple-500/15 via-transparent to-transparent",
];

/* Парсим число из строки цены: "от 1 900 ₽" -> 1900 */
const priceToNumber = (p: string) => {
  const digits = p.replace(/\D+/g, "");
  return digits ? Number(digits) : Number.POSITIVE_INFINITY;
};

const ServicesSection = () => {

  // сортируем по возрастанию цены
  const sorted = useMemo(
    () => [...services].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price)),
    []
  );
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text mb-8 lg:mb-0">
            УСЛУГИ
          </h2>
          <div className="text-right max-w-md">
            <p className="text-lg text-foreground italic">
              «ЛУЧШИЙ В МИРЕ ЦВЕТ — ТОТ, КОТОРЫЙ ТЕБЕ ИДЁТ»
            </p>
            <p className="text-primary font-semibold mt-2">— КОКО ШАНЕЛЬ</p>
          </div>
        </div>


        {/* Grid — 10 карточек, уже отсортированы по цене */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5">
          {sorted.map((service, index) => {
            const rowIndex = Math.floor(index / 5);
            const frameGradient = frameGradients[rowIndex % frameGradients.length];
            const panelGradient = panelGradients[rowIndex % panelGradients.length];

            return (
              <div
                key={`${service.category}-${service.name}`}
                className={`rounded-[34px] bg-gradient-to-br ${frameGradient} p-[1.5px]`}
              >
                <div className="service-card group flex h-full flex-col !border-0 !bg-background/95 !rounded-[30px]">
                  {/* Фото / плейсхолдер */}
                  <div className="aspect-square overflow-hidden rounded-t-[28px] bg-muted/10">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={`${service.name} — ${service.category}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                        Фото будет добавлено
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex flex-1 flex-col justify-between gap-6 rounded-b-[28px] bg-gradient-to-br ${panelGradient} p-6 text-center`}
                  >
                    <div className="space-y-3">

                      <span className="inline-flex items-center justify-center rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {service.category}
                      </span>

                      <h3 className="font-semibold text-sm leading-tight text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>
                    <Button asChild className="btn-hero w-full py-2 text-sm">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Записаться на услугу: ${service.name}`}
                      >
                        ЗАПИСАТЬСЯ
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

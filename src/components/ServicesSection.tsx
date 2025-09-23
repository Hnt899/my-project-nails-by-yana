import { Button } from "@/components/ui/button";

/** ВНЕШНЯЯ ССЫЛКА ДЛЯ ЗАПИСИ */
const BOOKING_URL = "https://dikidi.ru/1679582";

/** -------------------------------------------------------
 *  ИМПОРТЫ ФОТО ПО КАТЕГОРИЯМ
 *  Клади свои картинки в src/assets/services/..
 *  Названия можешь менять — просто поправь импорты ниже.
 *  ----------------------------------------------------- */
// Снятие
import snatie1 from "@/assets/services/snatie-1.jpg";
import snatie2 from "@/assets/services/snatie-1.jpg";

// Маникюр
import manikur1 from "@/assets/services/manikur-1.jpg";
import manikur2 from "@/assets/services/manikur-1.jpg";
import manikur3 from "@/assets/services/manikur-1.jpg";

// Покрытие
import pokrytie1 from "@/assets/services/pokrytie-1.jpg";
import pokrytie2 from "@/assets/services/pokrytie-1.jpg";

// Коррекция
import korrekciya1 from "@/assets/services/korrekciya-1.jpg";
import korrekciya2 from "@/assets/services/korrekciya-1.jpg";

// Наращивание
import narasch1 from "@/assets/services/narasch-1.jpg";
import narasch2 from "@/assets/services/narasch-1.jpg";

// Педикюр
import pedikur1 from "@/assets/services/pedikur-1.jpg";
import pedikur2 from "@/assets/services/pedikur-1.jpg";

/** Галереи по категориям: добавляй/удаляй картинки как хочешь */
const CATEGORY_GALLERY: Record<string, string[]> = {
  "Снятие": [snatie1, snatie2],
  "Маникюр": [manikur1, manikur2, manikur3],
  "Покрытие": [pokrytie1, pokrytie2],
  "Коррекция": [korrekciya1, korrekciya2],
  "Наращивание": [narasch1, narasch2],
  "Педикюр": [pedikur1, pedikur2],
};

type Service = { category: string; name: string; price: string };

const services: Service[] = [
  { category: "Снятие",   name: "Снятие нарощенных ногтей",                 price: "500 ₽" },
  { category: "Маникюр",  name: "Маникюр комбинированный",                  price: "800 ₽" },
  { category: "Маникюр",  name: "Авторский маникюр",                        price: "1 500 ₽" },
  { category: "Маникюр",  name: "Японский маникюр",                         price: "1 000 ₽" },
  { category: "Маникюр",  name: "Японский маникюр мужской",                 price: "1 100 ₽" },
  { category: "Покрытие", name: "Маникюр с покрытием",                      price: "1 500 ₽" },
  { category: "Покрытие", name: "Маникюр с покрытием френч",                price: "1 700 ₽" },
  { category: "Коррекция",name: "Коррекция гелем 1-3 длина",                price: "2 000 ₽" },
  { category: "Коррекция",name: "Коррекция гелем 4-5 длина",                price: "2 300 ₽" },
  { category: "Коррекция",name: "Коррекция гелем 5-7 длина",                price: "3 000 ₽" },
  { category: "Наращивание", name: "Наращивание гелем 1-3 длина",           price: "2 300 ₽" },
  { category: "Наращивание", name: "Наращивание гелем 4-5 длина",           price: "2 700 ₽" },
  { category: "Наращивание", name: "Наращивание гелем 5-7 длина",           price: "3 000 ₽" },
  { category: "Педикюр",  name: "Педикюр обработка пальцев ног",            price: "1 500 ₽" },
  { category: "Педикюр",  name: "Педикюр обработка пальцев ног с покрытием",price: "1 800 ₽" },
];

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

const ServicesSection = () => {
  // Счётчик позиций внутри каждой категории (чтобы чередовать фото)
  const seenPerCategory: Record<string, number> = {};

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
              «ЛУЧШИЙ В МИРЕ ЦВЕТ ЭТО ТОТ, КОТОРЫЙ ТЕБЕ ИДЁТ»
            </p>
            <p className="text-primary font-semibold mt-2">-КОКО ШАНЕЛЬ</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const rowIndex = Math.floor(index / 5);
            const frameGradient = frameGradients[rowIndex % frameGradients.length];
            const panelGradient = panelGradients[rowIndex % panelGradients.length];

            // Определяем фото по категории
            const gallery = CATEGORY_GALLERY[service.category] ?? [];
            const posInCategory = seenPerCategory[service.category] ?? 0;
            seenPerCategory[service.category] = posInCategory + 1;
            const imageSrc = gallery.length ? gallery[posInCategory % gallery.length] : undefined;

            return (
              <div
                key={`${service.category}-${service.name}`}
                className={`rounded-[34px] bg-gradient-to-br ${frameGradient} p-[1.5px]`}
              >
                <div className="service-card group flex h-full flex-col !border-0 !bg-background/95 !rounded-[30px]">
                  <div className="aspect-square overflow-hidden rounded-t-[28px] bg-muted/10">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={`${service.name} — ${service.category}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      /* Фолбэк, если для категории не задано ни одного фото */
                      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                        добавь фото в CATEGORY_GALLERY["{service.category}"]
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex flex-1 flex-col justify-between gap-6 rounded-b-[28px] bg-gradient-to-br ${panelGradient} p-6 text-center`}
                  >
                    <div className="space-y-3">
                      {service.category && (
                        <span className="inline-flex items-center justify-center rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          {service.category}
                        </span>
                      )}
                      <h3 className="font-semibold text-sm leading-tight text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>

                    {/* Кнопка — внешняя ссылка */}
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

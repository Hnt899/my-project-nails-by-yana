import { Button } from '@/components/ui/button';
import nails1 from '@/assets/nails-1.jpg';

const ServicesSection = () => {
  const services = [
    {
      category: 'Снятие',
      name: 'Снятие нарощенных ногтей',
      price: '500 ₽',
      image: nails1,
    },
    {
      category: 'Маникюр',
      name: 'Маникюр комбинированный',
      price: '800 ₽',
      image: nails1,
    },
    {
      category: 'Маникюр',
      name: 'Авторский маникюр',
      price: '1 500 ₽',
      image: nails1,
    },
    {
      category: 'Маникюр',
      name: 'Японский маникюр',
      price: '1 000 ₽',
      image: nails1,
    },
    {
      category: 'Маникюр',
      name: 'Японский маникюр мужской',
      price: '1 100 ₽',
      image: nails1,
    },
    {
      category: 'Покрытие',
      name: 'Маникюр с покрытием',
      price: '1 500 ₽',
      image: nails1,
    },
    {
      category: 'Покрытие',
      name: 'Маникюр с покрытием френч',
      price: '1 700 ₽',
      image: nails1,
    },
    {
      category: 'Коррекция',
      name: 'Коррекция гелем 1-3 длина',
      price: '2 000 ₽',
      image: nails1,
    },
    {
      category: 'Коррекция',
      name: 'Коррекция гелем 4-5 длина',
      price: '2 300 ₽',
      image: nails1,
    },
    {
      category: 'Коррекция',
      name: 'Коррекция гелем 5-7 длина',
      price: '3 000 ₽',
      image: nails1,
    },
    {
      category: 'Наращивание',
      name: 'Наращивание гелем 1-3 длина',
      price: '2 300 ₽',
      image: nails1,
    },
    {
      category: 'Наращивание',
      name: 'Наращивание гелем 4-5 длина',
      price: '2 700 ₽',
      image: nails1,
    },
    {
      category: 'Наращивание',
      name: 'Наращивание гелем 5-7 длина',
      price: '3 000 ₽',
      image: nails1,
    },
    {
      category: 'Педикюр',
      name: 'Педикюр обработка пальцев ног',
      price: '1 500 ₽',
      image: nails1,
    },
    {
      category: 'Педикюр',
      name: 'Педикюр обработка пальцев ног с покрытием',
      price: '1 800 ₽',
      image: nails1,
    },
  ];

  const frameGradients = [
    'from-brand-pink/80 via-brand-pink/20 to-transparent',
    'from-rose-500/80 via-brand-pink/20 to-transparent',
    'from-purple-500/80 via-rose-500/20 to-transparent',
  ];

  const panelGradients = [
    'from-brand-pink/15 via-transparent to-transparent',
    'from-rose-500/15 via-transparent to-transparent',
    'from-purple-500/15 via-transparent to-transparent',
  ];

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
            <p className="text-primary font-semibold mt-2">
              -КОКО ШАНЕЛЬ
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const rowIndex = Math.floor(index / 5);
            const frameGradient = frameGradients[rowIndex % frameGradients.length];
            const panelGradient = panelGradients[rowIndex % panelGradients.length];

            return (
              <div
                key={service.name}
                className={`rounded-[34px] bg-gradient-to-br ${frameGradient} p-[1.5px]`}
              >
                <div className="service-card group flex h-full flex-col !border-0 !bg-background/95 !rounded-[30px]">
                  <div className="aspect-square overflow-hidden rounded-t-[28px]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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
                    <Button className="btn-hero w-full py-2 text-sm">
                      ЗАПИСАТЬСЯ
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
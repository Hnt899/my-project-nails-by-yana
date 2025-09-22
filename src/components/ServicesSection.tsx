import { Button } from '@/components/ui/button';
import nails1 from '@/assets/nails-1.jpg';

const ServicesSection = () => {
  const services = [
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'ОБУЧЕНИЕ 1', price: '30 000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'НАЗВАНИЕ УСЛУГИ', price: '2000 Р.', image: nails1 },
    { name: 'ОБУЧЕНИЕ 2', price: '40 000 Р.', image: nails1 },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="aspect-square overflow-hidden rounded-t-3xl">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 text-center space-y-4">
                <h3 className="font-semibold text-foreground text-sm">
                  {service.name}
                </h3>
                <p className="text-primary font-bold text-lg">
                  {service.price}
                </p>
                <Button className="w-full btn-hero text-sm py-2">
                  ЗАПИСАТЬСЯ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
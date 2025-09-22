import certificate1 from '@/assets/certificate-1.jpg';

const CertificatesSection = () => {
  const certificates = [
    { name: 'НАЗВАНИЕ 1', image: certificate1 },
    { name: 'НАЗВАНИЕ 2', image: certificate1 },
    { name: 'НАЗВАНИЕ 3', image: certificate1 },
    { name: 'НАЗВАНИЕ 4', image: certificate1 },
    { name: 'НАЗВАНИЕ 5', image: certificate1 },
    { name: 'НАЗВАНИЕ 6', image: certificate1 },
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Certificates grid - takes 2/3 of the space */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card group">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-2xl">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-foreground text-sm">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Header text */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text text-center lg:text-right">
              СЕРТИФИКАТЫ
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-center lg:text-right">
              <p className="text-foreground">
                <span className="text-primary font-semibold">Я ГОРЖУСЬ КАЖДЫМ ИЗ ЭТИХ СЕРТИФИКАТОВ</span> — ОНИ НАПОМИНАЮТ МНЕ О ПУТИ, КОТОРЫЙ Я ПРОШЛА, ЧТОБЫ <span className="text-primary font-semibold">ДАВАТЬ ВАМ ТОЛЬКО ЛУЧШЕЕ.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
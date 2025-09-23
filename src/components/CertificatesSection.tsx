import certificate1 from '@/assets/certificate-1.jpg';

const CertificatesSection = () => {
  const certificates = [
    { name: 'НАЗВАНИЕ 1', image: certificate1 },
    { name: 'НАЗВАНИЕ 2', image: certificate1 },
    { name: 'НАЗВАНИЕ 3', image: certificate1 },
    { name: 'НАЗВАНИЕ 4', image: certificate1 },
    { name: 'НАЗВАНИЕ 5', image: certificate1 },
    { name: 'НАЗВАНИЕ 6', image: certificate1 },
    { name: 'НАЗВАНИЕ 7', image: certificate1 },
    { name: 'НАЗВАНИЕ 8', image: certificate1 },
  ];

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 xl:gap-20">
          {/* Certificates grid */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
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
                    <h3 className="font-semibold text-foreground text-sm tracking-wide uppercase">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Header text */}
          <div className="order-1 lg:order-2 lg:max-w-sm xl:max-w-md lg:pt-4">
            <div className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
              <div className="space-y-3">
                <span className="inline-block text-xs tracking-[0.6em] uppercase text-muted-foreground">достижения</span>
                <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text">
                  СЕРТИФИКАТЫ
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
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

import certificate1 from '@/assets/certificate-1.jpg';

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

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] xl:grid-cols-[minmax(0,1fr)_minmax(360px,500px)] lg:items-start lg:gap-x-24 xl:gap-x-28">
          {/* Certificates grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {certificates.map((cert) => (
              <article
                key={cert.name}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-background/80 via-background/60 to-background/80 shadow-[0_20px_60px_rgba(15,15,15,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,15,15,0.55)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex flex-col items-center gap-2 px-6 py-5 text-center">
                  <span className="text-[10px] uppercase tracking-[0.65em] text-muted-foreground">сертификат</span>
                  <h3 className="font-semibold text-sm uppercase tracking-[0.3em] text-foreground">{cert.name}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* Right side - Header text */}
          <div className="flex flex-col items-center gap-8 text-center lg:items-end lg:text-right lg:self-start lg:max-w-[440px] xl:max-w-[500px]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.45em] text-muted-foreground/90">
                <span className="h-2 w-2 rounded-full bg-primary" />достижения
              </span>
              <h2 className="font-heading text-4xl font-bold uppercase tracking-[0.14em] text-foreground lg:text-[2.75rem] xl:text-[3rem] xl:tracking-[0.18em]">
                СЕРТИФИКАТЫ
              </h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed tracking-[0.2em] text-muted-foreground uppercase lg:max-w-none lg:text-base xl:tracking-[0.22em]">
              <span className="text-foreground">Я ГОРЖУСЬ КАЖДЫМ ИЗ ЭТИХ СЕРТИФИКАТОВ</span>
              {' — ОНИ НАПОМИНАЮТ МНЕ О ПУТИ, КОТОРЫЙ Я ПРОШЛА, ЧТОБЫ '}
              <span className="text-primary">ДАВАТЬ ВАМ ТОЛЬКО ЛУЧШЕЕ.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

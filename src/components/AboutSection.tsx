import yanaPortrait from '@/assets/yana-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Decorative circles and photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -left-20 -top-10 w-32 h-32 bg-primary/20 rounded-full"></div>
              <div className="absolute -left-10 top-20 w-24 h-24 bg-secondary/30 rounded-full"></div>
              <div className="absolute left-10 -top-5 w-20 h-20 bg-primary/15 rounded-full"></div>
              
              {/* Main photo circle */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={yanaPortrait} 
                  alt="Яна Пилит - мастер маникюра" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              
              {/* Decorative text around circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="text-primary/60 text-sm font-medium tracking-widest transform -rotate-12">
                    Я Н А &nbsp; П И Л И Т &nbsp; / &nbsp; Я Н А &nbsp; П И Л И Т
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text mb-8">
              МЕНЯ ЗОВУТ ЯНА
            </h2>
            
            <div className="border-2 border-primary p-8 rounded-2xl space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                <span className="text-primary font-semibold">Я УЖЕ 15 ЛЕТ</span> Я ДЕЛАЮ РУКИ И НОЖКИ МОИХ КЛИЕНТОВ НЕ ПРОСТО УХОЖЕННЫМИ, А <span className="text-primary font-semibold">БЕЗУПРЕЧНЫМИ.</span>
              </p>
              
              <p className="text-foreground">
                <span className="text-primary font-semibold">ЖИВУ И РАБОТАЮ В РОСТОВЕ-НА-ДОНУ.</span>
              </p>
              
              <p className="text-foreground">
                ГЛУБОКАЯ ЭКСПЕРТИЗА ПОЗВОЛЯЕТ МНЕ НЕ ТОЛЬКО <span className="text-primary font-semibold">ДЕЛАТЬ СЛОЖНЕЙШИЕ РАБОТЫ,</span> НО И УЧИТЬ ЭТОМУ ДРУГИХ — Я С РАДОСТЬЮ ДЕЛЮСЬ СВОИМИ ЗНАНИЯМИ НА КУРСАХ И СМОГУ <span className="text-primary font-semibold">ВАС НАУЧИТЬ ЭТОМУ С 0.</span>
              </p>
              
              <p className="text-foreground">
                ОБОЖАЮ ВЫЗОВЫ И <span className="text-primary font-semibold">ТРУДНЫЕ ЗАДАЧИ!</span> ЕСЛИ У ВАС ЕСТЬ <span className="text-primary font-semibold">ПРОБЛЕМА С НОГТЯМИ,</span> КОТОРУЮ НИКТО НЕ МОЖЕТ РЕШИТЬ, — ВАМ КО МНЕ. ВМЕСТЕ НАЙДЁМ <span className="text-primary font-semibold">РЕШЕНИЕ И СДЕЛАЕМ ВАМ НОВЫЙ ОБРАЗ ЗА 1.5 ЧАСА</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
const ReviewsSection = () => {
  const reviews = [
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
    {
      name: 'ЮЛЯ',
      text: 'ЭТО ШЕДЕВР! Я ДАЖЕ ПРЕДСТАВИТЬ НЕ МОГЛА, ЧТО МОИ РУКИ МОГУТ ВЫГЛЯДЕТЬ НАСТОЛЬКО УХОЖЕННО И СТИЛЬНО.'
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Header text */}
          <div className="space-y-8">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text">
              ОТЗЫВЫ
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                <span className="text-primary font-semibold">ВАШИ СЛОВА — МОЯ САМАЯ ЦЕННАЯ НАГРАДА</span> И ЛУЧШАЯ МОТИВАЦИЯ.
              </p>
              
              <p className="text-foreground">
                ЗДЕСЬ СОБРАНЫ ИСКРЕННИЕ ИСТОРИИ И ЭМОЦИИ ТЕХ, КОМУ Я <span className="text-primary font-semibold">ПОМОГЛА ОБРЕСТИ НЕ ПРОСТО КРАСОТУ, А УВЕРЕННОСТЬ В СЕБЕ.</span>
              </p>
              
              <p className="text-foreground">
                СПАСИБО, ЧТО ДОВЕРЯЕТЕ МНЕ САМОЕ ЦЕННОЕ — ВАШЕ ВРЕМЯ, ВАШИ ОЖИДАНИЯ И ВОЗМОЖНОСТЬ <span className="text-primary font-semibold">СОЗДАВАТЬ ДЛЯ ВАС ИДЕАЛЬНУЮ ЭСТЕТИКУ.</span>
              </p>
              
              <p className="text-foreground">
                КАЖДЫЙ ВАШ ОТЗЫВ СОГРЕВАЕТ СЕРДЦЕ И <span className="text-primary font-semibold">ВДОХНОВЛЯЕТ НА НОВЫЕ СВЕРШЕНИЯ.</span>
              </p>
            </div>
          </div>

          {/* Right side - Reviews columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First column - moving up */}
            <div className="space-y-4 animate-slide-up">
              {reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="testimonial-card">
                  <h4 className="font-bold text-lg mb-3">{review.name}</h4>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

            {/* Second column - moving down */}
            <div className="space-y-4 animate-slide-down">
              {reviews.slice(3, 6).map((review, index) => (
                <div key={index + 3} className="testimonial-card">
                  <h4 className="font-bold text-lg mb-3">{review.name}</h4>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
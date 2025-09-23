import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Send, Check } from "lucide-react";
import yanaLogo from "@/assets/yana-pilit-logo.png";

const Footer: React.FC = () => {
  /* ===== Настройки ===== */
  // ВСТАВЬ СЮДА ССЫЛКУ ДЛЯ КНОПКИ «ЗАПИСАТЬСЯ»
  const BOOKING_URL = "https://dikidi.ru/1679582"; // <-- поменяй

  // Соц-сети (вставь свои)
  const INSTAGRAM_URL = "https://instagram.com/your_username";
  const WHATSAPP_URL = "https://wa.me/79999999999"; // только цифры
  const TELEGRAM_URL = "https://t.me/your_username";

  // Телефон
  const phonePretty = "+7 938 116-87-80";
  const phoneDigits = useMemo(() => phonePretty.replace(/\D/g, ""), [phonePretty]);

  /* ===== Плавный скролл для внутренних ссылок ===== */
  const smoothScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      smoothScrollTo(id);
    },
    [smoothScrollTo]
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ===== Копирование телефона ===== */
  const [copied, setCopied] = useState(false);
  const copyPhone = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(phoneDigits);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }, [phoneDigits]);

  return (
    <footer id="contact" className="py-20 bg-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* ЛОГО (клик — наверх) */}
          <div className="text-center lg:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="К началу страницы"
              className="inline-block mb-6 cursor-pointer select-none group"
            >
              <img
                src={yanaLogo}
                alt="ЯНА ПИЛИТ — логотип"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,98,177,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </div> {/* <-- ЭТОТ div обязателен. Его раньше и не хватало */}

          {/* НАВИГАЦИЯ — плавный скролл */}
          <div className="text-center">
            <nav className="space-y-4">
              <a
                href="#about"
                onClick={(e) => onNavClick(e, "about")}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                ОБО МНЕ
              </a>
              <a
                href="#services"
                onClick={(e) => onNavClick(e, "services")}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                УСЛУГИ
              </a>
              <a
                href="#portfolio"
                onClick={(e) => onNavClick(e, "portfolio")}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                ПОРТФОЛИО
              </a>
              <a
                href="#reviews"
                onClick={(e) => onNavClick(e, "reviews")}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                ОТЗЫВЫ
              </a>
              <a
                href="#certificates"
                onClick={(e) => onNavClick(e, "certificates")}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                СЕРТИФИКАТЫ
              </a>
            </nav>
          </div>

          {/* КОНТАКТЫ */}
          <div className="text-center lg:text-right space-y-6">
            {/* Соцсети */}
            <div className="flex justify-center lg:justify-end items-center space-x-3 mb-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Send className="h-5 w-5 text-primary" />
              </a>
            </div>

            {/* Номер — копирование */}
            <button
              type="button"
              onClick={copyPhone}
              className="inline-flex items-center gap-2 text-foreground font-medium text-lg hover:text-primary transition-colors"
              title="Нажмите, чтобы скопировать"
              aria-live="polite"
            >
              <span>{phonePretty}</span>
              <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-all ${
                  copied ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span
                className={`text-xs uppercase tracking-wider ${
                  copied ? "text-primary" : "text-muted-foreground/70"
                }`}
              >
                {copied ? "Скопировано" : "Скопировать"}
              </span>
            </button>

            {/* «Записаться» — внешняя ссылка */}
            <Button asChild className="btn-hero text-lg px-8 py-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                ЗАПИСАТЬСЯ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

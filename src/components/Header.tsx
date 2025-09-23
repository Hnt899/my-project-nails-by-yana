import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Send, Check } from "lucide-react";
import yanaLogo from "@/assets/yana-pilit-logo.png";

/** <<< ВСТАВЬ СВОИ ССЫЛКИ >>> */
const INSTAGRAM_URL = "https://instagram.com/your_username";
const WHATSAPP_URL  = "https://wa.me/79999999999";      // только цифры, международный формат
const TELEGRAM_URL  = "https://t.me/your_username";
/** <<< /Ссылки >>> */

const PHONE_DISPLAY = "+7 938 (116) 87-80";
const PHONE_COPY    = "+79381168780"; // что копируем в буфер

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_COPY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = PHONE_COPY;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4">
          {/* Навигация слева */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">ОБО МНЕ</button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium">УСЛУГИ</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors font-medium">ПОРТФОЛИО</button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors font-medium">ОТЗЫВЫ</button>
            <button onClick={() => scrollToSection("certificates")} className="text-foreground hover:text-primary transition-colors font-medium">СЕРТИФИКАТЫ</button>
          </div>

          {/* Контакты — СДВИНУЛ ВПРАВО */}
          <div className="hidden md:flex items-center space-x-3 ml-auto mr-2 sm:mr-4 md:mr-6">
            {/* Instagram */}
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </Button>

            {/* WhatsApp */}
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5 text-primary" />
              </a>
            </Button>

            {/* Telegram */}
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Send className="h-5 w-5 text-primary" />
              </a>
            </Button>

            {/* Телефон — копирование в буфер */}
            <button
              onClick={copyPhone}
              className="text-foreground font-medium pl-3 pr-1 py-1 rounded-md hover:text-primary transition-colors cursor-copy"
              title="Нажмите, чтобы скопировать номер"
              aria-live="polite"
            >
              <span className="inline-flex items-center gap-1.5">
                {copied && <Check className="h-4 w-4" />}
                {copied ? "Скопировано!" : PHONE_DISPLAY}
              </span>
            </button>
          </div>

          {/* Лого — самый правый край */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="К началу страницы"
            className="group block cursor-pointer select-none"
          >
            <img
              src={yanaLogo}
              alt="ЯНА ПИЛИТ — логотип"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,98,177,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>

          {/* Мобильная кнопка меню (заглушка) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

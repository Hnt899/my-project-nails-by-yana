import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Send, Check, X } from "lucide-react";
import yanaLogo from "@/assets/yana-pilit-logo.png";

/** <<< твои ссылки >>> */
const INSTAGRAM_URL = "https://instagram.com/your_username";
const WHATSAPP_URL  = "https://wa.me/79999999999";
const TELEGRAM_URL  = "https://t.me/your_username";
/** <<< /твои ссылки >>> */

const PHONE_DISPLAY = "+7 938 116-87-80";
const PHONE_COPY    = "+79381168780";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // позиционирование бургера с учётом safe-area (iOS) + одинаковый отступ везде
  const burgerSafePos: React.CSSProperties = {
    top:  "calc(env(safe-area-inset-top, 0px) + 14px)",
    right:"calc(env(safe-area-inset-right, 0px) + 14px)",
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const smoothTo = useCallback((id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const copyPhone = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PHONE_COPY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }, []);

  const headerClass =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
    (menuOpen
      ? "bg-background border-b border-primary/20"
      : isScrolled
      ? "bg-background/95 backdrop-blur-sm border-b border-primary/20"
      : "bg-transparent");

  return (
    <header className={headerClass}>
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <nav className="flex h-16 items-center gap-4">
          {/* ЛОГО */}
          <button
            type="button"
            onClick={() => smoothTo("top")}
            aria-label="К началу страницы"
            className="group"
          >
            <img
              src={yanaLogo}
              alt="ЯНА ПИЛИТ — логотип"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,98,177,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>

          {/* Десктоп-меню */}
          <div className="ml-6 hidden md:flex items-center gap-6">
            <button onClick={() => smoothTo("about")}        className="text-foreground hover:text-primary transition-colors">ОБО МНЕ</button>
            <button onClick={() => smoothTo("services")}     className="text-foreground hover:text-primary transition-colors">УСЛУГИ</button>
            <button onClick={() => smoothTo("portfolio")}    className="text-foreground hover:text-primary transition-colors">ПОРТФОЛИО</button>
            <button onClick={() => smoothTo("reviews")}      className="text-foreground hover:text-primary transition-colors">ОТЗЫВЫ</button>
            <button onClick={() => smoothTo("certificates")} className="text-foreground hover:text-primary transition-colors">СЕРТИФИКАТЫ</button>
          </div>

          {/* Контакты (десктоп) */}
          <div className="ml-auto hidden md:flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5 text-primary" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Send className="h-5 w-5 text-primary" />
              </a>
            </Button>
            <button
              onClick={copyPhone}
              className="pl-3 pr-1 py-1 rounded-md text-foreground hover:text-primary transition-colors cursor-copy"
              aria-live="polite"
              title="Нажмите, чтобы скопировать номер"
            >
              <span className="inline-flex items-center gap-1.5">
                {copied && <Check className="h-4 w-4" />}
                {copied ? "Скопировано!" : PHONE_DISPLAY}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* БУРГЕР — ФИКСИРОВАННЫЙ, ВСЕГДА ВИДЕН, С УЧЁТОМ SAFE-AREA */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Открыть меню"
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        style={burgerSafePos}
        className={`md:hidden fixed z-[70] inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/25 text-foreground backdrop-blur-sm shadow-[0_4px_18px_rgba(0,0,0,.35)] transition-opacity ${
          menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] transition-opacity ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-background border-l border-white/10 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
            <img src={yanaLogo} alt="" className="h-10 w-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/5"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-5 py-4 space-y-2">
            <button onClick={() => smoothTo("about")}        className="block w-full text-left text-lg py-2 text-foreground hover:text-primary">ОБО МНЕ</button>
            <button onClick={() => smoothTo("services")}     className="block w-full text-left text-lg py-2 text-foreground hover:text-primary">УСЛУГИ</button>
            <button onClick={() => smoothTo("portfolio")}    className="block w-full text-left text-lg py-2 text-foreground hover:text-primary">ПОРТФОЛИО</button>
            <button onClick={() => smoothTo("reviews")}      className="block w-full text-left text-lg py-2 text-foreground hover:text-primary">ОТЗЫВЫ</button>
            <button onClick={() => smoothTo("certificates")} className="block w-full text-left text-lg py-2 text-foreground hover:text-primary">СЕРТИФИКАТЫ</button>
          </nav>

          <div className="mt-4 px-5 space-y-4">
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <MessageCircle className="h-5 w-5 text-primary" />
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <Send className="h-5 w-5 text-primary" />
              </a>
            </div>

            <button onClick={copyPhone} className="text-left text-foreground hover:text-primary transition-colors" aria-live="polite">
              {copied ? <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Скопировано!</span> : PHONE_DISPLAY}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

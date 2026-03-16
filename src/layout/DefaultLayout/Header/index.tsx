import PillNav from "./navbar";
import { MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import i18n from "i18next";

const sections = ["#home", "#about", "#projects", "#contact"];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeHref, setActiveHref] = useState("#home");
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return i18n.resolvedLanguage || "vi";
    return localStorage.getItem("lang") || i18n.resolvedLanguage || "vi";
  });

  const handleToggleLang = () => {
    const currentLang = i18n.resolvedLanguage || i18n.language || "vi";
    const newLang = currentLang === "vi" ? "en" : "vi";
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onLangChanged = (lng: string) => setLang(lng);
    i18n.on("languageChanged", onLangChanged);
    return () => i18n.off("languageChanged", onLangChanged);
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-full">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#home");
          setActiveHref("#home");
        }}
        className="text-lg font-semibold hidden md:block hover:underline underline-offset-4"
        style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }}
      >
        Mẫn's Portfolio
      </a>
      <div className="flex flex-row items-center gap-4">
        <PillNav
          items={navItems}
          activeHref={activeHref}
          className="ml-auto"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="transparent"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
          onNavClick={handleNavClick}
        />
        <div
          className="flex-row items-center gap-1 text-white cursor-pointer border border-white/30 px-2 py-1 rounded-full hover:bg-white/10 transition-colors duration-300 hidden md:flex"
          onClick={handleToggleLang}
        >
          <MdLanguage size={24} />
          <span>{lang === "vi" ? "Vi" : "En"}</span>
          <img
            src={lang === "vi" ? "/flags/vi.svg" : "/flags/us.svg"}
            alt={lang}
            className="w-5 h-5 ml-1"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/logos/logo.png";
import logoAr from "../../assets/logos/logo-ar.png";

// Map each nav link to its section ID (null = top of page / Home)
const NAV_LINKS = [
  { key: "home", href: "#", sectionId: null },
  { key: "about", href: "#about", sectionId: "about" },
  { key: "services", href: "#services", sectionId: "services" },
  { key: "contact", href: "#contact", sectionId: "contact" },
];

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.filter((l) => l.sectionId).map(
      (l) => l.sectionId,
    );
    const HEADER_HEIGHT = 90;

    const getActiveSection = () => {
      // At very top → Home active
      if (window.scrollY < 10) {
        setActiveSection(null);
        return;
      }

      const scrollPos = window.scrollY + HEADER_HEIGHT + 10;
      let current = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        // el.offsetTop = absolute distance from document top
        if (el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", getActiveSection, { passive: true });
    getActiveSection();

    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  const isActive = (link) =>
    link.sectionId === null
      ? activeSection === null
      : activeSection === link.sectionId;

  return (
    <>
      <header>
        <nav className={styles.navbar + " container"}>
          {/* Logo */}
          <a href="#" className={styles.logo} aria-label="Go to top">
            <span className={styles.text}>
              {lang === "en" ? (
                <>
                  <img src={logo} alt="" />
                  <span>Smart Solutions for Modern Businesses</span>
                </>
              ) : (
                <>
                  <img src={logoAr} alt="" />
                  <span>حلول ذكية للمنشآت الحديثة</span>
                </>
              )}
            </span>
          </a>

          {/* Nav links */}
          <div className={styles.navActions}>
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.link} ${isActive(link) ? styles.active : ""}`}
                  >
                    {t.header[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile controls (language + hamburger) */}
          <div className={styles.mobileControls}>
            <button
              onClick={toggleLanguage}
              className={styles.langBtn}
              aria-label="Toggle language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.langIcon}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>

            <button
              className={styles.burger}
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              onClick={toggleLanguage}
              className={styles.langBtn}
              aria-label="Toggle language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.langIcon}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>

            <button className={styles.contactBtn}>
              <a href="#contact">{t.header.btn}</a>
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className={styles.mobileMenu} role="menu">
            <ul className={styles.mobileNavLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.link} ${isActive(link) ? styles.active : ""}`}
                  >
                    {t.header[link.key]}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className={styles.contactBtn}
              onClick={() => setMenuOpen(false)}
            >
              <a href="#contact">{t.header.btn}</a>
            </button>
          </div>
        )}
      </header>
      <div className={styles.bar}></div>
    </>
  );
};

export default Header;

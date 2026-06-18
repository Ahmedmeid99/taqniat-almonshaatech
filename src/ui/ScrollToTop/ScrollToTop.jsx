import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const isRtl = lang === "ar";

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.btn} ${isVisible ? styles.visible : ""} ${isRtl ? styles.rtl : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* Upward arrow: arrowhead + vertical stem */}
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="17 13 12 7 7 13" />
        <line x1="12" y1="7" x2="12" y2="20" />
      </svg>
    </button>
  );
};

export default ScrollToTop;

import styles from "./HeroSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.title}>{t.hero.title}</h1>

          <span className={styles.subTitle}>
            <strong>{t.about.companyName}</strong>
            <p>{t.hero.subtitle1}</p>
            <p>{t.hero.subtitle2}</p>
          </span>
        </div>
      </div>
      <div className={styles.companyInfo}>
        <div className={styles.vision}>
          <h3>{t.hero.vision.label}</h3>
          <p>{t.hero.vision.text}</p>
        </div>
        <div className={styles.mission}>
          <h3>{t.hero.mission.label}</h3>
          <p>{t.hero.mission.text}</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import Section from "../../ui/Section/Section";
import styles from "./AboutSection.module.css";
import aboutImage from "../../assets/images/WhyUs.webp";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import { useLanguage } from "../../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <Section>
      <div className="container" id="about">
        <HeroTitle title={t.about.title} />
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <div className={styles.slug}>{t.about.slug}</div>
            <h4 className={styles.title}>{t.about.companyName}</h4>
            <article>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </article>
          </div>
          <div className={styles.imageCover}>
            <img src={aboutImage} alt={t.about.companyName} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

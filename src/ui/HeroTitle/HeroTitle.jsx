import styles from "./HeroTitle.module.css";

const HeroTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.heroTitleContainer}>
      <h3 className={styles.heroTitle}>{title}</h3>
      <div className={styles.underline}>
        <div className={styles.dot}></div>
      </div>
      {subTitle && <p className={styles.heroSubTitle}>{subTitle}</p>}
    </div>
  );
};

export default HeroTitle;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../../ui/Section/Section";
import styles from "./ContactSection.module.css";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import { useLanguage } from "../../context/LanguageContext";

// EmailJS Credentials Configuration
// Can be customized via Vite environment variables (.env files)
const EMAILJS_SERVICE_ID = "service_3pap212";
const EMAILJS_TEMPLATE_ID = "template_75kbutg";
const EMAILJS_PUBLIC_KEY = "w31F-y6ZwGk-uAdsp";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { lang, t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const title = form.title.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !title || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
          form.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (err) => {
          console.error("EmailJS submission failure:", err);
          setError(true);
          setSuccess(false);
          setLoading(false);
        },
      );
  };

  return (
    <Section id="contact">
      <div className="container" id="contact">
        <HeroTitle title={t.contact.title} subTitle={t.contact.subtitle} />
        <a href="mailto:info@monshaatech.com" className={styles.mainBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square mr-2 w-5 h-5"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{t.contact.ctaBtn}</span>
        </a>
        <div className={styles.contactGrid}>
          {/* INFO */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>{t.contact.infoTitle}</h3>

            <div className={styles.info}>
              {/* Email */}
              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardLabel}>{t.contact.email}</h4>
                  <a
                    className={styles.cardValue}
                    href="mailto:info@monshaatech.com"
                  >
                    info@monshaatech.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardLabel}>{t.contact.phone}</h4>
                  <a
                    className={`${styles.cardValue} ${styles.ltr}`}
                    href="tel:+966562721190"
                  >
                    +966 56 272 1190
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardLabel}>{t.contact.location}</h4>
                  <div className={styles.cardValue}>
                    {t.contact.locationVal}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>
            {success && (
              <div className={styles.success}>{t.contact.form.success}</div>
            )}

            {error && (
              <div className={styles.error}>{t.contact.form.error}</div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.group}>
                <label>{t.contact.form.name} *</label>
                <input
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                />
              </div>

              <div className={styles.group}>
                <label>{t.contact.form.email} *</label>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                />
              </div>

              <div className={`${styles.group} ${styles.full}`}>
                <label>{t.contact.form.title} *</label>
                <input
                  name="title"
                  placeholder={t.contact.form.titlePlaceholder}
                  required
                />
              </div>

              <div className={`${styles.group} ${styles.full}`}>
                <label>{t.contact.form.message} *</label>
                <textarea name="message" rows="5" required />
              </div>
            </div>

            <div className={styles.footer}>
              <button
                className={styles.contactBtn}
                type="submit"
                disabled={loading}
              >
                {loading
                  ? lang === "ar"
                    ? "جاري الإرسال..."
                    : "Sending..."
                  : t.contact.form.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

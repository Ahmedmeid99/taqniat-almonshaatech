import styles from "./MapSection.module.css";

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124424367!2d46.492866952737635!3d24.725455371536636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1701358941234!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Riyadh, Saudi Arabia Map"
      ></iframe>
    </section>
  );
};

export default MapSection;

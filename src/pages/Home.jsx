import Layout from "../layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ContactSection from "../components/ContactSection/ContactSection";
import MapSection from "../components/MapSection/MapSection";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <MapSection />
      <ScrollToTop />
    </Layout>
  );
};

export default Home;

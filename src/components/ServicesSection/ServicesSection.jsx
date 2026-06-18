import { useLanguage } from "../../context/LanguageContext";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import styles from "./ServicesSection.module.css";
import Section from "../../ui/Section/Section";
import Card from "../../ui/Card/Card";
import image1 from "../../assets/images/01.webp";
import image2 from "../../assets/images/02.webp";
import image3 from "../../assets/images/03.webp";
import image4 from "../../assets/images/04.webp";
import image5 from "../../assets/images/05.webp";
import image6 from "../../assets/images/06.webp";
const services = {
  en: {
    title: "Our Comprehensive Services",
    items: [
      {
        id: "core",
        title: "Core IT Services",
        description:
          "We provide the essential building blocks for any modern business, including Basic IT Setup, IT Infrastructure Setup, IT Support and IT Managed Services, ensuring stable, secure, and reliable operations.",
        image: image1,
        tags: [
          "Basic IT Setup",
          "IT Infrastructure Setup",
          "IT Support",
          "IT Managed Services",
        ],
      },
      {
        id: "digital",
        title: "Digital Presence & Engagement",
        description:
          "We craft compelling digital experiences through professional Website Development and intuitive Mobile Application Development, ensuring our clients can effectively reach and engage their target audiences.",
        image: image2,
        tags: ["Website Development", "Mobile Application Development"],
      },
      {
        id: "custom",
        title: "Custom Solutions & Integration",
        description:
          "Our expertise in Application Development, System Integrations, and SaaS Implementation allows us to build bespoke solutions & seamlessly connect disparate systems, creating unified & efficient operational workflows.",
        image: image3,
        tags: [
          "Application Development",
          "System Integrations",
          "SaaS Implementation",
        ],
      },
      {
        id: "emerging",
        title: "Emerging Technologies",
        description:
          "We empower businesses to leverage the power of Artificial Intelligence, Data Management, and Automation to drive innovation, gain actionable insights, and streamline operations.",
        image: image4,
        tags: ["Artificial Intelligence", "Data Management", "Automation"],
      },
      {
        id: "infrastructure",
        title: "Modern Infrastructure",
        description:
          "Our Cloud Solution offerings provide scalable and secure infrastructure, while our Voice Solutions provide advanced communications to keep businesses connected.",
        image: image5,
        tags: ["Cloud Solutions", "Voice Solutions"],
      },
      {
        id: "guidance",
        title: "Strategic Guidance",
        description:
          "We provide strategic advice and expert guidance on technology deployment and digital evolution, ensuring alignment with business objectives.",
        image: image6,
        tags: ["Technology Deployment", "Digital Evolution"],
      },
    ],
  },
  ar: {
    title: "خدماتنا الشاملة",
    items: [
      {
        id: "core",
        title: "خدمات تقنية المعلومات الأساسية",
        description:
          "نوفر لبنات البناء الأساسية لأي منشأة حديثة، بما في ذلك التأسيس الأولي لتقنية المعلومات، وإعداد البنية التحتية لتقنية المعلومات، والدعم التقني، والخدمات المدارة لتقنية المعلومات، مما يضمن بيئة عمل مستقرة وآمنة وموثوقة.",
        image: image1,
        tags: [
          "التأسيس الأولي لتقنية المعلومات",
          "إعداد البنية التحتية لتقنية المعلومات",
          "الدعم التقني",
          "الخدمات المدارة لتقنية المعلومات",
        ],
      },
      {
        id: "digital",
        title: "الحضور الرقمي والتفاعل",
        description:
          "نبني تجارب رقمية فعالة من خلال تطوير المواقع الإلكترونية الاحترافية وتطوير تطبيقات الجوال، مما يضمن قدرة عملائنا على الوصول بفعالية إلى عملائهم والتفاعل معهم.",
        image: image2,
        tags: ["تطوير المواقع الإلكترونية الاحترافية", "تطوير تطبيقات الجوال"],
      },
      {
        id: "custom",
        title: "الحلول المخصصة والتكامل",
        description:
          "نقدم حلولاً تقنية مصممة وفقاً لاحتياجات الأعمال، تشمل تطوير التطبيقات، وتكامل الأنظمة، وتنفيذ أنظمة تخطيط موارد المنشآت، والحلول السحابية، بما يضمن انسيابية العمليات ورفع الكفاءة التشغيلية.",
        image: image3,
        tags: [
          "تطوير التطبيقات",
          "تكامل الأنظمة",
          "تنفيذ أنظمة تخطيط موارد المنشآت",
          "الحلول السحابية",
        ],
      },
      {
        id: "emerging",
        title: "التقنيات المتقدمة والناشئة",
        description:
          "نمكّن المنشآت من الاستفادة من تقنيات الذكاء الاصطناعي وإدارة البيانات والأتمتة لتعزيز الابتكار، وتحسين اتخاذ القرار، ورفع كفاءة العمليات.",
        image: image4,
        tags: ["تقنيات الذكاء الاصطناعي", "إدارة البيانات", "الأتمتة"],
      },
      {
        id: "infrastructure",
        title: "البنية التحتية الحديثة",
        description:
          "نوفر حلولاً سحابية آمنة ومرنة تدعم نمو الأعمال، بالإضافة إلى حلول الاتصالات الصوتية الحديثة التي تضمن تواصلاً فعالاً ومستداماً.",
        image: image5,
        tags: ["حلول سحابية آمنة ومرنة", "حلول الاتصالات الصوتية الحديثة"],
      },
      {
        id: "guidance",
        title: "التوجيه الاستراتيجي",
        description:
          "نقدم لعملائنا التوجيهات المتخصصة في تطبيق الحلول التقنية المناسبة، وتطوير قدراتهم الرقمية بما يتوافق مع أهدافهم وخططهم الاستراتيجية.",
        image: image6,
        tags: ["تطبيق الحلول التقنية المناسبة", "تطوير قدراتهم الرقمية"],
      },
    ],
  },
};
const ServicesSection = () => {
  const { lang } = useLanguage();
  const content = services[lang] || services.en;

  return (
    <Section>
      <div className="container" id="services">
        <HeroTitle title={content.title} />

        <div className={styles.services}>
          {content.items.map((service) => (
            <Card key={service.id}>
              <div className={styles.imageCover}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.accentBar} />
              <div className={styles.cardContent}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                {/* {service.tags?.length > 0 && (
                  <ul className={styles.tags}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )} */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;

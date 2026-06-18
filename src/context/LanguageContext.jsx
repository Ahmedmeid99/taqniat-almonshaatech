import { createContext, useState, useEffect, useContext } from "react";

const content = {
  en: {
    header: {
      brand: "TAQNIAT ALMONSHAAT",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
      btn: "Contact Us",
    },
    hero: {
      title:
        "Empowering modern Saudi Startups and SMEs with Smart IT Solutions",
      subtitle1:
        "is a dynamic and innovative IT services provider founded in the heart of Saudi Arabia, dedicated to empowering startups, Small and Medium-sized Enterprises (SMEs) in their digital journey.",
      subtitle2:
        "Aligned with the ambitious goals of Saudi Vision 2030, we offer a comprehensive suite of IT services and solutions designed to enhance efficiency, foster growth, and drive innovation within the Kingdom's dynamic business ecosystem. From foundational IT infrastructure to cutting-edge AI & Cloud solutions, our expertise ensures our clients are well-equipped to compete and thrive in the digital age.",
      vision: {
        label: "Our Vision",
        text: "To be one of the leading IT services providers in Saudi Arabia, recognized for innovation, excellence, and pivotal role in accelerating digital growth for startups and SMEs",
      },
      mission: {
        label: "Our Mission",
        text: "To empower Saudi Arabian startups and SMEs with robust, future-proof IT solutions & strategic guidance, enabling operational excellence, competitive advantage, and sustainable growth in an increasingly digital & interconnected world",
      },
      ctaConsultation: "Get a Free Consultation",
      ctaServices: "Explore Our Services",
      visionBadge: "Vision 2030 Aligned",
      localBadge: "Local Expertise",
    },
    mainServices: {
      title: "Comprehensive IT Solutions",
      subtitle:
        "From foundational infrastructure to advanced digital transformation, we cover all aspects of your IT needs.",
      servicesList: {
        infra: {
          title: "IT Infrastructure Setup",
          desc: "Designing and implementing robust, scalable IT environments tailored to your business needs.",
        },
        support: {
          title: "IT Support & Managed Services",
          desc: "Proactive management and responsive technical assistance ensuring seamless operations.",
        },
        dev: {
          title: "Web & Mobile Development",
          desc: "Professional, engaging digital experiences across web and mobile platforms.",
        },
        cloud: {
          title: "Cloud Solutions",
          desc: "Scalable and secure cloud infrastructure, migration, and management services.",
        },
        ai: {
          title: "Artificial Intelligence",
          desc: "Leveraging AI to drive innovation, automate processes, and gain actionable insights.",
        },
        integration: {
          title: "System Integration",
          desc: "Seamlessly connecting disparate systems and applications for unified operations.",
        },
      },
    },
    services: {
      title: "Our Comprehensive IT Services",
      list: [
        "Basic IT Setup",
        "IT Infrastructure Setup",
        "IT Support",
        "IT Managed Services",
        "Website Development",
        "Mobile Application Development",
        "Application Development",
        "ERP & SaaS Solutions",
        "System Integrations",
        "Artificial Intelligence",
        "Data Management",
        "Automation",
        "Voice Solution",
        "Cloud Solutions",
        "IT Consultation",
      ],
    },
    about: {
      title: "About Us",
      slug: "Who we are?",
      companyName: "TAQNIAT ALMONSHAAT ALTHAKIYAH",
      p1: "is a dynamic and innovative IT services provider founded in the heart of Saudi Arabia, dedicated to empowering startups, Small and Medium-sized Enterprises (SMEs) in their digital journey.",
      p2: "Aligned with the ambitious goals of Saudi Vision 2030, we offer a comprehensive suite of IT services and solutions designed to enhance efficiency, foster growth, and drive innovation within the Kingdom's dynamic business ecosystem.",
      p3: "From foundational IT infrastructure to cutting-edge AI & Cloud solutions, our expertise ensures our clients are well-equipped to compete and thrive in the digital age.",
      satisfactionRate: "100%",
      satisfactionLabel: "Client Satisfaction",
      categoriesCount: "15+",
      categoriesLabel: "Service Categories",
    },
    whyUs: {
      title: "Why Choose IT Services SA?",
      reasons: [
        {
          title: "Local Expertise",
          description:
            "Deep understanding of the Saudi Arabian market, regulatory landscape, and business culture.",
        },
        {
          title: "Comprehensive Solutions",
          description:
            "A single partner for all IT needs, from foundational setup to advanced digital transformation.",
        },
        {
          title: "Client-Centric Approach",
          description:
            "Tailored solutions designed to meet the unique goals and challenges of each client.",
        },
        {
          title: "Innovation-Driven",
          description:
            "Committed to bringing the latest technologies and best practices to our clients.",
        },
        {
          title: "Reliability & Support",
          description:
            "Dedicated to providing consistent, high-quality service and support.",
        },
        {
          title: "Vision 2030 Aligned",
          description:
            "Our services support the national agenda for digital economic growth.",
        },
      ],
    },
    contact: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Contact us today for a personalized consultation and discover how our expert IT solutions can drive your success.",
      ctaBtn: "Contact Us for free consultation",
      infoTitle: "Contact Info",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationVal: "Riyadh, Saudi Arabia",
      form: {
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com",
        title: "Subject",
        titlePlaceholder: "How can we help you?",
        message: "Message",
        send: "Send Message",
        success: "Thank you! Your message has been sent successfully.",
        error: "Please fill in all required fields.",
      },
    },
    footer: {
      desc: "Empowering modern Saudi Startups and SMEs with Smart IT Solutions",
      services: "Services",
      s1: "Core IT Services",
      s2: "Digital Presence & Engagement",
      s3: "Custom Solutions & Integration",
      s4: "Emerging Technologies",
      s5: "Modern Infrastructure",
      s6: "Strategic Guidance",
      company: "Company",
      home: "Home",
      about: "About Us",
      contact: "Contact",
      privacy: "Privacy",
      legal: "Legal",
      terms: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      copyright:
        "© 2026 TAQNIAT ALMONSHAAT. All rights reserved. Aligned with Vision 2030.",
    },
  },
  ar: {
    header: {
      brand: "تقنيات المنشآت",
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      btn: "اتصل بنا",
    },
    hero: {
      title:
        "تمكين الشركات الناشئة والمنشآت الصغيرة والمتوسطة في المملكة بحلول تقنية ذكية",
      subtitle1:
        "هي شركة مزوِّدة لخدمات تقنية المعلومات، تأسست في قلب المملكة العربية السعودية، وتكرّس جهودها لتمكين الشركات الناشئة والمنشآت الصغيرة والمتوسطة في رحلتها الرقمية. ",
      subtitle2:
        "انسجاماً مع الأهداف الطموحة لرؤية 2030، نقدم مجموعة متكاملة من خدمات وحلول تقنية المعلومات الهادفة إلى تعزيز الكفاءة، وتحفيز النمو، ودفع الابتكار داخل البيئة الأعمال الديناميكية في المملكة. من البنية التحتية الأساسية لتقنية المعلومات وصولاً إلى حلول الذكاء الاصطناعي والسحابة المتطورة، تضمن خبرتنا تأهيل عملائنا للمنافسة والازدهار في العصر الرقمي.",
      vision: {
        label: "رؤيتنا",
        text: "أن نكون من الشركات الرائدة في مجال خدمات تقنية المعلومات في المملكة العربية السعودية، معروفين بالابتكار والتميز، ودورنا المحوري في تسريع النمو الرقمي للشركات الناشئة والمنشآت الصغيرة والمتوسطة",
      },
      mission: {
        label: "مهمتنا",
        text: "تمكين الشركات الناشئة والمنشآت الصغيرة والمتوسطة في المملكة بحلول تقنية معلومات متينة ومستدامة وإرشاد استراتيجي، بما يتيح التميز التشغيلي والميزة التنافسية والنمو المستدام في عالم رقمي متشابك",
      },
      ctaConsultation: "احصل على استشارة مجانية",
      ctaServices: "استكشف خدماتنا",
      visionBadge: "متوافق مع رؤية 2030",
      localBadge: "خبرة محلية",
    },
    mainServices: {
      title: "حلول تقنية معلومات متكاملة",
      subtitle:
        "من البنية التحتية الأساسية إلى التحول الرقمي المتقدم، نغطي كافة جوانب احتياجاتك التقنية.",
      servicesList: {
        infra: {
          title: "تأسيس البنية التحتية لتقنية المعلومات",
          desc: "تصميم وتنفيذ بيئات تقنية معلومات قوية وقابلة للتوسع ومخصصة لاحتياجات عملك.",
        },
        support: {
          title: "الدعم الفني والخدمات المدارة",
          desc: "إدارة استباقية ومساعدة تقنية سريعة الاستجابة لضمان تشغيل العمليات بسلاسة.",
        },
        dev: {
          title: "تطوير الويب والهواتف المحمولة",
          desc: "تجارب رقمية احترافية وجذابة عبر منصات الويب وتطبيقات الجوال.",
        },
        cloud: {
          title: "الحلول السحابية",
          desc: "بنية تحتية سحابية آمنة وقابلة للتوسع، وخدمات النقل والإدارة السحابية.",
        },
        ai: {
          title: "الذكاء الاصطناعي",
          desc: "تسخير الذكاء الاصطناعي لدفع الابتكار وأتمتة العمليات والحصول على رؤى قابلة للتطبيق.",
        },
        integration: {
          title: "تكامل الأنظمة",
          desc: "ربط الأنظمة والتطبيقات المختلفة بسلاسة لتوحيد العمليات وتكاملها.",
        },
      },
    },
    services: {
      title: "خدماتنا الشاملة لتقنية المعلومات",
      list: [
        "إعداد تقنية المعلومات الأساسية",
        "تأسيس البنية التحتية لتقنية المعلومات",
        "الدعم الفني لتقنية المعلومات",
        "الخدمات المدارة لتقنية المعلومات",
        "تطوير المواقع الإلكترونية",
        "تطوير تطبيقات الجوال",
        "تطوير التطبيقات البرمجية",
        "حلول تخطيط موارد المؤسسات (ERP) والبرمجيات كخدمة (SaaS)",
        "تكامل الأنظمة والبرامج",
        "تقنيات الذكاء الاصطناعي",
        "إدارة البيانات والتحليل",
        "أتمتة العمليات والمهام",
        "حلول الاتصالات الصوتية وهواتف الشبكة",
        "الحلول والخدمات السحابية",
        "الاستشارات التقنية لتقنية المعلومات",
      ],
    },
    about: {
      title: "من نحن",
      slug: "من نحن ؟",
      companyName: "تقنيات المنشآت الذكية",
      p1: "شركة مزوِّدة لخدمات تقنية المعلومات، تأسست في قلب المملكة العربية السعودية، وتكرّس جهودها لتمكين الشركات الناشئة والمنشآت الصغيرة والمتوسطة في رحلتها الرقمية.",
      p2: "انسجاماً مع الأهداف الطموحة لرؤية 2030، نقدم مجموعة متكاملة من خدمات وحلول تقنية المعلومات الهادفة إلى تعزيز الكفاءة وتحفيز النمو ودفع الابتكار داخل البيئة الأعمال الديناميكية في المملكة.",
      p3: "من البنية التحتية الأساسية لتقنية المعلومات وصولاً إلى حلول الذكاء الاصطناعي والسحابة المتطورة، تضمن خبرتنا تأهيل عملائنا للمنافسة والازدهار في العصر الرقمي.",
      satisfactionRate: "100%",
      satisfactionLabel: "رضا العملاء",
      categoriesCount: "15+",
      categoriesLabel: "تصنيفاً للخدمات",
    },
    whyUs: {
      title: "لماذا تختار تقنيات المنشآت؟",
      reasons: [
        {
          title: "خبرة محلية",
          description:
            "فهم عميق للسوق السعودي والبيئة التنظيمية وثقافة الأعمال المحلية.",
        },
        {
          title: "حلول شاملة ومتكاملة",
          description:
            "شريك واحد لجميع احتياجات تقنية المعلومات، بدءاً من التأسيس الأولي وحتى التحول الرقمي المتقدم.",
        },
        {
          title: "التركيز على العميل",
          description:
            "حلول مخصصة مصممة لتلبية الأهداف والتحديات الفريدة لكل عميل.",
        },
        {
          title: "الابتكار المستمر",
          description:
            "نلتزم بتقديم أحدث التقنيات وأفضل الممارسات العالمية لعملائنا.",
        },
        {
          title: "الموثوقية والدعم المستمر",
          description: "مكرسون لتقديم خدمة ودعم فني متسق وعالي الجودة.",
        },
        {
          title: "متوافق مع رؤية 2030",
          description:
            "تدعم خدماتنا الأجندة الوطنية للنمو الاقتصادي الرقمي للمملكة.",
        },
      ],
    },
    contact: {
      title: "هل أنت مستعد لتحويل أعمالك رقمياً؟",
      subtitle:
        "تواصل معنا اليوم للحصول على استشارة مخصصة واكتشف كيف يمكن لحلولنا التقنية الخبيرة أن تدفع نجاحك.",
      ctaBtn: "تواصل معنا للحصول على استشارة مجانية",
      infoTitle: "معلومات التواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationVal: "الرياض، المملكة العربية السعودية",
      form: {
        name: "الاسم",
        namePlaceholder: "محمد أحمد",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@domain.com",
        title: "موضوع الرسالة",
        titlePlaceholder: "كيف يمكننا مساعدتك؟",
        message: "الرسالة",
        send: "إرسال الرسالة",
        success: "شكراً لك! تم إرسال رسالتك بنجاح.",
        error: "يرجى ملء جميع الحقول المطلوبة.",
      },
    },
    footer: {
      desc: "تمكين الشركات الناشئة والمنشآت الصغيرة والمتوسطة في المملكة بحلول تقنية ذكية",
      services: "الخدمات",
      s1: "خدمات تقنية المعلومات الأساسية",
      s2: "الحضور الرقمي والتفاعل",
      s3: "الحلول المخصصة والتكامل",
      s4: "التقنيات المتقدمة والناشئة",
      s5: "البنية التحتية الحديثة",
      s6: "التوجيه الاستراتيجي",
      company: "الشركة",
      home: "الرئيسية",
      about: "من نحن",
      contact: "اتصل بنا",
      privacy: "الخصوصية",
      legal: "القانونية",
      terms: "شروط الخدمة",
      privacyPolicy: "سياسة الخصوصية",
      copyright:
        "© 2026 تقنيات المنشآت. جميع الحقوق محفوظة. متوافق مع رؤية 2030.",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    document.documentElement.classList.add("no-transition");
    setLang((prev) => (prev === "en" ? "ar" : "en"));
    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 50);
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.title =
      lang === "ar"
        ? "تقنيات المنشآت | حلول ذكية لتقنية المعلومات وتطوير البرمجيات بالمملكة"
        : "TAQNIAT ALMONSHAAT | Smart IT Solutions & Software Development Saudi Arabia";
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLanguage, t: content[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
nav: {
          home: "Home",
          about: "About Us",
          services: "Services",
          packages: "Packages",
          comboPackages: "Combo Packages",
          contact: "Contact Us",
          review: "Submit a Review",
          getProposal: "Get a Proposal",
        },
      // Hero Section
      hero: {
        tagline: "NEXT-GEN FULL STACK ENGINEERING",
        title: "Architecting Digital Ecosystems That Scale",
        subtitle: "We don't just build software. We engineer high-performance digital engines that propel brands into the future through technical mastery and visceral design.",
        cta: "Talk to a Specialist",
        ctaSecondary: "Pricing",
        scrollDown: "Explore the transformation",
      },
      // Narrative Section
      narrative: {
        missionTitle: "The Gravity of Innovation",
        missionText: "In a digital landscape filled with noise, we architect signal. Our mission is to eliminate the friction between complex technology and human experience, delivering outcomes that aren't just functional, but transformative.",
        processTitle: "Our Dynamic Workflow",
        impactTitle: "Global Impact, Measured in Success",
        outcomesTitle: "Real Impact, Measured.",
        outcomesText: "Transforming ideas into digital powerhouses with measurable growth and premium aesthetics.",
      },
      // About Section
      about: {
        title: "About DigiDevBrand",
        subtitle: "Your Partner in Digital Excellence",
        description: "With years of Experience, we've helped numerous businesses transform their digital presence. Our team of creative experts combines innovation with strategy to deliver results that matter.",
        mission: "Our Mission",
        missionText: "To empower businesses worldwide with cutting-edge digital solutions that drive growth, enhance brand visibility, and create lasting impact in the digital landscape.",
        vision: "Our Vision",
        visionText: "To be the global leader in digital transformation, setting new standards for innovation, creativity, and client success in every project we undertake.",
        stats: {
          experts: "Creative Experts",
          projects: "Projects Completed",
          clients: "Satisfied Clients",
          awards: "Industry Awards",
        },
      },
      // Services
      services: {
        title: "Our Services",
        subtitle: "Comprehensive Digital Solutions",
        description: "From concept to execution, we provide end-to-end digital services tailored to your unique business needs.",
        webDesign: {
          title: "Website Design & Development",
          description: "Custom, responsive websites that captivate audiences and convert visitors into customers.",
        },
        logo: {
          title: "Logo Design",
          description: "Memorable brand identities that communicate your values and stand out in the market.",
        },
        graphics: {
          title: "Graphical Works",
          description: "Stunning visual content that tells your story and engages your audience.",
        },
        seo: {
          title: "SEO/GEO",
          description: "Data-driven optimization strategies that boost your visibility and organic traffic.",
        },
        smm: {
          title: "Social Media Marketing",
          description: "Strategic campaigns that build communities and drive meaningful engagement.",
        },
        cyber: {
          title: "Cyber Security",
          description: "Comprehensive security solutions to protect your digital assets and customer data.",
        },
        content: {
          title: "Content Marketing",
          description: "Compelling content strategies that establish thought leadership and drive conversions.",
        },
        smManagement: {
          title: "Social Media Management",
          description: "Full-service social media management to grow your online presence.",
        },
        smMaintenance: {
          title: "Social Media Maintenance",
          description: "Ongoing maintenance and optimization for consistent brand presence.",
        },
        writing: {
          title: "Content Writing",
          description: "Professional copywriting that resonates with your target audience.",
        },
        ecommerce: {
          title: "E-Commerce Solutions",
          description: "Powerful online stores that drive sales and enhance customer experience.",
        },
        shopify: {
          title: "Shopify Development",
          description: "Expert Shopify store setup and customization for e-commerce success.",
        },
      },
      // Testimonials
      testimonials: {
        title: "Client Success Stories",
        subtitle: "What Our Clients Say",
      },
      // Contact
      contact: {
        title: "Let's Work Together",
        subtitle: "Ready to Transform Your Business?",
        description: "Get in touch with our team to discuss your project and discover how we can help you achieve your digital goals.",
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        send: "Send Message",
        offices: {
          usa: {
            title: "United States Office",
            address: "5900 Balcones Drive STE 100, Austin, TX 78731, USA",
          },
        },
      },
      // Review
      review: {
        title: "Share Your Experience",
        subtitle: "Your Feedback Matters",
        description: "Help us improve and help others make informed decisions by sharing your experience working with us.",
        rating: "Your Rating",
        submit: "Submit Review",
        thankYou: "Thank you for your review!",
      },
      // Footer
      footer: {
        description: "Your trusted partner for comprehensive digital solutions. We help businesses grow through innovative design, development, and marketing strategies.",
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact",
        newsletter: "Newsletter",
        newsletterText: "Subscribe to get updates on our latest projects and insights.",
        subscribe: "Subscribe",
        copyright: "© 2024 DigiDevBrand LLC. All rights reserved.",
      },
      // Common
      common: {
        learnMore: "Learn More",
        getStarted: "Get Started",
        viewAll: "View All",
        readMore: "Read More",
        loading: "Loading...",
      },
      // Blog
      blog: {
        title: "Latest Insights",
        subtitle: "From Our Blog",
      },
      // Countries Marquee
      countries: {
        title: "Proudly Serving Clients Worldwide",
        usa: "United States",
        canada: "Canada",
        uae: "United Arab Emirates",
      },
      // Trust Badges
      trust: {
        title: "Trusted By Industry Leaders",
        ssl: "SSL Secured",
        privacy: "Privacy Protected",
        certified: "ISO Certified",
        support: "24/7 Support",
      },
    },
  },
  ar: {
    translation: {
      // Navigation
nav: {
          home: "الرئيسية",
          about: "من نحن",
          services: "خدماتنا",
          packages: "الباقات",
          comboPackages: "الباقات المجمعة",
          contact: "اتصل بنا",
          review: "أضف تقييم",
          getProposal: "احصل على عرض",
        },
      // Hero Section
      hero: {
        tagline: "هندسة الجيل القادم المتكاملة",
        title: "هندسة أنظمة رقمية قابلة للتوسع",
        subtitle: "نحن لا نبني برمجيات فحسب، بل نهندس محركات رقمية عالية الأداء تدفع العلامات التجارية نحو المستقبل من خلال التميز التقني والتصميم العميق.",
        cta: "تحدث مع متخصص",
        ctaSecondary: "عرض دراسات الحالة",
        scrollDown: "اكتشف التحول",
      },
      // Narrative Section
      narrative: {
        missionTitle: "جاذبية الابتكار",
        missionText: "في مشهد رقمي مليء بالضجيج، نحن نصنع الإشارة. مهمتنا هي القضاء على الاحتكاك بين التكنولوجيا المعقدة والتجربة البشرية، وتقديم نتائج ليست وظيفية فحسب، بل تحويلية.",
        processTitle: "سير عملنا الديناميكي",
        impactTitle: "تأثير عالمي، يقاس بالنجاح",
        outcomesTitle: "تأثير حقيقي، مقاس.",
        outcomesText: "تحويل الأفكار إلى قوى رقمية مع نمو ملموس وجماليات فاخرة.",
      },
      // About Section
      about: {
        title: "عن DigiDevBrand",
        subtitle: "شريكك في التميز الرقمي",
        description: "مع سنوات من الخبرة، ساعدنا مئات الشركات في تحويل حضورها الرقمي. يجمع فريقنا من الخبراء المبدعين بين الابتكار والاستراتيجية لتقديم نتائج مهمة.",
        mission: "مهمتنا",
        missionText: "تمكين الشركات في جميع أنحاء العالم بحلول رقمية متطورة تدفع النمو وتعزز رؤية العلامة التجارية وتخلق تأثيرًا دائمًا في المشهد الرقمي.",
        vision: "رؤيتنا",
        visionText: "أن نكون الرائد العالمي في التحول الرقمي، ووضع معايير جديدة للابتكار والإبداع ونجاح العملاء في كل مشروع نقوم به.",
        stats: {
          experts: "خبير مبدع",
          projects: "مشروع منجز",
          clients: "عميل راضٍ",
          awards: "جائزة صناعية",
        },
      },
      // Services
      services: {
        title: "خدماتنا",
        subtitle: "حلول رقمية شاملة",
        description: "من الفكرة إلى التنفيذ، نقدم خدمات رقمية متكاملة مصممة لتلبية احتياجات عملك الفريدة.",
        webDesign: {
          title: "تصميم وتطوير المواقع",
          description: "مواقع مخصصة ومتجاوبة تأسر الجماهير وتحول الزوار إلى عملاء.",
        },
        logo: {
          title: "تصميم الشعارات",
          description: "هويات علامة تجارية لا تُنسى تعبر عن قيمك وتتميز في السوق.",
        },
        graphics: {
          title: "الأعمال الرسومية",
          description: "محتوى بصري مذهل يروي قصتك ويشرك جمهورك.",
        },
        seo: {
          title: "تحسين محركات البحث",
          description: "استراتيجيات تحسين مبنية على البيانات تعزز ظهورك وحركة المرور العضوية.",
        },
        smm: {
          title: "التسويق عبر وسائل التواصل",
          description: "حملات استراتيجية تبني المجتمعات وتحقق تفاعلًا هادفًا.",
        },
        cyber: {
          title: "الأمن السيبراني",
          description: "حلول أمنية شاملة لحماية أصولك الرقمية وبيانات عملائك.",
        },
        content: {
          title: "التسويق بالمحتوى",
          description: "استراتيجيات محتوى مقنعة تؤسس القيادة الفكرية وتحقق التحويلات.",
        },
        smManagement: {
          title: "إدارة وسائل التواصل",
          description: "إدارة كاملة لوسائل التواصل الاجتماعي لتنمية حضورك على الإنترنت.",
        },
        smMaintenance: {
          title: "صيانة وسائل التواصل",
          description: "صيانة وتحسين مستمر لحضور علامة تجارية متسق.",
        },
        writing: {
          title: "كتابة المحتوى",
          description: "كتابة احترافية تتردد صداها مع جمهورك المستهدف.",
        },
        ecommerce: {
          title: "حلول التجارة الإلكترونية",
          description: "متاجر إلكترونية قوية تدفع المبيعات وتعزز تجربة العملاء.",
        },
        shopify: {
          title: "تطوير شوبيفاي",
          description: "إعداد وتخصيص خبير لمتاجر شوبيفاي لنجاح التجارة الإلكترونية.",
        },
      },
      // Testimonials
      testimonials: {
        title: "قصص نجاح العملاء",
        subtitle: "ماذا يقول عملاؤنا",
      },
      // Contact
      contact: {
        title: "لنعمل معًا",
        subtitle: "مستعد لتحويل عملك؟",
        description: "تواصل مع فريقنا لمناقشة مشروعك واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الرقمية.",
        name: "اسمك",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "رسالتك",
        send: "إرسال الرسالة",
        offices: {
          usa: {
            title: "مكتب الولايات المتحدة",
            address: "5900 Balcones Drive STE 100, Austin, TX 78731, USA",
          },
        },
      },
      // Review
      review: {
        title: "شارك تجربتك",
        subtitle: "رأيك يهمنا",
        description: "ساعدنا على التحسين وساعد الآخرين على اتخاذ قرارات مستنيرة من خلال مشاركة تجربتك في العمل معنا.",
        rating: "تقييمك",
        submit: "إرسال التقييم",
        thankYou: "شكرًا لتقييمك!",
      },
      // Footer
      footer: {
        description: "شريكك الموثوق للحلول الرقمية الشاملة. نساعد الشركات على النمو من خلال التصميم والتطوير واستراتيجيات التسويق المبتكرة.",
        quickLinks: "روابط سريعة",
        services: "الخدمات",
        contact: "اتصل بنا",
        newsletter: "النشرة الإخبارية",
        newsletterText: "اشترك للحصول على تحديثات حول أحدث مشاريعنا ورؤانا.",
        subscribe: "اشترك",
        copyright: "© 2024 DigiDevBrand LLC. جميع الحقوق محفوظة.",
      },
      // Common
      common: {
        learnMore: "اعرف المزيد",
        getStarted: "ابدأ الآن",
        viewAll: "عرض الكل",
        readMore: "اقرأ المزيد",
        loading: "جاري التحميل...",
      },
      // Blog
      blog: {
        title: "أحدث المقالات",
        subtitle: "من مدونتنا",
      },
      // Countries Marquee
      countries: {
        title: "نخدم العملاء بفخر حول العالم",
        usa: "الولايات المتحدة",
        canada: "كندا",
        uae: "الإمارات العربية المتحدة",
      },
      // Trust Badges
      trust: {
        title: "موثوق من قادة الصناعة",
        ssl: "محمي بـ SSL",
        privacy: "الخصوصية محمية",
        certified: "معتمد ISO",
        support: "دعم 24/7",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

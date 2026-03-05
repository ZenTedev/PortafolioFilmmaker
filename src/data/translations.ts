export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      showreel: "Showreel",
      about: "Sobre Mí",
      contact: "Contacto"
    },
    hero: {
      role: "Realizador Audiovisual & Editor",
      description: "Producción versátil de video para marcas modernas.",
      cta_projects: "Ver Trabajos",
      cta_contact: "Trabajemos Juntos"
    },
    showreel: {
      title: "Demostración de Trabajos",
      videos: {
        1: { title: "Showreel Principal 2024", desc: "Una selección de los mejores trabajos realizados durante el último año." },
        2: { title: "Comercial de Verano", desc: "Producción audiovisual para campaña de temporada." },
        3: { title: "Documental Corporativo", desc: "Historia de éxito y valores institucionales." },
        4: { title: "Video de Producto Tech", desc: "Lanzamiento de nueva línea de dispositivos." },
        5: { title: "Evento Internacional", desc: "Cobertura completa y aftermovie de gran escala." }
      }
    },
    projects: {
      title: "Trabajos Destacados",
      categories: {
        all: "Todos",
        commercial: "Comercial",
        corporate: "Corporativo",
        social: "Redes Sociales",
        events: "Eventos"
      },
      items: {
        1: { title: "Lanzamiento de Marca Tecnológica" },
        2: { title: "Película de Identidad Corporativa" },
        3: { title: "Campaña de Instagram" },
        4: { title: "Evento de Lanzamiento de Producto" },
        5: { title: "Campaña de Marca de Moda" },
        6: { title: "Video de Valores Corporativos" }
      }
    },
    brands: {
      title: "Con la confianza de marcas líderes"
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones de video integrales para marcas que exigen excelencia",
      items: {
        1: { title: "Producción de Video", desc: "Servicios de producción integrales desde desarrollo de concepto hasta entrega final, adaptados para narrativa de marca e impacto comercial." },
        2: { title: "Edición", desc: "Postproducción profesional con atención al ritmo, gradación de color y diseño de sonido que eleva tu contenido y cautiva audiencias." },
        3: { title: "Dirección Creativa", desc: "Conceptos visuales estratégicos alineados con tu identidad de marca y objetivos de marketing, garantizando consistencia en todos los puntos de contacto." },
        4: { title: "Contenido para Redes Sociales", desc: "Contenido de video optimizado para plataforma diseñado para máximo engagement, desde reels cortos hasta campañas sociales completas." }
      }
    },
    about: {
      title: "Acerca de Mí",
      p1: "Soy un <span class=\"text-white font-semibold\">Realizador Audiovisual</span> capaz de ayudarte a llevar tu marca al siguiente nivel.",
      p2: "Lo cual me ha llevado a trabajar con <span class=\"text-blue-400 font-medium\">múltiples creadores y marcas</span>, logrando así cumplir con los requerimientos y la excelencia por la cual se me caracteriza.",
      p3: "",
      cta: "Creemos algo excepcional juntos."
    },
    creators: {
      title_prefix: "He",
      title_accent: "Trabajado",
      title_suffix: "Con"
    },
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Tienes un proyecto en mente? Hablemos.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Hubo un error al enviar el mensaje."
      },
      social: "Sígueme"
    }
  },
  en: {
    nav: {
      projects: "Projects",
      showreel: "Showreels",
      about: "About",
      contact: "Contact"
    },
    hero: {
      role: "Filmmaker & Editor",
      description: "Versatile video production for modern brands.",
      cta_projects: "View Work",
      cta_contact: "Let's Work Together"
    },
    showreel: {
      title: "Showreels",
      videos: {
        1: { title: "Main Showreel 2024", desc: "A selection of the best work produced over the last year." },
        2: { title: "Summer Commercial", desc: "Audiovisual production for seasonal campaign." },
        3: { title: "Corporate Documentary", desc: "Success story and institutional values." },
        4: { title: "Tech Product Video", desc: "Launch of a new line of devices." },
        5: { title: "International Event", desc: "Full coverage and large-scale aftermovie." }
      }
    },
    projects: {
      title: "Featured Work",
      categories: {
        all: "All",
        commercial: "Commercial",
        corporate: "Corporate",
        social: "Social Media",
        events: "Events"
      },
      items: {
        1: { title: "Tech Brand Launch" },
        2: { title: "Corporate Identity Film" },
        3: { title: "Instagram Campaign" },
        4: { title: "Product Launch Event" },
        5: { title: "Fashion Brand Campaign" },
        6: { title: "Corporate Values Video" }
      }
    },
    brands: {
      title: "Trusted by leading brands"
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive video solutions for brands that demand excellence",
      items: {
        1: { title: "Video Production", desc: "End-to-end production services from concept development to final delivery, tailored for brand storytelling and commercial impact." },
        2: { title: "Editing", desc: "Professional post-production with attention to pacing, color grading, and sound design that elevates your content and captivates audiences." },
        3: { title: "Creative Direction", desc: "Strategic visual concepts aligned with your brand identity and marketing goals, ensuring consistency across all touchpoints." },
        4: { title: "Social Media Content", desc: "Platform-optimized video content designed for maximum engagement, from short reels to full social campaigns." }
      }
    },
    about: {
      title: "About Me",
      p1: "I am a <span class=\"text-white font-semibold\">Filmmaker</span> capable of helping you take your brand to the next level.",
      p2: "This has led me to work with <span class=\"text-blue-400 font-medium\">multiple creators and brands</span>, consistently meeting requirements with the excellence I am known for.",
      p3: "",
      cta: "Let's create something exceptional together."
    },
    creators: {
      title_prefix: "I",
      title_accent: "Worked",
      title_suffix: "With"
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's talk.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "There was an error sending the message."
      },
      social: "Follow Me"
    }
  }
};

export type Language = 'es' | 'en';
export type TranslationState = typeof translations.es;

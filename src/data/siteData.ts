export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string[];
  image: string;
  benefits: string[];
  features: string[];
  indicadoPara: string[];
  pricing: { title: string; price: string; period?: string; details: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export const SITE_INFO = {
  name: "Fisiolaude",
  legalName: "Laude Fisioterapia y Pilates Palma",
  tagline: "Expertos en Fisioterapia y Pilates en Palma de Mallorca",
  description: "Centro especializado en fisioterapia avanzada, rehabilitación de lesiones, pilates con máquinas (Reformer) y pilates suelo en Palma de Mallorca. Tratamientos personalizados.",
  phone: "+34 622 313 254",
  phoneClean: "+34622313254",
  email: "info@fisiolaude.com",
  address: {
    street: "Carrer de Rocinante, 22",
    neighborhood: "Son Ferriol",
    city: "Palma",
    region: "Illes Balears",
    postalCode: "07198",
    country: "ES"
  },
  geo: {
    latitude: 39.5753,
    longitude: 2.7092
  },
  openingHours: [
    { days: "Lunes a Viernes", hours: "08:00 - 21:00" },
    { days: "Sábados", hours: "09:00 - 14:00" },
    { days: "Domingos", hours: "Cerrado" }
  ],
  whatsappUrl: "https://wa.me/34622313254?text=Hola%20Fisiolaude,%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20cita",
  gtmId: "GT-K4CTR5BQ", // Google Tag ID existente
  social: {
    instagram: "https://instagram.com/fisiolaude",
    facebook: "https://facebook.com/fisiolaude"
  }
};

export const NAVIGATION_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Servicios",
    href: "/servicios",
    sublinks: [
      { name: "Fisioterapia", href: "/servicios/fisioterapia", desc: "Rehabilitación y terapia manual avanzada" },
      { name: "Pilates Máquinas", href: "/servicios/pilates-maquinas", desc: "Entrenamiento guiado con Reformer" },
      { name: "Pilates Suelo", href: "/servicios/pilates-suelo", desc: "Control postural, fuerza y movilidad" }
    ]
  },
  { name: "Tarifas", href: "/tarifas" },
  { name: "Blog", href: "/noticias" },
  { name: "Contacto", href: "/contacto" }
];

export const SERVICES_DATA: Record<string, Service> = {
  fisioterapia: {
    id: "fisioterapia",
    slug: "fisioterapia",
    title: "Fisioterapia y Rehabilitación en Palma",
    subtitle: "Tu recuperación empieza aquí. Sé protagonista de tu cambio físico y bienestar.",
    shortDesc: "Tratamientos personalizados de fisioterapia clínica, terapia manual, punción seca y readaptación funcional de lesiones en Son Ferriol, Palma.",
    fullDesc: [
      "En Fisiolaude entendemos la fisioterapia como un proceso activo donde no solo aliviamos tu síntoma, sino que buscamos el origen real del problema para evitar recaídas.",
      "Combinamos las técnicas de terapia manual más contrastadas con ejercicio terapéutico específico para restaurar la función completa de tu musculatura y articulaciones.",
      "Cada sesión es individual y de atención exclusiva 1 a 1 con fisioterapeutas colegiados."
    ],
    image: "/images/fisio.jpg",
    benefits: [
      "Evaluación exhaustiva de postura y movilidad en la 1ª sesión",
      "Alivio del dolor agudo y crónico (cervicalgia, lumbalgia, tendinitis)",
      "Recuperación post-quirúrgica y lesiones deportivas",
      "Planes de ejercicio adaptados a tu ritmo de vida diario"
    ],
    features: [
      "Terapia Manual Ortopédica",
      "Punción Seca para puntos gatillo miofasciales",
      "Ejercicio Terapéutico Guiado",
      "Vendaje Neuromuscular / Kinesiotape"
    ],
    indicadoPara: [
      "Dolor de espalda (lumbalgias, ciáticas, hernias discales)",
      "Dolor cervical, cefaleas tensionales y bruxismo",
      "Lesiones deportivas (esguinces, roturas fibrilares, meniscopatías)",
      "Sobrecargas musculares y rehabilitación tras inmovilizaciones"
    ],
    pricing: [
      { title: "Sesión Individual de Fisioterapia", price: "45€", period: "sesión", details: "Sesión completa de 50-60 min. Tratamiento manual y pautas de ejercicio." },
      { title: "Bono 4 Sesiones", price: "170€", period: "bono", details: "Ahorro de 10€. Ideal para tratamientos agudos o seguimientos a corto plazo." },
      { title: "Bono 8 Sesiones", price: "336€", period: "bono", details: "Mejor precio por sesión (42€/sesión). Tratamientos integrales y mantenimiento." }
    ],
    faqs: [
      {
        question: "¿Cuánto dura una sesión de fisioterapia?",
        answer: "Normalmente, entre 45 y 60 minutos, dependiendo de la técnica y la valoración inicial."
      },
      {
        question: "¿Cuántas sesiones necesito para notar mejoría?",
        answer: "Varía según cada persona y el tipo de lesión. Algunas personas notan alivio en 1-2 sesiones, mientras que otras necesitan un plan más prolongado (4-6 sesiones o más). Hacemos una valoración inicial para estimar el número de sesiones y te decimos, en caso necesario, que bono te sale más rentable."
      },
      {
        question: "¿Cuánto tiempo tengo para usar un bono de fisioterapia? ¿Se puede compartir?",
        answer: "El bono tanto de 5 como de 10 sesiones tienes 9 meses para poder disfrutarlo. Están pensados para programas de fisioterapia que requieran más de una sesión y un seguimiento supervisado por el fisioterapeuta. Pero también para aquellos que debido a su trabajo, deporte necesiten venir con más frecuencia a fisioterapia. También es posible compartir el bono con un familiar u amigo."
      },
      {
        question: "¿La fisioterapia duele?",
        answer: "No siempre. Es decir se puede utilizar tanto técnicas de terapia manual, invasiva y ejercicio terapéutico. Puede haber cierta molestias en algún momento del tratamiento, pero no buscamos “dolor” para curar. Por tanto es una falsa creencia el “cuanto más duela, más cura”."
      },
      {
        question: "¿Aceptáis seguros médicos?",
        answer: "No trabajamos con seguros. Pero si es necesario podemos hacerte justificante o informe sobre tu caso clínico e indicar el número de sesiones requeridas para tu dolencia."
      },
      {
        question: "¿Hacéis sesiones de fisioterapia a domicilio?",
        answer: "De momento, no hacemos ese servicio. Pero contamos con un espacio amplio de fácil acceso y adaptado según la normativa como centro sanitario."
      }
    ]
  },
  "pilates-maquinas": {
    id: "pilates-maquinas",
    slug: "pilates-maquinas",
    title: "Pilates con Máquinas (Reformer) en Palma",
    subtitle: "Fuerza inteligente, alineación precisa y máximo control con equipamiento profesional.",
    shortDesc: "Clases de Pilates con Reformer en grupos reducidos de máximo 4 personas o sesiones privadas en Son Ferriol, Palma de Mallorca.",
    fullDesc: [
      "El trabajo en máquinas de Pilates como el Reformer utiliza muelles de resistencia progresiva que asisten o desafían el movimiento, permitiendo un trabajo muscular profundo sin impacto articular.",
      "Especialmente recomendado para personas que quieren tonificar, mejorar problemas de columna o recuperar fuerza tras una lesión con la máxima seguridad y control asistido.",
      "Nuestros grupos son muy reducidos para asegurar corrección postural constante en cada repetición."
    ],
    image: "/images/pilates_maquinas-min.jpg",
    benefits: [
      "Alineación corporal milimétrica y fortalecimiento del Core profundo",
      "Cero impacto para rodillas, caderas y columna vertebral",
      "Incremento notable de flexibilidad y elasticidad muscular",
      "Grupos reducidos con supervisión técnica continua"
    ],
    features: [
      "Máquinas Reformer profesionales de alta gama",
      "Entrenamiento adaptado a diferentes niveles de condición física",
      "Supervisión directa por profesionales de fisioterapia y movimiento",
      "Ambiente tranquilo, luminoso y enfocado en la concentración"
    ],
    indicadoPara: [
      "Personas con dolores recurrentes de espalda o problemas discales",
      "Deportistas que buscan compensar desequilibrios musculares",
      "Personas sedentarias que desean retomar actividad física segura",
      "Etapa posparto para recuperación del suelo pélvico y faja abdominal"
    ],
    pricing: [
      { title: "1 Clase / semana (Máquinas)", price: "55€", period: "mes", details: "4 clases al mes en grupo reducido. Ideal para iniciarse o mantenimiento." },
      { title: "2 Clases / semana (Máquinas)", price: "105€", period: "mes", details: "8 clases al mes. La frecuencia recomendada para progresos visibles y continuos." },
      { title: "3 Clases / semana (Máquinas)", price: "158€", period: "mes", details: "12 clases al mes. Transformación física completa y máximo beneficio funcional." }
    ],
    faqs: [
      {
        question: "¿Si nunca he hecho pilates y tengo dolor o alguna limitación, es seguro hacer pilates?",
        answer: "No te preocupes, en LAUDE contamos con años de experiencia guiando a personas con dolor y viendo como mejoran gracias a la supervisión y adaptación de los ejercicios. No te imagines un pilates de posturas extrañas y que solo las puedan hacer gimnastas. Nos basamos en un pilates funcional, basándose en ejercicio terapéutico y con elementos de fuerza, son ejercicios aptos para toda clase de edad, y adaptables a tu nivel."
      },
      {
        question: "¿Puedo hacer pilates si estoy embarazada?",
        answer: "Sí. Siempre que no haya alguna contraindicación médica. En según qué fase del embarazo se recomendará seguir con las clases pero de manera individual o en grupos con la misma condición, para garantizar tu seguridad y la de tu bebé."
      },
      {
        question: "¿Por qué son necesarias las iniciaciones de pilates individuales?",
        answer: "Las iniciaciones de pilates sirven para sacar la máxima información necesaria al fisioterapeuta que te va a guiar en la clase grupal, saber tu patrón de movimiento, historial de lesiones o intervenciones de trauma, enfermedades metabólicas y posibles limitaciones del movimiento. Y sobre todo si nunca has hecho pilates, aprenderás los conceptos clave para realizarlo con máxima seguridad y rendimiento."
      },
      {
        question: "¿Cuántas iniciaciones necesito hacer antes de meterme en grupo?",
        answer: "Esto variará según cada persona. Si no tienes dolor y asimilas rápido los conceptos, con 1 o 2 sesiones es más que suficiente. En cambio si vienes con dolor o alguna limitación, valoraremos si tu dolencia requiere antes sesiones individualizadas de fisioterapia o clases privadas."
      },
      {
        question: "¿Si tengo dudas sobre si empezar con pilates suelo o máquinas, o simplemente quiero probar una clase?",
        answer: "Para estos casos damos la posibilidad de probar una clase suelta con el precio reducido a 15€. Solo se puede hacer una prueba tanto de pilates suelo como de máquinas."
      }
    ]
  },
  "pilates-suelo": {
    id: "pilates-suelo",
    slug: "pilates-suelo",
    title: "Pilates Suelo (Mat) en Palma de Mallorca",
    subtitle: "Conecta con tu cuerpo, gana estabilidad y mejora tu postura desde la base.",
    shortDesc: "Sesiones guiadas de Mat Pilates donde aprendes a dominar tu propio peso corporal, mejorar la movilidad articular y tonificar la musculatura profunda.",
    fullDesc: [
      "El Pilates en suelo trabaja la fuerza y estabilidad del centro anatómico mediante ejercicios coordinados con la respiración consciente y accesorios de soporte (aros mágicos, bandas elásticas, fitballs y rulos).",
      "Te enseñamos a tomar consciencia de tu postura para trasladar esos buenos hábitos a tu vida diaria y laboral, reduciendo tensiones y fatiga postural."
    ],
    image: "/images/pilates_suelo-min.jpg",
    benefits: [
      "Mejora inmediata de la postura y reducción de tensión cervical/dorsal",
      "Fortalecimiento del abdomen, glúteos y musculatura estabilizadora",
      "Mayor movilidad en articulaciones y alivio de rigidez matutina",
      "Técnicas de respiración que reducen el estrés y la ansiedad"
    ],
    features: [
      "Accesorios profesionales (Magic Circles, Foam Rollers, Bandas)",
      "Corrección biomecánica constante",
      "Enfoque clínico y preventivo de lesiones",
      "Atención cercana en grupos amables y dinámicos"
    ],
    indicadoPara: [
      "Trabajadores de oficina con dolor por horas sentados",
      "Personas que buscan tonificar sin cargar las articulaciones",
      "Mejora de flexibilidad general y equilibrio corporal",
      "Mantenimiento preventivo tras el alta de fisioterapia"
    ],
    pricing: [
      { title: "1 Clase / semana (Suelo)", price: "45€", period: "mes", details: "4 clases al mes en colchoneta con accesorios. Constancia y equilibrio." },
      { title: "2 Clases / semana (Suelo)", price: "85€", period: "mes", details: "8 clases al mes. El ritmo ideal para consolidar fuerza y flexibilidad." },
      { title: "3 Clases / semana (Suelo)", price: "128€", period: "mes", details: "12 clases al mes. Máximo rendimiento y dinamismo físico." }
    ],
    faqs: [
      {
        question: "¿Si nunca he hecho pilates y tengo dolor o alguna limitación, es seguro hacer pilates?",
        answer: "No te preocupes, en LAUDE contamos con años de experiencia guiando a personas con dolor y viendo como mejoran gracias a la supervisión y adaptación de los ejercicios. No te imagines un pilates de posturas extrañas y que solo las puedan hacer gimnastas. Nos basamos en un pilates funcional, basándose en ejercicio terapéutico y con elementos de fuerza, son ejercicios aptos para toda clase de edad, y adaptables a tu nivel."
      },
      {
        question: "¿Puedo hacer pilates si estoy embarazada?",
        answer: "Sí. Siempre que no haya alguna contraindicación médica. En según qué fase del embarazo se recomendará seguir con las clases pero de manera individual o en grupos con la misma condición, para garantizar tu seguridad y la de tu bebé."
      },
      {
        question: "¿Por qué son necesarias las iniciaciones de pilates individuales?",
        answer: "Las iniciaciones de pilates sirven para sacar la máxima información necesaria al fisioterapeuta que te va a guiar en la clase grupal, saber tu patrón de movimiento, historial de lesiones o intervenciones de trauma, enfermedades metabólicas y posibles limitaciones del movimiento. Y sobre todo si nunca has hecho pilates, aprenderás los conceptos clave para realizarlo con máxima seguridad y rendimiento."
      },
      {
        question: "¿Cuántas iniciaciones necesito hacer antes de meterme en grupo?",
        answer: "Esto variará según cada persona. Si no tienes dolor y asimilas rápido los conceptos, con 1 o 2 sesiones es más que suficiente. En cambio si vienes con dolor o alguna limitación, valoraremos si tu dolencia requiere antes sesiones individualizadas de fisioterapia o clases privadas."
      },
      {
        question: "¿Si tengo dudas sobre si empezar con pilates suelo o máquinas, o simplemente quiero probar una clase?",
        answer: "Para estos casos damos la posibilidad de probar una clase suelta con el precio reducido a 15€. Solo se puede hacer una prueba tanto de pilates suelo como de máquinas."
      }
    ]
  }
};

export const TARIFAS_DATA = {
  fisioterapia: [
    { title: "Sesión Individual de Fisioterapia", price: "45€", unit: "/ sesión", desc: "Tratamiento 1 a 1 de 50-60 min. Terapia manual, punción seca y ejercicio guiado.", popular: false },
    { title: "Bono 4 Sesiones Fisioterapia", price: "170€", unit: "/ bono (42,50€/sesión)", desc: "Ahorro de 10€. Ideal para rehabilitación de lesiones agudas o postoperatorios.", popular: true },
    { title: "Bono 8 Sesiones Fisioterapia", price: "336€", unit: "/ bono (42€/sesión)", desc: "Ahorro de 24€. La mejor tarifa por sesión para procesos completos o prevención continua.", popular: false }
  ],
  pilatesMaquinas: [
    { title: "1 Clase semanal (Reformer)", price: "55€", unit: "/ mes", desc: "4 clases al mes en grupos muy reducidos (máx. 3-4 personas).", popular: false },
    { title: "2 Clases semanales (Reformer)", price: "105€", unit: "/ mes", desc: "8 clases al mes. Nuestra opción más popular para notar cambios rápidos y sólidos.", popular: true },
    { title: "3 Clases semanales (Reformer)", price: "158€", unit: "/ mes", desc: "12 clases al mes. Para practicantes habituales y mejora deportiva integral.", popular: false }
  ],
  pilatesSuelo: [
    { title: "1 Clase semanal (Mat)", price: "45€", unit: "/ mes", desc: "4 clases al mes con accesorios (aros, foam roller, bandas elásticas).", popular: false },
    { title: "2 Clases semanales (Mat)", price: "85€", unit: "/ mes", desc: "8 clases al mes. Dosificación equilibrada para fuerza y movilidad postural.", popular: true },
    { title: "3 Clases semanales (Mat)", price: "128€", unit: "/ mes", desc: "12 clases al mes. Práctica regular y completa.", popular: false }
  ],
  combinados: [
    { title: "Combinado 1 Máquina + 1 Suelo", price: "90€", unit: "/ mes", desc: "2 clases a la semana combinando la precisión del Reformer con la agilidad del Mat.", popular: true },
    { title: "Combinado 2 Máquinas + 1 Suelo", price: "135€", unit: "/ mes", desc: "3 clases a la semana para un desarrollo funcional completo del cuerpo.", popular: false },
    { title: "Combinado 1 Máquina + 2 Suelo", price: "125€", unit: "/ mes", desc: "3 clases a la semana potenciando la técnica de Reformer y la fluidez del suelo.", popular: false }
  ]
};

export const BLOG_POSTS: Post[] = [
  {
    id: "cuando-debo-ir-al-fisio",
    slug: "cuando-debo-ir-al-fisio",
    title: "¿Cuándo debo ir al fisio? Señales clave para no esperar a que duela más",
    excerpt: "Muchas personas creen que solo deben acudir a fisioterapia ante dolores incapacitantes. Aprende a reconocer las alarmas de tu cuerpo y los beneficios de la prevención.",
    date: "2025-10-09",
    author: "Equipo Fisiolaude",
    category: "Fisioterapia",
    readTime: "4 min",
    image: "/images/fisio_s-min.jpg",
    content: [
      "Uno de los errores más comunes en la salud musculoesquelética es normalizar la molestia. Solemos pensar: 'ya se me pasará' o 'es solo cansancio'. Sin embargo, una pequeña contractura o una molestia recurrente suele ser el cuerpo avisando de un desequilibrio mecánico.",
      "¿Cuándo es imperativo pedir cita?",
      "1. Dolor que persiste más de 48-72 horas: Si una molestia en el cuello, espalda o rodilla no remite con reposo relativo, requiere diagnóstico profesional.",
      "2. Pérdida de movilidad o rigidez al levantarte: Si notas que te cuesta girar el cuello para conducir o agacharte para atarte los zapatos, tus tejidos están perdiendo elasticidad y deslizamiento.",
      "3. Sensaciones de hormigueo o adormecimiento: Si el dolor viaja por el brazo o baja hacia la pierna, puede haber compromiso neural (como ciática o atrapamiento discal).",
      "4. Prevención en épocas de carga deportiva o laboral: Acudir periódicamente al fisioterapeuta ayuda a descargar cadenas musculares antes de que se produzca una rotura o lesión crónica."
    ]
  },
  {
    id: "es-pilates-para-mi",
    slug: "es-pilates-para-mi",
    title: "¿Es Pilates para mí? Descubre si te conviene más suelo o máquinas",
    excerpt: "Si tienes dudas sobre si el método Pilates encaja contigo, tu edad o tu condición física actual, te explicamos cómo se adapta y qué esperar de tu primera sesión.",
    date: "2025-10-09",
    author: "Equipo Fisiolaude",
    category: "Pilates",
    readTime: "5 min",
    image: "/images/pilates_maquinas-min.jpg",
    content: [
      "El método Pilates no es una disciplina reservada a bailarines o gimnastas; de hecho, fue creado por Joseph Pilates como un sistema de rehabilitación y control postural ('Contrología') para cualquier persona.",
      "¿Tienes dolor de espalda recurrente?",
      "El fortalecimiento del 'Powerhouse' (el centro integrado por transverso del abdomen, multífidos lumbares, diafragma y suelo pélvico) crea un auténtico corsé natural que descarga las vértebras lumbares.",
      "¿Máquinas o suelo?",
      "Para principiantes con patología o personas que requieren asistencia, el Pilates con máquinas (Reformer) es extraordinario porque los muelles sostienen parte del peso y guían el recorrido. Para personas que buscan dominar su propio cuerpo y una práctica más dinámica, el suelo es el complemento idóneo."
    ]
  },
  {
    id: "dolor-lumbar-causas-senales-y-como-aliviarlo-rapido",
    slug: "dolor-lumbar-causas-senales-y-como-aliviarlo-rapido",
    title: "¿Dolor lumbar? Causas frecuentes, señales de alerta y cómo aliviarlo",
    excerpt: "El 80% de la población sufrirá dolor lumbar en algún momento. Conoce qué lo desencadena, por qué el reposo absoluto en cama es perjudicial y cómo volver a moverte sin miedo.",
    date: "2025-10-09",
    author: "Equipo Fisiolaude",
    category: "Fisioterapia",
    readTime: "6 min",
    image: "/images/fisioterapeuta-realizando-masaje-terapeutico-en-cliente-masculino-min-scaled.jpg",
    content: [
      "El dolor lumbar es la causa número uno de incapacidad laboral en el mundo. La gran mayoría de los casos corresponden a dolor lumbar inespecífico, vinculado a sedentarismo, posturas mantenidas, estrés y debilidad de la musculatura estabilizadora profunda.",
      "El gran mito del reposo absoluto:",
      "La evidencia científica actual es rotunda: quedarse en la cama más de 24 horas empeora el pronóstico del dolor lumbar. El movimiento suave y dosificado estimula la circulación, oxigena los discos intervertebrales y modula las señales de dolor en el sistema nervioso.",
      "En Fisiolaude combinamos terapia manual para descontracturar y aliviar la fase aguda con ejercicios de control motor para que recuperes la confianza en tu espalda."
    ]
  },
  {
    id: "fascitis-plantar-como-evitarla-y-tratarla",
    slug: "fascitis-plantar-como-evitarla-y-tratarla",
    title: "Fascitis Plantar: Cómo evitarla, señales típicas y tratamientos efectivos",
    excerpt: "Ese pinchazo agudo en el talón al dar el primer paso de la mañana es la señal clásica de la fascitis plantar. Te contamos cómo tratarla eficazmente.",
    date: "2025-10-09",
    author: "Equipo Fisiolaude",
    category: "Fisioterapia",
    readTime: "5 min",
    image: "/images/fascitis-plantar-fisiosan-blog.jpg",
    content: [
      "La fascia plantar es una banda gruesa de tejido conectivo que sostiene el arco del pie. Cuando se somete a sobrecargas repetitivas (cambios bruscos de calzado, aumento rápido de kilómetros corriendo, o pasar muchas horas de pie en superficies duras), se microdesgarra e inflama.",
      "El síntoma del 'primer paso':",
      "Durante la noche, la fascia cicatriza acortada. Al apoyar el pie por la mañana, se estira bruscamente causando un dolor punzante en la base del talón que suele ceder levemente al calentar el pie, pero vuelve al final del día.",
      "Tratamiento fisioterapéutico:",
      "La terapia manual en la fascia, la liberación de la musculatura del tríceps sural (gemelos y sóleo), el estiramiento específico del tendón de Aquiles y el fortalecimiento intrínseco del pie ('short foot exercise') son los pilares para eliminarla sin recidivas."
    ]
  },
  {
    id: "lesiones-deportivas-en-verano-las-mas-comunes-y-cuando-ir-al-fisio",
    slug: "lesiones-deportivas-en-verano-las-mas-comunes-y-cuando-ir-al-fisio",
    title: "Lesiones deportivas: las más comunes y pautas para una vuelta segura al deporte",
    excerpt: "El inicio de nuevas actividades o los cambios de intensidad pueden derivar en sobrecargas tendinosas o esguinces. Aprende a proteger tus articulaciones.",
    date: "2025-10-09",
    author: "Equipo Fisiolaude",
    category: "Readaptación",
    readTime: "4 min",
    image: "/images/pareja-estirando-en-la-playa-min-scaled.jpg",
    content: [
      "Las temporadas de descanso o el inicio entusiasta de nuevos deportes suelen provocar picos de lesiones como tendinopatías rotulianas, sobrecargas de hombro o esguinces de tobillo.",
      "La clave es la progresión de cargas. Un músculo no se lesiona por trabajar, sino por no estar preparado para la demanda a la que se le somete.",
      "Si sufres una torcedura o notas un pinchazo muscular, no esperes a que se cronifique: una pronta atención fisioterápica minimiza el tiempo de baja y previene secuelas biomecánicas."
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Marta R.",
    role: "Paciente de Fisioterapia",
    text: "Llegué con un dolor lumbar insoportable que llevaba meses arrastrando. Desde la primera sesión el trato fue impecable, explicándome qué me pasaba y dándome ejercicios que por fin han funcionado.",
    rating: 5,
    location: "Palma"
  },
  {
    name: "Carlos M.",
    role: "Alumno de Pilates Máquinas",
    text: "El estudio de Pilates Reformer es increíble. Grupos de 3 personas donde la atención es personalizada al 100%. He notado un cambio brutal en mi postura y en fuerza de core.",
    rating: 5,
    location: "Son Ferriol"
  },
  {
    name: "Elena V.",
    role: "Recuperación Postparto",
    text: "Buscaba un centro de confianza tras mi segundo parto. La combinación de valoración de suelo pélvico y las clases de suelo me devolvieron la estabilidad y la confianza en mi cuerpo.",
    rating: 5,
    location: "Palma de Mallorca"
  }
];

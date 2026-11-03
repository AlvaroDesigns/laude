export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  sections: LegalSection[];
};

export const LEGAL_DOCUMENTS: Record<"privacy" | "legalNotice" | "cookies", LegalDocument> = {
  privacy: {
    title: "Política de Privacidad",
    summary: "Información sobre el tratamiento de los datos personales facilitados a Laude a través de esta web.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          "El responsable del tratamiento es Laude Fisioterapia y Pilates Palma (en adelante, «Laude»), con centro en Carrer de Rocinante, 22, 07198 Son Ferriol, Palma, Illes Balears.",
          "Puedes contactar con Laude en info@fisiolaude.com o en el teléfono +34 622 313 254."
        ]
      },
      {
        heading: "2. Datos que tratamos",
        paragraphs: ["Tratamos únicamente los datos necesarios para atender tu solicitud o prestar el servicio solicitado."],
        items: [
          "Datos identificativos y de contacto que facilites al escribirnos o solicitar una cita: nombre, teléfono, correo electrónico y mensaje.",
          "Datos de navegación y preferencias de cookies, cuando los autorices, para conocer el uso de la web y mejorarla.",
          "La información sanitaria solo se tratará cuando sea necesaria para la asistencia solicitada y con las garantías reforzadas que exige la normativa aplicable."
        ]
      },
      {
        heading: "3. Finalidades y bases jurídicas",
        items: [
          "Atender consultas, solicitudes de información y peticiones de cita. La base jurídica es tu consentimiento y, cuando corresponda, la aplicación de medidas precontractuales solicitadas por ti.",
          "Gestionar la relación asistencial, administrativa y de facturación derivada de los servicios contratados. La base jurídica es la ejecución de la relación contractual y el cumplimiento de obligaciones legales.",
          "Mejorar el funcionamiento, la seguridad y los contenidos de la web mediante analítica no esencial, únicamente si la aceptas. La base jurídica es tu consentimiento."
        ]
      },
      {
        heading: "4. Destinatarios y transferencias",
        paragraphs: [
          "No vendemos ni cedemos tus datos a terceros. Podrán acceder a ellos proveedores que prestan servicios necesarios para el funcionamiento de la web o la gestión del centro, siempre bajo las garantías contractuales y de seguridad exigidas por la normativa.",
          "Cuando un proveedor trate datos fuera del Espacio Económico Europeo, se aplicarán las garantías adecuadas previstas por el RGPD."
        ]
      },
      {
        heading: "5. Plazo de conservación",
        paragraphs: [
          "Conservaremos los datos durante el tiempo necesario para atender la finalidad para la que fueron recogidos y, después, durante los plazos de prescripción de las responsabilidades legales aplicables. Los datos clínicos se conservarán durante el plazo exigido por la normativa sanitaria."
        ]
      },
      {
        heading: "6. Tus derechos",
        paragraphs: ["Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos. También puedes retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento previo."],
        items: [
          "Escríbenos a info@fisiolaude.com indicando el derecho que deseas ejercer.",
          "Podremos solicitarte información adicional para verificar tu identidad.",
          "Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos."
        ]
      },
      {
        heading: "7. Seguridad y cambios",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación.",
          "Esta política puede actualizarse para reflejar cambios normativos o en nuestros tratamientos. La versión vigente será la publicada en esta página."
        ]
      }
    ]
  },
  legalNotice: {
    title: "Aviso Legal",
    summary: "Condiciones de acceso y uso del sitio web fisiolaude.com.",
    sections: [
      {
        heading: "1. Titularidad del sitio web",
        paragraphs: [
          "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de que este sitio web es titularidad de Laude Fisioterapia y Pilates Palma, con domicilio profesional en Carrer de Rocinante, 22, 07198 Son Ferriol, Palma, Illes Balears.",
          "Contacto: info@fisiolaude.com · +34 622 313 254 · https://fisiolaude.com."
        ]
      },
      {
        heading: "2. Objeto y aceptación",
        paragraphs: [
          "Este sitio tiene por objeto informar sobre los servicios de fisioterapia, pilates y bienestar de Laude, así como facilitar el contacto y la solicitud de información o cita.",
          "El acceso y uso de la web atribuye la condición de usuario e implica la aceptación de este Aviso Legal, de la Política de Privacidad y de la Política de Cookies."
        ]
      },
      {
        heading: "3. Uso correcto del sitio",
        paragraphs: [
          "Te comprometes a utilizar la web de manera diligente, lícita y respetuosa con la legislación vigente, la buena fe y el orden público. Queda prohibido utilizarla para dañar, impedir o alterar su funcionamiento, o para vulnerar derechos de terceros."
        ]
      },
      {
        heading: "4. Propiedad intelectual e industrial",
        paragraphs: [
          "Los contenidos, diseños, imágenes, logotipos, textos, código y demás elementos de la web son titularidad de Laude o se utilizan con la autorización correspondiente. No se permite su reproducción, distribución, transformación o comunicación pública sin autorización previa y por escrito, salvo en los casos permitidos por la ley."
        ]
      },
      {
        heading: "5. Enlaces y responsabilidad",
        paragraphs: [
          "La web puede incluir enlaces a páginas de terceros. Laude no controla sus contenidos ni sus políticas y no asume responsabilidad por ellos.",
          "La información publicada tiene carácter informativo y no sustituye una valoración sanitaria profesional individualizada. Laude procurará que los contenidos sean exactos y estén actualizados, pero no garantiza la ausencia total de errores o interrupciones."
        ]
      },
      {
        heading: "6. Legislación aplicable",
        paragraphs: [
          "Este Aviso Legal se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable."
        ]
      }
    ]
  },
  cookies: {
    title: "Política de Cookies",
    summary: "Información sobre las cookies y cómo gestionar tus preferencias en fisiolaude.com.",
    sections: [
      {
        heading: "1. ¿Qué son las cookies?",
        paragraphs: [
          "Las cookies son pequeños archivos que se almacenan en tu dispositivo al navegar por una web. Sirven para que el sitio funcione, recordar determinadas preferencias y, cuando lo autorizas, obtener información estadística sobre su uso."
        ]
      },
      {
        heading: "2. Cookies que utilizamos",
        items: [
          "Técnicas o necesarias: permiten el funcionamiento básico de la web y guardar tu elección de consentimiento. No requieren consentimiento.",
          "Analíticas: nos ayudan a entender de forma agregada cómo se utiliza la web para mejorarla. Solo se activan si aceptas las cookies analíticas."
        ]
      },
      {
        heading: "3. Cookies de terceros",
        paragraphs: [
          "Si aceptas las cookies analíticas, podemos utilizar herramientas de medición de Google. Estas herramientas pueden tratar identificadores en los términos establecidos por sus propias políticas."
        ]
      },
      {
        heading: "4. Cómo gestionar tu consentimiento",
        paragraphs: [
          "Al entrar en la web puedes aceptar, rechazar o configurar las cookies no necesarias. Puedes cambiar tu elección en cualquier momento desde el botón de preferencias que aparece más abajo.",
          "También puedes eliminar o bloquear cookies desde la configuración de tu navegador. Ten en cuenta que desactivar las cookies necesarias puede afectar al funcionamiento de algunas partes de la web."
        ]
      },
      {
        heading: "5. Actualizaciones",
        paragraphs: [
          "Podemos actualizar esta política cuando cambien las cookies utilizadas o la normativa aplicable. Te recomendamos consultarla periódicamente."
        ]
      }
    ]
  }
};

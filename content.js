// Archivo de Contenido para la Presentación: Sesión B

const slideContent = [
  // Lámina 1: Portada
  {
    layout: 'layout-center-focus',
    title: '¡Bienvenidos a Consolida 360°!',
    subtitle: 'Juntos construimos tu ruta digital en acción.',
    image: {
      src: 'assets/images/slide-1.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Portada de Bienvenida a Consolida 360°'
    }
  },
  
  // Lámina 2: Nuestra Esencia (dos columnas, imagen a la izquierda)
  {
    layout: 'layout-two-columns',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle: 'Teorema, Metodología y Valor',
    image: {
      src: 'assets/images/slide-2.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Diagrama de la esencia de Mi Empresa Crece'
    }
  },

  // Lámina 3: Programa de Transformación
  {
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    subtitle: 'Los 3 Pilares de tu Consolidación',
    image: {
      src: 'assets/images/slide-3.png'
    }
  },

  // Lámina 4: Sus Guías
  {
    layout: 'layout-center-focus',
    title: 'Sus Guías en este Viaje',
    subtitle: 'Aliados en tu Estrategia',
        image: {
      src: 'assets/images/slide-4.png'
    }
  },

  // Lámina 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    subtitle: 'Fomentando la Responsabilidad y el Compromiso',
        image: {
      src: 'assets/images/slide-5.png'
    }
  },

  // Lámina 6: Objetivos de Hoy (dos columnas, imagen a la izquierda)
  {
    layout: 'layout-two-columns',
    title: 'Objetivos de Hoy: Tu Camino al Éxito',
    subtitle: 'De la Estrategia al Plan',
    image: {
      src: 'assets/images/slide-6.1.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Iconos representando los objetivos de la sesión'
    }
  },

  // Lámina 7: Mapa de Conceptos (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: 'El Mapa de Conceptos',
    subtitle: 'Anclas para tu Ecosistema de Ventas Digitales',
    image: {
      src: 'assets/images/slide-7.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Infografía del mapa de conceptos clave'
    }
  },

  // Lámina 8: Ecosistema de Ventas Digitales (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: '¿Qué es el Ecosistema de Ventas Digitales?',
    subtitle: 'La orquesta de canales que trabajan para ti',
    image: {
      src: 'assets/images/slide-8.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Diagrama del ecosistema de ventas digitales'
    }
  },
 
  // Lámina 9: Ruta de Implementación (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: 'Nuestra Ruta de Implementación',
    subtitle: 'El Flujo Consultivo para la acción',
    image: {
      src: 'assets/images/slide-9.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Diagrama de flujo de la ruta de implementación'
    }
  },

// --- SERIE DE EJERCICIOS (MODIFICADO) ---
  {
    layout: 'layout-center-focus',
    title: 'Plan de implementación',
    subtitle: 'Diagnosticando tu Ecosistema Digital',
    workbookLink: {
        url: '../workbook/index.html#diagnostico',
        text: 'Abrir Plan de Implementación'
    }
  },

  // Lámina 17: Conclusiones
  {
    layout: 'layout-center-focus',
    title: 'Conclusiones y Cierre Efectivo',
    subtitle: 'Menos es Más, Más Resultados',
        image: {
      src: 'assets/images/slide-17.png'
    }
  },
  
  // Lámina 18: Tareas
  {
    layout: 'layout-center-focus',
    title: 'Tareas Asignadas y Siguientes Pasos',
    subtitle: 'Tu compromiso con la acción',
        content: `
      <p>Asegura una implementación <strong>exitosa</strong>.</p>
      <ul>
        <li>Da seguimiento a las sesiones semanales con tus colaboradores.</li>
        <li>Configura tu ecosistema digital.</li>
        <li>No faltes a la próxima sesión.</li>
        <li>Programa tu reunión individual con el equipo de consultoría.</li>
      </ul>
    `, 
  },

  // Lámina 19: Contacto
  {
    layout: 'layout-center-focus',
    title: '¡No te quedes con dudas! Contáctanos para más información.',
    subtitle: 'Gracias por participar',
        image: {
      src: 'assets/images/slide-19.png'
    }
  }

  
];
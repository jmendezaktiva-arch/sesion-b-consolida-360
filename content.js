// Archivo de Contenido para la Presentación: Sesión B

const slideContent = [
  // Lámina 1: Portada
  {
    layout: 'layout-center-focus',
    title: '¡Bienvenidos a Consolidación 360°!',
    subtitle: 'Juntos construimos tu ruta digital en acción.',
    image: {
      src: 'assets/images/slide-1.png',
      alt: 'Portada de Bienvenida a Consolidación 360'
    }
  },
  
  // Lámina 2: Nuestra Esencia (dos columnas, imagen a la izquierda)
  {
    layout: 'layout-two-columns', // Layout actualizado para dos columnas
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle: 'Teorema, Metodología y Valor',
    image: {
      src: 'assets/images/Slide-2.png',
      alt: 'Diagrama de la esencia de Mi Empresa Crece'
    }
  },

  // Lámina 3: Programa de Transformación
  {
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    content: `<div class="icon-grid">
                <div class="icon-item"><i class="fas fa-users"></i><p>Equipo</p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-chart-line icon-highlight"></i><p><strong>Ventas</strong></p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-coins"></i><p>Inversión</p></div>
              </div>`
  },


  // Lámina 4: Sus Guías
  {
    layout: 'layout-split',
    title: 'Sus Guías en este Viaje',
    content: '<p><strong>Expertos dedicados a la implementación.</strong></p><div class="session-flow-text">Sesión Grupal &rarr; Implementación &rarr; Sesión Individual &rarr; Ajuste</div>',
    image: 'assets/images/slide-4.jpeg',
    image2: 'assets/images/slide-4.png'
  },

  // Lámina 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    content: `<p>Establecer un marco de Responsabilidad y compromiso. No son reglas, son los <strong>cimientos para construir juntos</strong>.</p>
              <ul class="infographic-list">
                <li><i class="fas fa-video"></i> <div><strong>Cámara encendida = Compromiso</strong><br>Estar presente y conectado con el grupo.</div></li>
                <li><i class="fas fa-microphone-lines"></i> <div><strong>Participación activa = Proactividad</strong><br>Tu aprendizaje depende de tu involucramiento.</div></li>
                <li><i class="fas fa-lightbulb"></i> <div><strong>Mente abierta = Crecimiento</strong><br>Dispuesto a desaprender y adoptar nuevos métodos.</div></li>
                <li><i class="fas fa-clock"></i> <div><strong>Puntualidad = Respeto</strong><br>Valoramos tu tiempo y el de los demás.</div></li>
              </ul>`
  },

  // Lámina 6: Objetivos de Hoy (dos columnas, imagen a la izquierda)
  {
    layout: 'layout-two-columns', // Layout actualizado para dos columnas
    title: 'Objetivos de Hoy: Tu Camino al Éxito',
    subtitle: 'De la Estrategia al Plan',
    image: {
      src: 'assets/images/slide-6.png',
      alt: 'Iconos representando los objetivos de la sesión'
    }
  },

  // Lámina 7: Mapa de Conceptos (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: 'El Mapa de Conceptos',
    subtitle: 'Anclas para tu Ecosistema de Ventas Digitales',
    image: {
      src: 'assets/images/slide-7.png',
      alt: 'Infografía del mapa de conceptos clave'
    }
  },

  // Lámina 8: Ecosistema de Ventas Digitales (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: '¿Qué es el Ecosistema de Ventas Digitales?',
    subtitle: 'La orquesta de canales que trabajan para ti',
    image: {
      src: 'assets/images/slide-8.png',
      alt: 'Diagrama del ecosistema de ventas digitales'
    }
  },
 
  // Lámina 9: Ruta de Implementación (centrado, imagen debajo)
  {
    layout: 'layout-center-focus',
    title: 'Nuestra Ruta de Implementación',
    subtitle: 'El Flujo Consultivo para la acción',
    image: {
      src: 'assets/images/slide-9.png',
      alt: 'Diagrama de flujo de la ruta de implementación'
    }
  },

  // --- SERIE DE EJERCICIOS ---
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 1: Tu Mapa de Foco Estratégico',
    subtitle: 'Diagnosticando tu Ecosistema Digital'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 2: La Ficha de Cliente Ideal',
    subtitle: 'Conectando con tu Mercado'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 3: Auditoría de Activos Digitales',
    subtitle: 'Plan de Optimización Inmediata'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 4: La Matriz de Priorización Inteligente',
    subtitle: 'Eligiendo tus Batallas'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 5: El Plan Maestro de Canal',
    subtitle: 'Tu Estrategia de Contenidos y Conversión'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 6: El Diseñador de Flujos de Captación',
    subtitle: 'Construyendo tu Motor de Leads'
  },
  {
    layout: 'layout-center-focus',
    title: 'Ejercicio 7: Mi Sprint de Implementación de 30 Días',
    subtitle: 'Del plan a los resultados'
  },

  // Lámina 17: Conclusiones
  {
    layout: 'layout-center-focus',
    title: 'Conclusiones y Cierre Efectivo',
    subtitle: 'Menos es Más, Más Resultados'
  },
  
  // Lámina 18: Tareas
  {
    layout: 'layout-center-focus',
    title: 'Tareas Asignadas y Siguientes Pasos',
    subtitle: 'Tu compromiso con la acción'
  },

  // Lámina 19: Contacto
  {
    layout: 'layout-center-focus',
    title: '¡No te quedes con dudas! Contáctanos para más información.',
    subtitle: 'Gracias por participar'
  }
];
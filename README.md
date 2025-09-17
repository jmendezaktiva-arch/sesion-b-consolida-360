# Presentación: Sesión B - Ecosistema Digital de Ventas

Este repositorio contiene el código fuente de la presentación web interactiva para la "Sesión B: Ecosistema Digital de Ventas". El proyecto está construido con Reveal.js y está diseñado para ser fácilmente actualizable y desplegable.

## ✨ Estructura del Proyecto

El proyecto está organizado de forma modular para separar el contenido de la estructura y la lógica, facilitando su mantenimiento.

/
|-- index.html          # Esqueleto principal de la presentación.
|-- content.js          # ¡IMPORTANTE! Aquí vive todo el texto de las diapositivas.
|-- /assets/
|   |-- /css/
|   |   |-- custom.css  # Estilos visuales personalizados.
|   |-- /js/
|   |   |-- main.js     # Lógica que construye las diapositivas dinámicamente.
|   |-- /images/
|       |-- (Imágenes de la presentación)
|-- README.md           # Este archivo.

## 🚀 Cómo Actualizar el Contenido

La principal ventaja de esta estructura es que no necesitas tocar el código HTML para cambiar los textos.

Para modificar cualquier título o subtítulo de las diapositivas, sigue estos pasos:

1.  Abre el archivo `content.js`.
2.  Busca la diapositiva que deseas editar dentro del array `slideContent`.
3.  Modifica los valores de las propiedades `title` o `subtitle`.
4.  Guarda el archivo.
5.  Sube los cambios a tu repositorio. Netlify detectará el cambio y actualizará la presentación automáticamente.
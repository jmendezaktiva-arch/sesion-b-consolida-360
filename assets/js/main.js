// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Reveal.js
    Reveal.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
    });

    const slidesContainer = document.querySelector('.slides');

    slideContent.forEach((slideData, index) => {
        const section = document.createElement('section');
        section.classList.add('slide-section'); // Clase para estilos generales si los hay

if (slideData.layout) {
    // Divide la cadena por espacios y añade cada clase por separado
    slideData.layout.split(' ').forEach(cls => section.classList.add(cls));
}

        // Título
        if (slideData.title) {
            const h2 = document.createElement('h2');
            h2.textContent = slideData.title;
            section.appendChild(h2);
        }

        // Subtítulo
        if (slideData.subtitle) {
            const p = document.createElement('p');
            p.textContent = slideData.subtitle;
            section.appendChild(p);
        }

                // Procesar contenido HTML directo si existe
        if (slideData.content) {
            const contentDiv = document.createElement('div');
            // Usamos innerHTML para que el navegador interprete las etiquetas HTML
            contentDiv.innerHTML = slideData.content; 
            section.appendChild(contentDiv);
        }
        // --- FIN DE LA CORRECCIÓN ---

        // **MODIFICACIÓN CLAVE AQUÍ PARA LA IMAGEN**
        if (slideData.image) {
            const img = document.createElement('img');
            // Si slideData.image es un string (URL directa), úsala.
            // Si es un objeto, accede a slideData.image.src.
            if (typeof slideData.image === 'string') {
                img.src = slideData.image;
                img.alt = `Imagen de la diapositiva ${index + 1}`; // Alt genérico si la URL es directa
            } else if (typeof slideData.image === 'object' && slideData.image.src) {
                img.src = slideData.image.src;
                img.alt = slideData.image.alt || `Imagen de la diapositiva ${index + 1}`;
            }
            
            // Añadir una clase para que puedas estilizar las imágenes si es necesario
            img.classList.add('slide-image'); 
            section.appendChild(img);
        }
        // **FIN DE LA MODIFICACIÓN CLAVE**

        // --- INICIO DE LA MODIFICACIÓN: AÑADIR BOTÓN AL WORKBOOK ---
        if (slideData.workbookLink && slideData.workbookLink.url) {
            const button = document.createElement('a');
            button.href = slideData.workbookLink.url;
            button.target = '_blank'; // Abre el cuaderno en una nueva pestaña
            button.rel = 'noopener noreferrer';
            button.className = 'workbook-button'; // Clase para darle estilos
            button.textContent = slideData.workbookLink.text || 'Abrir Cuaderno de Ejercicio';

            section.appendChild(button);
        }
        // --- FIN DE LA MODIFICACIÓN ---

        // Si hay una lista de puntos, agrégala (asumo que slideData.points podría existir)
        if (slideData.points && Array.isArray(slideData.points)) {
            const ul = document.createElement('ul');
            slideData.points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                ul.appendChild(li);
            });
            section.appendChild(ul);
        }

        slidesContainer.appendChild(section);
    });
});
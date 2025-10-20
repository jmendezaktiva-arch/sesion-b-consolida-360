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

// Lógica condicional para layouts
    if (slideData.layout && slideData.layout.includes('two-columns')) {
        // --- ESTRUCTURA PARA DOS COLUMNAS ---
        const wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';

        const textColumn = document.createElement('div');
        textColumn.className = 'column text-column';

        if (slideData.title) {
            const h2 = document.createElement('h2');
            h2.textContent = slideData.title;
            textColumn.appendChild(h2);
        }
        if (slideData.subtitle) {
            const p = document.createElement('p');
            p.textContent = slideData.subtitle;
            textColumn.appendChild(p);
        }
        wrapper.appendChild(textColumn);

        const imageColumn = document.createElement('div');
        imageColumn.className = 'column image-column';
        
        if (slideData.image && slideData.image.src) {
            const img = document.createElement('img');
            img.src = slideData.image.src;
            img.alt = slideData.image.alt || `Imagen de la diapositiva ${index + 1}`;
            img.classList.add('slide-image');
            imageColumn.appendChild(img);
        }
        wrapper.appendChild(imageColumn);
        section.appendChild(wrapper);

    } else {
        // --- ESTRUCTURA PREDETERMINADA (PLANA) PARA TODO LO DEMÁS ---
        if (slideData.title) {
            const h2 = document.createElement('h2');
            h2.textContent = slideData.title;
            section.appendChild(h2);
        }
        if (slideData.subtitle) {
            const p = document.createElement('p');
            p.textContent = slideData.subtitle;
            section.appendChild(p);
        }
        if (slideData.image && slideData.image.src) {
            const img = document.createElement('img');
            img.src = slideData.image.src;
            img.alt = slideData.image.alt || `Imagen de la diapositiva ${index + 1}`;
            img.classList.add('slide-image');
            section.appendChild(img);
        }
    }
    });
});
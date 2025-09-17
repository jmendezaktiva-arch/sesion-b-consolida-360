document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');

    slideContent.forEach(slideData => {
        const slide = document.createElement('section');
        slide.className = slideData.layout || 'layout-default';

        if (slideData.background) {
            // Comprueba si el fondo es una ruta de imagen (contiene .jpeg, .jpg, .png, .gif) o una URL
            if (slideData.background.includes('.jpeg') || slideData.background.includes('.jpg') || slideData.background.includes('.png') || slideData.background.startsWith('http')) {
                slide.setAttribute('data-background-image', slideData.background);
            } else {
                // Si no es una imagen, lo trata como un color
                slide.setAttribute('data-background-color', slideData.background);
            }
        }

        let innerHTML = '';
        let titleStyle = slideData.titleColor ? `style="color:${slideData.titleColor}"` : '';
        if (slideData.title) {
            innerHTML += `<h1 ${titleStyle}>${slideData.title}</h1>`;
        }
        if (slideData.subtitle) {
            innerHTML += `<h3>${slideData.subtitle}</h3>`;
        }

        // --- LÓGICA DE CONTENIDO MEJORADA ---
        let mainContent = slideData.content || '';
        let imageContent = '';

        if (slideData.layout === 'layout-split') {
            const textDiv = `<div>${mainContent}</div>`;
            let imageDiv = '<div>';
            if (slideData.image) {
                // Para la diapositiva de facilitadores, aplicamos una clase especial
                const imgClass = slideData.title === 'Sus Guías en este Viaje' ? 'facilitator-photo' : '';
                imageDiv += `<img src="${slideData.image}" alt="${slideData.title}" class="${imgClass}">`;
            }
            if (slideData.image2) {
                const imgClass = slideData.title === 'Sus Guías en este Viaje' ? 'facilitator-photo' : '';
                imageDiv += `<img src="${slideData.image2}" alt="${slideData.title}" class="${imgClass}">`;
            }
            imageDiv += '</div>';
            innerHTML += `<div class="content-wrapper">${textDiv}${imageDiv}</div>`;
        
        } else {
            innerHTML += mainContent;
            if (slideData.image) {
                imageContent = `<img src="${slideData.image}" alt="${slideData.title}">`;
                innerHTML += imageContent;
            }
        }
        
        slide.innerHTML = innerHTML;
        slidesContainer.appendChild(slide);
    });

    Reveal.initialize({
        hash: true,
        slideNumber: 'c/t',
        width: 1280,
        height: 720,
        margin: 0.04,
        plugins: [ RevealNotes ]
    });
});

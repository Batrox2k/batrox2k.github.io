document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title");

    // Événements pour faire disparaître et réapparaître le texte
    title.addEventListener("mouseenter", function() {
        this.style.opacity = 0; // Fait disparaître le texte
    });

    title.addEventListener("mouseleave", function() {
        this.style.opacity = 1; // Fait réapparaître le texte
    });

    // Code pour le diaporama (images)
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active'); // Cacher l'image actuelle
        currentSlide = (currentSlide + 1) % slides.length; // Passer à l'image suivante
        slides[currentSlide].classList.add('active'); // Afficher la nouvelle image
    }

    // Initialiser la première image
    slides[currentSlide].classList.add('active'); // Afficher la première image
    setInterval(showNextSlide, 1000); // Changer d'image toutes les 3 secondes
});
const cursor = document.getElementById('customCursor');

// Afficher le curseur personnalisé lors du mouvement de la souris
document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block'; // Montre le curseur personnalisé
    // Ajustement pour centrer le curseur
    cursor.style.left = `${e.clientX - 24}px`; // Soustraire la moitié de la largeur
    cursor.style.top = `${e.clientY - 24}px`; // Soustraire la moitié de la hauteur
});

// Cacher le curseur lorsqu'on sort de la fenêtre
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none'; // Cache le curseur
});

// Assurez-vous que le curseur reste visible sur les éléments interactifs
const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.display = 'block'; // Montre le curseur sur les éléments interactifs
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.display = 'block'; // Cache le curseur seulement sur les autres zones
    });
});

const introText = document.getElementById("introText");
const text = introText.innerHTML;
introText.setAttribute('data-text', text); // Crée un attribut pour le texte répété

document.querySelectorAll('.image-wrapper').forEach(block => {
    block.addEventListener('mouseover', function() {
        const previewUrl = this.getAttribute('data-preview-url');
        let previewOverlay = this.querySelector('.preview-overlay');

        // Crée l'overlay de prévisualisation s'il n'existe pas
        if (!previewOverlay) {
            previewOverlay = document.createElement('div');
            previewOverlay.classList.add('preview-overlay');
            
            const iframe = document.createElement('iframe');
            iframe.src = previewUrl;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            previewOverlay.appendChild(iframe);

            this.appendChild(previewOverlay);
        }
    });
});

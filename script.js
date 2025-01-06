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



document.querySelectorAll('.image-wrapper').forEach(block => {
    block.addEventListener('mouseover', function() {
        const carousel = this.querySelector('.carousel-container');
        // Commence le défilement des images
        carousel.style.animation = 'scroll-images 15s linear infinite';
    });

    block.addEventListener('mouseleave', function() {
        const carousel = this.querySelector('.carousel-container');
        // Arrête le défilement des images lorsque la souris quitte
        carousel.style.animation = 'none';
    });
});

// Fonction pour démarrer le défilement d'images dans chaque bloc
function startImageSlider(sliderId) {
    let currentIndex = 0;
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('.image-slide');

    function showNextImage() {
        // Masquer l'image actuelle
        images[currentIndex].style.display = "none"; // Cache l'image actuelle

        // Passer à l'image suivante
        currentIndex = (currentIndex + 1) % images.length;

        // Afficher la nouvelle image
        images[currentIndex].style.display = "block"; // Affiche la nouvelle image
    }

    // Afficher la première image
    images[currentIndex].style.display = "block";

    // Démarrer le défilement toutes les 3 secondes (3000 ms)
    setInterval(showNextImage, 1000);
}

// Démarrer le défilement pour chaque bloc
startImageSlider('block-editions');
startImageSlider('block-affiches');
startImageSlider('block-volumes');
startImageSlider('block-autres');





document.addEventListener('DOMContentLoaded', () => {
    // Récupérer tous les projets
    const projectItems = document.querySelectorAll('.project-item');
    
    // Variables pour gérer la fenêtre de prévisualisation
    const hoverPopup = document.getElementById('hover-popup');
    const hoverImage = document.getElementById('hover-image');

    projectItems.forEach(item => {
        const images = Array.from(item.querySelectorAll('.hidden-images img')); // Récupérer les images de ce projet
        let currentIndex = 0; // Index de l'image actuelle
        let imageInterval;

        item.addEventListener('mouseover', (e) => {
            // Afficher la fenêtre de prévisualisation à la position de la souris
            hoverPopup.style.display = 'block';
            hoverPopup.style.left = `${e.pageX + 10}px`;
            hoverPopup.style.top = `${e.pageY + 10}px`;

            // Fonction pour faire défiler les images
            function showNextImage() {
                hoverImage.style.opacity = 0; // Rendre l'image invisible
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % images.length; // Passer à l'image suivante
                    hoverImage.src = images[currentIndex].src; // Mettre à jour l'image dans la fenêtre flottante
                    hoverImage.style.opacity = 1; // Réafficher l'image
                }, 500); // Attendre que l'ancienne image disparaisse avant d'afficher la nouvelle

                // Définir l'intervalle pour le défilement des images
                imageInterval = setTimeout(showNextImage, 3000); // Changer d'image toutes les 3 secondes
            }

            // Lancer la fonction de défilement des images
            showNextImage();
        });

        // Déplacer la fenêtre flottante avec la souris
        item.addEventListener('mousemove', (e) => {
            hoverPopup.style.left = `${e.pageX + 10}px`;
            hoverPopup.style.top = `${e.pageY + 10}px`;
        });

        // Arrêter le défilement et cacher la fenêtre lorsqu'on quitte le projet
        item.addEventListener('mouseleave', () => {
            clearTimeout(imageInterval); // Arrêter le défilement
            hoverPopup.style.display = 'none'; // Cacher la fenêtre
            hoverImage.src = ''; // Effacer l'image
            currentIndex = 0; // Réinitialiser l'index
        });
    });
});

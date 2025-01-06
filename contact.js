// Exemple : Animation de couleur au survol
document.querySelectorAll('.contact-item a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff5500';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#0077ff';
    });
});

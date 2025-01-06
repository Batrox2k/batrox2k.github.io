const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".small-image");

function moveLeft() {
  const tempSrc = mainImage.src;

  // Décalage circulaire vers la gauche
  const lastImageSrc = smallImages[smallImages.length - 1].src;
  for (let i = smallImages.length - 1; i > 0; i--) {
    smallImages[i].src = smallImages[i - 1].src;
  }
  smallImages[0].src = tempSrc;

  // Dernière image devient la grande
  mainImage.src = lastImageSrc;
}

function moveRight() {
  const tempSrc = mainImage.src;

  // Décalage circulaire vers la droite
  const firstImageSrc = smallImages[0].src;
  for (let i = 0; i < smallImages.length - 1; i++) {
    smallImages[i].src = smallImages[i + 1].src;
  }
  smallImages[smallImages.length - 1].src = tempSrc;

  // Première image devient la grande
  mainImage.src = firstImageSrc;
}

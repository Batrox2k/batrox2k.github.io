const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".small-image");

// Ajout d'événements sur les petites images
smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    // Intervertir la source de la grande image avec l'image cliquée
    const tempSrc = mainImage.src;
    mainImage.src = img.src;
    img.src = tempSrc;
  });
});

// Navigation avec les flèches
function moveLeft() {
  const firstImage = smallImages[0];
  const lastImage = smallImages[smallImages.length - 1];
  const tempSrc = mainImage.src;

  mainImage.src = lastImage.src;
  lastImage.src = firstImage.src;

  smallImages.forEach((img, index) => {
    if (index > 0) {
      img.src = smallImages[index - 1].src;
    }
  });

  firstImage.src = tempSrc;
}

function moveRight() {
  const firstImage = smallImages[0];
  const lastImage = smallImages[smallImages.length - 1];
  const tempSrc = mainImage.src;

  mainImage.src = firstImage.src;
  firstImage.src = lastImage.src;

  for (let i = smallImages.length - 1; i > 0; i--) {
    smallImages[i].src = smallImages[i - 1].src;
  }

  lastImage.src = tempSrc;
}

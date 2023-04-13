window.addEventListener("DOMContentLoaded", () => {
  const anthony = document.querySelector(".anthony");
  const chiron = document.querySelector(".chiron");
  const parallaxIntro = document.querySelector(".intro");
  const backgroundText = document.querySelector(".backgroundText");

  document.querySelector(".container").addEventListener("scroll", (event) => {
    const scrollPosition = event.target.scrollTop;
    const windowHeight = event.target.clientHeight;

    // Calculez le pourcentage de défilement en fonction de la position de défilement (position de défilement / (hauteur du document - hauteur de la fenêtre))
    const scrollPercentage = scrollPosition / windowHeight;

    // Calculez le letter-spacing en fonction du pourcentage de défilement
    const letterSpacing = scrollPercentage * 20; // Vous pouvez ajuster le multiplicateur pour augmenter ou diminuer l'effet
    // Appliquez le letter-spacing calculé à l'élément avec la classe ".anthony"
    anthony.style.letterSpacing = `${letterSpacing}px`;
    chiron.style.letterSpacing = `${letterSpacing}px`;
    parallaxIntro.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
    backgroundText.style.fontVariationSettings = `"wght" ${
      scrollPosition * 1.4
    }`;
  });
});

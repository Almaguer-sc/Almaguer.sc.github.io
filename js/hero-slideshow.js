// Hace que cualquier sección .hero con más de una <img class="slide">
// rote automáticamente cada 30 segundos con un desvanecido natural.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero').forEach((hero) => {
    const slides = hero.querySelectorAll('img.slide');
    if (slides.length < 2) return;

    let indiceActual = 0;
    setInterval(() => {
      slides[indiceActual].classList.remove('activa');
      indiceActual = (indiceActual + 1) % slides.length;
      slides[indiceActual].classList.add('activa');
    }, 30000);
  });
});

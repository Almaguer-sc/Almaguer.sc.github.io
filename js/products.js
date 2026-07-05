document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('#filtros .size-option');
  const cards = document.querySelectorAll('#catalogo-grid .card-product');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      botones.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      boton.setAttribute('aria-pressed', 'true');

      const filtro = boton.dataset.filtro;
      cards.forEach((card) => {
        const coincide = filtro === 'todos' || card.dataset.proceso === filtro;
        card.style.display = coincide ? '' : 'none';
      });
    });
  });
});

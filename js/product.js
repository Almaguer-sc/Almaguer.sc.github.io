document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('lote');
  const producto = ALMAGUER_PRODUCTOS.find((p) => p.slug === slug) || ALMAGUER_PRODUCTOS[0];
  const contenedor = document.getElementById('contenido-producto');

  document.title = `${producto.nombre} — Almaguer Specialty Coffee`;

  const otros = ALMAGUER_PRODUCTOS.filter((p) => p.slug !== producto.slug);

  contenedor.innerHTML = `
    <section class="section">
      <div class="container grid-12">

        <div style="grid-column: span 6;">
          <div class="gallery-main">
            <img id="foto-principal" src="${producto.fotos[0]}" alt="${producto.nombre} — foto principal">
          </div>
          <div class="gallery-thumbs" role="group" aria-label="Más fotos del lote">
            ${producto.fotos.map((foto, i) => `
              <button class="${i === 0 ? 'activo' : ''}" data-foto="${foto}" aria-label="Ver foto ${i + 1}">
                <img src="${foto}" alt="">
              </button>
            `).join('')}
          </div>
        </div>

        <div style="grid-column: span 6;">
          <span class="badge badge-${producto.proceso}">${producto.badgeLabel}</span>
          <h1 style="margin-top: var(--space-1);">${producto.nombre}</h1>
          <p style="color: var(--color-tierra); font-size: var(--text-sm);">${producto.sca} — ${producto.origen}</p>
          <p style="font-size: var(--text-lg); margin: var(--space-2) 0;">${producto.precio}</p>

          <div class="field">
            <label>Presentación</label>
            <div class="size-selector" role="group" aria-label="Elegir presentación">
              <button class="size-option" aria-pressed="false">125g</button>
              <button class="size-option" aria-pressed="true">250g</button>
              <button class="size-option" aria-pressed="false">500g</button>
              <button class="size-option" aria-pressed="false">1kg</button>
            </div>
          </div>

          <button class="btn btn-primary" style="width:100%; margin-top: var(--space-2);">Agregar al carrito</button>

          <div class="ficha-tecnica">
            <div class="dato"><div class="label">Origen</div><div class="valor">${producto.origen}</div></div>
            <div class="dato"><div class="label">Altitud</div><div class="valor">${producto.altitud}</div></div>
            <div class="dato"><div class="label">Proceso</div><div class="valor">${producto.badgeLabel}</div></div>
            <div class="dato"><div class="label">Variedad</div><div class="valor">${producto.variedad}</div></div>
          </div>
        </div>

      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h3>Notas de cata</h3>
        <p>${producto.notas}</p>
      </div>
    </section>

    <section class="section-tight" style="background: var(--color-arena);">
      <div class="container">
        <h3>Trazabilidad — de la finca a tu taza</h3>
        <div class="trazabilidad-linea">
          <div class="paso">Finca<br>${producto.origen}</div>
          <div class="paso">Proceso<br>${producto.badgeLabel}</div>
          <div class="paso">Tueste<br>Toll-roasting</div>
          <div class="paso">Empaque<br>Sellado hermético</div>
          <div class="paso">Tu taza<br>Tijuana / envíos</div>
        </div>
      </div>
    </section>

    ${otros.length ? `
    <section class="section-tight">
      <div class="container">
        <h3 style="margin-bottom: var(--space-2);">También te puede interesar</h3>
        <div class="grid-12">
          ${otros.map((p) => `
            <a href="producto.html?lote=${p.slug}" class="card-product" style="grid-column: span 4; text-decoration:none;">
              <div class="card-product-image">
                <img src="${p.fotos[0]}" alt="${p.nombre}">
              </div>
              <div class="card-product-body">
                <span class="badge badge-${p.proceso}">${p.badgeLabel}</span>
                <div class="card-product-name">${p.nombre}</div>
                <div class="card-product-sca">${p.sca} — ${p.origen}</div>
                <div class="card-product-price">${p.precio} / 250g</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>` : ''}
  `;

  // Galería: click en miniatura cambia la foto principal
  contenedor.querySelectorAll('.gallery-thumbs button').forEach((boton) => {
    boton.addEventListener('click', () => {
      contenedor.querySelectorAll('.gallery-thumbs button').forEach((b) => b.classList.remove('activo'));
      boton.classList.add('activo');
      document.getElementById('foto-principal').src = boton.dataset.foto;
    });
  });

  // Selector de presentación
  contenedor.querySelectorAll('.size-selector .size-option').forEach((boton) => {
    boton.addEventListener('click', () => {
      contenedor.querySelectorAll('.size-selector .size-option').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      boton.setAttribute('aria-pressed', 'true');
    });
  });
});

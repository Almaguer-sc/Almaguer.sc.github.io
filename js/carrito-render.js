document.addEventListener('DOMContentLoaded', () => {
  const listaEl = document.getElementById('carrito-lista');
  const vacioEl = document.getElementById('carrito-vacio');
  const resumenEl = document.getElementById('carrito-resumen');
  const subtotalEl = document.getElementById('carrito-subtotal');
  const totalEl = document.getElementById('carrito-total');
  const botonWhatsapp = document.getElementById('btn-checkout-whatsapp');

  function render() {
    const carrito = almaguerLeerCarrito();

    if (carrito.length === 0) {
      vacioEl.style.display = 'block';
      resumenEl.style.display = 'none';
      listaEl.innerHTML = '';
      return;
    }

    vacioEl.style.display = 'none';
    resumenEl.style.display = 'block';

    listaEl.innerHTML = carrito.map((item, i) => `
      <div class="cart-row">
        <div class="cart-row-thumb"><img src="${item.foto}" alt="${item.nombre}"></div>
        <div class="cart-row-info">
          <div class="name">${item.nombre}</div>
          <div class="size">${item.size}</div>
        </div>
        <div class="qty-control">
          <button data-accion="restar" data-index="${i}" aria-label="Reducir cantidad">−</button>
          <span>${item.cantidad}</span>
          <button data-accion="sumar" data-index="${i}" aria-label="Aumentar cantidad">+</button>
        </div>
        <div style="min-width:70px; text-align:right;">$${item.precio * item.cantidad}</div>
        <button data-accion="quitar" data-index="${i}" aria-label="Quitar del carrito" style="background:none; border:none; font-size:16px; color: var(--color-texto-secundario); cursor:pointer;">×</button>
      </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    subtotalEl.textContent = `$${total} MXN`;
    totalEl.textContent = `$${total} MXN`;

    // Mensaje de WhatsApp con el resumen del pedido
    const lineas = carrito.map((item) => `- ${item.nombre} (${item.size}) x${item.cantidad} — $${item.precio * item.cantidad} MXN`);
    const mensaje = `Hola, quiero confirmar este pedido de Almaguer:%0A${lineas.join('%0A')}%0A%0ATotal: $${total} MXN`;
    botonWhatsapp.href = `https://wa.me/526647110882?text=${mensaje}`;

    // Botones de cantidad y quitar
    listaEl.querySelectorAll('button[data-accion]').forEach((boton) => {
      boton.addEventListener('click', () => {
        const idx = Number(boton.dataset.index);
        const accion = boton.dataset.accion;
        const carritoActual = almaguerLeerCarrito();
        if (accion === 'sumar') carritoActual[idx].cantidad += 1;
        if (accion === 'restar') carritoActual[idx].cantidad = Math.max(1, carritoActual[idx].cantidad - 1);
        if (accion === 'quitar') carritoActual.splice(idx, 1);
        almaguerGuardarCarrito(carritoActual);
        render();
        const enlaceCarrito = document.getElementById('enlace-carrito');
        if (enlaceCarrito) {
          const n = almaguerContarItems();
          enlaceCarrito.textContent = n > 0 ? `Carrito (${n})` : 'Carrito';
        }
      });
    });
  }

  render();
});

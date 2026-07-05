// Carrito simple basado en localStorage — sin backend, pensado para el
// volumen actual del negocio. Estructura guardada: array de
// { slug, nombre, size, precio, foto, cantidad }

const ALMAGUER_CART_KEY = 'almaguer_carrito';

function almaguerLeerCarrito() {
  try {
    const datos = localStorage.getItem(ALMAGUER_CART_KEY);
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    return [];
  }
}

function almaguerGuardarCarrito(carrito) {
  localStorage.setItem(ALMAGUER_CART_KEY, JSON.stringify(carrito));
}

function almaguerAgregarAlCarrito(item) {
  const carrito = almaguerLeerCarrito();
  const existente = carrito.find((i) => i.slug === item.slug && i.size === item.size);
  if (existente) {
    existente.cantidad += item.cantidad;
  } else {
    carrito.push(item);
  }
  almaguerGuardarCarrito(carrito);
}

function almaguerContarItems() {
  return almaguerLeerCarrito().reduce((total, i) => total + i.cantidad, 0);
}

// Actualiza el contador de "Carrito (n)" en el header, en cualquier página
document.addEventListener('DOMContentLoaded', () => {
  const enlaceCarrito = document.getElementById('enlace-carrito');
  if (enlaceCarrito) {
    const n = almaguerContarItems();
    enlaceCarrito.textContent = n > 0 ? `Carrito (${n})` : 'Carrito';
  }
});

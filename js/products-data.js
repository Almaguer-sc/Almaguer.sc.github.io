// Fuente única de datos de los lotes. Para agregar un café nuevo:
// copia un objeto, cambia sus valores, y listo — aparece en catálogo y producto.
const ALMAGUER_PRODUCTOS = [
  {
    slug: 'bourbon-rosado-honey',
    nombre: 'Bourbon Rosado Honey',
    proceso: 'honey',
    badgeLabel: 'honey',
    sca: '86.5 SCA',
    origen: 'Acevedo, Huila',
    altitud: '1,500+ msnm',
    variedad: 'Bourbon Rosado',
    precio: '$283 MXN',
    precios: {
      '125g': 160,
      '250g': 283,
      '500g': 520,
      '1kg': 980
    },
    notas: 'Un perfil dulce y afrutado, con acidez cítrica bien integrada y cuerpo medio. El proceso Honey conserva parte del mucílago de la cereza durante el secado, aportando notas a caramelo y fruta madura que se sostienen hasta el final de taza.',
    fotos: [
      'assets/images/bourbon-rosado-honey-1.jpg',
      'assets/images/bourbon-rosado-honey-2.jpg',
      'assets/images/bourbon-rosado-honey-3.jpg'
    ]
  },
  {
    slug: 'catuai-lavado',
    nombre: 'Catuaí Lavado',
    proceso: 'lavado',
    badgeLabel: 'lavado',
    sca: '86 SCA',
    origen: 'Acevedo, Huila',
    altitud: '1,500+ msnm',
    variedad: 'Catuaí',
    precio: '$261 MXN',
    precios: {
      '125g': 150,
      '250g': 261,
      '500g': 480,
      '1kg': 900
    },
    notas: 'Perfil limpio y balanceado, típico del proceso Lavado: acidez brillante, cuerpo ligero-medio y notas cítricas y florales bien definidas.',
    fotos: [
      'assets/images/catuai-lavado-1.jpg',
      'assets/images/catuai-lavado-2.jpg',
      'assets/images/catuai-lavado-3.jpg'
    ]
  }
];

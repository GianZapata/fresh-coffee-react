import { SeedProduct } from './seed-data';

const randomPrice = () => Math.round(Math.random() * 100 * 100) / 100 + 50;

export const products: SeedProduct[] = [
  {
    name: 'Café Caramel con Chocolate',
    price: randomPrice(),
    image: 'cafe_01',
    categoryId: 1,
    id: 1,
  },
  {
    name: 'Café Frio con Chocolate Grande',
    price: randomPrice(),
    image: 'cafe_02',
    categoryId: 1,
    id: 2,
  },
  {
    name: 'Latte Frio con Chocolate Grande',
    price: randomPrice(),
    image: 'cafe_03',
    categoryId: 1,
    id: 3,
  },
  {
    name: 'Latte Frio con Chocolate Grande',
    price: randomPrice(),
    image: 'cafe_04',
    categoryId: 1,
    id: 4,
  },
  {
    name: 'Malteada Fria con Chocolate Grande',
    price: randomPrice(),
    image: 'cafe_05',
    categoryId: 1,
    id: 5,
  },
  {
    name: 'Café Mocha Caliente Chico',
    price: randomPrice(),
    image: 'cafe_06',
    categoryId: 1,
    id: 6,
  },
  {
    name: 'Café Mocha Caliente Grande con Chocolate',
    price: randomPrice(),
    image: 'cafe_07',
    categoryId: 1,
    id: 7,
  },
  {
    name: 'Café Caliente Capuchino Grande',
    price: randomPrice(),
    image: 'cafe_08',
    categoryId: 1,
    id: 8,
  },
  {
    name: 'Café Mocha Caliente Mediano',
    price: randomPrice(),
    image: 'cafe_09',
    categoryId: 1,
    id: 9,
  },
  {
    name: 'Café Mocha Frio con Caramelo Mediano',
    price: randomPrice(),
    image: 'cafe_10',
    categoryId: 1,
    id: 10,
  },
  {
    name: 'Café Mocha Frio con Chocolate Mediano',
    price: randomPrice(),
    image: 'cafe_11',
    categoryId: 1,
    id: 11,
  },
  {
    name: 'Café Espresso',
    price: randomPrice(),
    image: 'cafe_12',
    categoryId: 1,
    id: 12,
  },
  {
    name: 'Café Capuchino Grande con Caramelo',
    price: randomPrice(),
    image: 'cafe_13',
    categoryId: 1,
    id: 13,
  },
  {
    name: 'Café Caramelo Grande',
    price: randomPrice(),
    image: 'cafe_14',
    categoryId: 1,
    id: 14,
  },
  {
    name: 'Paquete de 3 donas de Chocolate',
    price: randomPrice(),
    image: 'donas_01',
    categoryId: 4,
    id: 15,
  },
  {
    name: 'Paquete de 3 donas Glaseadas',
    price: randomPrice(),
    image: 'donas_02',
    categoryId: 4,
    id: 16,
  },
  {
    name: 'Dona de Fresa ',
    price: randomPrice(),
    image: 'donas_03',
    categoryId: 4,
    id: 17,
  },
  {
    name: 'Dona con Galleta de Chocolate ',
    price: randomPrice(),
    image: 'donas_04',
    categoryId: 4,
    id: 18,
  },
  {
    name: 'Dona glass con Chispas Sabor Fresa ',
    price: randomPrice(),
    image: 'donas_05',
    categoryId: 4,
    id: 19,
  },
  {
    name: 'Dona glass con Chocolate ',
    price: randomPrice(),
    image: 'donas_06',
    categoryId: 4,
    id: 20,
  },
  {
    name: 'Dona de Chocolate con MÁS Chocolate ',
    price: randomPrice(),
    image: 'donas_07',
    categoryId: 4,
    id: 21,
  },
  {
    name: 'Paquete de 3 donas de Chocolate ',
    price: randomPrice(),
    image: 'donas_08',
    categoryId: 4,
    id: 22,
  },
  {
    name: 'Paquete de 3 donas con Vainilla y Chocolate ',
    price: randomPrice(),
    image: 'donas_09',
    categoryId: 4,
    id: 23,
  },
  {
    name: 'Paquete de 6 Donas',
    price: randomPrice(),
    image: 'donas_10',
    categoryId: 4,
    id: 24,
  },
  {
    name: 'Paquete de 3 Variadas',
    price: randomPrice(),
    image: 'donas_11',
    categoryId: 4,
    id: 25,
  },
  {
    name: 'Dona Natural con Chocolate',
    price: randomPrice(),
    image: 'donas_12',
    categoryId: 4,
    id: 26,
  },
  {
    name: 'Paquete de 3 Donas de Chocolate con Chispas',
    price: randomPrice(),
    image: 'donas_13',
    categoryId: 4,
    id: 27,
  },
  {
    name: 'Dona Chocolate y Coco',
    price: randomPrice(),
    image: 'donas_14',
    categoryId: 4,
    id: 28,
  },
  {
    name: 'Paquete Galletas de Chocolate',
    price: randomPrice(),
    image: 'galletas_01',
    categoryId: 6,
    id: 29,
  },
  {
    name: 'Paquete Galletas de Chocolate y Avena',
    price: randomPrice(),
    image: 'galletas_02',
    categoryId: 6,
    id: 30,
  },
  {
    name: 'Paquete de Muffins de Vainilla',
    price: randomPrice(),
    image: 'galletas_03',
    categoryId: 6,
    id: 31,
  },
  {
    name: 'Paquete de 4 Galletas de Avena',
    price: randomPrice(),
    image: 'galletas_04',
    categoryId: 6,
    id: 32,
  },
  {
    name: 'Galletas de Mantequilla Variadas',
    price: randomPrice(),
    image: 'galletas_05',
    categoryId: 6,
    id: 33,
  },
  {
    name: 'Galletas de sabores frutales',
    price: randomPrice(),
    image: 'galletas_06',
    categoryId: 6,
    id: 34,
  },
  {
    name: 'Hamburguesa Sencilla',
    price: randomPrice(),
    image: 'hamburguesas_01',
    categoryId: 2,
    id: 35,
  },
  {
    name: 'Hamburguesa de Pollo',
    price: randomPrice(),
    image: 'hamburguesas_02',
    categoryId: 2,
    id: 36,
  },
  {
    name: 'Hamburguesa de Pollo y Chili',
    price: randomPrice(),
    image: 'hamburguesas_03',
    categoryId: 2,
    id: 37,
  },
  {
    name: 'Hamburguesa Queso y  Pepinos',
    price: randomPrice(),
    image: 'hamburguesas_04',
    categoryId: 2,
    id: 38,
  },
  {
    name: 'Hamburguesa Cuarto de Libra',
    price: randomPrice(),
    image: 'hamburguesas_05',
    categoryId: 2,
    id: 39,
  },
  {
    name: 'Hamburguesa Doble Queso',
    price: randomPrice(),
    image: 'hamburguesas_06',
    categoryId: 2,
    id: 40,
  },
  {
    name: 'Hot Dog Especial',
    price: randomPrice(),
    image: 'hamburguesas_07',
    categoryId: 2,
    id: 41,
  },
  {
    name: 'Paquete 2 Hot Dogs',
    price: randomPrice(),
    image: 'hamburguesas_08',
    categoryId: 2,
    id: 42,
  },
  {
    name: '4 Rebanadas de Pay de Queso',
    price: randomPrice(),
    image: 'pastel_01',
    categoryId: 5,
    id: 43,
  },
  {
    name: 'Waffle Especial',
    price: randomPrice(),
    image: 'pastel_02',
    categoryId: 5,
    id: 44,
  },
  {
    name: 'Croissants De la casa',
    price: randomPrice(),
    image: 'pastel_03',
    categoryId: 5,
    id: 45,
  },
  {
    name: 'Pay de Queso',
    price: randomPrice(),
    image: 'pastel_04',
    categoryId: 5,
    id: 46,
  },
  {
    name: 'Pastel de Chocolate',
    price: randomPrice(),
    image: 'pastel_05',
    categoryId: 5,
    id: 47,
  },
  {
    name: 'Rebanada Pastel de Chocolate',
    price: randomPrice(),
    image: 'pastel_06',
    categoryId: 5,
    id: 48,
  },
  {
    name: 'Pizza Spicy con Doble Queso',
    price: randomPrice(),
    image: 'pizzas_01',
    categoryId: 3,
    id: 49,
  },
  {
    name: 'Pizza Jamón y Queso',
    price: randomPrice(),
    image: 'pizzas_02',
    categoryId: 3,
    id: 50,
  },
  {
    name: 'Pizza Doble Queso',
    price: randomPrice(),
    image: 'pizzas_03',
    categoryId: 3,
    id: 51,
  },
  {
    name: 'Pizza Especial de la Casa',
    price: randomPrice(),
    image: 'pizzas_04',
    categoryId: 3,
    id: 52,
  },
  {
    name: 'Pizza Chorizo',
    price: randomPrice(),
    image: 'pizzas_05',
    categoryId: 3,
    id: 53,
  },
  {
    name: 'Pizza Hawaiana',
    price: randomPrice(),
    image: 'pizzas_06',
    categoryId: 3,
    id: 54,
  },
  {
    name: 'Pizza Tocino',
    price: randomPrice(),
    image: 'pizzas_07',
    categoryId: 3,
    id: 55,
  },
  {
    name: 'Pizza Vegetales y Queso',
    price: randomPrice(),
    image: 'pizzas_08',
    categoryId: 3,
    id: 56,
  },
  {
    name: 'Pizza Pepperoni y Queso',
    price: randomPrice(),
    image: 'pizzas_09',
    categoryId: 3,
    id: 57,
  },
  {
    name: 'Pizza Aceitunas y Queso',
    price: randomPrice(),
    image: 'pizzas_10',
    categoryId: 3,
    id: 58,
  },
  {
    name: 'Pizza Queso, Jamón y Champiñones',
    price: randomPrice(),
    image: 'pizzas_11',
    categoryId: 3,
    id: 59,
  },
];

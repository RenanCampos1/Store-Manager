const mockAllProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];
const mockById = [
  {
    id: 1,
    name: "Martelo do Thor",
  },
];
const getAllProductsMock = [
  {
    saleId: 1,
    date: "2023-03-26T19:56:49.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-03-26T19:56:49.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2023-03-26T19:56:49.000Z",
    productId: 3,
    quantity: 15,
  },
];
const listSales = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

const newSale = [
  {
    productId: 1212,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const newProduct = {
  id: 4,
  name: "Capa do batman",
};

module.exports = {
  mockAllProducts,
  mockById,
  getAllProductsMock,
  listSales,
  newSale,
  newProduct,
};

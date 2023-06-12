const chai = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockById } = require("../mocks");
const { expect } = chai;

const productsService = require("../../../src/services/products");
const productsController = require("../../../src/controllers/products");
const { newProduct } = require("../mocks");

describe("Testando o Product Controller", function () {
  afterEach(() => sinon.restore());
  it("", async function () {
    sinon.stub(productsService, "getAllProducts").resolves(mockAllProducts);

    const req = {
      body: {
        amount: 125,
      },
      params: {
        id: 2,
      },
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllProducts);
  });

  it("", async function () {
    sinon.stub(productsService, "getProductId").resolves(mockById);

    const req = {
      body: {
        amount: 125,
      },
      params: {
        id: 1,
      },
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProductId(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockById);
  });

  it("", async function () {
    sinon.stub(productsService, "createProduct").resolves(newProduct);

    const req = {
      body: {
        name: "Capa do batman",
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
});

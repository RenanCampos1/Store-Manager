const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;
const productsModel = require("../../../src/models/products");
const connection = require("../../../src/models/connection");
const { mockAllProducts, mockById } = require("../mocks");

describe("", function () {
  afterEach(() => sinon.restore());
  it("Testa o banco inteiro", async function () {
    sinon.stub(connection, "execute").resolves([mockAllProducts]);
    const result = await productsModel.getAllProducts();
    expect(result).to.be.equal(mockAllProducts);
  });
  it("", async function () {
    sinon.stub(connection, "execute").resolves([mockById]);
    const result = await productsModel.getProductId(1);

    expect(result).to.be.equal(mockById[0]);
  });
});

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { mockAllProducts } = require("../mocks");
const { expect } = chai;
chai.use(sinonChai);
const productsModel = require("../../../src/models/products");
const productsService = require("../../../src/services/products");

describe("Testando o Product Service", function () {
  afterEach(() => sinon.restore());
  it("Retorna todos os produtos", async function () {
    sinon.stub(productsModel, "getAllProducts").resolves(mockAllProducts);

    const result = await productsService.getAllProducts();

    expect(result).to.be.deep.equal(mockAllProducts);
  });

  it("Retorna um produto por id", async () => {
    sinon.stub(productsModel, "getProductId").resolves(mockAllProducts[0]);

    const result = await productsService.getProductId(1);

    expect(result).to.equal(mockAllProducts[0]);
  });

  it('Verificando mensagem de "Not found" caso não encontre nenhum produto', async function () {
    sinon.stub(productsModel, "getProductId").resolves(undefined);

    try {
      await productsService.getProductId(99);
    } catch (error) {
      expect(error.message).to.be.deep.equal("Product not found");
      expect(error.type).to.be.equal(404);
    }
  });

  it("Verifica se lança um erro ao não passar um name", async function () {
    sinon.stub(productsModel, "updateProduct").resolves(undefined);

    try {
      await productsService.updateProduct(1, "");
    } catch (error) {
      expect(error.message).to.be.deep.equal('"name" is required');
      expect(error.type).to.be.equal(400);
    }
  });
});

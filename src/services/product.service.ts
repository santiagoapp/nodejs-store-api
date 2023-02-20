import boom from "@hapi/boom";
import { productFactory } from "../factories";
import { Product } from "../types";

class ProductsService {
  private _amount: number;
  private _products: Product[];

  constructor(amount: number) {
    this._amount = amount;
    this._products = this.generate();
  }

  private generate(): Product[] {
    return productFactory.generateProducts(this._amount);
  }

  public async create(data: Omit<Product, "productId">): Promise<Product> {
    await setTimeout(() => {}, Math.random() * 1000);
    const { price } = data;
    const newProduct = productFactory.createRandomProduct(price);
    this._products.push(newProduct);
    return newProduct;
  }

  public async find(): Promise<Product[]> {
    await setTimeout(() => {}, Math.random() * 1000);
    return this._products;
  }

  public async findOne(productId: Product["productId"]): Promise<Product> {
    await setTimeout(() => {}, Math.random() * 1000);
    const result = this._products.find((item) => item.productId === productId);
    if (!result) {
      throw boom.notFound("Product not found");
    }
    return result;
  }

  public async update(
    productId: Product["productId"],
    data: Omit<Product, "productId">
  ): Promise<Product> {
    await setTimeout(() => {}, Math.random() * 1000);
    const index = this._products.findIndex(
      (item) => item.productId === productId
    );
    if (index === -1) {
      throw boom.notFound("Product not found");
    }
    const product = this._products[index];
    this._products[index] = {
      ...product,
      ...data,
    };
    return this._products[index];
  }

  public async delete(
    productId: Product["productId"]
  ): Promise<Product["productId"]> {
    await setTimeout(() => {}, Math.random() * 1000);
    const index = this._products.findIndex(
      (item) => item.productId === productId
    );
    if (index === -1) {
      throw boom.notFound("Product not found");
    }
    this._products.splice(index, 1);
    return productId;
  }
}

export default ProductsService;

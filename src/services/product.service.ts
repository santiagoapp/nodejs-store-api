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

  public async create(
    data: Omit<Product, "productId">
  ): Promise<Product | { message: string; error: any }> {
    try {
      await setTimeout(() => {}, 2000);
      const { price } = data;
      const newProduct = productFactory.createRandomProduct(price);
      this._products.push(newProduct);
      return newProduct;
    } catch (error) {
      return {
        message: "Something went wrong trying to create the product.",
        error: error instanceof Error ? error.message : error,
      };
    }
  }

  public async find(): Promise<Product[] | { message: string; error: any }> {
    try {
      await setTimeout(() => {}, 2000);
      return this._products;
    } catch (error) {
      return {
        message: "Something went wrong trying to get the products.",
        error: error instanceof Error ? error.message : error,
      };
    }
  }

  public async findOne(
    productId: Product["productId"]
  ): Promise<Product | { message: string; error: any }> {
    try {
      await setTimeout(() => {}, 2000);
      const result = this._products.find(
        (item) => item.productId === productId
      );
      if (!result) {
        throw new Error("Product not found");
      }
      return result;
    } catch (error) {
      return {
        message: "Something went wrong trying to get the product.",
        error: error instanceof Error ? error.message : error,
      };
    }
  }

  public async update(
    productId: Product["productId"],
    data: Omit<Product, "productId">
  ): Promise<Product | { message: string; error: any }> {
    try {
      await setTimeout(() => {}, 2000);
      const index = this._products.findIndex(
        (item) => item.productId === productId
      );
      if (index === -1) {
        throw new Error("product not found");
      }
      const product = this._products[index];
      this._products[index] = {
        ...product,
        ...data,
      };
      return this._products[index];
    } catch (error) {
      return {
        message: "Something went wrong trying to update the product.",
        error: error instanceof Error ? error.message : error,
      };
    }
  }

  public async delete(
    productId: Product["productId"]
  ): Promise<Product["productId"] | { message: string; error: any }> {
    try {
      await setTimeout(() => {}, 2000);
      const index = this._products.findIndex(
        (item) => item.productId === productId
      );
      if (index === -1) {
        throw new Error("product not found");
      }
      this._products.splice(index, 1);
      return productId;
    } catch (error) {
      return {
        message: "Something went wrong trying to delete the product.",
        error: error instanceof Error ? error.message : error,
      };
    }

  }
}

export default ProductsService;

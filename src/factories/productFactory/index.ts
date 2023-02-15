import { faker } from "@faker-js/faker";
import { Product } from "../../types";

const generateProducts = (amount: number): Product[] => {
  const products: Product[] = [];
  Array.from({ length: amount }).forEach(() => {
    products.push(createRandomProduct());
  });
  return products;
};
const createRandomProduct = (price? :Product["price"]): Product => {
  const max = 80000;
  const min = 1000;

  return {
    productId: faker.datatype.uuid(),
    price: price || Math.floor(Math.random() * (max - min)),
    registeredAt: faker.date.past(),
  };
};

export default { generateProducts, createRandomProduct };

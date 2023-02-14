type Product = {
  productId: string;
  registeredAt: Date;
};

module.exports = function (faker) {
  const generateProducts = (amount: number): Product[] => {
    const products: Product[] = [];
    Array.from({ length: amount }).forEach(() => {
      products.push(createRandomProduct());
    });
    return products;
  };
  const createRandomProduct = (): Product => {
    return {
      productId: faker.datatype.uuid(),
      registeredAt: faker.date.past(),
    };
  };
  return { generateProducts, createRandomProduct };
};

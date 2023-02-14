module.exports = function (faker) {
    var generateProducts = function (amount) {
        var products = [];
        Array.from({ length: amount }).forEach(function () {
            products.push(createRandomProduct());
        });
        return products;
    };
    var createRandomProduct = function () {
        return {
            productId: faker.datatype.uuid(),
            registeredAt: faker.date.past()
        };
    };
    return { generateProducts: generateProducts, createRandomProduct: createRandomProduct };
};

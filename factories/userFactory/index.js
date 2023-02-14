module.exports = function (faker) {
    var generateUsers = function (amount) {
        var Users = [];
        Array.from({ length: amount }).forEach(function () {
            Users.push(createRandomUser());
        });
        return Users;
    };
    var createRandomUser = function () {
        return {
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past()
        };
    };
    return { generateUsers: generateUsers, createRandomUser: createRandomUser };
};

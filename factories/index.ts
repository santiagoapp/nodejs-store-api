var {faker} = require("@faker-js/faker");
var userFactory = require('./userFactory')(faker);
var productFactory = require('./productFactory')(faker);

module.exports = {userFactory, productFactory}

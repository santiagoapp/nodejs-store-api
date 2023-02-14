const express = require('express');
const router = express.Router();
const factories = require('../factories');

router.get('/', (req, res) => {
  const products = factories.productFactory.generateProducts(10);
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { productId } = req.params;
  const product = factories.productFactory.createRandomProduct();
  res.json({ ...product, productId });
});

module.exports = router

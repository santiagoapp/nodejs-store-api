const express = require('express');
const router = express.Router();
const factories = require('../factories');

router.get('/', (req, res) => {
  const users = factories.userFactory.generateUsers(10);
  res.json(users);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = factories.userFactory.createRandomUser();
  res.json({ ...user, userId });
});

module.exports = router

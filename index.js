const express = require('express');
const factories = require('./factories');
const routerApi = require('./routes');
const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send(factories.userFactory);
});

app.listen(port, () => {
  console.log('Puerto' + port);
});

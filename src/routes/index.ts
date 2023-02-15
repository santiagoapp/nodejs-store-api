import express, {Express, Router} from 'express';
import productsRouter from './products.router';
// const usersRouter = require('./users.router');

const routerApi = (app: Express): void => {
  const router: Router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  // router.use('/users', usersRouter);
};

export default routerApi;

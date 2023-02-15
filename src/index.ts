import express, {Express} from 'express';
import dotenv from 'dotenv';
import routerApi from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

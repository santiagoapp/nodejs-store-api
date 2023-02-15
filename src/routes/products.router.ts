import express, {Router} from 'express';
import ProductsService from '../services/product.service';

const router: Router = express.Router();
const service = new ProductsService(10);

router.get('/', async (req, res) => {
  const result = await service.find();
  return !result.hasOwnProperty('error')
    ? res.status(200).json(result)
    : res.status(404).json(result);
});

router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  const result = await service.findOne(productId);
  return !result.hasOwnProperty('error')
    ? res.status(200).json(result)
    : res.status(404).json(result);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await service.create(body);
  return !result.hasOwnProperty('error')
    ? res.status(201).json(result)
    : res.status(404).json(result);
});

router.patch('/:productId', async (req, res) => {
  const { productId} = req.params;
  const body = req.body;
  const result = await service.update(productId, body);
  return !result.hasOwnProperty('error')
    ? res.status(204).json(result)
    : res.status(404).json(result);
});

router.delete('/:productId', async(req, res) => {
  const { productId } = req.params;
  const result = await service.delete(productId);
  return result && !result.hasOwnProperty('error')
    ? res.status(204).json(result)
    : res.status(404).json(result);
});

export default router;

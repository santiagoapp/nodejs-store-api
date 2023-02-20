import express, { Router } from "express";
import ProductsService from "../services/product.service";
import validatorHandler from "../middlewares/validator.handler";
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} from '../schemas/product.schema';

const router: Router = express.Router();
const service = new ProductsService(10);

router.get("/", async (req, res, next) => {
  try {
    const result = await service.find();
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:productId",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { productId } = req.params;
      const result = await service.findOne(productId);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const result = await service.create(body);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:productId",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { productId } = req.params;
      const body = req.body;
      const result = await service.update(productId, body);
      return result;
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:productId",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { productId } = req.params;
      const result = await service.delete(productId);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;

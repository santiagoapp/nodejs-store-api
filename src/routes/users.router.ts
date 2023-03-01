import express, { Router } from "express";
import UserService from "../services/user.service";
// import validatorHandler from "../middlewares/validator.handler";
// import {
//   createProductSchema,
//   updateProductSchema,
//   getProductSchema,
// } from '../schemas/product.schema';

const router: Router = express.Router();
const service = new UserService();

router.get("/", async (req, res, next) => {
  try {
    const result = await service.find();
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;

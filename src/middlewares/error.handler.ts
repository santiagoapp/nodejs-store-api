import { Request, Response, NextFunction } from "express";
import {Boom} from "@hapi/boom";

const logErrors = (
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  next(err);
};

const errorHandler = (
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandler = (
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

export { logErrors, errorHandler, boomErrorHandler };

import boom from "@hapi/boom";
import { Request, Response, NextFunction } from "express";
import { AnySchema } from "joi";

function validatorHandler(
  schema: AnySchema,
  property: "body" | "params" | "query"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error.message));
    }
    next();
  };
}

export default validatorHandler;

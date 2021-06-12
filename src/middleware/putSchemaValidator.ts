import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import ReqBodyUserPut from "../api/users/interfaces";

export default function putSchemaValidator(
  schema: ObjectSchema<ReqBodyUserPut>
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      next(error);
    }
    next();
  };
}

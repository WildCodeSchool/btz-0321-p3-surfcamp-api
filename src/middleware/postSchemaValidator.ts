import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import ReqBodyUserPost from "../api/users/interfaces";

export default function postSchemaValidator(
  schema: ObjectSchema<ReqBodyUserPost>
) {
  return function (req: Request, res: Response, next: NextFunction) {
    let options = { abortEarly: false };

    const result = schema.validate(req.body, options);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      next(error);
    }
    next();
  };
}

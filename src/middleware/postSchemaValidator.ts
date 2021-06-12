import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import ReqBodyUserPost from "../api/users/interfaces";

export default function postSchemaValidator(
  schema: ObjectSchema<ReqBodyUserPost>
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      res.status(422).send(error?.details);
      throw new Error("Fields are missings or unavailable");
    }
    next();
  };
}

import postUserSchema from "../JOI/users/postUserSchemaJOI";
import { RequestHandler } from "express";
export default function postUserSchemaValidator(req: any, res: any, next: any) {
  const result = postUserSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;

  if (!valid) {
    res.status(422).send(error);
    throw new Error("Fields are missings or unavailable");
  }
  next();
}

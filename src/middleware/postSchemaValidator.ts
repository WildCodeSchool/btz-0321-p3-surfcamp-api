import { Request, Response, NextFunction } from "express";
import { Address } from ".prisma/client";
import { ObjectSchema } from "joi";

interface Schema {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  picture: string;
  birthDate: string;
  phoneNumber: string;
}

export default function postSchemaValidator(schema: ObjectSchema<Schema>) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      res.status(422).send(error);
      throw new Error("Fields are missings or unavailable");
    }
    next();
  };
}

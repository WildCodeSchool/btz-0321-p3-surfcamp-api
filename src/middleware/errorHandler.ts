import { Request, Response, NextFunction } from "express";
import { ValidationErrorItem } from "joi";

interface Error {
  details: Array<ValidationErrorItem>;
  message: object;
}

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(
    err.details
      ? err.details.map((detail: any) => detail.message)
      : "Undefined Error"
  );
  res
    .status(500)
    .send(
      err.details
        ? err.details.map((detail: ValidationErrorItem) => detail.message)
        : "Undefined Error"
    );
}

import { Request, Response, NextFunction } from "express";

interface Error {
  details: Array<any>;
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
        ? err.details.map((detail: any) => detail.message)
        : "Undefined Error"
    );
}
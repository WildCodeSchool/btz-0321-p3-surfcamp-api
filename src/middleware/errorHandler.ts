import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.details.map((detail: any) => detail.message));
  res.status(500).send(err.details.map((detail: any) => detail.message));
}

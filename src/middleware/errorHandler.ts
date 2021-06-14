import { Request, Response, NextFunction } from "express";
import { ValidationErrorItem } from "joi";

//      Here is a middleware whose purpose is to catch errors like a bottleneck
//    and sent it to the client.
//    It send a status 500 and the error catched by all the app.
//    Don't forget to send errors here with next(error)

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

  const status = res.statusCode === 200 ? 500 : res.statusCode

  console.log(err);
  console.error(
    err,
    err.details
      ? err.details.map((detail: any) => detail.message)
      : "Undefined Error"
  );
  res.status(status).send({
    status: status,
    message: err.message,
    details: err.details ? err.details.map((detail: any) => detail.message) : "🛠",
    
  });
}

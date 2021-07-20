import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

function checkToken(req: any, res: Response, next: NextFunction): any {
  try {
    const rawToken = req.headers.cookie;
    const token = rawToken?.split("=");

    if (typeof token === "undefined") {
      throw new Error("You need to login.");
    }
    const index = token.indexOf("token");

    req.user = jwt.verify(token[index + 1], process.env.TOKEN_SECRET as string);

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
}

export default checkToken;

import { NextFunction } from "express";
import jwt from "jsonwebtoken";

function checkToken(req: any, res: any, next: NextFunction): any {
  try {
    const rawToken = req.headers.cookie;
    const token = rawToken?.split("=");

    if (!token[1]) {
      throw new Error("You need to login.");
    }

    req.user = jwt.verify(token[1], process.env.TOKEN_SECRET as string);

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
}

export default checkToken;

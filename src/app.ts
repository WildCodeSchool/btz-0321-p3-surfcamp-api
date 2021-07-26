import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import expressJSDocSwagger from "express-jsdoc-swagger";
import errorHandler from "./middleware/errorHandler";
import api from "./api";
import options from "./swaggerOptions";

dotenv.config();

const app = express();
const whiteList: Array<string> = process.env.ORIGINS!.split(",");

// Basics middlewares needed to build our api
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin!) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// Swagger documentation

if (process.env.NODE_ENVV !== "test") {
  expressJSDocSwagger(app)(options);
}

// Here is call the api folder wich contain all our Ressources.

app.use(api);

// We call the error middleware after all the roads to be sur that all errors are catched.
app.use(errorHandler);

export default app;

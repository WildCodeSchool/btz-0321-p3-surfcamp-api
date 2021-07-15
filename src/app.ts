import express from "express";
import cors from "cors";
import helmet from "helmet";
import expressJSDocSwagger from "express-jsdoc-swagger";

import errorHandler from "./middleware/errorHandler";
import api from "./api";
import options from "./swaggerOptions";

const app = express();

// Basics middlewares needed to build our api
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(express.json());

// Swagger documentation

if (process.env.NODE_ENVV !== "test") {
  expressJSDocSwagger(app)(options);
}

// Here is call the api folder wich contain all our Ressources.
app.use(api);

// We call the error middleware after all the roads to be sur that all errors are catched.
app.use(errorHandler);

export default app;

import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/errorHandler";
import api from "./api";

const app = express();

// Basics middlewares needed to build our api
app.use(cors());
app.use(helmet());
app.use(express.json());

// Here is call the api folder wich contain all our Ressources.
app.use(api);

// We call the error middleware after all the roads to be sur that all errors are catched.
app.use(errorHandler);

export default app;

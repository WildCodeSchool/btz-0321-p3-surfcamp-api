import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middleware/errorHandler";
import api from "./api";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(api);

app.use(errorHandler);

export default app;

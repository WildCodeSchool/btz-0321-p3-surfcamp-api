import express from "express";
import cors from "cors";
import helmet from "helmet";

import api from "./api";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(api);

export default app;

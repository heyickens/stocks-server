import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./router/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
  } catch (e) {
    throw e;
  }
};

start();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import studentBasicRoutes from "./routes/studentBasicRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/students/basic", studentBasicRoutes);

app.use(errorHandler);

export default app;

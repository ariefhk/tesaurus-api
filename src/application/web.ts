import express from "express";
import cors from "cors";
import { publicRouter } from "../route/public-route";
import { errorMiddleware } from "../middleware/error-middleware";

export const web = express();

web.use(cors());
web.use(express.urlencoded({ extended: true }));
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);

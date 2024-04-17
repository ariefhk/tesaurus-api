import express from "express";
import { DictionaryController } from "../controller/dictionary-controller";

export const publicRouter = express.Router();

publicRouter.get("/api/dictionary", DictionaryController.search);

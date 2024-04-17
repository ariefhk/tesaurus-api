import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { APIError } from "../error/api-error";
import { logger } from "../application/logger";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    logger.error(`Error status 400, ${JSON.stringify(error)}`);
    return res.status(400).json({
      errors: `Validation Error : ${JSON.stringify(error)}`,
    });
  } else if (error instanceof APIError) {
    logger.error(`Error status ${error.status}, ${error.message}`);
    return res.status(error.status).json({
      errors: error.message,
    });
  } else {
    logger.error(`Error status 500, ${error.message}`);
    return res.status(500).json({
      errors: error.message,
    });
  }
};

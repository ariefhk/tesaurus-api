import { logger } from "../application/logger";

export class Response {
  static toJson(status: boolean, message: string, data: any) {
    logger.info(message);
    return {
      status,
      message,
      data,
    };
  }
}

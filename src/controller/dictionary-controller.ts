import { Request, Response, NextFunction } from "express";
import { DictionaryService } from "../service/sinonim-service";
import { SearchDictionaryRequest } from "../model/dictionary-model";

export class DictionaryController {
  static search(req: Request, res: Response, next: NextFunction) {
    try {
      const request: SearchDictionaryRequest = {
        sinonim: req.query.sinonim as string,
      };
      const response = DictionaryService.search(request);
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }
}

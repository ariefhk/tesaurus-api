import dictionaryJson from "../assets/dict.json";
import { DictionaryRepository } from "../repository/dictionary-repository";
import { Response } from "./response-service-helper";
import { SearchDictionaryRequest } from "../model/dictionary-model";
import { Validation } from "../validation/validation-helper";
import { DictionaryValidation } from "../validation/dictionary-validation";

export class DictionaryService {
  static search(request: SearchDictionaryRequest) {
    const searchDictionaryRequest = Validation.validate(DictionaryValidation.SEARCH, request);
    const { sinonim } = searchDictionaryRequest;

    // because now only sinonim we targeted, we dont have to check optional query params
    const dictionary = new DictionaryRepository(dictionaryJson);
    const existedSinonim = dictionary.getSinonim(sinonim);

    return Response.toJson(true, "Sukses mendapatkan sinonim", existedSinonim);
  }
}

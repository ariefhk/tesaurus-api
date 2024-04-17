import { APIError } from "../error/api-error";

type DictionaryData = {
  tag: string;
  sinonim: string[];
};

type Dictionary = {
  [key: string]: DictionaryData;
};

export class DictionaryRepository {
  constructor(public dictionary: Dictionary) {}

  public getSinonim(keyword: string) {
    if (!keyword) {
      throw new APIError(400, `Kata harus dimasukan!`);
    }

    const existedWordInKamus = Object.keys(this.dictionary).filter((word) => word.toLowerCase() === keyword.toLowerCase())[0];

    if (!existedWordInKamus) {
      throw new APIError(404, `Kata ${keyword} tidak ditemukan dalam kamus!`);
    }

    const sinonim = this.dictionary[existedWordInKamus]["sinonim"];

    return sinonim;
  }
}

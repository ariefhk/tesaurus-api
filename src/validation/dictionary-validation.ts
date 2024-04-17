import { z, ZodType } from "zod";

export class DictionaryValidation {
  static readonly SEARCH: ZodType = z.object({
    sinonim: z.string().min(1, { message: "Sinonim Harus dimasukan" }),
  });
}

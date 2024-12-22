import { z } from "zod"
import { codeRegex } from "../../config/regex"

const stockSchema = z.object({
  code: z.string().regex(codeRegex),
  stockName: z.string().trim().min(2).max(128),
  market: z.enum(["プライム", "スタンダード", "グロース"])
});

export default stockSchema

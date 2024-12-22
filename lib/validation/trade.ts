import { z } from "zod"
import { codeRegex } from "../../config/regex"

const tradeSchema = z.object({
  id: z.number().int().nonnegative(),
  code: z.string().regex(codeRegex),
  shares: z.number().nonnegative(),
  price: z.number().nonnegative(),
  buySell: z.enum(["買", "売"]),
  tradeingDate: z.string().date()
});

const createTradeSchema = tradeSchema.omit({id: true})

export default tradeSchema; createTradeSchema;

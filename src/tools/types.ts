import type { ZodObject, ZodRawShape } from "zod";

export interface ToolDef {
  name: string;
  description: string;
  inputSchema: ZodObject<ZodRawShape>;
  endpoint: string;
  method?: string; // default POST
}

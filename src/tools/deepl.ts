import { z } from "zod";
import type { ToolDef } from "./types.js";

export const deeplTools: ToolDef[] = [
  {
    name: "deepl_translate",
    description: "Translate text using DeepL neural machine translation. Supports 30+ languages with high-quality, natural-sounding output.",
    inputSchema: z.object({
      text: z.string().describe("Text to translate"),
      target_lang: z.string().describe("Target language code (e.g., EN, KO, JA, DE, FR, ES, ZH)"),
      source_lang: z.string().optional().describe("Source language code (auto-detected if omitted)"),
      formality: z.enum(["default", "more", "less", "prefer_more", "prefer_less"]).optional()
        .describe("Formality level (not all languages support this)"),
    }),
    endpoint: "/v1/deepl/translate",
  },
];

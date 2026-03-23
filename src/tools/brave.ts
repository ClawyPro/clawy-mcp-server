import { z } from "zod";
import type { ToolDef } from "./types.js";

export const braveTools: ToolDef[] = [
  {
    name: "brave_search",
    description: "Web search via Brave Search API. Returns structured results with titles, URLs, descriptions, and snippets. Privacy-focused, no tracking.",
    inputSchema: z.object({
      q: z.string().describe("Search query"),
      count: z.number().optional().describe("Number of results (default 10, max 20)"),
      country: z.string().optional().describe("Country code for localized results (e.g., KR, JP, US)"),
      search_lang: z.string().optional().describe("Language code (e.g., ko, ja, en)"),
      freshness: z.enum(["pd", "pw", "pm", "py"]).optional()
        .describe("Freshness filter: pd=past day, pw=past week, pm=past month, py=past year"),
    }),
    endpoint: "/v1/brave/search",
  },
];

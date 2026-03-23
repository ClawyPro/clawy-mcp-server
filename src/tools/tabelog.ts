import { z } from "zod";
import type { ToolDef } from "./types.js";

export const tabelogTools: ToolDef[] = [
  {
    name: "tabelog_search",
    description: "Search Japanese restaurants on Tabelog — Japan's largest restaurant review site. Find by area, cuisine, rating, or keyword.",
    inputSchema: z.object({
      area: z.string().optional().describe("Area name (e.g., 'Tokyo', 'Osaka', 'Shibuya', '渋谷')"),
      cuisine: z.string().optional().describe("Cuisine type (e.g., 'sushi', 'ramen', 'izakaya', '寿司')"),
      keyword: z.string().optional().describe("Free text search keyword"),
      min_rating: z.number().optional().describe("Minimum Tabelog rating (e.g., 3.5)"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/tabelog/search",
  },
];

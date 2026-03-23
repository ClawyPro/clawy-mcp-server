import { z } from "zod";
import type { ToolDef } from "./types.js";

export const michelinTools: ToolDef[] = [
  {
    name: "michelin_search",
    description: "Search Michelin Guide restaurants across Japan, South Korea, and USA. Find starred restaurants by city, country, cuisine, or award level.",
    inputSchema: z.object({
      city: z.string().optional().describe("City name (e.g., 'Tokyo', 'Seoul', 'New York')"),
      country: z.string().optional().describe("Country (e.g., 'Japan', 'South Korea', 'USA')"),
      cuisine: z.string().optional().describe("Cuisine type (e.g., 'French', 'Japanese', 'Italian')"),
      award: z.string().optional().describe("Award level (e.g., '1 star', '2 stars', '3 stars', 'Bib Gourmand')"),
      keyword: z.string().optional().describe("Free text search keyword"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/michelin/search",
  },
];

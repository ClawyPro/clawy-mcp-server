import { z } from "zod";
import type { ToolDef } from "./types.js";

export const kakaoMapsTools: ToolDef[] = [
  {
    name: "kakao_maps_search",
    description: "Search Korean places via Kakao Maps API. Best for Korean addresses, local businesses, and POI search in South Korea.",
    inputSchema: z.object({
      query: z.string().describe("Search keyword (Korean supported, e.g., '강남역 맛집')"),
      category_group_code: z.string().optional()
        .describe("Category: MT1=mart, CS2=convenience, PS3=kindergarten, SC4=school, AC5=academy, PK6=parking, OL7=gas, SW8=subway, BK9=bank, CT1=culture, AG2=broker, PO3=government, AT4=attraction, AD5=accommodation, FD6=food, CE7=cafe, HP8=hospital, PM9=pharmacy"),
      x: z.string().optional().describe("Longitude for center point"),
      y: z.string().optional().describe("Latitude for center point"),
      radius: z.number().optional().describe("Search radius in meters (max 20000)"),
      page: z.number().optional().describe("Page number (default 1)"),
      size: z.number().optional().describe("Results per page (default 15, max 45)"),
    }),
    endpoint: "/v1/kakao-maps/search",
  },
];

import { z } from "zod";
import type { ToolDef } from "./types.js";

export const tmapTools: ToolDef[] = [
  {
    name: "tmap_route",
    description: "Get Korean driving routes with real-time traffic via TMap Navigation API. Returns distance, ETA, toll fees, and turn-by-turn directions.",
    inputSchema: z.object({
      startX: z.string().describe("Start longitude (WGS84)"),
      startY: z.string().describe("Start latitude (WGS84)"),
      endX: z.string().describe("End longitude (WGS84)"),
      endY: z.string().describe("End latitude (WGS84)"),
      startName: z.string().optional().describe("Start location name"),
      endName: z.string().optional().describe("End location name"),
    }),
    endpoint: "/v1/tmap/route",
  },
  {
    name: "tmap_poi",
    description: "Search Korean points of interest via TMap. Good for finding specific locations with Korean address details.",
    inputSchema: z.object({
      searchKeyword: z.string().describe("Search keyword (Korean supported)"),
      centerLon: z.string().optional().describe("Center longitude for search"),
      centerLat: z.string().optional().describe("Center latitude for search"),
      page: z.number().optional().describe("Page number (default 1)"),
      count: z.number().optional().describe("Results per page (default 20)"),
    }),
    endpoint: "/v1/tmap/poi",
  },
];

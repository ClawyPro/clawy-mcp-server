import { z } from "zod";
import type { ToolDef } from "./types.js";

export const dataGoKrTools: ToolDef[] = [
  {
    name: "data_go_kr_query",
    description: "Query Korean government open data from data.go.kr (공공데이터포털). Covers real estate transactions, weather, transportation, demographics, and more.",
    inputSchema: z.object({
      service_id: z.string().describe("Public data service ID"),
      params: z.record(z.string()).optional().describe("Service-specific query parameters"),
      page: z.number().optional().describe("Page number (default 1)"),
      per_page: z.number().optional().describe("Results per page (default 10)"),
    }),
    endpoint: "/v1/data-go-kr/query",
  },
];

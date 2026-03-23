import { z } from "zod";
import type { ToolDef } from "./types.js";

export const golfTools: ToolDef[] = [
  {
    name: "golf_search",
    description: "Search golf courses by name or region. Korea-focused with nationwide course data including ratings and facilities.",
    inputSchema: z.object({
      query: z.string().optional().describe("Search by course name or keyword"),
      region: z.string().optional().describe("Region (e.g., '경기', '제주', '강원', 'Gyeonggi', 'Jeju')"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/golf/search",
  },
  {
    name: "golf_course",
    description: "Get detailed golf course information — holes, par, yardage, facilities, green fees, and contact info.",
    inputSchema: z.object({
      course_id: z.string().describe("Golf course ID from search results"),
    }),
    endpoint: "/v1/golf/course",
  },
];

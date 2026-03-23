import { z } from "zod";
import type { ToolDef } from "./types.js";

export const courtAuctionTools: ToolDef[] = [
  {
    name: "court_auction_search",
    description: "Search Korean court auction property listings. Find foreclosed real estate by region, property type, price range, or auction date.",
    inputSchema: z.object({
      region: z.string().optional().describe("Court region (e.g., '서울', '부산', '대구', 'Seoul')"),
      property_type: z.string().optional().describe("Property type (e.g., '아파트', '토지', '상가', 'apartment', 'land')"),
      min_price: z.number().optional().describe("Minimum appraisal price (KRW)"),
      max_price: z.number().optional().describe("Maximum appraisal price (KRW)"),
      keyword: z.string().optional().describe("Search keyword"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/auction/search",
  },
  {
    name: "court_auction_detail",
    description: "Get detailed information for a specific Korean court auction case. Includes property details, appraisal, bid history, and case documents.",
    inputSchema: z.object({
      case_number: z.string().describe("Auction case number (e.g., '2026타경12345')"),
      court_code: z.string().optional().describe("Court code"),
    }),
    endpoint: "/v1/auction/detail",
  },
];

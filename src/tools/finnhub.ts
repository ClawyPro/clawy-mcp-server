import { z } from "zod";
import type { ToolDef } from "./types.js";

export const finnhubTools: ToolDef[] = [
  {
    name: "finnhub_query",
    description: "Query real-time financial data from Finnhub. Stock quotes, company news, earnings, recommendations, and market status.",
    inputSchema: z.object({
      endpoint: z.string().describe("Finnhub endpoint (e.g., quote, company-news, recommendation, earnings)"),
      symbol: z.string().optional().describe("Stock symbol (e.g., AAPL, MSFT)"),
      from: z.string().optional().describe("Start date (YYYY-MM-DD) for news/earnings"),
      to: z.string().optional().describe("End date (YYYY-MM-DD)"),
    }),
    endpoint: "/v1/finnhub/query",
  },
];

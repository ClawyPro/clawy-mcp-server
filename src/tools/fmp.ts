import { z } from "zod";
import type { ToolDef } from "./types.js";

export const fmpTools: ToolDef[] = [
  {
    name: "fmp_quote",
    description: "Get real-time and historical stock quotes from Financial Modeling Prep. Covers US and global markets.",
    inputSchema: z.object({
      symbol: z.string().describe("Stock ticker symbol (e.g., AAPL, MSFT, 005930.KS)"),
      historical: z.boolean().optional().describe("If true, return historical price data"),
      from: z.string().optional().describe("Historical start date (YYYY-MM-DD)"),
      to: z.string().optional().describe("Historical end date (YYYY-MM-DD)"),
    }),
    endpoint: "/v1/fmp/quote",
  },
  {
    name: "fmp_financial",
    description: "Get company financial statements (income statement, balance sheet, cash flow) from FMP.",
    inputSchema: z.object({
      symbol: z.string().describe("Stock ticker symbol"),
      statement: z.enum(["income-statement", "balance-sheet-statement", "cash-flow-statement"])
        .describe("Type of financial statement"),
      period: z.enum(["annual", "quarter"]).optional().describe("Reporting period (default: annual)"),
      limit: z.number().optional().describe("Number of periods to return (default 5)"),
    }),
    endpoint: "/v1/fmp/financial",
  },
];

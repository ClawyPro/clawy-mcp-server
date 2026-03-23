import { z } from "zod";
import type { ToolDef } from "./types.js";

export const alphaVantageTools: ToolDef[] = [
  {
    name: "alpha_vantage_query",
    description: "Query financial market data from Alpha Vantage. Stock time series, forex rates, crypto prices, and economic indicators.",
    inputSchema: z.object({
      function: z.string().describe("API function (e.g., TIME_SERIES_DAILY, FX_DAILY, DIGITAL_CURRENCY_DAILY, REAL_GDP)"),
      symbol: z.string().optional().describe("Stock/crypto symbol (e.g., AAPL, BTC)"),
      from_currency: z.string().optional().describe("From currency for forex (e.g., USD)"),
      to_currency: z.string().optional().describe("To currency for forex (e.g., KRW)"),
      interval: z.string().optional().describe("Interval for intraday (1min, 5min, 15min, 30min, 60min)"),
      outputsize: z.enum(["compact", "full"]).optional().describe("compact=100 points, full=all (default compact)"),
    }),
    endpoint: "/v1/alpha-vantage/query",
  },
];

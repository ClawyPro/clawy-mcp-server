import { z } from "zod";
import type { ToolDef } from "./types.js";

export const dartTools: ToolDef[] = [
  {
    name: "dart_disclosure",
    description: "Search Korean corporate disclosures (DART/FSS). Find filings by company code, name, or keyword. Covers listed and unlisted Korean companies.",
    inputSchema: z.object({
      corp_code: z.string().optional().describe("DART corporation code (8 digits)"),
      corp_name: z.string().optional().describe("Company name (Korean or English)"),
      keyword: z.string().optional().describe("Search keyword for disclosure title"),
      bgn_de: z.string().optional().describe("Start date (YYYYMMDD)"),
      end_de: z.string().optional().describe("End date (YYYYMMDD)"),
      page_count: z.number().optional().describe("Results per page (default 10, max 100)"),
    }),
    endpoint: "/v1/dart/disclosure",
  },
  {
    name: "dart_financial",
    description: "Retrieve financial statements for a Korean company from DART. Includes income statement, balance sheet, and cash flow data.",
    inputSchema: z.object({
      corp_code: z.string().describe("DART corporation code (8 digits)"),
      bsns_year: z.string().describe("Business year (YYYY)"),
      reprt_code: z.enum(["11013", "11012", "11014", "11011"]).optional()
        .describe("Report type: 11013=Q1, 11012=H1, 11014=Q3, 11011=Annual (default)"),
    }),
    endpoint: "/v1/dart/financial",
  },
];

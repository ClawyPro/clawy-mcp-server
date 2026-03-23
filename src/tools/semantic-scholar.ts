import { z } from "zod";
import type { ToolDef } from "./types.js";

export const semanticScholarTools: ToolDef[] = [
  {
    name: "semantic_scholar_search",
    description: "Search academic papers on Semantic Scholar. Find research papers by topic, author, or keyword. Returns titles, abstracts, citation counts, and PDF links.",
    inputSchema: z.object({
      query: z.string().describe("Search query for academic papers"),
      limit: z.number().optional().describe("Number of results (default 10, max 100)"),
      year: z.string().optional().describe("Publication year filter (e.g., '2024', '2023-2025')"),
      fields_of_study: z.array(z.string()).optional()
        .describe("Field filter (e.g., ['Computer Science', 'Medicine'])"),
      open_access_only: z.boolean().optional().describe("Only return open access papers"),
    }),
    endpoint: "/v1/semantic-scholar/search",
  },
];

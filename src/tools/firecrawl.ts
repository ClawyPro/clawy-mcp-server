import { z } from "zod";
import type { ToolDef } from "./types.js";

export const firecrawlTools: ToolDef[] = [
  {
    name: "firecrawl_scrape",
    description: "Scrape a single URL and extract clean, structured content. Handles JavaScript rendering and bypasses common blocks. Returns markdown optimized for LLMs.",
    inputSchema: z.object({
      url: z.string().describe("URL to scrape"),
      formats: z.array(z.enum(["markdown", "html", "rawHtml", "links", "screenshot"])).optional()
        .describe("Output formats (default: ['markdown'])"),
      onlyMainContent: z.boolean().optional().describe("Extract only main content, skip nav/footer (default true)"),
      waitFor: z.number().optional().describe("Wait milliseconds for JS rendering"),
    }),
    endpoint: "/v1/firecrawl/scrape",
  },
  {
    name: "firecrawl_crawl",
    description: "Crawl a website starting from a URL. Discovers and scrapes linked pages. Cost is per page crawled.",
    inputSchema: z.object({
      url: z.string().describe("Starting URL to crawl"),
      limit: z.number().optional().describe("Maximum pages to crawl (default 10)"),
      maxDepth: z.number().optional().describe("Maximum link depth (default 2)"),
      includePaths: z.array(z.string()).optional().describe("Glob patterns to include (e.g., ['/blog/*'])"),
      excludePaths: z.array(z.string()).optional().describe("Glob patterns to exclude"),
    }),
    endpoint: "/v1/firecrawl/crawl",
  },
  {
    name: "firecrawl_map",
    description: "Map all URLs on a website without extracting content. Fast way to discover site structure.",
    inputSchema: z.object({
      url: z.string().describe("Website URL to map"),
      limit: z.number().optional().describe("Maximum URLs to discover (default 100)"),
    }),
    endpoint: "/v1/firecrawl/map",
  },
];

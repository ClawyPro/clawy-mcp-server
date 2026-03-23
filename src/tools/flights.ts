import { z } from "zod";
import type { ToolDef } from "./types.js";

export const flightsTools: ToolDef[] = [
  {
    name: "flights_search",
    description: "Search flights worldwide by origin, destination, and dates. Returns airlines, prices, duration, and layover info.",
    inputSchema: z.object({
      origin: z.string().describe("Origin airport code or city (e.g., 'ICN', 'NRT', 'JFK')"),
      destination: z.string().describe("Destination airport code or city"),
      departure_date: z.string().describe("Departure date (YYYY-MM-DD)"),
      return_date: z.string().optional().describe("Return date for round trips (YYYY-MM-DD)"),
      adults: z.number().optional().describe("Number of adult passengers (default 1)"),
      cabin_class: z.enum(["economy", "premium_economy", "business", "first"]).optional()
        .describe("Cabin class (default: economy)"),
      nonstop: z.boolean().optional().describe("Only show nonstop flights"),
    }),
    endpoint: "/v1/flights/search",
  },
  {
    name: "flights_calendar",
    description: "View cheapest flight prices by month for a specific route. Great for finding the best travel dates.",
    inputSchema: z.object({
      origin: z.string().describe("Origin airport code (e.g., 'ICN', 'NRT')"),
      destination: z.string().describe("Destination airport code"),
      month: z.string().describe("Month to search (YYYY-MM)"),
    }),
    endpoint: "/v1/flights/calendar",
  },
  {
    name: "flights_discover",
    description: "Discover popular routes and flight deals from an origin airport. Find inspiration for where to travel next.",
    inputSchema: z.object({
      origin: z.string().describe("Origin airport code (e.g., 'ICN', 'NRT', 'JFK')"),
      budget: z.number().optional().describe("Maximum price (USD)"),
      month: z.string().optional().describe("Preferred month (YYYY-MM)"),
    }),
    endpoint: "/v1/flights/discover",
  },
];

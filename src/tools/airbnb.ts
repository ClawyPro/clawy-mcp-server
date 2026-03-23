import { z } from "zod";
import type { ToolDef } from "./types.js";

export const airbnbTools: ToolDef[] = [
  {
    name: "airbnb_search",
    description: "Search Airbnb listings worldwide. Find vacation rentals, apartments, and unique stays by location, dates, guests, and price range.",
    inputSchema: z.object({
      location: z.string().describe("Location (e.g., 'Tokyo', 'Bali', 'Barcelona')"),
      checkin: z.string().optional().describe("Check-in date (YYYY-MM-DD)"),
      checkout: z.string().optional().describe("Check-out date (YYYY-MM-DD)"),
      guests: z.number().optional().describe("Number of guests (default 2)"),
      min_price: z.number().optional().describe("Minimum price per night (USD)"),
      max_price: z.number().optional().describe("Maximum price per night (USD)"),
      property_type: z.string().optional().describe("Property type (e.g., 'Entire home', 'Private room')"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/airbnb/search",
  },
  {
    name: "airbnb_details",
    description: "Get full Airbnb listing details including amenities, house rules, host info, photos, and availability.",
    inputSchema: z.object({
      listing_id: z.string().describe("Airbnb listing ID from search results"),
      checkin: z.string().optional().describe("Check-in date (YYYY-MM-DD)"),
      checkout: z.string().optional().describe("Check-out date (YYYY-MM-DD)"),
      guests: z.number().optional().describe("Number of guests"),
    }),
    endpoint: "/v1/airbnb/details",
  },
];

import { z } from "zod";
import type { ToolDef } from "./types.js";

export const hotelsTools: ToolDef[] = [
  {
    name: "hotels_search",
    description: "Search available hotels worldwide via Jinko (2M+ properties). Find by location, check-in/out dates, guest count, and price range.",
    inputSchema: z.object({
      location: z.string().describe("Location name or coordinates (e.g., 'Tokyo', 'Paris', '35.6762,139.6503')"),
      checkin: z.string().describe("Check-in date (YYYY-MM-DD)"),
      checkout: z.string().describe("Check-out date (YYYY-MM-DD)"),
      guests: z.number().optional().describe("Number of guests (default 2)"),
      rooms: z.number().optional().describe("Number of rooms (default 1)"),
      min_price: z.number().optional().describe("Minimum price per night (USD)"),
      max_price: z.number().optional().describe("Maximum price per night (USD)"),
      page: z.number().optional().describe("Page number (default 1)"),
    }),
    endpoint: "/v1/hotels/search",
  },
  {
    name: "hotels_details",
    description: "Get full hotel details including room options, amenities, photos, and real-time rates.",
    inputSchema: z.object({
      hotel_id: z.string().describe("Hotel ID from search results"),
      checkin: z.string().optional().describe("Check-in date for rate lookup (YYYY-MM-DD)"),
      checkout: z.string().optional().describe("Check-out date for rate lookup (YYYY-MM-DD)"),
      guests: z.number().optional().describe("Number of guests"),
    }),
    endpoint: "/v1/hotels/details",
  },
  {
    name: "hotels_find_place",
    description: "Convert a location name to coordinates for hotel search. Useful when you need exact lat/lng for a destination.",
    inputSchema: z.object({
      query: z.string().describe("Location name (e.g., 'Shibuya, Tokyo', 'Manhattan, New York')"),
    }),
    endpoint: "/v1/hotels/find-place",
  },
];

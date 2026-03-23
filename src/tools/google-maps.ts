import { z } from "zod";
import type { ToolDef } from "./types.js";

export const googleMapsTools: ToolDef[] = [
  {
    name: "google_maps_places",
    description: "Search for places using Google Maps Platform. Find restaurants, shops, landmarks, and more by text query or nearby location.",
    inputSchema: z.object({
      query: z.string().optional().describe("Text search query (e.g., 'coffee near Gangnam Station')"),
      location: z.string().optional().describe("Latitude,longitude for nearby search (e.g., '37.4979,127.0276')"),
      radius: z.number().optional().describe("Search radius in meters (max 50000)"),
      type: z.string().optional().describe("Place type filter (e.g., restaurant, cafe, hospital)"),
      language: z.string().optional().describe("Language for results (e.g., ko, en, ja)"),
    }),
    endpoint: "/v1/google-maps/places",
  },
  {
    name: "google_maps_geocode",
    description: "Convert addresses to coordinates (geocoding) or coordinates to addresses (reverse geocoding) using Google Maps.",
    inputSchema: z.object({
      address: z.string().optional().describe("Address to geocode"),
      latlng: z.string().optional().describe("Coordinates for reverse geocode (e.g., '37.4979,127.0276')"),
      language: z.string().optional().describe("Language for results"),
    }),
    endpoint: "/v1/google-maps/geocode",
  },
  {
    name: "google_maps_directions",
    description: "Get directions between two points via Google Maps. Supports driving, walking, bicycling, and transit modes.",
    inputSchema: z.object({
      origin: z.string().describe("Starting point (address or lat,lng)"),
      destination: z.string().describe("Destination (address or lat,lng)"),
      mode: z.enum(["driving", "walking", "bicycling", "transit"]).optional()
        .describe("Travel mode (default: driving)"),
      language: z.string().optional().describe("Language for instructions"),
    }),
    endpoint: "/v1/google-maps/directions",
  },
];

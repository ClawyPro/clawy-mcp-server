import { z } from "zod";
import type { ToolDef } from "./types.js";

export const geminiTools: ToolDef[] = [
  {
    name: "gemini_image",
    description: "Generate an image from a text prompt using Google Gemini. Returns a high-quality AI-generated image.",
    inputSchema: z.object({
      prompt: z.string().describe("Text description of the image to generate"),
      aspect_ratio: z.string().optional().describe("Aspect ratio (e.g., '1:1', '16:9', '9:16')"),
    }),
    endpoint: "/v1/gemini/image",
  },
  {
    name: "gemini_edit",
    description: "Edit an existing image with a text prompt using Google Gemini. Modify, enhance, or transform images with natural language instructions.",
    inputSchema: z.object({
      prompt: z.string().describe("Edit instruction (e.g., 'remove the background', 'make it sunset')"),
      image_url: z.string().describe("URL of the image to edit"),
    }),
    endpoint: "/v1/gemini/edit",
  },
  {
    name: "gemini_video",
    description: "Start async video generation from a text prompt using Veo 3.1 Fast. Returns a generation ID — use gemini_video_status to check progress.",
    inputSchema: z.object({
      prompt: z.string().describe("Text description of the video to generate"),
      duration: z.number().optional().describe("Video duration in seconds (default varies by model)"),
    }),
    endpoint: "/v1/gemini/video",
  },
  {
    name: "gemini_video_status",
    description: "Check the status of an async video generation job. Returns progress, and the video URL when complete. Free to call.",
    inputSchema: z.object({
      generation_id: z.string().describe("Generation ID returned from gemini_video"),
    }),
    endpoint: "/v1/gemini/video-status",
  },
];

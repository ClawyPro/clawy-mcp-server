import { z } from "zod";
import type { ToolDef } from "./types.js";

export const elevenlabsTools: ToolDef[] = [
  {
    name: "elevenlabs_tts",
    description: "Convert text to speech using ElevenLabs AI voice synthesis. Returns high-quality audio. Supports multiple languages and voices.",
    inputSchema: z.object({
      text: z.string().describe("Text to convert to speech (max 5000 chars)"),
      voice_id: z.string().optional().describe("ElevenLabs voice ID (default: Rachel). Use elevenlabs_voices to list available voices."),
      model_id: z.string().optional().describe("Model: eleven_multilingual_v2 (default), eleven_turbo_v2"),
      output_format: z.enum(["mp3_44100_128", "mp3_22050_32", "pcm_16000", "pcm_44100"]).optional()
        .describe("Audio format (default: mp3_44100_128)"),
    }),
    endpoint: "/v1/elevenlabs/tts",
  },
  {
    name: "elevenlabs_voices",
    description: "List all available ElevenLabs voices with IDs, names, and language info. Free to call — use to find the right voice_id for TTS.",
    inputSchema: z.object({}),
    endpoint: "/v1/elevenlabs/voices",
    method: "GET",
  },
];

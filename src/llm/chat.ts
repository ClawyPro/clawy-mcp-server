import { z } from "zod";
import type { ToolDef } from "../tools/types.js";

export const llmTools: ToolDef[] = [
  {
    name: "llm_chat",
    description: "Smart-routed LLM chat completion. Automatically selects the optimal model (Claude, GPT, Gemini, Llama) based on task complexity. No API keys needed — pay per call with USDC credits.",
    inputSchema: z.object({
      model: z.enum(["auto", "gpt-5-nano", "kimi-k2p5", "claude-opus-4-6"]).optional()
        .describe("Model selection: 'auto' for smart routing (recommended), or specify a model directly"),
      messages: z.array(z.object({
        role: z.enum(["system", "user", "assistant"]),
        content: z.string(),
      })).describe("Chat messages array"),
      temperature: z.number().optional().describe("Sampling temperature (0-2, default 0.7)"),
      max_tokens: z.number().optional().describe("Maximum response tokens"),
    }),
    endpoint: "/v1/llm/chat",
  },
];

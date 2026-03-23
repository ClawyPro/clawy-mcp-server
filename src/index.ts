#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { allTools } from "./tools/index.js";
import { gatewayRequest } from "./client.js";
import { getWalletAddress } from "./auth.js";

const server = new McpServer({
  name: "clawy",
  version: "0.1.0",
});

// Register all tools
for (const tool of allTools) {
  server.tool(
    tool.name,
    tool.description,
    tool.inputSchema.shape,
    async (params) => {
      const method = tool.method || "POST";
      const result = await gatewayRequest(method, tool.endpoint, params as Record<string, unknown>);

      if (result.error) {
        return {
          content: [{ type: "text" as const, text: `Error (${result.status}): ${result.error}` }],
          isError: true,
        };
      }

      const text = typeof result.data === "string"
        ? result.data
        : JSON.stringify(result.data, null, 2);

      return {
        content: [{ type: "text" as const, text }],
      };
    },
  );
}

// Balance check tool
server.tool(
  "clawy_balance",
  "Check your Clawy x402 credit balance. Shows remaining USDC credits and wallet address.",
  {},
  async () => {
    const result = await gatewayRequest("GET", "/v1/balance");
    const wallet = getWalletAddress();
    const text = typeof result.data === "string"
      ? result.data
      : JSON.stringify({ wallet, ...result.data as object }, null, 2);
    return { content: [{ type: "text" as const, text }] };
  },
);

// Service catalog resource
server.resource(
  "services",
  "clawy://services",
  async () => {
    const result = await gatewayRequest("GET", "/v1/services");
    const text = typeof result.data === "string"
      ? result.data
      : JSON.stringify(result.data, null, 2);
    return {
      contents: [{ uri: "clawy://services", mimeType: "application/json", text }],
    };
  },
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});

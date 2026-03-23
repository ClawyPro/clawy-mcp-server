# Clawy MCP Server

**Pay-per-use API tools and LLM gateway for AI agents.** No API keys needed — authenticate with an Ethereum wallet and pay with USDC on Base.

[![Clawy Server MCP server](https://glama.ai/mcp/servers/ClawyPro/clawy-mcp-server/badges/card.svg)](https://glama.ai/mcp/servers/ClawyPro/clawy-mcp-server)

15 API services + smart LLM routing, accessible via [Model Context Protocol (MCP)](https://modelcontextprotocol.io).

## Quick Start

### Claude Desktop / Claude Code

Add to your MCP config:

```json
{
  "mcpServers": {
    "clawy": {
      "command": "npx",
      "args": ["-y", "clawy-mcp-server"],
      "env": {
        "CLAWY_WALLET_PRIVATE_KEY": "0xYOUR_PRIVATE_KEY"
      }
    }
  }
}
```

### Cursor / Windsurf

Same config in your `.cursor/mcp.json` or equivalent.

### Top Up Credits

Send USDC on Base chain to `0x6a2f675f5f81909eecd1966a15c90877bc106858` (minimum $1). Credits are applied automatically.

---

## Available Tools

### Financial Data

| Tool | Description | Cost |
|------|-------------|------|
| `dart_disclosure` | Search Korean corporate filings from [DART](https://dart.fss.or.kr) (FSS electronic disclosure) | $0.001 |
| `dart_financial` | Korean company financial statements (income, balance sheet, cash flow) | $0.001 |
| `fmp_quote` | Real-time & historical stock quotes (US + global markets) | $0.0012 |
| `fmp_financial` | Company financial statements via Financial Modeling Prep | $0.0012 |
| `alpha_vantage_query` | Stock time series, forex rates, crypto prices, economic indicators | ~$0.001 |
| `finnhub_query` | Real-time quotes, company news, earnings, market status | ~$0.001 |

### Search & Web Scraping

| Tool | Description | Cost |
|------|-------------|------|
| `brave_search` | Privacy-focused web search with structured results and snippets | $0.006 |
| `firecrawl_scrape` | Scrape any URL — handles JS rendering, returns clean markdown | $0.012 |
| `firecrawl_crawl` | Crawl websites starting from a URL (cost per page) | $0.012/page |
| `firecrawl_map` | Discover all URLs on a site without extracting content | $0.012 |

### Maps & Navigation

| Tool | Description | Cost |
|------|-------------|------|
| `google_maps_places` | Search places, restaurants, landmarks via Google Maps | $0.0036 |
| `google_maps_geocode` | Address ↔ coordinates conversion | $0.006 |
| `google_maps_directions` | Driving, walking, transit directions between points | $0.006 |
| `kakao_maps_search` | Korean local search — best for Korean addresses and businesses | $0.001 |
| `tmap_route` | Korean driving routes with real-time traffic, ETA, toll fees | $0.0012 |
| `tmap_poi` | Korean POI search with detailed address info | $0.001 |

### Translation & Speech

| Tool | Description | Cost |
|------|-------------|------|
| `deepl_translate` | Neural machine translation (30+ languages) | ~$0.001 |
| `elevenlabs_tts` | AI text-to-speech synthesis (multiple voices & languages) | ~$0.001 |

### Domain-Specific APIs

| Tool | Description | Cost |
|------|-------------|------|
| `tabelog_search` | Search Japanese restaurants on [Tabelog](https://tabelog.com) — ratings, reviews, cuisine | $0.0012 |
| `court_auction_search` | Search Korean court auction property listings | $0.001 |
| `court_auction_detail` | Detailed auction case info — appraisal, bids, documents | $0.001 |
| `data_go_kr_query` | Korean government open data (real estate, weather, transport) | $0.001 |
| `semantic_scholar_search` | Academic paper search — titles, abstracts, citations, PDFs | ~$0.001 |

### LLM Gateway

| Tool | Description | Cost |
|------|-------------|------|
| `llm_chat` | Smart-routed LLM — auto-selects Claude, GPT, Gemini, or Llama based on task complexity | $0.50/call |

No API keys needed for any LLM provider. The smart router analyzes your request and picks the optimal model.

---

## How It Works

```
Your AI Agent (Claude, Cursor, etc.)
    ↓ MCP protocol (stdio)
clawy-mcp-server (this package)
    ↓ HTTPS (Bearer token)
x402.clawy.pro (API Gateway)
    ↓
Upstream APIs (DART, Google Maps, OpenAI, etc.)
```

1. **Auth**: Your wallet private key signs an EIP-191 message → 24-hour session token (auto-refreshed)
2. **Use**: Call any tool through MCP — the server proxies to the gateway
3. **Pay**: Credits deducted per call (microcent precision). Top up by sending USDC on Base.

### Wallet Setup

Use a **dedicated wallet** for this service. We recommend creating a new wallet specifically for API credits:

1. Create a wallet (e.g., via [MetaMask](https://metamask.io) or any EVM wallet)
2. Fund it with USDC on Base chain
3. Send USDC to `0x6a2f675f5f81909eecd1966a15c90877bc106858` to top up credits
4. Use the wallet's private key in `CLAWY_WALLET_PRIVATE_KEY`

### Check Balance

Use the `clawy_balance` tool to check your remaining credits at any time.

---

## Configuration

| Environment Variable | Required | Description |
|---------------------|----------|-------------|
| `CLAWY_WALLET_PRIVATE_KEY` | Yes | Ethereum wallet private key (hex, with 0x prefix) |
| `CLAWY_GATEWAY_URL` | No | Gateway URL (default: `https://x402.clawy.pro`) |

---

## Use Cases

- **Korean stock research**: DART filings + FMP quotes + Brave search for news
- **Japan restaurant planning**: Tabelog search + Google Maps directions
- **Korean real estate**: Court auction listings + Kakao Maps for location
- **Academic research**: Semantic Scholar papers + DeepL translation
- **Multilingual agents**: DeepL translate + ElevenLabs TTS
- **General AI agents**: Smart LLM routing without managing API keys

---

## Pricing

All prices include a 30% platform margin. Credits are in USDC (1 USDC = $1).

- Minimum top-up: $1 USDC
- Credits persist until used (no expiry)
- Microcent precision billing — you only pay for what you use

---

## x402 Protocol

This server uses the [x402 payment protocol](https://www.x402.org/) for trustless, wallet-based API access:

- **Identity**: Your Ethereum wallet address = your account
- **Auth**: EIP-191 signature verification (no passwords, no signup)
- **Payment**: USDC on Base chain (low fees, fast confirmation)
- **Billing**: Per-call microcent deduction from prepaid credit balance

---

## Links

- **Gateway**: [x402.clawy.pro](https://x402.clawy.pro)
- **Platform**: [clawy.pro](https://clawy.pro)
- **x402 Protocol**: [x402.org](https://www.x402.org/)

## License

MIT
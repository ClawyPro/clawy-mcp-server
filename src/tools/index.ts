import type { ToolDef } from "./types.js";
import { dartTools } from "./dart.js";
import { fmpTools } from "./fmp.js";
import { braveTools } from "./brave.js";
import { firecrawlTools } from "./firecrawl.js";
import { googleMapsTools } from "./google-maps.js";
import { kakaoMapsTools } from "./kakao-maps.js";
import { tmapTools } from "./tmap.js";
import { deeplTools } from "./deepl.js";
import { elevenlabsTools } from "./elevenlabs.js";
import { tabelogTools } from "./tabelog.js";
import { courtAuctionTools } from "./court-auction.js";
import { dataGoKrTools } from "./data-go-kr.js";
import { semanticScholarTools } from "./semantic-scholar.js";
import { alphaVantageTools } from "./alpha-vantage.js";
import { finnhubTools } from "./finnhub.js";
import { llmTools } from "../llm/chat.js";

export type { ToolDef } from "./types.js";

export const allTools: ToolDef[] = [
  ...dartTools,
  ...fmpTools,
  ...braveTools,
  ...firecrawlTools,
  ...googleMapsTools,
  ...kakaoMapsTools,
  ...tmapTools,
  ...deeplTools,
  ...elevenlabsTools,
  ...tabelogTools,
  ...courtAuctionTools,
  ...dataGoKrTools,
  ...semanticScholarTools,
  ...alphaVantageTools,
  ...finnhubTools,
  ...llmTools,
];

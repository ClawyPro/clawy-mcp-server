import { privateKeyToAccount, type PrivateKeyAccount } from "viem/accounts";
import type { Hex } from "viem";

const GATEWAY_URL = process.env.CLAWY_GATEWAY_URL || "https://x402.clawy.pro";
const SESSION_REFRESH_BUFFER_MS = 5 * 60 * 1000; // refresh 5 min before expiry

interface Session {
  token: string;
  expiresAt: number;
}

let cachedSession: Session | null = null;
let account: PrivateKeyAccount | null = null;

function getAccount(): PrivateKeyAccount {
  if (account) return account;
  const key = process.env.CLAWY_WALLET_PRIVATE_KEY;
  if (!key) {
    throw new Error("CLAWY_WALLET_PRIVATE_KEY environment variable is required");
  }
  account = privateKeyToAccount(key as Hex);
  return account;
}

async function authenticate(): Promise<Session> {
  const acc = getAccount();
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const message = `clawy-x402-gateway:auth:${timestamp}:${nonce}`;

  const signature = await acc.signMessage({ message });

  const res = await fetch(`${GATEWAY_URL}/v1/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      wallet_address: acc.address,
      signature,
      timestamp,
      nonce,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Auth failed (${res.status}): ${body}`);
  }

  const data = (await res.json()) as { token: string; expires_at: string };
  return {
    token: data.token,
    expiresAt: new Date(data.expires_at).getTime(),
  };
}

export async function getSessionToken(): Promise<string> {
  if (cachedSession && Date.now() < cachedSession.expiresAt - SESSION_REFRESH_BUFFER_MS) {
    return cachedSession.token;
  }
  cachedSession = await authenticate();
  return cachedSession.token;
}

export function getGatewayUrl(): string {
  return GATEWAY_URL;
}

export function getWalletAddress(): string {
  return getAccount().address;
}

import { getSessionToken, getGatewayUrl } from "./auth.js";

export interface GatewayResponse {
  status: number;
  data: unknown;
  error?: string;
}

export async function gatewayRequest(
  method: string,
  path: string,
  body?: Record<string, unknown>,
): Promise<GatewayResponse> {
  const token = await getSessionToken();
  const url = `${getGatewayUrl()}${path}`;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const contentType = res.headers.get("content-type") || "";

  if (contentType.includes("audio/") || contentType.includes("application/octet-stream")) {
    const buf = await res.arrayBuffer();
    return {
      status: res.status,
      data: { binary: true, contentType, size: buf.byteLength, base64: Buffer.from(buf).toString("base64") },
    };
  }

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    data = await res.text();
  }

  if (!res.ok) {
    const errMsg = typeof data === "object" && data !== null && "error" in data
      ? (data as { error: string }).error
      : String(data);
    return { status: res.status, data, error: errMsg };
  }

  return { status: res.status, data };
}

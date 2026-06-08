import { env } from "../config/env.js";
import { allowedExternalEndpointKeys, portalEndpointMap } from "../constants/portalEndpoints.js";

export async function fetchAuthorizedPortalEndpoint(endpointKey, options = {}) {
  if (!env.EXTERNAL_PORTAL_ENABLED) {
    const error = new Error("External university API integration is disabled. Use the mock service or connect an officially authorized API token.");
    error.statusCode = 501;
    throw error;
  }

  if (!env.AUTHORIZED_PORTAL_BASE_URL || !env.AUTHORIZED_PORTAL_TOKEN) {
    const error = new Error("Authorized portal base URL or token is missing");
    error.statusCode = 500;
    throw error;
  }

  if (!allowedExternalEndpointKeys.has(endpointKey)) {
    const error = new Error("This external endpoint is not whitelisted");
    error.statusCode = 403;
    throw error;
  }

  const path = portalEndpointMap[endpointKey];
  const url = new URL(path, env.AUTHORIZED_PORTAL_BASE_URL);

  if (options.query && typeof options.query === "object") {
    for (const [key, value] of Object.entries(options.query)) {
      if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${env.AUTHORIZED_PORTAL_TOKEN}`,
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const error = new Error(`Authorized portal request failed with status ${response.status}`);
    error.statusCode = response.status;
    throw error;
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (_err) {
    return text;
  }
}

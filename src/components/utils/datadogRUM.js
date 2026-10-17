
import { datadogRum } from "@datadog/browser-rum";

let initialized = false;

export function initDatadogRUM() {
  if (initialized || typeof window === "undefined") return;

  const applicationId = process.env.NEXT_PUBLIC_DD_APPLICATION_ID;
  const clientToken = process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN;

  if (!applicationId || !clientToken) {
    console.warn("Datadog RUM environment variables are missing");
    return;
  }

  datadogRum.init({
    applicationId,
    clientToken,
    site: "datadoghq.eu",
    service: "admin-frontend",
    env: process.env.NODE_ENV,
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 0,
    trackResources: true,
    trackUserInteractions: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  initialized = true;
}

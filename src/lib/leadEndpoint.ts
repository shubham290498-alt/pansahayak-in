// Keep secrets out of the repo.
// Set VITE_LEAD_WEBHOOK_URL to your full webhook URL.
export const LEAD_WEBHOOK_URL = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL as string;


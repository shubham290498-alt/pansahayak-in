export type LeadPayload = {
  page: string;
  submittedAt: string;
  name: string;
  email?: string;
  message?: string;
  mobile?: string;
  service?: string;
};

export async function postLead(payload: LeadPayload): Promise<void> {
  const { LEAD_WEBHOOK_URL } = await import("@/lib/leadEndpoint");

  // Prevent sending if the endpoint isn't configured
  // (and avoid accidental usage of placeholder URLs)

  const url = LEAD_WEBHOOK_URL;
  if (!url || url.includes("example.com")) throw new Error("Lead endpoint is not configured");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Lead request failed (${res.status}). ${text}`.trim());
  }
}


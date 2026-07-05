import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mock endpoint: validates input and returns success without a real database
// or email-service integration yet. Swap the body of this handler for a real
// provider (e.g. an ESP API call + a database insert) when the backend lands.
export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 422 });
  }

  return NextResponse.json({ ok: true, message: "Subscribed! Watch your inbox for laundry tips and offers." });
}

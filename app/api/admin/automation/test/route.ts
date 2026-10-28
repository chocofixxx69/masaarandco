import { NextRequest, NextResponse } from "next/server";
import { testWebhook } from "@/lib/admin/automations";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function POST(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { url, secret } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "Webhook endpoint URL is required to execute test" },
        { status: 400 }
      );
    }

    const result = await testWebhook(url, secret);
    return NextResponse.json(result);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: msg || "Failed to execute webhook test" },
      { status: 500 }
    );
  }
}

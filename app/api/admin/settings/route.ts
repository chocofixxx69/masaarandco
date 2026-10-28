import { NextRequest, NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/admin/storage";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function GET() {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = getSettings();
  return NextResponse.json({ settings });
}

export async function PUT(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveSettings(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}

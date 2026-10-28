import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminCredentials,
  ADMIN_COOKIE_NAME,
  AUTH_TOKEN_VALUE,
  isUserAdminAuthenticated,
} from "@/lib/admin/auth";

export async function GET() {
  const authenticated = await isUserAdminAuthenticated();
  return NextResponse.json({ authenticated });
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const isValid = verifyAdminCredentials(username, password);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid administrator credentials" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Admin authentication successful",
      user: { username: "admin", role: "Super Administrator" },
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: AUTH_TOKEN_VALUE,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Authentication server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}

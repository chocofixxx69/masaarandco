import { NextRequest, NextResponse } from "next/server";
import { getInquiries, updateInquiry, deleteInquiry } from "@/lib/admin/storage";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function GET(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const statusFilter = searchParams.get("status");
  const search = searchParams.get("search")?.toLowerCase();

  let list = getInquiries();

  if (statusFilter && statusFilter !== "all") {
    list = list.filter((i) => i.status === statusFilter);
  }

  if (search) {
    list = list.filter(
      (i) =>
        i.name.toLowerCase().includes(search) ||
        i.email.toLowerCase().includes(search) ||
        (i.company && i.company.toLowerCase().includes(search)) ||
        i.service.toLowerCase().includes(search) ||
        i.id.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({ inquiries: list, total: list.length });
}

export async function PATCH(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, updates } = await request.json();
    if (!id || !updates) {
      return NextResponse.json({ error: "Missing ID or updates" }, { status: 400 });
    }

    const updated = updateInquiry(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, inquiry: updated });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing inquiry ID" }, { status: 400 });
  }

  const deleted = deleteInquiry(id);
  if (!deleted) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Inquiry removed" });
}

import { NextResponse } from "next/server";
import { getInquiries } from "@/lib/admin/storage";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function GET() {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const inquiries = getInquiries();

  // CSV formatting
  const headers = ["Reference ID", "Date", "Name", "Email", "Company", "Service", "Budget", "Priority", "Status", "Message", "Internal Notes"];
  const rows = inquiries.map((i) => [
    `"${i.id}"`,
    `"${new Date(i.createdAt).toISOString()}"`,
    `"${i.name.replace(/"/g, '""')}"`,
    `"${i.email.replace(/"/g, '""')}"`,
    `"${(i.company || "").replace(/"/g, '""')}"`,
    `"${i.service.replace(/"/g, '""')}"`,
    `"${(i.budget || "").replace(/"/g, '""')}"`,
    `"${i.priority}"`,
    `"${i.status}"`,
    `"${i.message.replace(/"/g, '""').replace(/\n/g, " ")}"`,
    `"${(i.notes || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="masaar-inquiries-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}

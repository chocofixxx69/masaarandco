import { NextRequest, NextResponse } from "next/server";
import { getServices, saveServices } from "@/lib/admin/storage";
import { ServiceData } from "@/lib/admin/types";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function GET() {
  const services = getServices();
  return NextResponse.json({ services });
}

export async function PUT(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const service: ServiceData = await request.json();
    if (!service.id) {
      return NextResponse.json({ error: "Service ID is required" }, { status: 400 });
    }

    const services = getServices();
    const index = services.findIndex((s) => s.id === service.id);
    if (index === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    services[index] = { ...services[index], ...service };
    saveServices(services);

    return NextResponse.json({ success: true, service: services[index] });
  } catch {
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}

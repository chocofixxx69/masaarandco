import { redirect } from "next/navigation";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";
import AdminDashboard from "./AdminDashboard";

export const metadata = {
  title: "Admin Control Plane & Automations | Masaar & Co.",
  description:
    "Secure executive administration suite for client inquiries, portfolio CMS, and automated dispatch pipelines.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const isAuth = await isUserAdminAuthenticated();

  if (!isAuth) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}

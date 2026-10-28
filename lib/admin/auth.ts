import { cookies } from "next/headers";

export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "masar2026";
export const ADMIN_COOKIE_NAME = "masaar_admin_session";
export const AUTH_TOKEN_VALUE = "masaar_admin_authenticated_session_token_2026";

export function verifyAdminCredentials(user: string, pass: string): boolean {
  return (
    user.trim().toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
    pass.trim() === ADMIN_PASSWORD
  );
}

export async function isUserAdminAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return token === AUTH_TOKEN_VALUE;
  } catch {
    return false;
  }
}

import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check for bots
    if (body.hp_field && body.hp_field.length > 0) {
      return NextResponse.json(
        { success: false, message: "Invalid submission detected" },
        { status: 400 }
      );
    }

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const validData = validationResult.data;

    // Simulate email dispatch delay (e.g. Resend / SendGrid / Postmark)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${validData.name}. Your inquiry has been registered with Masaar & Co. Our technology directors will respond within 24 hours.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

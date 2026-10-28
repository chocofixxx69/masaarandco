import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { addInquiry } from "@/lib/admin/storage";
import { runInquiryAutomation } from "@/lib/admin/automations";

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

    // 1. Store inquiry persistently
    const storedInquiry = addInquiry({
      name: validData.name,
      email: validData.email,
      company: validData.company || "",
      service: validData.service,
      budget: validData.budget || "",
      message: validData.message,
    });

    // 2. Trigger automated workflow (webhooks, email dispatch, notification pipeline)
    try {
      await runInquiryAutomation(storedInquiry);
    } catch (autoErr) {
      console.error("Automation execution error:", autoErr);
      // Non-fatal, inquiry is already saved
    }

    // 3. Return success response with reference ID
    return NextResponse.json(
      {
        success: true,
        referenceId: storedInquiry.id,
        message: `Thank you, ${validData.name}. Your inquiry (Ref: #${storedInquiry.id}) has been registered with Masaar & Co. Our technology directors will review your brief and respond shortly.`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API submission error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

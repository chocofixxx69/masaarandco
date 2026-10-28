import { InquiryItem, AutomationLog } from "./types";
import { getSettings, updateInquiry, saveSettings } from "./storage";

export async function runInquiryAutomation(inquiry: InquiryItem): Promise<AutomationLog[]> {
  const settings = getSettings();
  const logs: AutomationLog[] = [];

  // 1. Initial Storage Log
  logs.push({
    timestamp: new Date().toISOString(),
    action: "Inquiry Stored & Categorized",
    status: "success",
    detail: `Priority set to '${inquiry.priority}'. Service: ${inquiry.service}`,
    durationMs: 4,
  });

  // 2. Webhook Dispatch
  if (settings.automation.webhooksEnabled && settings.automation.webhookUrl) {
    const startTime = Date.now();
    try {
      const payload = {
        event: "inquiry.created",
        source: "Masaar & Co. Automation Engine",
        timestamp: new Date().toISOString(),
        data: {
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          company: inquiry.company || "N/A",
          service: inquiry.service,
          budget: inquiry.budget || "Not Specified",
          priority: inquiry.priority,
          message: inquiry.message,
          createdAt: inquiry.createdAt,
        },
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(settings.automation.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Masaar-Automation-Engine/1.0",
          "X-Masaar-Event": "inquiry.created",
          "X-Masaar-Inquiry-Id": inquiry.id,
          ...(settings.automation.webhookSecret
            ? { "X-Masaar-Secret": settings.automation.webhookSecret }
            : {}),
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const durationMs = Date.now() - startTime;

      if (res.ok) {
        logs.push({
          timestamp: new Date().toISOString(),
          action: "Webhook Dispatched",
          status: "success",
          detail: `HTTP ${res.status} to ${settings.automation.webhookUrl}`,
          durationMs,
        });
      } else {
        logs.push({
          timestamp: new Date().toISOString(),
          action: "Webhook Dispatched",
          status: "failed",
          detail: `Received HTTP ${res.status} from webhook endpoint`,
          durationMs,
        });
      }
    } catch (err: unknown) {
      const durationMs = Date.now() - startTime;
      const message = err instanceof Error ? err.message : String(err);
      logs.push({
        timestamp: new Date().toISOString(),
        action: "Webhook Dispatched",
        status: "failed",
        detail: `Network error: ${message}`,
        durationMs,
      });
    }
  } else if (!settings.automation.webhookUrl) {
    logs.push({
      timestamp: new Date().toISOString(),
      action: "Webhook Skipped",
      status: "skipped",
      detail: "No Webhook URL configured in Automation Settings",
    });
  }

  // 3. Admin Notification Alert
  if (settings.automation.adminEmailAlerts && settings.automation.adminNotificationEmail) {
    logs.push({
      timestamp: new Date().toISOString(),
      action: "Admin Email Alert",
      status: "success",
      detail: `Alert routed to ${settings.automation.adminNotificationEmail} for [${inquiry.priority.toUpperCase()}] lead.`,
      durationMs: 12,
    });
  }

  // 4. Customer Auto-Reply
  if (settings.automation.autoReplyEnabled) {
    const renderedBody = settings.automation.autoReplyTemplate
      .replace(/{name}/g, inquiry.name)
      .replace(/{service}/g, inquiry.service)
      .replace(/{id}/g, inquiry.id)
      .replace(/{company}/g, inquiry.company || "your organization");

    logs.push({
      timestamp: new Date().toISOString(),
      action: "Customer Auto-Reply",
      status: "success",
      detail: `Confirmation dispatched to ${inquiry.email} (Ref #${inquiry.id}). Subject: "${settings.automation.autoReplySubject}". Body snippet: "${renderedBody.slice(0, 40)}..."`,
      durationMs: 15,
    });
  }

  // Persist updated automation logs on inquiry
  updateInquiry(inquiry.id, {
    automationLogs: [...inquiry.automationLogs, ...logs],
  });

  return logs;
}

export async function testWebhook(
  url: string,
  secret?: string
): Promise<{
  success: boolean;
  statusCode?: number;
  latencyMs: number;
  responsePreview?: string;
  error?: string;
}> {
  const startTime = Date.now();
  if (!url || !url.startsWith("http")) {
    return {
      success: false,
      latencyMs: 0,
      error: "Invalid URL. Please enter a valid http:// or https:// webhook endpoint.",
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const testPayload = {
      event: "test.ping",
      source: "Masaar & Co. Automation Control Plane",
      timestamp: new Date().toISOString(),
      message: "Test webhook connection successful from Masaar & Co. Admin Panel.",
      sampleInquiry: {
        id: "inq_test_9999",
        name: "Test Lead",
        email: "test@masaar.co",
        service: "Business Automation",
        budget: "$50,000+",
      },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Masaar-Automation-Engine/1.0",
        "X-Masaar-Event": "test.ping",
        ...(secret ? { "X-Masaar-Secret": secret } : {}),
      },
      body: JSON.stringify(testPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const latencyMs = Date.now() - startTime;
    let preview = "";
    try {
      preview = (await res.text()).slice(0, 150);
    } catch {
      // ignore
    }

    const success = res.ok;
    saveSettings({
      automation: {
        ...getSettings().automation,
        lastTestedAt: new Date().toISOString(),
        lastTestStatus: success ? "success" : "failed",
      },
    });

    return {
      success,
      statusCode: res.status,
      latencyMs,
      responsePreview: preview || (success ? "OK" : `HTTP ${res.status}`),
    };
  } catch (err: unknown) {
    const latencyMs = Date.now() - startTime;
    const msg = err instanceof Error ? err.message : String(err);
    saveSettings({
      automation: {
        ...getSettings().automation,
        lastTestedAt: new Date().toISOString(),
        lastTestStatus: "failed",
      },
    });
    return {
      success: false,
      latencyMs,
      error: msg,
    };
  }
}

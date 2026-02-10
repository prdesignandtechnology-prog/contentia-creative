const parseBody = (event) => {
  const contentType = event.headers["content-type"] || "";
  if (contentType.includes("application/json")) {
    return JSON.parse(event.body || "{}");
  }
  const params = new URLSearchParams(event.body || "");
  return Object.fromEntries(params.entries());
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const formData = parseBody(event);
  if (formData["bot-field"]) {
    return { statusCode: 400, body: "Bot detected" };
  }

  const required = ["name", "email", "message"];
  for (const field of required) {
    if (!formData[field]) {
      return { statusCode: 400, body: `Missing ${field}` };
    }
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    return { statusCode: 500, body: "Missing Zapier webhook" };
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "",
    company: formData.company || "",
    message: formData.message || ""
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return { statusCode: 502, body: "Failed to submit" };
  }

  return { statusCode: 200, body: "OK" };
};

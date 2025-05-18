import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";

// Brevo API configuration
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const TO_EMAIL = process.env.CONTACT_EMAIL || "contacto@iobus.com";
const FROM_EMAIL = "no-reply@aiobus.com";
const SUBJECT = "Nuevo mensaje de contacto desde la web";

// Check that the API key is configured
if (!process.env.BREVO_API_KEY) {
  console.error('BREVO_API_KEY environment variable is not set');
}

// CORS configuration
const ALLOWED_ORIGINS = ["https://aiobus.com", "https://www.aiobus.com", "http://localhost:5173"];
function getCorsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("Origin");
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Vary": "Origin",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400", // 24 hours
    };
  }
  return {};
}

// Rate limiting (in-memory for demo; use KV/D1 in production)
const RATE_LIMIT = 3; // max 3 sends per hour
const rateLimitIp = new Map<string, { count: number; last: number }>();
const rateLimitEmail = new Map<string, { count: number; last: number }>();

function checkRateLimit(key: string, map: Map<string, { count: number; last: number }>) {
  const now = Date.now();
  const entry = map.get(key);
  if (entry && now - entry.last < 60 * 60 * 1000) {
    if (entry.count >= RATE_LIMIT) return false;
    entry.count += 1;
    entry.last = now;
    map.set(key, entry);
    return true;
  }
  map.set(key, { count: 1, last: now });
  return true;
}

export async function action({ request }: ActionFunctionArgs) {
  const corsHeaders = getCorsHeaders(request);
  
  if (request.method === "OPTIONS") {
    return json({}, { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Método no permitido" }, { status: 405, headers: corsHeaders });
  }

  try {
    const data = await request.json() as { name?: string; email?: string; message?: string };
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return json(
        { error: "Todos los campos son obligatorios" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { error: "Por favor ingresa un email válido" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Rate limit by IP and email
    const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip, rateLimitIp) || !checkRateLimit(email, rateLimitEmail)) {
      return json(
        { error: "Has superado el límite de envíos. Intenta más tarde." },
        { status: 429, headers: corsHeaders }
      );
    }

    // Build Brevo payload
    const brevoPayload = {
      sender: { name: "IOBus Web", email: FROM_EMAIL },
      to: [{ email: TO_EMAIL }],
      replyTo: { email, name },
      subject: SUBJECT,
      htmlContent: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // Check API key before making the call
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY environment variable is not set');
      return json(
        { error: "Error de configuración del servidor" },
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Sending email via Brevo...');
    const res = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!res.ok) {
      const errorData = await res.json() as { message?: string; code?: string };
      console.error('Brevo API error:', errorData);
      
      // Check for authentication error
      if (errorData.code === 'unauthorized') {
        console.error('Invalid or missing API key. Check your .env file');
        return json(
          { error: "Error de configuración del servidor. Por favor, contacta al administrador." },
          { status: 500, headers: corsHeaders }
        );
      }

      return json(
        { error: errorData.message || "Error al enviar el email" },
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Email sent successfully');
    return json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("Error processing form:", error);
    return json(
      { error: "Error procesando el formulario" },
      { status: 500, headers: corsHeaders }
    );
  }
} 
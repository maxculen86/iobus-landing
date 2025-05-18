import { json } from "@remix-run/cloudflare";

export async function loader() {
  // Devolvemos un objeto vacío ya que Chrome DevTools solo necesita una respuesta 200
  return json({}, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
} 
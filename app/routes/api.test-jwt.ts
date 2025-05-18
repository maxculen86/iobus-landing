import type { ActionFunction } from "@remix-run/cloudflare";
import { signJWT, verifyJWT } from "../utils/jwt";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Create a test token
    const token = await signJWT({ 
      test: true,
      timestamp: Date.now()
    });

    // Verify the token
    const payload = await verifyJWT(token);

    return Response.json({ 
      success: true,
      token,
      payload
    });
  } catch (error) {
    return Response.json({ 
      error: "JWT test failed",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}; 
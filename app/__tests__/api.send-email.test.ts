/**
 * @jest-environment node
 */
import { action } from "~/routes/api.send-email";

type Payload = Record<string, unknown>;

let ipCounter = 0;

function buildRequest(payload: Payload) {
  // The route rate-limits per IP, so every request gets its own address.
  ipCounter += 1;
  return new Request("https://aiobus.com/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "CF-Connecting-IP": `10.0.0.${ipCounter}`,
    },
    body: JSON.stringify(payload),
  });
}

// The remix route args carry more than the tests need.
const run = (payload: Payload) =>
  action({ request: buildRequest(payload) } as Parameters<typeof action>[0]);

describe("api.send-email action", () => {
  const originalFetch = global.fetch;
  const fetchMock = jest.fn();

  beforeEach(() => {
    process.env.BREVO_API_KEY = "test-key";
    fetchMock.mockReset();
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({}) });
    global.fetch = fetchMock as unknown as typeof fetch;
    jest.spyOn(console, "log").mockImplementation(() => undefined);
  });

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  const sentHtml = () =>
    JSON.parse(fetchMock.mock.calls[0][1].body as string).htmlContent as string;

  it("still accepts the original name/email/message contract", async () => {
    const response = await run({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola, quiero una reunión",
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(sentHtml()).toContain("Ana");
    expect(sentHtml()).not.toContain("Empresa");
  });

  it("includes the optional company in the email", async () => {
    const response = await run({
      name: "Ana",
      company: "Transportes Sur",
      email: "ana2@example.com",
      message: "Hola, quiero una reunión",
    });

    expect(response.status).toBe(200);
    expect(sentHtml()).toContain("<strong>Empresa:</strong> Transportes Sur");
  });

  it("escapes HTML in the company field", async () => {
    await run({
      name: "Ana",
      company: "<script>alert(1)</script>",
      email: "ana3@example.com",
      message: "Hola, quiero una reunión",
    });

    expect(sentHtml()).not.toContain("<script>");
    expect(sentHtml()).toContain("&lt;script&gt;");
  });

  it("escapes HTML in the name, email and message fields", async () => {
    await run({
      name: "<img src=x onerror=alert(1)>",
      email: '"<b>x</b>"@example.com',
      message: "<script>alert(2)</script>\nsegunda línea",
    });

    const html = sentHtml();
    expect(html).not.toContain("<img");
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<b>");
    expect(html).toContain("&lt;img src=x onerror=alert(1)&gt;");
    expect(html).toContain("&lt;script&gt;alert(2)&lt;/script&gt;");
    expect(html).toContain("&lt;b&gt;x&lt;/b&gt;");
  });

  it("keeps line breaks in the message as <br/> after escaping", async () => {
    await run({
      name: "Ana",
      email: "ana4@example.com",
      message: "primera\nsegunda",
    });

    expect(sentHtml()).toContain("primera<br/>segunda");
  });

  it("rejects requests missing required fields", async () => {
    const response = await run({ name: "Ana", company: "Acme" });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "Todos los campos son obligatorios",
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

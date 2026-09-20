import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

const fetchMock = jest.fn();

function fillForm(values: Partial<Record<"nombre" | "empresa" | "email" | "mensaje", string>>) {
  for (const [id, value] of Object.entries(values)) {
    fireEvent.change(document.getElementById(id) as HTMLElement, {
      target: { value },
    });
  }
}

const VALID = {
  nombre: "Ana Pérez",
  empresa: "Transportes Sur",
  email: "ana@example.com",
  mensaje: "Queremos revisar una línea con ustedes.",
};

const submit = () =>
  fireEvent.click(screen.getByRole("button", { name: "Solicitar una reunión" }));

function jsonResponse(body: unknown, ok = true) {
  return { ok, text: async () => JSON.stringify(body) };
}

describe("ContactForm", () => {
  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  it("renders the title, the four fields and the submit button", () => {
    render(<ContactForm />);
    expect(screen.getAllByText("Solicitar una reunión")).toHaveLength(2);
    for (const label of ["Nombre", "Empresa", "Email", "Mensaje"]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }
    expect(
      screen.getByRole("button", { name: "Solicitar una reunión" }),
    ).toBeInTheDocument();
  });

  it("shows validation errors and does not call the API when the form is empty", async () => {
    render(<ContactForm />);
    submit();

    expect(await screen.findByText("El nombre es requerido")).toBeInTheDocument();
    expect(screen.getByText("El email es requerido")).toBeInTheDocument();
    expect(screen.getByText("El mensaje es requerido")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid email and a too-short message", async () => {
    render(<ContactForm />);
    fillForm({ nombre: "Ana", email: "no-es-un-email", mensaje: "corto" });
    submit();

    expect(await screen.findByText("Email inválido")).toBeInTheDocument();
    expect(screen.getByText("El mensaje es demasiado corto")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the values to /api/send-email and shows the success message", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: true }));
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    expect(
      await screen.findByText("¡Gracias! Te vamos a contactar a la brevedad."),
    ).toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/send-email");
    expect(init.method).toBe("POST");
    expect(init.headers).toEqual({ "Content-Type": "application/json" });
    expect(JSON.parse(init.body)).toEqual({
      name: "Ana Pérez",
      company: "Transportes Sur",
      email: "ana@example.com",
      message: "Queremos revisar una línea con ustedes.",
    });
  });

  it("clears the form after a successful submission", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: true }));
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    await screen.findByText("¡Gracias! Te vamos a contactar a la brevedad.");
    await waitFor(() => expect(screen.getByLabelText("Nombre")).toHaveValue(""));
    expect(screen.getByLabelText("Mensaje")).toHaveValue("");
  });

  it("accepts a submission without the optional company", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ success: true }));
    render(<ContactForm />);
    fillForm({ ...VALID, empresa: "" });
    submit();

    await screen.findByText("¡Gracias! Te vamos a contactar a la brevedad.");
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).company).toBe("");
  });

  it("shows the server error and no success message when the API rejects", async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ error: "Has superado el límite de envíos. Intenta más tarde." }, false),
    );
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    expect(
      await screen.findByText("Has superado el límite de envíos. Intenta más tarde."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("¡Gracias! Te vamos a contactar a la brevedad."),
    ).not.toBeInTheDocument();
    // The user's input is kept so they can retry.
    expect(screen.getByLabelText("Nombre")).toHaveValue("Ana Pérez");
  });

  it("reports an unreadable server response", async () => {
    fetchMock.mockResolvedValue({ ok: true, text: async () => "<html>oops</html>" });
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    expect(
      await screen.findByText("Error al procesar la respuesta del servidor"),
    ).toBeInTheDocument();
  });

  it("reports network failures", async () => {
    fetchMock.mockRejectedValue(new Error("Failed to fetch"));
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    expect(await screen.findByText("Failed to fetch")).toBeInTheDocument();
  });

  it("disables the button while the request is in flight", async () => {
    let resolveFetch: (value: unknown) => void = () => undefined;
    fetchMock.mockReturnValue(new Promise((resolve) => (resolveFetch = resolve)));
    render(<ContactForm />);
    fillForm(VALID);
    submit();

    const sending = await screen.findByRole("button", { name: "Enviando..." });
    expect(sending).toBeDisabled();

    resolveFetch(jsonResponse({ success: true }));
    await screen.findByText("¡Gracias! Te vamos a contactar a la brevedad.");
    expect(
      screen.getByRole("button", { name: "Solicitar una reunión" }),
    ).toBeEnabled();
  });
});

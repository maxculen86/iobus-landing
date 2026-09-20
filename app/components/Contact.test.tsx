import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { contactConfig } from "~/config/contact";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders the contacto section with its heading and lead paragraph", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("section#contacto")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2 }),
    ).toHaveTextContent("Empezar con una línea.Buscar una mejora concreta.");
    expect(
      screen.getByText(/No hace falta transformar toda la empresa de una vez/),
    ).toBeInTheDocument();
  });

  it("shows email, phone and location from the contact config", () => {
    render(<Contact />);
    // The form has its own "Email" label, so scope to the info column.
    const info = screen.getByRole("heading", { level: 2 }).parentElement as HTMLElement;
    expect(within(info).getByText("Email")).toBeInTheDocument();
    expect(within(info).getByText(contactConfig.email.contact)).toBeInTheDocument();
    expect(within(info).getByText("Teléfono")).toBeInTheDocument();
    expect(
      within(info).getByText(contactConfig.whatsapp.formattedNumber),
    ).toBeInTheDocument();
    expect(within(info).getByText("Ubicación")).toBeInTheDocument();
    expect(within(info).getByText(contactConfig.company.location)).toBeInTheDocument();
  });

  it("embeds the meeting request form", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", { name: "Solicitar una reunión" }),
    ).toBeInTheDocument();
  });
});

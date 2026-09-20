import { useCallback, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Card } from "./landing/Card";

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  messageId?: string;
}

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  message: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "El nombre es demasiado corto")
    .max(50, "El nombre es demasiado largo")
    .required("El nombre es requerido"),
  company: Yup.string().max(100, "El nombre de la empresa es demasiado largo"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  message: Yup.string()
    .min(10, "El mensaje es demasiado corto")
    .max(1000, "El mensaje es demasiado largo")
    .required("El mensaje es requerido"),
});

const LABEL_CLASS = "mb-1.5 block text-sm font-medium text-io-ink2";
const FIELD_CLASS =
  "w-full rounded-md border bg-io-surface px-4 py-[9px] text-[15px] text-io-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-io-blue";
const FIELD_OK_CLASS = "border-io-input-border";
const FIELD_ERROR_CLASS = "border-red-500 dark:border-red-400";

interface TextFieldProps {
  id: string;
  name: keyof ContactFormValues;
  label: string;
  type?: string;
  as?: "textarea";
  rows?: number;
  hasError: boolean;
}

function TextField({ id, name, label, type, as, rows, hasError }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        as={as}
        rows={rows}
        className={`${FIELD_CLASS} ${hasError ? FIELD_ERROR_CLASS : FIELD_OK_CLASS} ${
          as === "textarea" ? "resize-y" : ""
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-600 dark:text-red-400"
      />
    </div>
  );
}

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (
      values: ContactFormValues,
      { resetForm }: FormikHelpers<ContactFormValues>,
    ) => {
      setSubmitStatus("idle");

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const responseText = await response.text();
        let data: ApiResponse;
        try {
          data = JSON.parse(responseText);
        } catch {
          throw new Error("Error al procesar la respuesta del servidor");
        }

        if (!response.ok) {
          throw new Error(data.error || "Error al enviar el mensaje");
        }

        setSubmitStatus("success");
        resetForm();
      } catch (error) {
        setSubmitStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Por favor, intenta nuevamente.",
        );
      }
    },
    [],
  );

  return (
    <Card elevation="card" className="min-w-0 p-[30px]">
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
        validateOnMount={false}
      >
        {({ errors, touched, isSubmitting }) => {
          const hasError = (name: keyof ContactFormValues) =>
            Boolean(errors[name] && touched[name]);

          return (
            <Form className="flex flex-col gap-4" noValidate>
              <div className="text-[17px] font-semibold text-io-ink">
                Solicitar una reunión
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-4">
                <TextField
                  id="nombre"
                  name="name"
                  label="Nombre"
                  type="text"
                  hasError={hasError("name")}
                />
                <TextField
                  id="empresa"
                  name="company"
                  label="Empresa"
                  type="text"
                  hasError={hasError("company")}
                />
              </div>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                hasError={hasError("email")}
              />
              <TextField
                id="mensaje"
                name="message"
                label="Mensaje"
                as="textarea"
                rows={4}
                hasError={hasError("message")}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md bg-io-blue px-6 py-[13px] text-base font-medium text-white hover:bg-io-blue-h disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Solicitar una reunión"}
              </button>
              {submitStatus === "success" && (
                <p role="status" className="text-sm text-io-green">
                  ¡Gracias! Te vamos a contactar a la brevedad.
                </p>
              )}
              {submitStatus === "error" && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                  {errorMessage}
                </p>
              )}
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}

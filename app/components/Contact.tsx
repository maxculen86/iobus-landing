import { useState, useCallback } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { contactConfig } from "../config/contact";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  messageId?: string;
}

// Esquema de validación
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "El nombre es demasiado corto")
    .max(50, "El nombre es demasiado largo")
    .required("El nombre es requerido"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es requerido"),
  message: Yup.string()
    .min(10, "El mensaje es demasiado corto")
    .max(1000, "El mensaje es demasiado largo")
    .required("El mensaje es requerido"),
});

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = useCallback(async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const responseText = await response.text();
      let data: ApiResponse;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        throw new Error('Error al procesar la respuesta del servidor');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        setSubmitStatus('error');
        setErrorMessage(error.message);
      } else {
        setSubmitStatus('error');
        setErrorMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    }
  }, []);

  return (
    <section id="contact" className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo de textura */}
      <div className="absolute inset-0 bg-[url('/backgrounds/textura_2.png')] dark:bg-[url('/backgrounds/textura_2_dark.png')] bg-cover bg-center z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          ¿Listo para transformar tu flota? Contáctanos y descubre cómo podemos ayudarte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4">
          {/* Información de contacto */}
          <div className="flex flex-col items-start text-left space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">{contactConfig.email.contact}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-300">{contactConfig.whatsapp.formattedNumber}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Ubicación</h3>
                <p className="text-gray-600 dark:text-gray-300">{contactConfig.company.location}</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
            enableReinitialize={false}
            validateOnMount={false}
          >
            {({ errors, touched, isSubmitting: formikIsSubmitting }) => (
              <Form className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name && touched.name
                          ? 'border-red-500 dark:border-red-400'
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email && touched.email
                          ? 'border-red-500 dark:border-red-400'
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message && touched.message
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formikIsSubmitting}
                  className={`inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition ${
                    formikIsSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formikIsSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {errorMessage}
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
} 
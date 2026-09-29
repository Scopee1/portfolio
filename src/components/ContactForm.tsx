"use client";

import { type FormEvent, useRef, useState } from "react";

const MINIMUM_NAME_LENGTH = 2;
const MINIMUM_MESSAGE_LENGTH = 20;
const MAXIMUM_MESSAGE_LENGTH = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldName = "name" | "email" | "message";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const emptyValues: FormValues = { name: "", email: "", message: "" };
const fieldOrder: FieldName[] = ["name", "email", "message"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < MINIMUM_NAME_LENGTH) {
    errors.name = `Ingresá tu nombre (mínimo ${MINIMUM_NAME_LENGTH} letras).`;
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Ingresá un email válido, por ejemplo nombre@dominio.com.";
  }
  const messageLength = values.message.trim().length;
  if (messageLength < MINIMUM_MESSAGE_LENGTH) {
    errors.message = `Contame un poco más (mínimo ${MINIMUM_MESSAGE_LENGTH} caracteres).`;
  } else if (messageLength > MAXIMUM_MESSAGE_LENGTH) {
    errors.message = `El mensaje supera los ${MAXIMUM_MESSAGE_LENGTH} caracteres.`;
  }
  return errors;
}

function buildMailtoLink(recipientEmail: string, values: FormValues) {
  const subject = `Contacto desde el portfolio — ${values.name.trim()}`;
  const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

type ContactFormProps = {
  recipientEmail: string;
};

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (field: FieldName, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (hasSubmitted) setErrors(validate(nextValues));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const firstInvalidField = fieldOrder.find((field) => validationErrors[field]);
    if (firstInvalidField) {
      setStatusMessage("Revisá los campos marcados.");
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    window.location.href = buildMailtoLink(recipientEmail, values);
    setStatusMessage("Listo: se abrió tu aplicación de correo con el mensaje armado.");
    setValues(emptyValues);
    setHasSubmitted(false);
  };

  const fieldProps = (field: FieldName) => ({
    id: `contacto-${field}`,
    name: field,
    value: values[field],
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `contacto-${field}-error` : undefined,
    onChange: (event: { target: { value: string } }) => updateField(field, event.target.value),
  });

  const renderError = (field: FieldName) =>
    errors[field] ? (
      <p id={`contacto-${field}-error`} className="field__error">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="contact-form" noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="contact-form__title">
        Mandame un mensaje
      </h3>
      <div className="field">
        <label htmlFor="contacto-name">Nombre</label>
        <input type="text" autoComplete="name" {...fieldProps("name")} />
        {renderError("name")}
      </div>
      <div className="field">
        <label htmlFor="contacto-email">Email</label>
        <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
        {renderError("email")}
      </div>
      <div className="field">
        <label htmlFor="contacto-message">Mensaje</label>
        <textarea rows={5} maxLength={MAXIMUM_MESSAGE_LENGTH} {...fieldProps("message")} />
        <p className="field__hint" aria-hidden="true">
          {values.message.trim().length}/{MAXIMUM_MESSAGE_LENGTH}
        </p>
        {renderError("message")}
      </div>
      <button type="submit" className="button button--primary contact-form__submit">
        Enviar mensaje
      </button>
      <p className="contact-form__status" role="status">
        {statusMessage}
      </p>
    </form>
  );
}

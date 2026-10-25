import { useState } from "react";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  model?: string;
  date?: string;
}

const MODELS = ["Standard 900", "Corsa R", "Scrambler"] as const;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function BookRide() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    date: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!isEmail(values.email)) next.email = "Enter a valid email address, e.g. rider@example.com.";
    if (values.phone && !/^[\d\s()+-]{7,}$/.test(values.phone)) next.phone = "Use digits, spaces and + ( ) - only.";
    if (!values.model) next.model = "Pick the bike you want to ride.";
    if (!values.date) next.date = "Choose a preferred date.";
    else {
      const d = new Date(values.date + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d < today) next.date = "The date cannot be in the past.";
      else if (d.getDay() === 0) next.date = "We are closed on Sundays — pick another day.";
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }
    setSubmitted(true);
  };

  const field = (k: keyof FieldErrors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <section id="book" className="book-ride" aria-labelledby="book-title">
      <div className="book-inner">
        <header>
          <h2 id="book-title" data-reveal>
            BOOK A TEST RIDE
          </h2>
          <p data-reveal className="showroom-lead">
            45 minutes, real roads. Bring your licence — we bring the keys.
          </p>
        </header>

        <form onSubmit={onSubmit} noValidate data-reveal>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="ride-name">Full name *</label>
              <input
                id="ride-name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={set("name")}
                {...field("name")}
              />
              {errors.name && <p id="name-error" className="field-error" role="alert">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="ride-email">Email *</label>
              <input
                id="ride-email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set("email")}
                {...field("email")}
              />
              {errors.email && <p id="email-error" className="field-error" role="alert">{errors.email}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="ride-phone">Phone (optional)</label>
              <input
                id="ride-phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={set("phone")}
                {...field("phone")}
              />
              {errors.phone && <p id="phone-error" className="field-error" role="alert">{errors.phone}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="ride-model">Model *</label>
              <select id="ride-model" value={values.model} onChange={set("model")} {...field("model")}>
                <option value="">Select a model…</option>
                {MODELS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              {errors.model && <p id="model-error" className="field-error" role="alert">{errors.model}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="ride-date">Preferred date *</label>
              <input
                id="ride-date"
                type="date"
                value={values.date}
                onChange={set("date")}
                {...field("date")}
              />
              {errors.date && <p id="date-error" className="field-error" role="alert">{errors.date}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="ride-notes">Notes (optional)</label>
              <textarea id="ride-notes" rows={3} value={values.notes} onChange={set("notes")} />
            </div>
          </div>

          <button type="submit" className="cta-primary">REQUEST A RIDE</button>
          <p className="form-note">
            This is a demo storefront — the request opens your email client pre-filled, nothing is stored.
          </p>
          {submitted && (
            <p className="form-success" role="status">
              Request ready — your email client should open with the details. See you at 7398 Colonial Rd, Brooklyn.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

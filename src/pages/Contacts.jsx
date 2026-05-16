import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const CONTACT_ENDPOINT = "https://portfolio-wa5a.onrender.com/contact";

export default function Contacts() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    const message = { ...form };
    setIsSending(true);
    setForm({ name: "", email: "", message: "" });
    toast.success(t("form.success"));

    fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
      keepalive: true,
    })
      .then(async (response) => {
        const data = await response.json().catch(() => null);

        if (!response.ok || data?.success === false) {
          throw new Error("Contact request failed");
        }
      })
      .catch(() => {
        toast.error(t("form.error"));
        setForm(message);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">{t("contacts.title")}</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="title-2">{t("form.title")}</h2>
          <input
            type="text"
            name="name"
            placeholder={t("form.name")}
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("form.email")}
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t("form.message")}
            required
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" disabled={isSending}>
            {isSending ? t("form.sending") : t("form.button")}
          </button>
        </form>
      </div>
    </main>
  );
}

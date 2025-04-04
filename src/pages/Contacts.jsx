import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function Contacts() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://portfolio-wa5a.onrender.com/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
  
        const data = await response.json();
  
        if (data.success) {
          toast.success(t("form.success"));
          setForm({ name: "", email: "", message: "" });
        } else {
          toast.error(t("form.error"));
        }
      } catch (error) {
        toast.error(t("form.error"));
      }
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
          <button type="submit">{t("form.button")}</button>
        </form>
      </div>
    </main>
  );
}

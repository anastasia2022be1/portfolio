import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FaFileAlt, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPassport } from "react-icons/fa";
import { profileLinks } from "../utils/profileLinks.js";

const CONTACT_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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

    if (!CONTACT_ENDPOINT) {
      console.error("Missing VITE_FORMSPREE_ENDPOINT environment variable.");
      toast.error(t("form.configError"));
      return;
    }

    const message = { ...form };
    setIsSending(true);

    fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: message.name,
        email: message.email,
        message: message.message,
        _subject: `Portfolio message from ${message.name}`,
      }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => null);

        if (!response.ok || data?.success === false) {
          throw new Error("Contact request failed");
        }

        toast.success(t("form.success"));
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error(t("form.error"));
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">{t("contacts.title")}</h1>

        <section className="contact-links" aria-label={t("contacts.quickLinksLabel")}>
          <a href={profileLinks.cvRequest} className="contact-links__item">
            <FaFileAlt />
            <span>{t("contacts.cv")}</span>
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-links__item">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="contact-links__item">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <div className="contact-links__item">
            <FaMapMarkerAlt />
            <span>{t("contacts.location")}</span>
          </div>
          <div className="contact-links__item">
            <FaPassport />
            <span>{t("contacts.workPermit")}</span>
          </div>
        </section>

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
          <p className="contact-form__fallback">
            {t("contacts.emailFallback")}{" "}
            <a href={`mailto:${profileLinks.email}`}>
              {profileLinks.email}
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

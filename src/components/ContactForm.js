"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className={styles.section} style={{ background: "var(--color-card-bg)", padding: "2rem", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>Initialize Connection</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Identifier (Name)</label>
          <input
            className={styles.input}
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Return Address (Email)</label>
          <input
            className={styles.input}
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Payload (Message)</label>
          <textarea
            className={styles.textarea}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Let's build something together..."
          />
        </div>
        <button className={styles.submitBtn} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Transmitting..." : status === "success" ? "Received ✓" : status === "error" ? "Error ✗" : (
            <span style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
              Send Transmission <Send size={16} />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";

export default function ZohoFeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp_country_code: "",
    whatsapp_number: "",
    feedback_topic: "Other",
    feedback_message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("https://desk.zoho.com/api/v1/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          orgId: "2389290", // ✅ your orgId
          Authorization:
            "Zoho-oauthtoken 1000.67013ab3960787bcf3affae67e649fc0.83a789c859e040bf11e7d05f9c8b5ef6", // ✅ your token
        },
        body: JSON.stringify({
          subject: `Feedback from ${form.name}`,
          description: form.feedback_message,
          email: form.email,
          phone: `${form.whatsapp_country_code}${form.whatsapp_number}`,
          category: "Feedback",
          status: "Open",
          priority: "High",
          channel: "Web",
          cf: {
            cf_feedbacktopic: form.feedback_topic,
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" />
        <input
          name="whatsapp_country_code"
          placeholder="WhatsApp Country Code"
          value={form.whatsapp_country_code}
          onChange={handleChange}
          required
        />
        <input
          name="whatsapp_number"
          placeholder="WhatsApp Number"
          value={form.whatsapp_number}
          onChange={handleChange}
          required
        />
        <select name="feedback_topic" value={form.feedback_topic} onChange={handleChange}>
          <option>Feature Request</option>
          <option>Quality of Response</option>
          <option>Accuracy of Response</option>
          <option>Other</option>
        </select>
        <textarea
          name="feedback_message"
          placeholder="Your feedback"
          value={form.feedback_message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>❌ Error: {error}</p>}
      {result && (
        <pre
          style={{
            background: "#f4f4f4",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: 4,
            overflowX: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

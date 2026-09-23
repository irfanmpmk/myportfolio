"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Using Web3Forms free public endpoint (or replace with your Formspree/Formbold endpoint)
    // Get your free access key at https://web3forms.com in 10 seconds, or use your email key
    formData.append("access_key", "8a0733ed-fe38-4ae9-b226-82ef9b33fe95"); 

// 1. Set a clean, professional email subject line
formData.append("subject", "New Project Inquiry from irfanmpmk.xyz");

// 2. Customize the sender header
formData.append("from_name", "Portfolio Inquiry (irfanmpmk.xyz)");

// 3. Custom notification intro text
formData.append(
  "message_header",
  "Hi Irfan,\n\nA new contact form has been submitted on your personal portfolio website. Details below."
);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to deliver message. Please reach out via email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please reach out directly at irfanmpmk@gmail.com.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
      {/* Anti-Spam Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. John Doe"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Work Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Project Scope</label>
        <input
          type="text"
          name="project_scope"
          required
          placeholder="e.g. Enterprise ERP Dashboard, Shopify App Development, AWS/Next.js Migration"
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Details / Timeline</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Brief overview of objectives, required features, or target milestones..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
        />
      </div>

      {status === "success" && (
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
          ✓ Inquiry received! I will review your requirements and get back to you within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium">
          ⚠ {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-bold rounded-lg transition flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending Inquiry...</span>
          </>
        ) : (
          "Send Project Inquiry"
        )}
      </button>
    </form>
  );
}
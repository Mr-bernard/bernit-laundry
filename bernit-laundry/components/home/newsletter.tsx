"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="rounded-2xl border border-border-soft bg-gradient-to-br from-navy-900 to-royal-600 p-8 text-center text-white sm:p-12">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Mail className="h-5 w-5" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
            Laundry tips & offers, monthly
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Fabric care guides, stain-removal tricks, and the occasional subscriber-only discount. No spam.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none focus-visible:border-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-navy-900 transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-gold-300">
              <CheckCircle2 className="h-4 w-4" /> {message}
            </p>
          )}
          {status === "error" && <p className="mt-3 text-sm text-red-300">{message}</p>}
        </div>
      </Container>
    </section>
  );
}

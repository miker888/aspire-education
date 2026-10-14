"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { supabase } from "@/lib/supabase";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

const interests = [...site.pathways.map((p) => p.title), "Not sure yet"];

function clean(v: FormDataEntryValue | null, max: number) {
  const s = typeof v === "string" ? v.trim() : "";
  return s ? s.slice(0, max) : null;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (clean(data.get("company"), 200)) {
      setStatus("sent");
      return;
    }

    if (!supabase) {
      setStatus("error");
      setError("The form isn't connected yet. Please email or call us instead.");
      return;
    }

    setStatus("sending");
    setError(null);

    const { error: insertError } = await supabase.from("leads").insert({
      site: site.key,
      name: clean(data.get("name"), 200),
      email: clean(data.get("email"), 320),
      phone: clean(data.get("phone"), 40),
      interest: clean(data.get("interest"), 120),
      message: clean(data.get("message"), 4000),
      source_url: window.location.href.slice(0, 500),
    });

    if (insertError) {
      setStatus("error");
      setError("Something went wrong sending your request. Please try again, or email or call us.");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="form form--done" role="status">
        <span className="form__check">
          <Icon name="check" size={28} strokeWidth={2.2} />
        </span>
        <h3>Thanks, we have your request.</h3>
        <p>We reply within {site.replyTime}. If it's urgent, call {site.contact.phone}.</p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label>
          Full name
          <input type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength={200} />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" placeholder="you@email.com" required maxLength={320} />
        </label>
      </div>
      <div className="form__row">
        <label>
          Phone (optional)
          <input type="tel" name="phone" autoComplete="tel" placeholder="403-000-0000" maxLength={40} />
        </label>
        <label>
          I&apos;m interested in
          <select name="interest" defaultValue={interests[0]}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Tell us about your goals
        <textarea name="message" rows={4} placeholder="What would you like to achieve?" maxLength={4000} />
      </label>
      <label className="form__hp" aria-hidden="true">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request a consultation"}
      </button>
      {error ? (
        <p className="form__error" role="alert">
          {error}
        </p>
      ) : (
        <p className="form__note">We reply within {site.replyTime}.</p>
      )}
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Logo />
        <nav className="header__nav" aria-label="Main">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--sm header__cta" href="#contact">
          Book a consultation
        </a>
        <button
          type="button"
          className="header__menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} strokeWidth={2} />
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
        <div className="wrap mobile-menu__inner">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary" href="#contact" onClick={() => setOpen(false)}>
            Book a consultation
          </a>
        </div>
      </nav>
    </header>
  );
}

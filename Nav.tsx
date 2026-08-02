"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-all ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between" style={{ height: 80 }}>
        <a
          href="#hero"
          className="f-display font-semibold"
          style={{ fontSize: "1.3rem", letterSpacing: "-0.01em", textDecoration: "none", color: "var(--bone)" }}
        >
          Webros
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" style={{ textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={waLink("Hi Webros, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <MessageCircle size={15} /> WhatsApp Us
          </a>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
          style={{
            background: "rgba(242,237,228,0.06)",
            border: "1px solid var(--wire)",
            borderRadius: 999,
            padding: 10,
            color: "var(--bone)",
            lineHeight: 0,
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden mx-4 nav-scrolled"
          style={{ borderRadius: 20, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "1rem", textDecoration: "none", color: "var(--bone)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hi Webros, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-solid"
            style={{ marginTop: 4 }}
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}

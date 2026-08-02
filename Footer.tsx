import { Instagram, Youtube, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
      style={{ paddingTop: 96, paddingBottom: 40, background: "var(--ink-2)", borderTop: "1px solid var(--wire)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "3rem" }}>
          <div className="md:col-span-2">
            <span className="f-display font-semibold" style={{ fontSize: "1.4rem" }}>
              Webros
            </span>
            <p className="text-muted mt-4" style={{ maxWidth: "36ch", lineHeight: 1.6 }}>
              India&apos;s digital growth partner — websites, automation, ads and content, engineered to grow your
              business.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="social-icon">
                <Instagram size={17} />
              </a>
              <a href="#" aria-label="YouTube" className="social-icon">
                <Youtube size={17} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
          <div>
            <p className="mono-label">Quick Links</p>
            <div className="flex flex-col gap-3 mt-5">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mono-label">Contact</p>
            <div className="flex flex-col gap-3 mt-5">
              <a
                href={waLink("Hi Webros, I'd like to get in touch.")}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link inline-flex items-center gap-2"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a href="mailto:hello@webros.in" className="footer-link inline-flex items-center gap-2">
                <Mail size={15} /> hello@webros.in
              </a>
              <span className="footer-link inline-flex items-center gap-2">
                <MapPin size={15} /> Telangana, India
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ marginTop: 64, paddingTop: 28, borderTop: "1px solid var(--wire)" }}
        >
          <p style={{ fontSize: "0.78rem" }} className="text-muted">
            © 2026 Webros Tech Solutions Limited. All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem" }} className="text-muted">
            Designed &amp; built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ServicePreview from "./ServicePreview";
import { SERVICES, waLink } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="relative" style={{ paddingTop: 112, paddingBottom: 112 }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="mono-label">// what we do</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="f-display mt-4" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", fontWeight: 600, lineHeight: 1.15 }}>
            One agency. <span className="text-brass">Every</span> digital service.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-muted mt-4" style={{ maxWidth: "48ch", lineHeight: 1.6 }}>
            If it grows your business online, we build it — from the website itself to everything that drives customers to it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: 56 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 55} className="h-full">
              <a
                href={waLink(`Hi Webros, I'm interested in ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="card h-full"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <ServicePreview code={s.code} />
                <div className="flex items-start justify-between">
                  <div className="card-icon">
                    <s.icon size={20} />
                  </div>
                  <span className="card-code">{s.code}</span>
                </div>
                <h3 className="mt-5 font-semibold" style={{ fontSize: "1.08rem" }}>
                  {s.title}
                </h3>
                <p className="text-muted mt-2" style={{ fontSize: "0.92rem", lineHeight: 1.55 }}>
                  {s.desc}
                </p>
                <span
                  className="text-brass inline-flex items-center gap-1"
                  style={{ fontSize: "0.88rem", marginTop: "auto", paddingTop: 18 }}
                >
                  Enquire <ArrowUpRight size={14} />
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={SERVICES.length * 55} className="h-full">
            <a
              href={waLink("Hi Webros, can you share your full list of services?")}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-cta h-full"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <p className="font-semibold" style={{ fontSize: "1.08rem" }}>
                +30 more services
              </p>
              <p className="text-muted mt-2" style={{ fontSize: "0.92rem", lineHeight: 1.55 }}>
                SEO, hosting, CRM, booking systems, payments, analytics and more.
              </p>
              <span className="text-brass inline-flex items-center gap-1" style={{ fontSize: "0.88rem", marginTop: 18 }}>
                See full list <ArrowRight size={14} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

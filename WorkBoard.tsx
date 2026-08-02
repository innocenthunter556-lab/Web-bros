"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import NetworkField from "./NetworkField";
import { WORK_SAMPLES } from "@/lib/constants";

export default function WorkBoard() {
  const [active, setActive] = useState(0);
  const total = WORK_SAMPLES.length;
  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="work" className="relative overflow-hidden" style={{ paddingTop: 100, paddingBottom: 110, background: "var(--ink-2)" }}>
      <NetworkField />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="mono-label">// sample work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="f-display mt-4" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", fontWeight: 600, lineHeight: 1.15 }}>
            What we <span className="text-brass">could</span> build for you.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-muted mt-4" style={{ maxWidth: "50ch", lineHeight: 1.6 }}>
            Concept builds across the industries we work with most — a preview of craft, not a client list. Real
            case studies land here as projects ship.
          </p>
        </Reveal>

        <div className="relative" style={{ height: 340, marginTop: 64, perspective: "1400px" }}>
          {WORK_SAMPLES.map((item, i) => {
            let offset = i - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
            const abs = Math.abs(offset);
            if (abs > 2) return null;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.2;
            return (
              <div
                key={item.title}
                className="absolute board-panel"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translateX(${offset * 60}%) translateZ(${-abs * 130}px) rotateY(${offset * -26}deg)`,
                  opacity,
                  zIndex: 10 - abs,
                  pointerEvents: abs === 0 ? "auto" : "none",
                  transition: "transform 0.6s cubic-bezier(.16,1,.3,1), opacity 0.6s ease",
                }}
              >
                <span className="corner-mark tl" aria-hidden="true" />
                <span className="corner-mark br" aria-hidden="true" />
                <span className="mono-label" style={{ fontSize: "0.65rem" }}>
                  {item.tag}
                </span>
                <h3 className="f-display mt-3" style={{ fontSize: "1.3rem", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-muted mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6" style={{ marginTop: 40 }}>
          <button aria-label="Previous work sample" onClick={() => go(-1)} className="board-nav-btn">
            <ArrowRight size={16} style={{ transform: "rotate(180deg)" }} />
          </button>
          <div className="flex items-center gap-2">
            {WORK_SAMPLES.map((item, i) => (
              <button
                key={item.title}
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === active ? "var(--brass)" : "var(--wire)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
          <button aria-label="Next work sample" onClick={() => go(1)} className="board-nav-btn">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

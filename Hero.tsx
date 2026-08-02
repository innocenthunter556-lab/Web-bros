import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import HeroScene from "./HeroScene";
import RotatingWord from "./RotatingWord";
import { ROTATING_WORDS, waLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: "100vh", paddingTop: 80 }}>
      <div className="blueprint-grid" aria-hidden="true" />
      <HeroScene />
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex items-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="relative w-full" style={{ maxWidth: 640, padding: "2.5rem 0" }}>
          <span className="corner-mark tl" aria-hidden="true" />
          <span className="corner-mark br" aria-hidden="true" />

          <Reveal>
            <p className="mono-label">// digital growth agency — india</p>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="f-display mt-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.01em" }}
            >
              Websites that <span className="text-brass">grow</span> businesses.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-muted mt-6" style={{ fontSize: "1.1rem", maxWidth: "40ch", lineHeight: 1.6 }}>
              We build <RotatingWord words={ROTATING_WORDS} /> — complete digital systems, engineered to convert.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href={waLink("Hi Webros, I'd like to start a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Start Your Project <ArrowRight size={17} />
              </a>
              <a
                href={waLink("Hi Webros, I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Book Free Consultation
              </a>
              <a href="#work" className="btn btn-text">
                Watch Our Work <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

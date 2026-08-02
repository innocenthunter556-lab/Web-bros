import { TRUST_ITEMS } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <div style={{ borderTop: "1px solid var(--wire)", borderBottom: "1px solid var(--wire)" }}>
      <div
        className="max-w-6xl mx-auto px-6 md:px-10 flex flex-wrap items-center gap-y-3"
        style={{ paddingTop: 22, paddingBottom: 22 }}
      >
        {TRUST_ITEMS.map((label) => (
          <span key={label} className="trust-item">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ServicePreviewProps {
  code: string;
}

export default function ServicePreview({ code }: ServicePreviewProps) {
  return (
    <div className="service-preview" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="72" height="72">
        {code === "WEB" && (
          <>
            <rect x="6" y="10" width="52" height="44" rx="4" fill="none" stroke="var(--wire-strong)" strokeWidth="1.5" />
            <circle cx="13" cy="17" r="1.6" fill="var(--brass)" />
            <circle cx="19" cy="17" r="1.6" fill="var(--jade)" />
            <circle cx="25" cy="17" r="1.6" fill="var(--bone)" opacity="0.5" />
            <line x1="12" y1="30" x2="48" y2="30" stroke="var(--brass)" strokeWidth="1.5" opacity="0.6" />
            <line x1="12" y1="38" x2="38" y2="38" stroke="var(--bone)" strokeWidth="1.5" opacity="0.3" />
            <line x1="12" y1="46" x2="42" y2="46" stroke="var(--bone)" strokeWidth="1.5" opacity="0.3" />
          </>
        )}
        {code === "AI" && (
          <>
            <circle cx="32" cy="32" r="20" fill="none" stroke="var(--wire-strong)" strokeWidth="1.2" opacity="0.5" />
            <circle cx="32" cy="32" r="13" fill="none" stroke="var(--jade)" strokeWidth="1.4" opacity="0.7" />
            <circle cx="32" cy="32" r="6" fill="var(--brass)" opacity="0.85" />
          </>
        )}
        {code === "ADS" && (
          <>
            <rect x="10" y="38" width="8" height="16" fill="var(--bone)" opacity="0.35" />
            <rect x="24" y="28" width="8" height="26" fill="var(--bone)" opacity="0.5" />
            <rect x="38" y="18" width="8" height="36" fill="var(--brass)" opacity="0.85" />
            <line x1="8" y1="54" x2="54" y2="54" stroke="var(--wire-strong)" strokeWidth="1.2" />
          </>
        )}
        {code === "WA" && (
          <>
            <rect x="10" y="12" width="44" height="32" rx="12" fill="none" stroke="var(--brass)" strokeWidth="1.6" opacity="0.8" />
            <path d="M20 44 L20 52 L30 44 Z" fill="none" stroke="var(--brass)" strokeWidth="1.6" opacity="0.8" />
            <circle cx="24" cy="28" r="2" fill="var(--bone)" opacity="0.5" />
            <circle cx="32" cy="28" r="2" fill="var(--bone)" opacity="0.5" />
            <circle cx="40" cy="28" r="2" fill="var(--jade)" opacity="0.7" />
          </>
        )}
        {code === "VID" && (
          <>
            <circle cx="32" cy="32" r="20" fill="none" stroke="var(--wire-strong)" strokeWidth="1.4" />
            <path d="M27 22 L27 42 L44 32 Z" fill="var(--brass)" opacity="0.85" />
          </>
        )}
        {code === "SHOP" && (
          <>
            <rect x="10" y="10" width="18" height="18" rx="2" fill="none" stroke="var(--brass)" strokeWidth="1.4" opacity="0.8" />
            <rect x="36" y="10" width="18" height="18" rx="2" fill="none" stroke="var(--bone)" strokeWidth="1.4" opacity="0.35" />
            <rect x="10" y="36" width="18" height="18" rx="2" fill="none" stroke="var(--bone)" strokeWidth="1.4" opacity="0.35" />
            <rect x="36" y="36" width="18" height="18" rx="2" fill="var(--jade)" opacity="0.5" />
          </>
        )}
        {code === "SEO" && (
          <>
            <circle cx="27" cy="27" r="14" fill="none" stroke="var(--brass)" strokeWidth="1.8" opacity="0.85" />
            <line x1="37" y1="37" x2="50" y2="50" stroke="var(--brass)" strokeWidth="2" opacity="0.85" strokeLinecap="round" />
            <path d="M20 30 L25 24 L30 27 L35 18" fill="none" stroke="var(--jade)" strokeWidth="1.4" opacity="0.7" />
          </>
        )}
        {code === "BRAND" && (
          <>
            <circle cx="24" cy="26" r="13" fill="var(--brass)" opacity="0.35" />
            <circle cx="38" cy="26" r="13" fill="var(--jade)" opacity="0.35" />
            <circle cx="31" cy="38" r="13" fill="var(--bone)" opacity="0.18" />
          </>
        )}
      </svg>
    </div>
  );
}

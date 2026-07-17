import { Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-navy text-white text-xs sm:text-sm">
      <div className="container-asn flex h-11 items-center justify-between gap-3">
        <div className="flex items-center gap-2 opacity-90">
          <MapPin className="size-3.5 text-accent" aria-hidden />
          <span>جمهورية مصر العربية</span>
        </div>
        <div className="flex items-center gap-4">
          {SITE.phones.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="hidden sm:inline-flex items-center gap-1.5 opacity-90 transition hover:text-accent hover:opacity-100"
            >
              <Phone className="size-3.5" aria-hidden />
              <span dir="ltr" className="ltr-num tracking-wide">{p.display}</span>
            </a>
          ))}
          <a href={SITE.phones[0].href} className="sm:hidden inline-flex items-center gap-1.5">
            <Phone className="size-3.5" aria-hidden />
            <span dir="ltr" className="ltr-num">{SITE.phones[0].display}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/asn-logo.png";
import { NAV_ITEMS, SITE } from "@/lib/site";

const services = [
  "تخليص جمركي في وقت قياسي",
  "الشحن الجوي والبحري والبري",
  "استيراد وتصدير لحساب الغير",
  "حساب ضريبة جمركية",
  "استشارات مجانية",
];

export function Footer() {
  return (
    <footer className="relative bg-navy text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10 overflow-hidden" aria-hidden>
        <div className="absolute top-0 right-0 size-72 rounded-full bg-secondary blur-3xl overflow-hidden" />
        <div className="absolute bottom-0 left-0 size-72 rounded-full bg-accent blur-3xl overflow-hidden" />
      </div>
      <div className="container-asn relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-14 rounded-2xl bg-white p-1.5">
                <img src={logoAsset} alt="شعار ASN" className="size-full object-contain" width={56} height={56} />
              </div>
              <div>
                <p className="text-xl font-black">ASN</p>
                <p className="text-xs text-white/70">للاستيراد والتصدير والتخليص الجمركي</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/75 leading-loose">
              شركة رائدة في الشحن الدولي والتخليص الجمركي، حاصلة على ترخيص IATA.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-base font-black mb-5">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/75 hover:text-accent transition">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-black mb-5">خدماتنا</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/75 hover:text-accent transition">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-black mb-5">بيانات التواصل</h4>
            <ul className="space-y-3">
              {SITE.phones.map((p) => (
                <li key={p.href} className="flex items-center gap-2.5">
                  <Phone className="size-4 text-accent shrink-0" />
                  <a href={p.href} dir="ltr" className="ltr-num text-sm text-white/85 hover:text-accent transition">{p.display}</a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-accent shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-sm text-white/85 hover:text-accent transition break-all">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-accent shrink-0" />
                <span className="text-sm text-white/85">جمهورية مصر العربية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60 text-center sm:text-right">
            © ASN Import, Export & Customs Clearance. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-bold text-white hover:bg-white/15 transition"
          >
            <ArrowUp className="size-4" />
            العودة للأعلى
          </a>
        </div>
      </div>
    </footer>
  );
}

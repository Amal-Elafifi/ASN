import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAsset from "@/assets/asn-logo.png";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-white/85 backdrop-blur"
      }`}
    >
      <nav className="container-asn flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="ASN — الرئيسية">
          <img
            src={logoAsset}
            alt="شعار ASN"
            width={56}
            height={56}
            className="size-12 md:size-14 object-contain"
          />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-navy tracking-tight">ASN</span>
            <span className="text-[11px] text-muted-foreground">للاستيراد والتصدير والتخليص الجمركي</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm font-semibold text-navy">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-3 py-2 rounded-lg transition hover:text-secondary hover:bg-muted"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <MessageCircle className="size-4" aria-hidden />
            استشارة مجانية
          </a>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-navy hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="فتح القائمة"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <ul className="container-asn py-3 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" />
                استشارة مجانية
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

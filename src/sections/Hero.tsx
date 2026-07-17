import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { SITE } from "@/lib/site";

const slides = [
  {
    img: hero1,
    headline: "حلول متكاملة للعمليات اللوجستية، مع أفضل شركة شحن دولي بترخيص IATA",
    kicker: "شحن دولي • تخليص جمركي",
  },
  {
    img: hero2,
    headline: "أسرع طريق استيراد وتصدير وتخليص جمركي في منصة واحدة",
    kicker: "جوي • بحري • بري",
  },
  {
    img: hero3,
    headline: "العالم بين يديك.. الاستيراد والتصدير أسهل مع ASN الحاصلة على ترخيص IATA",
    kicker: "شبكة عالمية",
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy">
      <AnimatePresence mode="sync">
        {slides.map((s, idx) =>
          idx === i ? (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={s.img}
                alt=""
                className="h-full w-full object-cover"
                width={1920}
                height={1080}
                fetchPriority={idx === 0 ? "high" : "auto"}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-navy/85 via-navy/55 to-navy/30" />
              <div className="absolute inset-0" style={{ background: "radial-gradient(80% 60% at 80% 30%, transparent 0%, rgba(14,42,71,0.6) 100%)" }} />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="container-asn">
          <div className="max-w-3xl text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs sm:text-sm font-bold text-accent">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  {slides[i].kicker}
                </span>
                <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25]">
                  {slides[i].headline}
                </h1>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-elevated transition hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" />
                استشارة مجانية
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass-dark px-6 py-3.5 text-sm sm:text-base font-bold text-white transition hover:bg-white/20"
              >
                تواصل معنا
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="السابق"
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 grid place-items-center size-11 md:size-12 rounded-full glass-dark text-white hover:bg-white/20"
      >
        <ChevronRight className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="التالي"
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 grid place-items-center size-11 md:size-12 rounded-full glass-dark text-white hover:bg-white/20"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`شريحة ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 right-0 z-10 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,80L0,80Z" />
      </svg>
    </section>
  );
}

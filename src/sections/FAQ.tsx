import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "ما هي خطة الأسعار داخل شركة ASN؟",
    a: "تختلف الأسعار حسب تفاصيل الشحنة، ومتطلبات العميل. لكننا نضمن لعملائنا توفير أفضل خدمة، بأسعار تنافسية.",
  },
  {
    q: "هل السعر يشمل الشحن والتخليص الجمركي؟",
    a: "نعم، في شركة ASN نضمن لعملائنا شمول السعر لتكاليف الشحن وإجراءات التخليص الجمركي.",
  },
  {
    q: "ما هي خطة الحجز وتفاصيل الشحن؟",
    a: "شركة ASN تتعاقد مع أفضل شركات شحن دولي لتوفير كافة الاختيارات لعملائنا، ليتمكن العميل من اختيار خطة الحجز والشحن المناسبة له.",
  },
  {
    q: "هل يوجد تتبع للشحنة؟",
    a: "نحرص في شركة ASN على توفير مسار تتبع للشحنة خطوة بخطوة، ليطمئن العميل على شحنته في أي وقت، حتى محطة الوصول بأمان.",
  },
  {
    q: "هل تتوفر خدمة استلام الشحنة من مكان العميل؟",
    a: "سواء كنت داخل القاهرة أو خارجها، نوفر لكم خدمة استلام الشحنة من مكان العميل، وتجهيزها بإحكام، وشحنها إلى جهة الوصول.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-section">
      <div className="container-asn max-w-4xl">
        <Reveal dir="up" className="text-center">
          <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase">FAQs</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
            أهم <span className="text-gradient">الأسئلة</span>
          </h2>
          <p className="mt-5 text-navy-light">إجابات على أكثر الأسئلة شيوعًا حول خدمات ASN.</p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} dir="up" delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition ${isOpen ? "border-secondary/50 shadow-elevated" : "border-border"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-navy leading-relaxed">{f.q}</span>
                    <span
                      className={`grid place-items-center size-9 shrink-0 rounded-full transition ${
                        isOpen ? "gradient-primary text-white rotate-45" : "bg-section text-secondary"
                      }`}
                    >
                      <Plus className="size-5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-navy-light leading-loose text-[15px] border-t border-border pt-4">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

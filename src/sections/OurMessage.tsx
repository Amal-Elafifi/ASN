import { Reveal } from "@/components/Reveal";
import { TrendingUp, Info, Target } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "تشجيع الاستثمار",
    desc: "تعمل ASN على تشجيع الاستثمار لكافة القطاعات الاقتصادية، من خلال تقديم الحلول المتكاملة للشحن الدولي والتخليص الجمركي والخدمات اللوجستية.",
  },
  {
    icon: Info,
    title: "تقديم المعلومات الدقيقة",
    desc: "نؤهل العميل بمنحه المعلومات الدقيقة والصحيحة، التى يحتاجها قبل الشروع في عملية الاستيراد والتصدير.",
  },
  {
    icon: Target,
    title: "تنمية أعمال العملاء",
    desc: "نساعد عملائنا على تنمية وتطوير أعمالهم، وتحقيق أهدافهم، دون الوقوع في أي خطأ يتعلق بتطبيق القوانين والأنظمة، حتى نضمن استمرارية أعمالهم.",
  },
];

export function OurMessage() {
  return (
    <section id="our-message" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-section to-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      <div className="container-asn relative">
        <Reveal dir="up" className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase">Our Message</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
            رسالت<span className="text-gradient">نا</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} dir="up" delay={i * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white border border-border p-8 shadow-soft transition hover:-translate-y-2 hover:shadow-elevated">
                <div className="absolute top-0 right-0 h-1.5 w-full gradient-primary scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid place-items-center size-16 rounded-2xl gradient-primary text-white shadow-soft">
                  <c.icon className="size-8" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-black text-navy">{c.title}</h3>
                <p className="mt-3 text-sm text-navy-light leading-loose">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

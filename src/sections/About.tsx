import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import aboutImg from "@/assets/about.jpg";
import { Anchor, Package, Globe2, Users } from "lucide-react";
import { SITE } from "@/lib/site";

const stats = [
  { icon: Anchor, value: 15, suffix: "+", label: "سنوات الخبرة" },
  { icon: Users, value: 850, suffix: "+", label: "العملاء" },
  { icon: Package, value: 12000, suffix: "+", label: "الشحنات" },
  { icon: Globe2, value: 40, suffix: "+", label: "الدول" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container-asn">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal dir="right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl shadow-elevated bg-section">
                <img src={aboutImg} alt="شبكة الشحن الدولي" className="w-full h-auto" width={1200} height={1000} loading="lazy" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl shadow-elevated p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-12 rounded-xl gradient-primary text-white font-black">
                    IATA
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">اعتماد دولي</p>
                    <p className="text-sm font-bold text-navy">ترخيص IATA</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal dir="left">
              <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase">من نحن</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
                عن <span className="text-gradient">الشركة</span>
              </h2>
              <div className="mt-6 space-y-4 text-navy-light leading-loose text-[15px] sm:text-base">
                <p>
                  ASN شركة استيراد وتصدير جمركي رائدة في جمهورية مصر العربية، وتعتبر من أهم شركات الشحن الدولي الحاصلة على ترخيص IATA.
                </p>
                <p>
                  تمتلك الشركة خبرات واسعة في تقديم خدمات الشحن وإنهاء الإجراءات القانونية والجمركية. تُركز على تلبية متطلبات العميل، ونسعى لمواكبة التطويرات، وإتمام عملنا بأسرع وأسهل الطرق، وأكثرها أمانًا وتوفيرًا لعملائنا.
                </p>
                <p>
                  شركة تخليص جمركي متخصصة في جميع الخدمات اللوجستية الخاصة بالاستيراد والتصدير من وإلى جمهورية مصر العربية. نتعاقد مع أفضل شركات شحن دولي وأهم شركات الشحن العالمية لتلبية احتياجات عملائنا بأسعار تنافسية، وجودة عالية.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  تواصل معنا الآن
                </a>
                <a
                  href={SITE.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-3 inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-navy hover:border-secondary"
                >
                  استشارة مجانية
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating stats */}
        <Reveal dir="up" className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated hover:border-secondary/40"
              >
                <div className="absolute -top-6 -left-6 size-24 rounded-full gradient-primary opacity-5 group-hover:opacity-10 transition" />
                <s.icon className="size-8 text-secondary" strokeWidth={1.5} />
                <p className="mt-4 text-3xl lg:text-4xl font-black text-navy">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

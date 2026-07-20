import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Plane, FileCheck, Calculator, MessageCircle, ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

const services = [
  {
    icon: ShieldCheck,
    title: "تخليص جمركي في وقت قياسي",
    desc: "مكتب تخليص جمركي متخصص في إعداد المستندات اللازمة، لتخليص الشحنات في الجُمرك الصادر أو الوارد أو الترانزيت، وإخراجها في أسرع وقت.",
  },
  {
    icon: Plane,
    title: "الشحن الجوي والبحري والبري",
    desc: "نتعاقد مع أفضل وأسرع شركات الشحن العالمية مع تتبع الشحنات بدقة عالية، حتى تسليمها بأمان.",
  },
  {
    icon: FileCheck,
    title: "استيراد وتصدير لحساب الغير بعقود قانونية",
    desc: "ترغب بالاستيراد من الصين أو دولة أخرى؟ نوفر لك هذه الخدمة بعقود قانونية، وطُرق آمنة. تواصل معنا للتعرف على الشروط والأوراق المطلوبة.",
  },
  {
    icon: Calculator,
    title: "حساب ضريبة جمركية",
    desc: "يتم احتساب القيمة الجمركية على حسب الشحنة. يمكنك طلب استشارة مجانية لحساب الضريبة قبل الاستيراد أو التصدير.",
  },
  {
    icon: MessageCircle,
    title: "استشارات مجانية في الاستيراد والتصدير والتخليص الجمركي",
    desc: "نمتلك كوادر متخصصة للإجابة عن كافة الأسئلة والاستفسارات الخاصة بإجراءات الاستيراد والتصدير والتخليص الجمركي.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 size-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-20 left-10 size-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="container-asn relative">
        <Reveal dir="up" className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
            خدمات<span className="text-gradient">نا</span>
          </h2>
          <p className="mt-5 text-navy-light leading-loose">
            تقدم شركة ASN خدمات الاستيراد والتصدير والتخليص الجمركي، بكافة موانئ جمهورية مصر العربية، في وقت قياسي، بأفضل جودة، وأقل تكلفة.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} dir="up" delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated hover:border-secondary/50">
                <div className="absolute top-2 left-2 size-16 rounded-full gradient-primary opacity-0 blur-2xl transition group-hover:opacity-20 overflow-hidden" />
                <div className="relative grid place-items-center size-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/20 text-secondary transition group-hover:scale-110 group-hover:from-secondary group-hover:to-primary group-hover:text-white mx-auto sm:mx-0">
                  <s.icon className="size-8" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-black text-navy leading-snug text-center sm:text-right">{s.title}</h3>
                <p className="mt-3 text-sm text-navy-light leading-loose mx-auto sm:mx-0">{s.desc}</p>
                <a
                  href={SITE.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex justify-center sm:justify-right sm:inline-flex items-center  gap-1.5 text-sm font-bold text-secondary hover:text-primary"
                >
                  استشارة مجانية
                  <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-bold text-white shadow-elevated transition hover:-translate-y-0.5"
          >
            تواصل معنا الآن
          </a>
        </Reveal>
      </div>
    </section>
  );
}

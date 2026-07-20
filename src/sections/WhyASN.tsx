import { Reveal } from "@/components/Reveal";
import { Check, Award } from "lucide-react";
import worldMap from "@/assets/world-map.jpg";
import IATA from "@/assets/iata.webp";
const features = [
  "ترخيص واعتماد IATA الدولي",
  "إجراءات أمان عالية لسلامة البضائع والشحنات",
  "فريق عمل مُدرَّب ومحترف",
  "سهولة وسرعة إنهاء الإجراءات الجمركية",
  "تقديم أفضل خدمات الشحن الدولي والتخليص الجمركي",
  "الاهتمام بتوفير أفضل أسعار الشحن والتخليص الجمركي",
  "نضمن لعملائنا السرعة والدقة في التنفيذ",
  "استلام الشحنة من مكان العميل، وتجهيزها، وشحنها إلى محطة الوصول",
  "توفير خدمة عملاء مميزة على مدار الساعة",
  "نقدم استشارات جمركية وفنية مجانية",
];

export function WhyASN() {
  return (
    <section id="why-asn" className="relative py-24 lg:py-32 bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${worldMap})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" />
      <div className="container-asn relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal dir="right">
            <span className="block sm:inline-block text-xs font-black tracking-widest text-accent uppercase text-center sm:text-right">Why ASN</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center sm:text-right">
              لماذا <span className="text-accent">ASN؟</span>
            </h2>
            <p className="mt-6 text-white/80 leading-loose">
              تمتلك ASN العديد من الميزات التنافسية، التي جعلتها تتربع على قمة مجال الاستيراد والتصدير والتخليص الجمركي في سنوات معدودة.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-3xl glass-dark p-8">
              <div className="absolute -top-4 -left-4 grid place-items-center size-20 rounded-full bg-accent/20 blur-2xl overflow-hidden" />
              <div className="relative flex items-center gap-5">
                <div className="grid place-items-center size-20 rounded-2xl bg-white text-primary shadow-glow">
                  <img src= {IATA} className="md:w-15 w-12" />
                  {/* <Award className="size-10" strokeWidth={1.75} /> */}
                </div>
                <div>
                  <p className="text-xs font-bold text-accent tracking-wider uppercase">اعتماد دولي</p>
                  <p className="mt-1 text-2xl font-black">IATA</p>
                  <p className="text-sm text-white/70">International Air Transport Association</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <Reveal key={f} dir="left" delay={i * 0.05}>
                <div className="group h-full flex items-start gap-3 rounded-2xl glass-dark p-5 transition hover:bg-white/10 hover:border-accent/40">
                  <div className="grid place-items-center size-9 shrink-0 rounded-lg bg-accent/20 text-accent transition group-hover:bg-accent group-hover:text-navy">
                    <Check className="size-5" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm leading-relaxed text-white/95 font-medium">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

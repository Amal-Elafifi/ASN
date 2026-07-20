import { Reveal } from "@/components/Reveal";
import teamImg from "@/assets/team.jpg";
import { FileText, ClipboardCheck, FolderCheck, Stamp, Ship, PackageCheck, PlaneTakeoff, BellRing } from "lucide-react";

const timeline = [
  { icon: FileText, label: "استلام المستندات" },
  { icon: ClipboardCheck, label: "مراجعة البيانات" },
  { icon: FolderCheck, label: "إعداد الملفات" }, 
  { icon: PlaneTakeoff, label: "حجز الشحنة مع خط الطيران" },
  { icon: Stamp, label: "التخليص الجمركي" },
  { icon: Ship, label: "خروج الشحنة" },
  { icon: BellRing, label: "إخطار المرسل إليه" },
  { icon: PackageCheck, label: "التسليم" },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-section overflow-hidden">
      <div className="container-asn">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal dir="right">
              <span className="block sm:inline-block  text-xs font-black tracking-widest text-secondary uppercase text-center sm:text-right">Work Team</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy text-center sm:text-right">
                فريق <span className="text-gradient">العمل</span>
              </h2>
              <div className="mt-6 space-y-4 text-navy-light leading-loose text-[15px] sm:text-base">
                <p>
                  تضم شركة ASN فريق عمل متميز ومتخصص في شؤون الجمارك، وإنهاء كافة الإجراءات بجميع المنافذ الجمركية. يمتلك فريقنا الخبرة والكفاءة التي تمكنه من إتمام إجراءات الاستيراد والتصدير والتخليص الجمركي في وقت قياسي داخل جميع موانئ الجمهورية.
                </p>
                <p>
                  فريق عمل ASN مُدرب على أعلى مستوى من المهارة والاحترافية، لتوفير أقصى درجات الالتزام بمعايير الخدمة. نهتم دائمًا بإعداد المستندات اللازمة لضمان إتمام عمليات العملاء، دون استنزاف الوقت والمال نتيجة أي تأخير.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal dir="left">
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img src={teamImg} alt="عمليات التخليص الجمركي" className="w-full h-auto" width={1200} height={900} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal dir="up" className="mt-20">
          <h3 className="text-center text-2xl font-black text-navy mb-12">
            مراحل عمل <span className="text-gradient">ASN</span>
          </h3>
          <div className="relative">
            <div className="absolute top-8 right-8 left-8 h-0.5 bg-divider hidden md:block" />
            <div className="absolute top-8 right-8 h-0.5 gradient-primary hidden md:block" style={{ width: "calc(100% - 4rem)" }} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
              {timeline.map((step, idx) => (
                <Reveal key={step.label} dir="up" delay={idx * 0.1}>
                  <div className="relative group text-center">
                    <div className="relative mx-auto grid place-items-center size-16 rounded-2xl gradient-primary text-white shadow-elevated transition group-hover:scale-110">
                      <step.icon className="size-7" strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 grid gap-y-2 sm:gap-y-0 place-items-center size-6 rounded-full bg-white text-secondary text-[11px] font-black shadow-soft">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-bold text-navy">{step.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { Zap, ShieldCheck, Lock, Target, Award, Headphones } from "lucide-react";

const items = [
  { icon: Zap, label: "سرعة التنفيذ" },
  { icon: ShieldCheck, label: "الالتزام" },
  { icon: Lock, label: "الأمان" },
  { icon: Target, label: "الدقة" },
  { icon: Award, label: "الخبرة" },
  { icon: Headphones, label: "الدعم المستمر" },
];

export function Trust() {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="container-asn">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.label} dir="up" delay={i * 0.06}>
              <div className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-white p-6 transition hover:border-secondary/40 hover:shadow-soft hover:-translate-y-1">
                <div className="grid place-items-center size-14 rounded-2xl bg-section text-secondary transition group-hover:gradient-primary group-hover:text-white">
                  <it.icon className="size-7" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-bold text-navy">{it.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

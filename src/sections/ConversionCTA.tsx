import { Reveal } from "@/components/Reveal";
import { MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";

export function ConversionCTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="container-asn">
        <Reveal dir="up">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 sm:p-12 lg:p-16 shadow-elevated">
            <div className="absolute top-2 left-2 size-24 rounded-full bg-white/10 blur-3xl overflow-hidden" />
            <div className="absolute bottom-2 right-2 size-24 rounded-full bg-accent/30 blur-3xl overflow-hidden" />
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400" fill="none" aria-hidden>
              <path d="M0,300 Q200,200 400,250 T800,200" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
              <path d="M0,350 Q300,150 600,250 T800,300" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="text-center lg:text-right max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  جاهز لبدء عملية الاستيراد أو التصدير؟
                </h2>
                <p className="mt-4 text-white/90 text-base sm:text-lg leading-loose">
                  تواصل معنا الآن واحصل على استشارة مجانية من فريق ASN.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 shrink-0 sm:flex-row sm:flex-wrap sm:justify-start">
                <a
                  href={SITE.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-primary shadow-soft transition hover:-translate-y-0.5 sm:w-auto"
                >
                  <MessageCircle className="size-5" />
                  استشارة مجانية
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/20 sm:w-auto"
                >
                  <Send className="size-5" />
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const egPhone = /^(?:\+?20|0)?1[0125]\d{8}$/;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      subject: String(fd.get("subject") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "الرجاء إدخال الاسم";
    if (!data.phone) newErrors.phone = "الرجاء إدخال رقم الهاتف";
    else if (!egPhone.test(data.phone.replace(/\s/g, ""))) newErrors.phone = "رقم هاتف مصري غير صحيح";
    if (!data.email) newErrors.email = "الرجاء إدخال البريد الإلكتروني";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "بريد إلكتروني غير صحيح";
    if (!data.subject) newErrors.subject = "الرجاء إدخال عنوان الرسالة";
    if (!data.message) newErrors.message = "الرجاء إدخال تفاصيل الرسالة";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setStatus("loading");
    try {
      const { serviceId, templateId, publicKey } = SITE.emailjs;
      if (serviceId.startsWith("YOUR_")) {
        // Credentials not configured yet — simulate success in dev
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await emailjs.send(serviceId, templateId, data, { publicKey });
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputCls = (name: string) =>
    `w-full rounded-xl border ${errors[name] ? "border-destructive" : "border-border"} bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background">
      <div className="container-asn">
        <Reveal dir="up" className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase">Contact Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy">
            تواصل <span className="text-gradient">معنا</span>
          </h2>
          <p className="mt-5 text-navy-light leading-loose">
            نسعد بالاستماع إليكم، ونُجيب على جميع أسئلتكم واستفساراتكم.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal dir="right">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0"><Phone className="size-5" /></div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-navy">اتصل بنا</h3>
                    <div className="mt-2 flex flex-col gap-1">
                      {SITE.phones.map((p) => (
                        <a key={p.href} href={p.href} dir="ltr" className="ltr-num text-sm font-bold text-navy hover:text-secondary transition">{p.display}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.1}>
              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0"><Mail className="size-5" /></div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-navy">البريد الإلكتروني</h3>
                    <a href={`mailto:${SITE.email}`} className="mt-2 block text-sm font-bold text-navy hover:text-secondary transition break-all">
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.2}>
              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0"><MapPin className="size-5" /></div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-navy">العنوان</h3>
                    <p className="mt-2 text-sm text-navy-light">جمهورية مصر العربية — القاهرة</p>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary"
                    >
                      فتح في خرائط جوجل
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal dir="left" className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">الاسم</label>
                  <input id="name" name="name" type="text" className={inputCls("name")} placeholder="الاسم الكامل" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">رقم الهاتف</label>
                  <input id="phone" name="phone" type="tel" dir="ltr" className={inputCls("phone") + " ltr-num text-right"} placeholder="01xxxxxxxxx" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">البريد الإلكتروني</label>
                  <input id="email" name="email" type="email" dir="ltr" className={inputCls("email") + " text-right"} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-navy mb-2">عنوان الرسالة</label>
                  <input id="subject" name="subject" type="text" className={inputCls("subject")} placeholder="بخصوص..." />
                  {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">تفاصيل الرسالة</label>
                  <textarea id="message" name="message" rows={5} className={inputCls("message") + " resize-none"} placeholder="اكتب رسالتك هنا..." />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "loading" ? (<><Loader2 className="size-5 animate-spin" /> جارٍ الإرسال...</>) :
                  (<><Send className="size-5" /> إرسال الرسالة</>)}
              </button>

              {status === "success" && (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="size-5 shrink-0 text-green-600" />
                  <span>تم إرسال رسالتك بنجاح، وسيقوم فريق ASN بالتواصل معك في أقرب وقت.</span>
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="size-5 shrink-0 text-red-600" />
                  <span>تعذر إرسال الرسالة، يرجى المحاولة مرة أخرى.</span>
                </div>
              )}
            </form>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal dir="up" className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated bg-white">
            <iframe
              title="موقع ASN على خرائط جوجل"
              src={SITE.mapsEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

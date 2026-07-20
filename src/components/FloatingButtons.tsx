import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-center gap-3">

      <a
        href={SITE.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="relative grid place-items-center size-14 rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-110 animate-pulse-ring"
      >
        {/* WhatsApp icon */}
        <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.53 2.478-1.318.115-.302.187-.65.187-1.02 0-.545-1.435-1.02-1.65-1.02Zm-3.048 4.115a9.63 9.63 0 0 1-5.522-1.734l-3.859 1.24 1.259-3.732a9.579 9.579 0 0 1-1.87-5.687C6.07 6.28 10.53 1.82 16.062 1.82c5.532 0 9.987 4.46 9.987 9.987 0 5.532-4.455 9.987-9.987 9.987Zm0-21.32C9.582 0 4.242 5.34 4.242 11.888c0 2.113.545 4.111 1.605 5.906L4 24l6.32-1.834c1.735.945 3.687 1.447 5.71 1.447 6.548 0 11.888-5.34 11.888-11.887 0-3.19-1.246-6.19-3.503-8.446C22.253 1.246 19.252 0 16.062 0Z" />
        </svg>
      </a>
      <a
        href={`mailto:${SITE.email}`}
        aria-label="البريد الإلكتروني"
        className="grid place-items-center size-14 rounded-full gradient-primary text-white shadow-elevated transition hover:scale-110"
      >
        <Mail className="size-6" />
      </a>
      {showTop && (
        <a
          href="#home"
          aria-label="العودة للأعلى"
          className="grid place-items-center size-11 rounded-full bg-navy text-white shadow-soft transition hover:scale-110"
        >
          <ArrowUp className="size-5" />
        </a>
      )}
    </div>
  );
}

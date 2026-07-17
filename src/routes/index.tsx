import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Team } from "@/sections/Team";
import { Services } from "@/sections/Services";
import { WhyASN } from "@/sections/WhyASN";
import { OurMessage } from "@/sections/OurMessage";
import { ConversionCTA } from "@/sections/ConversionCTA";
import { Trust } from "@/sections/Trust";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ASN | الاستيراد والتصدير والتخليص الجمركي بمصر" },
      { name: "description", content: "ASN — شركة رائدة في الاستيراد والتصدير والتخليص الجمركي بجميع موانئ مصر، حاصلة على ترخيص IATA. شحن جوي وبحري وبري بأسعار تنافسية." },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <WhyASN />
        <OurMessage />
        <ConversionCTA />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

import { AboutUs } from "./AboutUs";
import { Analysis } from "./Analysis";
import { Challenges } from "./Challenges";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Method } from "./Method";
import { Platform } from "./Platform";
import { Quality } from "./Quality";
import { Solutions } from "./Solutions";
import { UseCases } from "./UseCases";

/** Full landing page. Section order must match SECTION_IDS in config/navigation. */
export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-io-bg">
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <Solutions />
        <Analysis />
        <Platform />
        <UseCases />
        <Method />
        <Quality />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

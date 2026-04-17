import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Users, Clock } from "lucide-react";
import hero from "@/assets/hero-lounge.jpg";

const Reservations = () => (
  <Layout
    title="Reservations — The Glass House Lynchburg"
    description="Reserve a table at The Glass House in downtown Lynchburg, VA. Walk-ins welcome at the bar; large parties by inquiry."
  >
    <section className="relative h-[55vh] min-h-[420px] -mt-20 overflow-hidden">
      <img src={hero} alt="The Glass House bar" className="absolute inset-0 size-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-noir/65" />
      <div className="relative z-10 h-full container flex items-end pb-16">
        <div className="max-w-2xl">
          <p className="hairline mb-5 ember-flicker">Reservations</p>
          <h1 className="font-display text-5xl md:text-7xl text-ivory leading-[1.0] text-balance">
            Save your seat<br /><span className="italic text-primary">at The Glass House.</span>
          </h1>
        </div>
      </div>
    </section>

    <section className="container py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-foreground/85 leading-[1.85] text-lg">
          Reservations are recommended Wednesday through Saturday. The bar and high-top
          counter are reserved for walk-ins — first come, first poured.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 px-10 tracking-[0.2em] text-xs uppercase">
            <a href="tel:+14340000000">Book by Phone</a>
          </Button>
          <Button asChild variant="outline" className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-none h-14 px-10 tracking-[0.2em] text-xs uppercase bg-transparent">
            <a href="mailto:reservations@theglasshouselyh.com?subject=Reservation%20Request">Request via Email</a>
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground tracking-wide">
          Online booking via OpenTable / Resy launching soon.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: Clock, title: "Hours", body: "Tue–Thu 4–10 pm · Fri–Sat 4 pm – 12 am · Sun 11 am – 9 pm. Closed Mondays." },
          { icon: Users, title: "Large Parties", body: "Eight or more? Email us — we'll set up a dedicated table or a semi-private experience." },
          { icon: Phone, title: "Same-Day", body: "For reservations within 24 hours, please call us directly at (434) 000-0000." },
        ].map(({ icon: Icon, ...c }) => (
          <article key={c.title} className="border border-border/60 p-8 text-center">
            <Icon className="size-7 text-primary mx-auto mb-5" />
            <h3 className="font-display text-2xl text-ivory mb-3">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto border-t border-border/60 pt-10 text-center">
        <p className="hairline mb-3">Our Policy</p>
        <p className="text-muted-foreground text-sm leading-[1.85]">
          We hold tables for 15 minutes past the reservation time. Parties of six or more
          may be subject to a card hold. Cancellations within 24 hours are appreciated so
          we can offer the table to our waitlist.
        </p>
      </div>
    </section>
  </Layout>
);

export default Reservations;

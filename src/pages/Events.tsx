import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Music, Wine, Users, Sparkles } from "lucide-react";
const eventRoom = "/The_Glass_House_Events.jpg";

const RECURRING = [
  { icon: Music, day: "Thursday", title: "Live Jazz", time: "7 – 10 pm", body: "Local trios in residency. No cover, full menu." },
  { icon: Wine, day: "Wednesday", title: "Sommelier Flights", time: "5 – 9 pm", body: "Three pours, one region, one short story per glass." },
  { icon: Sparkles, day: "Friday", title: "Late Hour Cocktails", time: "10 pm – 12 am", body: "Off-menu builds from the bar team. First come, first served." },
  { icon: Users, day: "Sunday", title: "Brunch & Bubbles", time: "11 am – 2 pm", body: "Bottomless mimosas with any entrée. The slow start you deserve." },
];

const Events = () => (
  <Layout
    title="Events & Private Bookings — The Glass House Lynchburg"
    description="Recurring nights and private events at The Glass House in downtown Lynchburg, VA. Live jazz, sommelier flights, and full buyouts available."
  >
    <section className="container py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="hairline mb-5">Events</p>
        <h1 className="font-display text-5xl md:text-7xl text-ivory leading-[1.0] text-balance">
          Nights worth<br /><span className="italic text-primary">circling the calendar.</span>
        </h1>
        <div className="gold-rule mt-8 w-16" />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {RECURRING.map(({ icon: Icon, ...e }) => (
          <article key={e.title} className="border border-border/60 p-8 hover:border-primary/60 transition-colors group">
            <div className="flex items-start justify-between mb-6">
              <Icon className="size-8 text-primary" />
              <span className="hairline">{e.day} · {e.time}</span>
            </div>
            <h3 className="font-display text-3xl text-ivory mb-3">{e.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{e.body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="relative py-24 md:py-32 border-y border-border/60 bg-card/40">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <img src={eventRoom} alt="Private dining room set for an event" loading="lazy" width={1600} height={1024} className="aspect-[4/3] object-cover w-full" />
        <div>
          <p className="hairline mb-5">Private Bookings</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
            Host your night<br /><span className="italic text-primary">in the glass.</span>
          </h2>
          <div className="gold-rule mt-7 w-16" />
          <p className="mt-7 text-muted-foreground leading-[1.85]">
            Rehearsal dinners, milestone birthdays, corporate gatherings, full buyouts —
            we shape the room around your evening with bespoke menus and cocktail pairings.
          </p>
          <ul className="mt-7 space-y-3 text-foreground/85">
            <li className="flex gap-3"><span className="text-primary">—</span> Semi-private dining · up to 24 guests</li>
            <li className="flex gap-3"><span className="text-primary">—</span> Lounge buyout · up to 60 guests</li>
            <li className="flex gap-3"><span className="text-primary">—</span> Full venue · up to 120 guests, seated & standing</li>
          </ul>
          <div className="mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase">
              <a href="mailto:events@theglasshouselyh.com?subject=Private%20Event%20Inquiry">Inquire About an Event</a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="container py-20 md:py-28 text-center">
      <SectionHeader
        eyebrow="Tell Us About Your Night"
        title="Every event starts with a conversation."
        subtitle="Send us the date, the headcount, and the vibe. We'll come back with a proposal within two business days."
      />
      <div className="mt-10">
        <Button asChild variant="outline" className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase bg-transparent">
          <a href="mailto:events@theglasshouselyh.com">events@theglasshouselyh.com</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Events;

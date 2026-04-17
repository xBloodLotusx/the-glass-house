import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";

const interior1 = "/The_Glass_House_Background.jpg";
const interior2 = "/The_Glass_House_Reservations.jpg";

const VALUES = [
  { title: "Seasonal", body: "Menus shift with the harvest. What's on the plate tonight reflects what's at its peak — never frozen, never forced." },
  { title: "Local", body: "We partner with Virginia farmers, distillers, and brewers whenever the season allows. Your dinner often grew up the road." },
  { title: "Craft", body: "Every cocktail, every sauce, every garnish is built in-house. Slow, deliberate, and worth the wait." },
];

const About = () => (
  <Layout
    title="About — The Glass House Lynchburg"
    description="The story behind The Glass House: a gastro lounge in downtown Lynchburg pairing a serious bar program with a seasonal kitchen on the river."
  >
    <section className="container py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="hairline mb-5">Our Story</p>
        <h1 className="font-display text-5xl md:text-7xl text-ivory leading-[1.0] text-balance">
          Built for evenings<br /><span className="italic text-primary">that linger.</span>
        </h1>
        <div className="gold-rule mt-8 w-16" />
        <div className="mt-10 space-y-6 text-foreground/85 text-lg leading-[1.85]">
          <p>
            The Glass House began with a simple question: what if the bar and the kitchen
            were equal partners? Not a restaurant with cocktails, not a cocktail bar with
            snacks — but a true gastro lounge, where a chef and a barman work the same room
            with the same care.
          </p>
          <p>
            We chose downtown Lynchburg because the city is in the middle of becoming
            something — a riverfront, a walkable core, a generation of operators raising
            the bar. We wanted to be part of that story, and we wanted to do it beside the
            James, where the light is always a little softer at dusk.
          </p>
          <p>
            Inside, it's intentionally dim. Marble, brass, leather, and candlelight. A room
            built to slow you down. Outside, the city's best stretch of public park, the
            train trestle, and the water beyond.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-card/40 border-y border-border/60 py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <img src={interior2} alt="Bartender at The Glass House" loading="lazy" width={1024} height={1024} className="aspect-[4/5] object-cover w-full" />
        <div>
          <p className="hairline mb-5">The Programs</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05]">
            A kitchen and a bar,<br /><span className="italic text-primary">in conversation.</span>
          </h2>
          <div className="gold-rule mt-7 w-16" />
          <p className="mt-7 text-muted-foreground leading-[1.85]">
            Our kitchen team draws from European technique and Southern pantry — think
            scallops with brown butter and grits, or duck with cherry gastrique. Our bar
            team is steeped in classics: a perfect Old Fashioned, a martini stirred to
            55 dilutions, an amaro list deeper than it has any right to be.
          </p>
          <p className="mt-5 text-muted-foreground leading-[1.85]">
            They build the menus together. That's the whole idea.
          </p>
        </div>
      </div>
    </section>

    <section className="container py-20 md:py-28">
      <SectionHeader eyebrow="What We Stand For" title="Three things, always." />
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {VALUES.map((v, i) => (
          <article key={v.title} className="border border-border/60 p-10 hover:border-primary/60 transition-colors">
            <p className="hairline text-primary/70 mb-4">0{i + 1}</p>
            <h3 className="font-display text-3xl text-ivory mb-4">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img src={interior1} alt="The Glass House interior" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-noir/60" />
      <div className="relative z-10 h-full container grid place-items-center text-center">
        <div className="max-w-2xl">
          <p className="hairline mb-5">Come See Us</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory text-balance leading-[1.0]">
            We saved you a seat<br /><span className="italic text-primary">by the bar.</span>
          </h2>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

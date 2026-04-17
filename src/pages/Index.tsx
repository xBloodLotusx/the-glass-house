import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Calendar } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
const hero = "/The_Glass_House_Background.jpg";
const interior1 = "/The_Glass_House_Background.jpg";
const interior2 = "/The_Glass_House_Reservations.jpg";
const interior3 = "/The_Glass_House_Events.jpg";

const FEATURES = [
  { img: "/The_Glass_House_Wings.jpg", name: "Tamarind BBQ Wings", note: "Sorghum Brined Chicken Wings with a Tamarind BBQ Glaze and Mango Jicama Slaw" },
  { img: "/The_Glass_House_Coastal_Board.jpg", name: "Coastal Board", note: "Smoked Trout, Jammy Eggs, Cucumber Radish Salad, Pickled Onion, Pumpernickel Crostini, and Caper Dill Crème Fraîche" },
  { img: "/The_Glass_House_Tequila.jpg", name: "Don't Text Your Ex", note: "Tequila, Mango, House Habanero Bitters, Lime" },
  { img: "/The_Glass_House_Meringue.jpg", name: "Passion Fruit Pavlova", note: "Toasted meringue with local berries and passion fruit coconut crème — dairy & gluten free" },
];

const Index = () => {
  return (
    <Layout
      title="The Glass House — Gastro Lounge in Downtown Lynchburg, VA"
      description="A trendy gastro lounge on the James. Seasonal plates, craft cocktails, and a moody, candlelit room beside Riverfront Park in downtown Lynchburg."
    >
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Candlelit marble bar inside The Glass House gastro lounge"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-noir" />
        <div className="absolute inset-0 bg-noir/30" />

        <div className="relative z-10 h-full container flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-3xl fade-up">
            <p className="hairline ember-flicker mb-6">Downtown Lynchburg · Riverfront Park</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-ivory leading-[0.95] tracking-tight">
              A gastro lounge<br />
              <span className="italic text-primary">on the river.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed">
              Seasonal plates, considered cocktails, and the warm, low light of an evening
              that lingers. Welcome to The Glass House.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase">
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button asChild variant="outline" className="border-ivory/40 bg-transparent text-ivory hover:bg-ivory hover:text-noir rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase">
                <Link to="/menu">View the Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="hairline mb-5">The Concept</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory text-balance leading-[1.05]">
              An upscale bar.<br />
              <span className="italic text-primary">A gourmet kitchen.</span><br />
              One unforgettable room.
            </h2>
            <div className="gold-rule mt-7 w-16" />
            <p className="mt-7 text-muted-foreground leading-[1.85]">
              The Glass House is downtown Lynchburg's gastro lounge — a place where a craft
              cocktail and a tasting plate share equal billing. Our kitchen leans into the
              seasons, our bar program leans into the classics, and the room leans into
              something quieter, warmer, and a little more cinematic than the rest of the block.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm tracking-wide">
              Our story <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={interior1} alt="Dark booth seating with backlit liquor shelves" loading="lazy" width={1024} height={1280} className="aspect-[4/5] object-cover w-full" />
            <img src={interior2} alt="Bartender stirring a cocktail" loading="lazy" width={1024} height={1024} className="aspect-[4/5] object-cover w-full mt-10" />
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-24 md:py-32 bg-card/40 border-y border-border/60">
        <div className="container">
          <SectionHeader
            eyebrow="From the Kitchen & Bar"
            title="A few things we love right now."
            subtitle="A glimpse of the seasonal menu — refined often, sourced locally when we can."
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <article key={f.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-ivory">{f.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.note}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-14">
            <Button asChild variant="outline" className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase bg-transparent">
              <Link to="/menu">Explore the Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FIND US STRIP */}
      <section className="py-24">
        <div className="container">
          <div className="glass-panel p-10 md:p-14 grid md:grid-cols-3 gap-10">
            <div className="flex gap-4">
              <MapPin className="size-6 text-primary shrink-0" />
              <div>
                <p className="hairline mb-2">Find Us</p>
                <p className="font-display text-2xl text-ivory leading-snug">1019 Jefferson Street<br />Lynchburg, VA</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="size-6 text-primary shrink-0" />
              <div>
                <p className="hairline mb-2">Hours</p>
                <p className="text-foreground/85 leading-relaxed text-sm">
                  Tue–Thu · 4 – 10 pm<br />
                  Fri–Sat · 4 pm – 12 am<br />
                  Sun · 11 am – 9 pm
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Calendar className="size-6 text-primary shrink-0" />
              <div>
                <p className="hairline mb-2">Reserve</p>
                <p className="text-foreground/85 text-sm leading-relaxed mb-3">
                  Tables fill quickly Friday & Saturday — book ahead.
                </p>
                <Link to="/reservations" className="text-primary text-sm tracking-wide inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Book now <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <img src={interior3} alt="Charcuterie board for an event" loading="lazy" width={1024} height={1024} className="aspect-[5/4] object-cover w-full order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <p className="hairline mb-5">Events & Private Bookings</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory text-balance leading-[1.05]">
              The room is yours<br /><span className="italic text-primary">for the evening.</span>
            </h2>
            <div className="gold-rule mt-7 w-16" />
            <p className="mt-7 text-muted-foreground leading-[1.85]">
              Birthdays, rehearsal dinners, corporate gatherings — we host private events
              and full buyouts in a setting designed for memorable nights. Bespoke menus,
              cocktail pairings, and a dedicated team.
            </p>
            <Link to="/events" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm tracking-wide">
              Plan an event <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-16 border-t border-border/60">
        <div className="container">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="hairline mb-3">Inside The Glass House</p>
              <h3 className="font-display text-3xl text-ivory">A glimpse.</h3>
            </div>
            <Link to="/gallery" className="text-primary text-sm tracking-wide inline-flex items-center gap-2 hover:gap-3 transition-all">
              Full gallery <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[interior1, "/The_Glass_House_Wings.jpg", "/The_Glass_House_Coastal_Board.jpg", interior3].map((src, i) => (
              <img key={i} src={src} alt="The Glass House interior and dishes" loading="lazy" className="aspect-square object-cover w-full" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

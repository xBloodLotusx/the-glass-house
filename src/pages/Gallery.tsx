import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import hero from "@/assets/hero-lounge.jpg";
import scallops from "@/assets/dish-scallops.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import steak from "@/assets/dish-steak.jpg";
import octopus from "@/assets/dish-octopus.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import eventRoom from "@/assets/event-room.jpg";

const IMAGES: { src: string; alt: string; span?: string }[] = [
  { src: hero, alt: "The bar at dusk", span: "md:col-span-2 md:row-span-2" },
  { src: scallops, alt: "Seared scallops" },
  { src: cocktail, alt: "Smoked Old Fashioned" },
  { src: interior1, alt: "Booth seating" },
  { src: octopus, alt: "Charred octopus" },
  { src: steak, alt: "Dry-aged ribeye", span: "md:col-span-2" },
  { src: interior2, alt: "Bartender at work" },
  { src: interior3, alt: "Charcuterie board" },
  { src: eventRoom, alt: "Private dining room", span: "md:col-span-2" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Layout
      title="Gallery — The Glass House Lynchburg"
      description="Photos of The Glass House gastro lounge in downtown Lynchburg — interiors, plates, cocktails, and private events."
    >
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Gallery"
          title="A look around the room."
          subtitle="The plates, the pours, and the light."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden bg-muted ${img.span ?? ""}`}
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-sm grid place-items-center p-6 fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-ivory hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="size-7" />
          </button>
          <img
            src={IMAGES[open].src}
            alt={IMAGES[open].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/80 text-sm tracking-wide">
            {IMAGES[open].alt}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

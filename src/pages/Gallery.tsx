import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";

const IMAGES: { src: string; alt: string; span?: string }[] = [
  { src: "/The_Glass_House_Background.jpg", alt: "The Glass House", span: "md:col-span-2 md:row-span-2" },
  { src: "/The_Glass_House_Wings.jpg", alt: "Tamarind BBQ Wings" },
  { src: "/The_Glass_House_Tequila.jpg", alt: "Don't Text Your Ex cocktail" },
  { src: "/The_Glass_House_Coastal_Board.jpg", alt: "Coastal Board" },
  { src: "/The_Glass_House_Meringue.jpg", alt: "Passion Fruit Pavlova" },
  { src: "/The_Glass_House_Reservations.jpg", alt: "The Glass House interior", span: "md:col-span-2" },
  { src: "/The_Glass_House_Events.jpg", alt: "Private dining", span: "md:col-span-2" },
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

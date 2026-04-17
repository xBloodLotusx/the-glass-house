import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => (
  <Layout
    title="Contact — The Glass House Lynchburg"
    description="Visit The Glass House in downtown Lynchburg, VA, beside Riverfront Park. Hours, address, phone, and email."
  >
    <section className="container py-20 md:py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Find us by the river."
        subtitle="In the heart of downtown Lynchburg, a short walk from Riverfront Park and the Bluffwalk."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-1">
          <div className="border border-border/60 p-8 md:p-10 space-y-8">
            <div className="flex gap-5">
              <MapPin className="size-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="hairline mb-2">Address</p>
                <p className="font-display text-2xl text-ivory leading-snug">
                  Downtown Lynchburg<br /><span className="text-foreground/70 text-lg">by Riverfront Park · Lynchburg, VA</span>
                </p>
              </div>
            </div>

            <div className="gold-rule" />

            <div className="flex gap-5">
              <Phone className="size-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="hairline mb-2">Phone</p>
                <a href="tel:+14340000000" className="font-display text-2xl text-ivory hover:text-primary transition-colors">
                  (434) 000-0000
                </a>
              </div>
            </div>

            <div className="gold-rule" />

            <div className="flex gap-5">
              <Mail className="size-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="hairline mb-2">Email</p>
                <div className="space-y-1 text-foreground/85">
                  <p><span className="text-muted-foreground text-xs uppercase tracking-wider">General · </span><a href="mailto:hello@theglasshouselyh.com" className="hover:text-primary transition-colors">hello@theglasshouselyh.com</a></p>
                  <p><span className="text-muted-foreground text-xs uppercase tracking-wider">Reservations · </span><a href="mailto:reservations@theglasshouselyh.com" className="hover:text-primary transition-colors">reservations@theglasshouselyh.com</a></p>
                  <p><span className="text-muted-foreground text-xs uppercase tracking-wider">Events · </span><a href="mailto:events@theglasshouselyh.com" className="hover:text-primary transition-colors">events@theglasshouselyh.com</a></p>
                </div>
              </div>
            </div>

            <div className="gold-rule" />

            <div className="flex gap-5">
              <Clock className="size-6 text-primary shrink-0 mt-1" />
              <div className="w-full">
                <p className="hairline mb-3">Hours</p>
                <ul className="space-y-1.5 text-foreground/85">
                  <li className="flex justify-between"><span>Tuesday – Thursday</span><span>4 – 10 pm</span></li>
                  <li className="flex justify-between"><span>Friday – Saturday</span><span>4 pm – 12 am</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>11 am – 9 pm</span></li>
                  <li className="flex justify-between text-muted-foreground"><span>Monday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>

            <div className="gold-rule" />

            <div>
              <p className="hairline mb-4">Follow</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/theglasshouselyh/" target="_blank" rel="noreferrer" aria-label="Facebook" className="size-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Facebook className="size-4" />
                </a>
                <a href="#" aria-label="Instagram" className="size-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Instagram className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-border/60 overflow-hidden min-h-[480px] lg:min-h-0">
          <iframe
            title="Map of downtown Lynchburg"
            src="https://www.google.com/maps?q=Riverfront+Park+Lynchburg+VA&output=embed"
            className="size-full grayscale-[40%] contrast-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ minHeight: 480, border: 0 }}
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;

import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-noir mt-24">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <p className="hairline mb-3">The Glass House</p>
        <h3 className="font-display text-3xl text-ivory mb-4">
          A gastro lounge on the river.
        </h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          Seasonal plates, considered cocktails, and warm light — served nightly in
          downtown Lynchburg, beside the James.
        </p>
      </div>

      <div>
        <p className="hairline mb-4">Visit</p>
        <ul className="space-y-3 text-sm text-foreground/80">
          <li className="flex gap-2"><MapPin className="size-4 text-primary mt-0.5" /> 1019 Jefferson Street<br />Lynchburg, VA</li>
          <li className="flex gap-2"><Phone className="size-4 text-primary mt-0.5" /> (434) 544-1176</li>
        </ul>
      </div>

      <div>
        <p className="hairline mb-4">Hours</p>
        <ul className="space-y-1.5 text-sm text-foreground/80">
          <li className="flex justify-between"><span>Tue – Thu</span><span>4 – 10 pm</span></li>
          <li className="flex justify-between"><span>Fri – Sat</span><span>4 pm – 12 am</span></li>
          <li className="flex justify-between"><span>Sun</span><span>11 am – 9 pm</span></li>
          <li className="flex justify-between text-muted-foreground"><span>Mon</span><span>Closed</span></li>
        </ul>
        <div className="flex gap-3 mt-6">
          <a href="https://www.facebook.com/theglasshouselyh/" target="_blank" rel="noreferrer" aria-label="Facebook" className="size-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
            <Facebook className="size-4" />
          </a>
          <a href="#" aria-label="Instagram" className="size-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-border/60">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The Glass House. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <Link to="/reservations" className="hover:text-primary transition-colors">Reservations</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

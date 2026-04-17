import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-background/70 to-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "text-sm tracking-wide text-foreground/75 hover:text-primary transition-colors relative",
                pathname === n.to && "text-primary",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-6 tracking-[0.2em] text-xs uppercase">
            <Link to="/reservations">Reserve</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col py-6 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "py-3 font-display text-2xl text-ivory hover:text-primary transition-colors",
                  pathname === n.to && "text-primary",
                )}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="mt-4 inline-block border border-primary text-primary py-3 px-6 text-center tracking-[0.2em] text-xs uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Reserve a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

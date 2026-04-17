import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <Link to="/" className={`group inline-flex flex-col items-start leading-none ${className}`} aria-label="The Glass House home">
    <span className="hairline text-primary/70 group-hover:text-primary transition-colors">Est. Lynchburg</span>
    <span className="font-display text-2xl md:text-[1.7rem] text-ivory tracking-wide">
      The <span className="italic text-primary">Glass</span> House
    </span>
  </Link>
);

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    {eyebrow && <p className="hairline mb-4">{eyebrow}</p>}
    <h2 className="font-display text-4xl md:text-5xl text-ivory text-balance leading-[1.05]">{title}</h2>
    {subtitle && <p className="mt-5 text-muted-foreground leading-relaxed">{subtitle}</p>}
    <div className={`gold-rule mt-7 w-16 ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);

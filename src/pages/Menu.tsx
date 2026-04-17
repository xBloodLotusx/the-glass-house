import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MENU } from "@/data/menu";

const Menu = () => {
  return (
    <Layout
      title="Menu — The Glass House Lynchburg"
      description="Seasonal small plates, mains, shareables, desserts, craft cocktails, wine, and beer at The Glass House in downtown Lynchburg, VA."
    >
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Spring · Summer Menu"
          title="What we're cooking & pouring."
          subtitle="Our menu shifts with the season. Local where we can, considered everywhere. Ask your server about tonight's specials."
        />

        <Tabs defaultValue={MENU[0].id} className="mt-16">
          <TabsList className="bg-transparent flex flex-wrap h-auto justify-center gap-2 p-0 mb-12">
            {MENU.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="rounded-none border border-border/60 bg-transparent px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground/70 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-none hover:text-primary transition-colors"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MENU.map((section) => (
            <TabsContent key={section.id} value={section.id} className="mt-0 fade-up">
              <div className="max-w-3xl mx-auto">
                <h2 className="sr-only">{section.label}</h2>
                <ul className="divide-y divide-border/50">
                  {section.items.map((item) => (
                    <li key={item.name} className="py-7 group">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display text-2xl text-ivory">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="hairline text-primary text-[0.65rem]">{item.badge}</span>
                        )}
                        <span aria-hidden className="flex-1 border-b border-dotted border-border/60 translate-y-[-6px]" />
                        <span className="font-display text-xl text-primary tabular-nums">${item.price}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed pr-24">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-16 text-center text-xs text-muted-foreground tracking-wide max-w-xl mx-auto">
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may
          increase your risk of foodborne illness. Please inform your server of any allergies.
        </p>
      </section>
    </Layout>
  );
};

export default Menu;

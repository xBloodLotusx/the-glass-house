import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout title="Not Found — The Glass House" description="The page you're looking for doesn't exist.">
    <section className="container py-32 md:py-44 text-center">
      <p className="hairline mb-6">404</p>
      <h1 className="font-display text-6xl md:text-8xl text-ivory leading-none">
        That table's <span className="italic text-primary">not set.</span>
      </h1>
      <div className="gold-rule mt-8 w-16 mx-auto" />
      <p className="mt-7 text-muted-foreground max-w-md mx-auto">
        The page you're looking for doesn't exist — but the bar's still open.
      </p>
      <div className="mt-10">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-8 tracking-[0.2em] text-xs uppercase">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default NotFound;

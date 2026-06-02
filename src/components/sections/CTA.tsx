import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-hero p-10 md:p-16 text-center shadow-elegant-lg">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_80%,white,transparent_40%)]" />
        <div className="relative">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground tracking-tight max-w-3xl mx-auto">
            Ready to get your PAN sorted today?
          </h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
            Join thousands of satisfied Indians who trust PAN Sahayak for hassle-free PAN services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="accent" size="lg">
              <Link to="/inquiry">Apply Now <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

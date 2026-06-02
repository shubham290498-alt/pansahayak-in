import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-subtle" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl -z-10" />

      <div className="container py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
            <BadgeCheck className="h-4 w-4" /> Trusted by 1,00,000+ Indians
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
            Your PAN Card,{" "}
            <span className="text-gradient">Sorted in Minutes.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Apply for a new PAN, correct details, reprint, download e-PAN, or link with Aadhaar — all with expert assistance and zero hassle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/inquiry">Apply Now <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "1L+", l: "Happy Clients", Icon: Users },
              { n: "24h", l: "Avg. Delivery", Icon: Clock },
              { n: "99%", l: "Success Rate", Icon: BadgeCheck },
            ].map(({ n, l, Icon }) => (
              <div key={l} className="rounded-2xl bg-card border border-border p-4 shadow-elegant">
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-2 font-display font-bold text-xl">{n}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAN Card mockup */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-30 rounded-full" />
          <div className="relative mx-auto max-w-md aspect-[1.586/1] rounded-3xl bg-gradient-hero p-1 shadow-elegant-lg rotate-3 hover:rotate-0 transition-smooth">
            <div className="h-full w-full rounded-[1.4rem] bg-gradient-card p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secondary/10" />
              <div className="flex justify-between items-start relative">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Income Tax Department</div>
                  <div className="text-sm font-semibold text-primary">Govt. of India</div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-gradient-hero grid place-items-center">
                  <BadgeCheck className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="relative">
                <div className="text-xs text-muted-foreground">Permanent Account Number</div>
                <div className="font-mono font-bold text-2xl tracking-[0.3em] text-foreground mt-1">ABCDE1234F</div>
                <div className="mt-3 text-sm">
                  <div className="font-semibold text-foreground">RAHUL SHARMA</div>
                  <div className="text-xs text-muted-foreground">DOB: 01/01/1990</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-10 bg-card border border-border rounded-2xl p-4 shadow-elegant-lg flex items-center gap-3 animate-float">
            <div className="h-10 w-10 rounded-full bg-accent/15 grid place-items-center">
              <BadgeCheck className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Application</div>
              <div className="text-sm font-semibold">Approved ✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

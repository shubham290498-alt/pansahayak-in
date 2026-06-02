import { ShieldCheck, Zap, HeadphonesIcon, Lock, IndianRupee, Award } from "lucide-react";

const items = [
  { Icon: ShieldCheck, title: "100% Secure", desc: "Bank-grade encryption for all your personal documents." },
  { Icon: Zap, title: "Fastest Turnaround", desc: "e-PAN in hours, physical card in 7–15 days." },
  { Icon: HeadphonesIcon, title: "Dedicated Support", desc: "Real human experts available 7 days a week." },
  { Icon: Lock, title: "Data Privacy", desc: "Your data is never shared with any third party." },
  { Icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges. Government fee + our service fee." },
  { Icon: Award, title: "Government Compliant", desc: "Processed via NSDL & UTIITSL authorized partners." },
];

export const Benefits = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Why choose us</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          Built on trust. Powered by experts.
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:bg-gradient-card hover:shadow-elegant transition-smooth">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-base">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

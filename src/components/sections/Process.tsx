const steps = [
  { n: "01", title: "Submit Inquiry", desc: "Fill our quick form with your details and required PAN service." },
  { n: "02", title: "Upload Documents", desc: "Share your documents securely via our verified upload portal." },
  { n: "03", title: "Expert Processing", desc: "Our specialists verify, fill the form, and submit on your behalf." },
  { n: "04", title: "Get Your PAN", desc: "Receive your e-PAN instantly and physical card within 7–15 days." },
];

export const Process = () => (
  <section className="py-20 md:py-28 bg-gradient-subtle border-y border-border">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">How it works</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          A simple 4-step process
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="rounded-3xl bg-card border border-border p-7 shadow-elegant hover:shadow-elegant-lg transition-smooth h-full">
              <div className="font-display text-5xl font-extrabold text-gradient leading-none">{s.n}</div>
              <h3 className="mt-4 font-display font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-primary to-primary-glow" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

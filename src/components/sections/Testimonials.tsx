import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Mumbai", text: "Got my new PAN within 2 days. The process was so smooth and the team was incredibly responsive. Highly recommended!" },
  { name: "Arjun Patel", role: "Ahmedabad", text: "I needed to correct my date of birth on the PAN. PAN Sahayak handled everything end-to-end. Brilliant service." },
  { name: "Anita Reddy", role: "Hyderabad", text: "Linked my Aadhaar with PAN in minutes. The team explained every step. Worth every rupee." },
];

export const Testimonials = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">Loved across India</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-3xl bg-gradient-card border border-border p-7 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1 transition-smooth">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-foreground">"{t.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-hero grid place-items-center text-primary-foreground font-display font-bold">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

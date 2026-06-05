import { Link } from "react-router-dom";
import { FileText, Pencil, Printer, Download, Link2, ArrowRight } from "lucide-react";

const services = [
  { Icon: FileText, title: "New PAN Application", desc: "Apply for a fresh PAN card with end-to-end assistance and verification." },
  { Icon: Pencil, title: "PAN Correction", desc: "Update name, DOB, address, or photo on your existing PAN card." },
  { Icon: Printer, title: "PAN Reprint", desc: "Lost or damaged your PAN? Get a duplicate physical card delivered." },
  { Icon: Download, title: "e-PAN Download", desc: "Instantly download a digitally signed e-PAN issued by the Income Tax Dept." },
  { Icon: Link2, title: "PAN-Aadhaar Linking", desc: "Mandatory linking made simple with expert verification support." },
  { Icon: FileText, title: "NRI / Foreign PAN", desc: "Specialized assistance for NRIs and foreign citizens applying from abroad." },
];

export const Services = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Services</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          Every PAN service, <span className="text-gradient">under one roof.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">From first-time applications to corrections and Aadhaar linking — we handle it all.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, desc }, i) => (
          <Link
            key={title}
            to={`/inquiry?service=${encodeURIComponent(title)}`}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative rounded-3xl border border-border bg-gradient-card p-7 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1 transition-smooth animate-fade-in-up overflow-hidden block"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-smooth" />
            <div className="relative h-14 w-14 rounded-2xl bg-gradient-hero grid place-items-center shadow-elegant mb-5">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="relative font-display font-bold text-xl mb-2">{title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="relative mt-5 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service fee</span>
                <span className="text-sm font-extrabold text-primary">₹499</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                LSO/DD UI: {" "}
                <span className="font-extrabold">₹499</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

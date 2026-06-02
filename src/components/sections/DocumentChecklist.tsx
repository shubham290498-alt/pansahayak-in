import { IdCard, MapPin, Calendar, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    Icon: IdCard,
    title: "Identity Proof",
    items: ["Aadhaar Card", "Passport", "Voter ID", "Driving License", "Ration Card with photo"],
  },
  {
    Icon: MapPin,
    title: "Address Proof",
    items: ["Aadhaar Card", "Passport", "Utility Bill (≤3 months)", "Bank Account Statement", "Rental Agreement"],
  },
  {
    Icon: Calendar,
    title: "Date of Birth Proof",
    items: ["Birth Certificate", "Aadhaar Card", "Passport", "10th Class Marksheet", "Driving License"],
  },
];

export const DocumentChecklist = ({ heading = true }: { heading?: boolean }) => (
  <section className="py-20 md:py-28">
    <div className="container">
      {heading && (
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Document checklist</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            What you'll need to apply
          </h2>
          <p className="mt-4 text-muted-foreground">
            Keep these documents handy for a smooth and fast PAN application process.
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map(({ Icon, title, items }) => (
          <div key={title} className="rounded-3xl bg-gradient-card border border-border p-7 shadow-elegant hover:shadow-elegant-lg transition-smooth">
            <div className="h-14 w-14 rounded-2xl bg-gradient-hero grid place-items-center shadow-elegant mb-5">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">{title}</h3>
            <ul className="space-y-2.5">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="hero" size="lg">
          <Download className="h-4 w-4" /> Download Full Checklist (PDF)
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">PDF placeholder — backend integration coming soon.</p>
      </div>
    </div>
  </section>
);

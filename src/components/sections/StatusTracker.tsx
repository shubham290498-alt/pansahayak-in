import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  Truck,
  FileCheck,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stages = [
  { Icon: FileCheck, label: "Submitted", done: true },
  { Icon: CheckCircle2, label: "Verified", done: true },
  { Icon: Clock, label: "Processing", done: true, current: true },
  { Icon: Truck, label: "Dispatched", done: false },
];

interface PortalLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  instructions: string;
}

const portals: PortalLink[] = [
  {
    name: "NSDL / Protean",
    url: "https://tin.tin.nsdl.com/tan/servlet/StatusTrack",
    icon: <Building2 className="h-5 w-5" />,
    instructions:
      "Select 'PAN – New / Change Request', enter your Acknowledgement Number and complete the CAPTCHA.",
  },
  {
    name: "UTIITSL",
    url: "https://trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp",
    icon: <Landmark className="h-5 w-5" />,
    instructions:
      "Select your application type, enter your Coupon Number and click Submit.",
  },
];

export const StatusTracker = () => {
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (id) {
      navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-subtle border-y border-border">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT — Input + Official Portal Links */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Track your application
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Real-time PAN application status.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enter your acknowledgement or coupon number below. We'll keep it handy so you can copy-paste it into the official government portal of your choice.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShow(true);
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <Input
              placeholder="Acknowledgement / Coupon No."
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="h-12 rounded-full px-5 bg-card"
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="shrink-0"
            >
              <Search className="h-4 w-4" /> Track
            </Button>
          </form>

          {show && id && (
            <div className="mt-4 flex items-center gap-3 max-w-md rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Your tracking number
                </div>
                <div className="font-mono font-bold text-lg truncate">{id}</div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full shrink-0"
                onClick={handleCopy}
                aria-label="Copy tracking number"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}

          {/* Official Portal Cards */}
          <div className="mt-8 space-y-4 max-w-md">
            {portals.map((portal) => (
              <a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-0.5 transition-smooth"
              >
                <div className="mt-0.5 h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary shrink-0">
                  {portal.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{portal.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {portal.instructions}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground max-w-md">
            The tracker links above connect directly to official Government of India portals. No data is stored by us.
          </p>
        </div>

        {/* RIGHT — Visual progress card (demo) */}
        <div className="rounded-3xl bg-card border border-border shadow-elegant-lg p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-xs text-muted-foreground">
                Application ID
              </div>
              <div className="font-mono font-bold text-lg">
                {show && id ? id : "PAN20260102345"}
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold">
              In Progress
            </span>
          </div>
          <div className="space-y-5">
            {stages.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 rounded-full grid place-items-center transition-smooth ${
                    s.done
                      ? "bg-gradient-hero text-primary-foreground shadow-elegant"
                      : "bg-muted text-muted-foreground"
                  } ${s.current ? "animate-pulse" : ""}`}
                >
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{s.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.done
                      ? s.current
                        ? "Currently processing..."
                        : "Completed"
                      : "Pending"}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className={`w-1 h-8 rounded-full ${
                      s.done ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border text-center text-xs text-muted-foreground">
            Sample view — actual status must be checked on official portals.
          </div>
        </div>
      </div>
    </section>
  );
};

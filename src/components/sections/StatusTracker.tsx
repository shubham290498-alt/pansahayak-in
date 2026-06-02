import { useState } from "react";
import { Search, CheckCircle2, Clock, Truck, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stages = [
  { Icon: FileCheck, label: "Submitted", done: true },
  { Icon: CheckCircle2, label: "Verified", done: true },
  { Icon: Clock, label: "Processing", done: true, current: true },
  { Icon: Truck, label: "Dispatched", done: false },
];

export const StatusTracker = () => {
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  return (
    <section className="py-20 md:py-28 bg-gradient-subtle border-y border-border">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Track your application</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Real-time PAN application status.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enter your application ID to instantly check the status of your PAN application — from submission to delivery.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setShow(true); }}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <Input
              placeholder="e.g. PAN20260102345"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="h-12 rounded-full px-5 bg-card"
            />
            <Button type="submit" variant="hero" size="lg" className="shrink-0">
              <Search className="h-4 w-4" /> Track
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">Demo only — tracking system integration coming soon.</p>
        </div>

        <div className="rounded-3xl bg-card border border-border shadow-elegant-lg p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-xs text-muted-foreground">Application ID</div>
              <div className="font-mono font-bold text-lg">{show && id ? id : "PAN20260102345"}</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold">In Progress</span>
          </div>
          <div className="space-y-5">
            {stages.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full grid place-items-center transition-smooth ${
                  s.done ? "bg-gradient-hero text-primary-foreground shadow-elegant" : "bg-muted text-muted-foreground"
                } ${s.current ? "animate-pulse" : ""}`}>
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{s.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.done ? (s.current ? "Currently processing..." : "Completed") : "Pending"}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className={`w-1 h-8 rounded-full ${s.done ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

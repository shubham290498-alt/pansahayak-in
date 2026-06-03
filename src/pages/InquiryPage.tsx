import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { Upload, CheckCircle2, Send, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

const services = [
  "New PAN Application",
  "PAN Correction",
  "PAN Reprint",
  "e-PAN Download",
  "PAN-Aadhaar Linking",
  "NRI / Foreign PAN",
];

const InquiryPage = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", service: searchParams.get("service") || "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) setForm((prev) => ({ ...prev, service }));
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted errors.");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Your inquiry has been submitted!");
  };

  return (
    <SiteLayout>
      <section className="pt-16 pb-4 bg-gradient-subtle border-b border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Apply Now</span>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Start your <span className="text-gradient">PAN application</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Submit your details and our experts will reach out within 1 hour during business hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          {submitted ? (
            <div className="rounded-3xl bg-gradient-card border border-border p-10 text-center shadow-elegant-lg animate-scale-in">
              <div className="h-16 w-16 mx-auto rounded-full bg-accent/15 grid place-items-center mb-5">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-display font-bold text-2xl">Inquiry Submitted Successfully!</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Thank you, {form.name.split(" ")[0]}. Our team will contact you on {form.mobile} within 1 hour.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", mobile: "", email: "", service: "", message: "" });
                  window.history.replaceState({}, "", "/inquiry");
                }}
              >
                Submit another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-elegant-lg space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.name}>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Rahul Sharma" />
                </Field>
                <Field label="Mobile Number" error={errors.mobile}>
                  <Input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="7909027036" maxLength={10} />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" error={errors.email}>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </Field>
                <Field label="PAN Service Required" error={errors.service}>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field label="Message (optional)" error={errors.message}>
                <Textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us a bit about your requirement..."
                />
              </Field>

              <Field label="Upload Documents (optional)">
                <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-2xl p-8 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-smooth">
                  <Upload className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium">Click to upload or drag & drop</span>
                  <span className="text-xs text-muted-foreground">PDF, JPG, PNG up to 5MB each (placeholder)</span>
                  <input type="file" multiple className="hidden" />
                </label>
              </Field>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4" /> Submit Inquiry
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>

              <a
                href={`https://wa.me/917909027036?text=${encodeURIComponent(
                  form.service
                    ? `Hi, I'm interested in ${form.service}. Please assist me.`
                    : "Hi, I need help with PAN services."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-accent text-accent-foreground font-semibold shadow-elegant hover:shadow-glow transition-smooth"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp{form.service ? ` — ${form.service}` : ""}
              </a>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="font-medium">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default InquiryPage;

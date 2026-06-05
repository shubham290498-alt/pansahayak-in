import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { postLead } from "@/lib/postLead";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Please tell us more").max(1000),
});

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});

    const payload = {
      page: "/contact",
      submittedAt: new Date().toISOString(),
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      await postLead(payload);
      toast.success("Message sent! We'll reply shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — PAN Sahayak | Phone, WhatsApp & Email</title>
        <meta name="description" content="Contact PAN Sahayak for PAN card assistance. Call +91 79090 27036, WhatsApp us, email support@pansahayak.in, or visit our New Delhi office." />
        <link rel="canonical" href="https://pansahayak.in/contact" />
      </Helmet>
      <SiteLayout>
        <section className="pt-16 pb-4 bg-gradient-subtle border-b border-border">
          <div className="container text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Contact & Support</span>
            <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight">
              We're here to <span className="text-gradient">help you</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Reach out via phone, email, WhatsApp, or visit our office. We respond within 1 business hour.
            </p>
          </div>
        </section>

      <section className="py-16 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { Icon: Phone, label: "Phone", value: "+91 79090 27036", href: "tel:+917909027036" },
              { Icon: Mail, label: "Email", value: "support@pansahayak.in", href: "mailto:support@pansahayak.in" },
              { Icon: MessageCircle, label: "WhatsApp", value: "+91 79090 27036", href: "https://wa.me/917909027036?text=Hi,%20I%20need%20help%20with%20PAN%20services." },
              { Icon: MapPin, label: "Office", value: "Connaught Place, New Delhi, India 110001" },
              { Icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM IST" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="font-semibold mt-0.5">{value}</div>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/917909027036?text=Hi,%20I%20need%20help%20with%20PAN%20services."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-accent text-accent-foreground font-semibold shadow-elegant hover:shadow-glow transition-smooth"
            >
              <MessageCircle className="h-5 w-5" /> Chat with us on WhatsApp
            </a>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-elegant-lg space-y-5">
              <h3 className="font-display font-bold text-xl">Send us a message</h3>
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>

            <div className="rounded-3xl overflow-hidden border border-border shadow-elegant aspect-[16/10] bg-muted relative">
              <div className="absolute inset-0 grid place-items-center text-center p-6">
                <div>
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="font-display font-bold text-lg">Google Maps Placeholder</div>
                  <p className="text-sm text-muted-foreground mt-1">Connaught Place, New Delhi</p>
                  <p className="text-xs text-muted-foreground mt-2">Map embed coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </SiteLayout>
    </>
  );
};

export default ContactPage;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take to get a new PAN card?", a: "An e-PAN is typically issued within 24–48 hours. A physical PAN card is delivered within 7–15 working days from the date of application." },
  { q: "What documents do I need for a new PAN application?", a: "You'll need a valid identity proof (Aadhaar, Passport, Voter ID), address proof, date of birth proof, and a passport-size photograph." },
  { q: "Is PAN-Aadhaar linking mandatory?", a: "Yes. As per the Income Tax Department, linking PAN with Aadhaar is mandatory for all PAN holders. Non-linked PANs become inoperative." },
  { q: "Can I get my PAN if I'm an NRI or foreign citizen?", a: "Absolutely. We offer specialized assistance for NRIs and foreign citizens applying for an Indian PAN card from abroad." },
  { q: "What if there is a mistake on my existing PAN card?", a: "Use our PAN Correction service to update name, date of birth, photo, or signature. Our experts will guide you through it." },
  { q: "Is my personal information safe with you?", a: "Yes. We use bank-grade encryption and process applications via authorized government partners (NSDL/UTIITSL). We never share your data with third parties." },
];

export const FAQ = () => (
  <section className="py-20 md:py-28 bg-gradient-subtle border-y border-border">
    <div className="container max-w-4xl">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">Frequently asked questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-2xl border border-border bg-card px-6 shadow-elegant data-[state=open]:shadow-elegant-lg"
          >
            <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

const ServicesPage = () => (
  <>
    <Helmet>
      <title>PAN Services — New PAN, Correction, Reprint & More | PAN Sahayak</title>
      <meta name="description" content="Explore PAN Sahayak services: New PAN Application, PAN Correction, PAN Reprint, e-PAN Download, and PAN-Aadhaar Linking. Expert assistance across India." />
      <link rel="canonical" href="https://pansahayak.in/services" />
    </Helmet>
    <SiteLayout>
      <section className="pt-16 pb-4 bg-gradient-subtle border-b border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Services</span>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            PAN services tailored to <span className="text-gradient">your needs</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Explore our complete range of PAN card services. Choose the one that fits your requirement.
          </p>
        </div>
      </section>
      <Services />
      <Process />
      <CTA />
    </SiteLayout>
  </>
);

export default ServicesPage;

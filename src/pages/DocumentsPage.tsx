import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentChecklist } from "@/components/sections/DocumentChecklist";
import { CTA } from "@/components/sections/CTA";

const DocumentsPage = () => (
  <>
    <Helmet>
      <title>Required Documents for PAN Services | PAN Sahayak</title>
      <meta name="description" content="Complete document checklist for New PAN, Correction, Reprint, and Aadhaar Linking. Prepare your Aadhaar, photo, and signature in advance." />
      <link rel="canonical" href="https://pansahayak.in/documents" />
    </Helmet>
    <SiteLayout>
      <section className="pt-16 pb-4 bg-gradient-subtle border-b border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Documents</span>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Required documents for <span className="text-gradient">PAN services</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            A clear, categorized checklist so you can prepare in advance and avoid delays.
          </p>
        </div>
      </section>
      <DocumentChecklist heading={false} />
      <CTA />
    </SiteLayout>
  </>
);

export default DocumentsPage;

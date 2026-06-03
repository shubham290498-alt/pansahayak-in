import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { StatusTracker } from "@/components/sections/StatusTracker";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => (
  <>
    <Helmet>
      <title>PAN Sahayak — Trusted PAN Card Assistance Service in India</title>
      <meta name="description" content="Apply for new PAN, corrections, reprint, e-PAN download, and Aadhaar linking with expert assistance. Fast, secure, and trusted PAN card service." />
      <link rel="canonical" href="https://pansahayak.in/" />
    </Helmet>
    <SiteLayout>
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <StatusTracker />
      <Testimonials />
      <FAQ />
      <CTA />
    </SiteLayout>
  </>
);

export default Index;

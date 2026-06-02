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
);

export default Index;

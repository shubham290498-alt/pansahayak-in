import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-elegant-lg hover:shadow-glow hover:scale-110 transition-smooth animate-float"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

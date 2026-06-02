import { MessageCircle } from "lucide-react";

const PHONE = "917909027036";
const DEFAULT_MSG = encodeURIComponent("Hi, I need help with PAN services.");

export const WhatsAppFab = ({ message }: { message?: string }) => {
  const text = encodeURIComponent(message || DEFAULT_MSG);
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-elegant-lg hover:shadow-glow hover:scale-110 transition-smooth animate-float"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

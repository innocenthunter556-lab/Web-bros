import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Webros, I'd like to get in touch.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Webros on WhatsApp"
      className="fixed z-40 flex items-center justify-center whatsapp-fab"
      style={{ right: 22, bottom: 22, width: 56, height: 56, borderRadius: 999 }}
    >
      <MessageCircle size={25} />
    </a>
  );
}

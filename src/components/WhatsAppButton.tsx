
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi SR Developers & Builders! I'm interested in your real estate services. Could you help me find a property?";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
      size="lg"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;

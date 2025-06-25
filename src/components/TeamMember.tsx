
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
    experience: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const handleCall = () => {
    window.open(`tel:${member.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${member.email}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi ${member.name}, I would like to discuss property requirements.`;
    const whatsappUrl = `https://wa.me/${member.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-medium bg-red-600 px-2 py-1 rounded">
            {member.experience}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-red-600 font-medium mb-4">
          {member.role}
        </p>
        
        <div className="flex justify-center space-x-2 mb-4">
          <Button 
            size="sm" 
            variant="outline"
            onClick={handleCall}
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={handleEmail}
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <Mail className="w-4 h-4 mr-1" />
            Email
          </Button>
        </div>

        <Button 
          className="w-full bg-red-600 hover:bg-red-700"
          onClick={handleWhatsApp}
        >
          WhatsApp
        </Button>

        <div className="mt-4 text-sm text-gray-600">
          <div>{member.phone}</div>
          <div>{member.email}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;

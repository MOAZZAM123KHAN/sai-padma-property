
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp integration
    const message = `
New Property Inquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Property Type: ${formData.propertyType}
Budget: ${formData.budget}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Inquiry Sent!",
      description: "We'll contact you shortly."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>
          
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <div className="grid md:grid-cols-2 gap-4">
            <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50-lakhs">Under ₹50 Lakhs</SelectItem>
                <SelectItem value="50-lakhs-to-1-crore">₹50 Lakhs - ₹1 Crore</SelectItem>
                <SelectItem value="1-crore-to-2-crores">₹1 Crore - ₹2 Crores</SelectItem>
                <SelectItem value="above-2-crores">Above ₹2 Crores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Textarea
            placeholder="Your Message *"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            rows={4}
          />
          
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

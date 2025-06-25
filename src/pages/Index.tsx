import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Play, Heart, MessageCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PropertyCard from "@/components/PropertyCard";
import TeamMember from "@/components/TeamMember";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyFilter from "@/components/PropertyFilter";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Sample data
  const featuredProperties = [
    {
      id: 1,
      title: "Sai Padma Nagar - Premium Apartments",
      price: "₹45 Lakh onwards",
      location: "Sai Padma Nagar, Hyderabad",
      bhk: "2 & 3 BHK",
      area: "1200-1800 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/c4f5c495-ff03-4427-ac0a-1aa2f7857cae.png",
      features: ["Gated Community", "Swimming Pool", "Gym", "Kids Play Area", "24/7 Security"]
    },
    {
      id: 2,
      title: "Modern Residential Complex",
      price: "₹38 Lakh onwards",
      location: "HITEC City, Hyderabad",
      bhk: "2 & 3 BHK",
      area: "1100-1600 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/7b1c2a67-65bb-43c4-b2df-037528713e3b.png",
      features: ["Premium Finishes", "Covered Parking", "Power Backup", "Lift"]
    },
    {
      id: 3,
      title: "Luxury Apartment Complex",
      price: "₹52 Lakh onwards",
      location: "Jubilee Hills, Hyderabad",
      bhk: "2, 3 & 4 BHK",
      area: "1400-2200 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/24ac21b6-280a-4b14-aaf8-82b24af56fa4.png",
      features: ["Club House", "Garden", "Intercom", "Vastu Compliant"]
    },
    {
      id: 4,
      title: "Premium Gated Community",
      price: "₹42 Lakh onwards",
      location: "Madhapur, Hyderabad",
      bhk: "2 & 3 BHK",
      area: "1250-1750 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/58730309-7b9e-4ae4-9080-ee3280c95888.png",
      features: ["Earthquake Resistant", "Rain Water Harvesting", "Solar Panels", "Green Building"]
    },
    {
      id: 5,
      title: "Elite Residential Project",
      price: "₹48 Lakh onwards",
      location: "Kondapur, Hyderabad",
      bhk: "2, 3 & 4 BHK",
      area: "1300-2000 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/155df480-ec6a-45c7-bd65-093a6e9b3e02.png",
      features: ["Landscaped Gardens", "Community Hall", "Jogging Track", "CCTV Surveillance"]
    },
    {
      id: 6,
      title: "Luxury Living Apartments",
      price: "₹46 Lakh onwards",
      location: "Gachibowli, Hyderabad",
      bhk: "2 & 3 BHK",
      area: "1150-1650 sq ft",
      type: "Apartment",
      image: "/lovable-uploads/62929d7b-4152-43d3-b57d-332297c78d89.png",
      features: ["Modern Architecture", "Visitor Parking", "Maintenance Staff", "Piped Gas"]
    }
  ];

  const teamMembers = [
    {
      name: "Sanjeev Singh",
      role: "Founder & CEO",
      phone: "+91 98765 43210",
      email: "sanjeev@saipadma.com",
      image: "/lovable-uploads/54ff863f-05c8-40f0-b70a-32a7f4d24aba.png.",
      experience: "15+ Years"
    },
    {
      name: "Ankur Pimple",
      //role: "Senior Property Consultant",
      phone: "+91 98765 43211",
      email: "rajesh@saipadma.com",
      image: "/lovable-uploads/ab09c4fc-bda9-4e67-aa6f-e4f2e8025c78.png",
      experience: "12+ Years"
    },
    {
      name: "xyz",
      //role: "Commercial Properties Head",
      phone: "+91 98765 43212",
      email: "xyz@saipadma.com",
      image: "/lovable-uploads/ea3a7689-b46c-4f5d-99f3-57152057f3d0.png",
      experience: "20+ Years"
    }
  ];

  const testimonials = [
    {
      name: "Anita Patel",
      role: "Home Buyer",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop",
      rating: 5,
      text: "Sai Padma helped us find our dream home in just 2 weeks. Their team is professional and genuinely cares about finding the right property for you."
    },
    {
      name: "Vikram Singh",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop",
      rating: 5,
      text: "Excellent service and market knowledge. They guided me through multiple investment opportunities and helped me make informed decisions."
    },
    {
      name: "Meera Joshi",
      role: "Property Seller",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
      rating: 5,
      text: "Sold my property at the best market price with their strategic marketing approach. Highly recommend Sai Padma for genuine real estate services."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/0f6dccc0-d60c-42ef-a0cd-12bd59b751bd.png" 
                alt="Sai Padma Logo" 
                className="h-10 w-auto"
              />
              <div className="text-2xl font-bold text-red-600">SR Developers & Builders</div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Properties', 'About', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-red-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-red-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-red-600 hover:bg-red-700">
              Contact Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner in
                <span className="text-red-600 block">Real Estate</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium properties across Hyderabad with SR Developers & Builders. We connect dreams with reality through exceptional service and market expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3"
                  onClick={() => scrollToSection('properties')}
                >
                  View Listings
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/969ce648-9c92-4768-a2fc-706293323a7d.png"
                alt="Luxury Property Development"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Handpicked premium properties for discerning buyers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700"
              onClick={() => scrollToSection('properties')}
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Properties</h2>
            <p className="text-xl text-gray-600">Find your perfect home or investment opportunity</p>
          </div>
          
          <PropertyFilter onFilter={setFilteredProperties} properties={featuredProperties} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {(filteredProperties.length > 0 ? filteredProperties : featuredProperties).map((property) => (
              <PropertyCard key={property.id} property={property} showCompare={true} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About SR Developers & Builders</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  With over 20 years of excellence in Hyderabad's real estate market, SR Developers & Builders has been the trusted partner for thousands of families in finding their perfect homes.
                </p>
                <p>
                  Our mission is to transform the real estate experience through transparency, expertise, and genuine care for our clients' needs. We believe every family deserves their dream home.
                </p>
                <p>
                  From luxurious villas to smart investments, we offer comprehensive real estate solutions backed by deep market knowledge and a commitment to exceptional service.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop"
                alt="About SR Developers & Builders"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <Button className="absolute bottom-6 left-6 bg-white/90 text-red-600 hover:bg-white">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to find your dream property? Contact us today!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600">Samriddhi realty office, behind Shri padmanabh mandir,near tembhode post office, tembhode palghar (west) 401404.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 9175292633</p>
                  <p className="text-gray-600">+91 9175292633</p>
                  <p className="text-gray-600">+91 9175292633</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@srdevelopers.com</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <iframe
                 // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160823763!2d78.24323067447775!3d17.41261205780509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647875709091!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.299372952262!2d72.7583989746803!3d19.6998745320922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d006ebe6f79%3A0xac32e205ec91896b!2sSamriddhi%20realty%20(Shree%20padhmanabh%20mandir)!5e0!3m2!1sen!2sin!4v1750832286489!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/0f6dccc0-d60c-42ef-a0cd-12bd59b751bd.png" 
                  alt="SR Developers Logo" 
                  className="h-8 w-auto"
                />
                <h3 className="text-xl font-bold text-red-400">SR Developers</h3>
              </div>
              <p className="text-gray-300 mb-4">Your trusted real estate partner in Hyderabad.</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="text-white border-blue-600 bg-blue-600 hover:bg-blue-800">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="text-white border-pink-600 bg-pink-600 hover:bg-pink-800">
                  Instagram
                </Button>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="text-white border-blue-400 bg-blue-400 hover:bg-blue-600">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                  </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white">Home</button>
                <button onClick={() => scrollToSection('properties')} className="block text-gray-300 hover:text-white">Properties</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white">About</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <div>Property Sales</div>
                <div>Property Rentals</div>
                <div>Investment Consultation</div>
                <div>Property Management</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>+91 9175292633</div>
                <div>info@srdevelopers.com</div>
                <div>samriddhi realty office, behind Shri padmanabh mandir,near tembhode post office, tembhode palghar (west) 401404.</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SR Builders & Developers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;

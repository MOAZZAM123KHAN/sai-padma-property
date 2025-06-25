
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Eye, MapPin, Home, Maximize } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bhk: string;
  area: string;
  type: string;
  image: string;
  features: string[];
}

interface PropertyCardProps {
  property: Property;
  showCompare?: boolean;
}

const PropertyCard = ({ property, showCompare = false }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I'm interested in ${property.title} priced at ${property.price}. Could you share more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-600 text-white">
            {property.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {property.price}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {property.bhk}
            </div>
            <div className="flex items-center">
              <Maximize className="w-4 h-4 mr-1" />
              {property.area}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-gray-100 text-gray-700"
              >
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex space-x-2">
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleWhatsAppInquiry}
            >
              Contact Now
            </Button>
            {showCompare && (
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => setIsCompared(!isCompared)}
              >
                {isCompared ? 'Remove' : 'Compare'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

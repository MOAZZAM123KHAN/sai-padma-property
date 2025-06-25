
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <div className="flex mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="text-gray-700 italic leading-relaxed">
          "{testimonial.text}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

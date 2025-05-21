
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Star } from "lucide-react";

// In a real application, these would come from your database
const categories = [
  {
    id: 1,
    name: "House Cleaning",
    description: "Professional home cleaning services for any size residence.",
    icon: "🧹", // In a real app, use actual icon components
    rating: 4.8,
    reviewCount: 1240,
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    id: 2,
    name: "Handyman",
    description: "Skilled professionals for repairs and home improvement projects.",
    icon: "🔧",
    rating: 4.7,
    reviewCount: 890,
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    id: 3,
    name: "Interior Painting",
    description: "Transform your space with professional painting services.",
    icon: "🎨",
    rating: 4.9,
    reviewCount: 756,
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    id: 4,
    name: "Electrical Work",
    description: "Licensed electricians for all your electrical needs.",
    icon: "⚡",
    rating: 4.8,
    reviewCount: 1120,
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
];

const ServiceCategories = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Premium Services</h2>
        <p className="section-subtitle text-center">
          Discover our range of professional home services tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ category }: { category: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
          style={{ 
            backgroundImage: `url(${category.image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3 fill-current" 
                  fill={i < Math.floor(category.rating) ? "#F59E0B" : "none"} 
                  stroke={i < Math.floor(category.rating) ? "#F59E0B" : "currentColor"} 
                />
              ))}
            </div>
            <span className="text-sm font-medium">{category.rating}</span>
            <span className="text-xs text-white/70 ml-1">({category.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center text-navy">
          <span className="mr-2 text-xl">{category.icon}</span>
          {category.name}
        </CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      
      <CardFooter>
        <Button className="w-full bg-navy hover:bg-navy/90 text-white">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCategories;

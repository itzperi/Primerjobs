
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const Hero = () => {
  const [location, setLocation] = useState('');

  const handleLocationDetection = () => {
    // In a real application, this would use the browser's geolocation API
    // and then reverse geocode the coordinates to get the city/address
    setLocation('Current Location');
  };

  return (
    <div className="relative min-h-[85vh] flex items-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif animate-fade-in">
            Home Services,<br />Reimagined with Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Connect with top-rated home service professionals in your area. Quality work, guaranteed satisfaction.
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm p-1 rounded-full flex items-center max-w-2xl mx-auto shadow-lg animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="What service do you need?"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full pl-5 pr-12 py-6"
              />
            </div>
            <div className="px-1 flex items-center">
              <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 h-10">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <Input 
                  type="text" 
                  placeholder="Your location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent p-0 h-full text-sm"
                />
                <button 
                  onClick={handleLocationDetection}
                  className="absolute right-2 text-xs text-emerald"
                >
                  Detect
                </button>
              </div>
              <Button className="ml-2 bg-emerald hover:bg-emerald/90 text-white rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-white/80 text-sm flex justify-center gap-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <span>25,000+ Verified Pros</span>
            <span>100% Satisfaction Guarantee</span>
            <span>5-Star Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

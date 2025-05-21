
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "House Cleaning",
    content: "The cleaning team was professional, thorough and efficient. My home has never looked better! I've already booked my next appointment.",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Michael Chen",
    service: "Handyman Services",
    content: "I had several small jobs around the house that needed attention. The handyman was knowledgeable and fixed everything perfectly. Great value!",
    rating: 5,
    location: "Chicago, IL"
  },
  {
    id: 3,
    name: "Jennifer Adams",
    service: "Interior Painting",
    content: "The painters were meticulous and the results exceeded my expectations. They were also careful with my furniture and cleaned up thoroughly after finishing.",
    rating: 4,
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "Robert Patel",
    service: "Electrical Work",
    content: "The electrician diagnosed and fixed our recurring power issue quickly. Very professional and explained everything clearly. Highly recommended!",
    rating: 5,
    location: "Miami, FL"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">What Our Clients Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-medium">{testimonial.name}</h3>
                          <p className="text-white/70">{testimonial.location}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-5 h-5" 
                              fill={i < testimonial.rating ? "#F59E0B" : "none"} 
                              stroke={i < testimonial.rating ? "#F59E0B" : "currentColor"} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-lg mb-4">"{testimonial.content}"</p>
                      <div className="text-white/70 text-sm">Service: {testimonial.service}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-gold w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

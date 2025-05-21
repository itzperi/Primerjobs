
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "House Cleaning",
    price: "$110 - $140",
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    name: "Handyman Services",
    price: "$80 - $110",
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    name: "Interior Painting",
    price: "$200 - $350",
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
  {
    name: "Plumbing Services",
    price: "$90 - $190",
    image: "/lovable-uploads/be827007-f7f7-4a56-9e74-62ba13a67f66.png"
  },
];

const PopularServices = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Popular Services Near You</h2>
        <p className="section-subtitle text-center">
          Explore our most requested services and transparent pricing
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-40">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-medium text-lg">{service.name}</h3>
                  <p className="text-white/80 text-sm">Starting from {service.price}</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <Button variant="outline" className="w-full group-hover:bg-emerald group-hover:text-white transition-colors duration-300">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-serif font-bold text-navy mb-4 text-center">Get Free Cost Estimates</h3>
          <p className="text-center text-gray-600 mb-8">
            We've analyzed millions of bids from professionals to help you understand what things really cost. Find out what others have paid for similar projects.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-medium text-navy">House Cleaning</h4>
              <p className="text-sm text-gray-500 mb-2">Average cost</p>
              <p className="text-emerald font-semibold">$110 - $140</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-medium text-navy">Electrical Work</h4>
              <p className="text-sm text-gray-500 mb-2">Average cost</p>
              <p className="text-emerald font-semibold">$150 - $250</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-medium text-navy">Plumbing Service</h4>
              <p className="text-sm text-gray-500 mb-2">Average cost</p>
              <p className="text-emerald font-semibold">$90 - $190</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-gold hover:bg-gold/90 text-white">
              See All Cost Guides
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;


import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Verified Professionals",
      description: "All service providers undergo rigorous background checks and skill verification.",
      icon: <CheckCircle className="h-6 w-6 text-emerald" />
    },
    {
      title: "Guaranteed Quality",
      description: "If you're not 100% satisfied, we'll make it right or refund your money.",
      icon: <CheckCircle className="h-6 w-6 text-emerald" />
    },
    {
      title: "Instant Booking",
      description: "Book services instantly for same-day or future appointments.",
      icon: <CheckCircle className="h-6 w-6 text-emerald" />
    },
    {
      title: "Transparent Pricing",
      description: "See exact costs upfront with no hidden fees or surprises.",
      icon: <CheckCircle className="h-6 w-6 text-emerald" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose EliteHome</h2>
          <p className="section-subtitle">We're revolutionizing home services with our commitment to quality and customer satisfaction</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-navy to-navy/90 text-white rounded-2xl p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-white/20 h-7 w-7 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Tell us what you need</h4>
                    <p className="text-white/80">Describe your project or select from our service categories.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 h-7 w-7 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Get matched with pros</h4>
                    <p className="text-white/80">We'll connect you with qualified professionals in your area.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 h-7 w-7 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Book and pay securely</h4>
                    <p className="text-white/80">Schedule service and pay through our secure platform.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-medium mb-4">Ready to get started?</h3>
              <p className="mb-6 text-white/80">Join thousands of satisfied customers who trust EliteHome with their home service needs.</p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button className="btn-accent flex-1">Book Now</button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

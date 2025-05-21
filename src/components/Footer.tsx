
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Elite<span className="text-emerald">Home</span></h3>
            <p className="text-white/70 mb-6">
              Connecting homeowners with qualified professionals for all your home service needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                📱
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                📱
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                📱
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">House Cleaning</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Handyman Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Electrical Work</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Plumbing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">Stay updated with our latest news and offers</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-emerald hover:bg-emerald/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 EliteHome. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

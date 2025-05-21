
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-navy">Elite<span className="text-emerald">Home</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-emerald transition-colors">Services</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-emerald transition-colors">How it Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-emerald transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-emerald transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Log In</Button>
          <Button className="bg-emerald hover:bg-emerald/90 text-white">Sign Up</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#services" className="text-gray-700 hover:text-emerald transition-colors py-2">Services</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-emerald transition-colors py-2">How it Works</a>
                <a href="#testimonials" className="text-gray-700 hover:text-emerald transition-colors py-2">Testimonials</a>
                <a href="#pricing" className="text-gray-700 hover:text-emerald transition-colors py-2">Pricing</a>
                <div className="pt-4 flex flex-col space-y-3">
                  <Button variant="outline">Log In</Button>
                  <Button className="bg-emerald hover:bg-emerald/90 text-white">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

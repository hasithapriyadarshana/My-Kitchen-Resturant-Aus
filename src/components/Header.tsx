import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    'Home',
    'About Us', 
    'Services'
  ];

  return (
    <header className="bg-[#1a1a1a] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Unified Logo Group - Both Logos Always Visible */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group relative">
              {/* Main Logo Display - Both Logos Side by Side */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* My Kitchen Café Logo */}
                <img 
                  src={logoImage} 
                  alt="My Kitchen Café" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
                
                {/* Separator - Always visible on small screens and up */}
                <div className="w-px h-8 sm:h-10 bg-[#ff6b35]/30"></div>
                
                {/* Hungry Outback Logo - Always visible */}
                <img 
                  src={hungryOutbackLogo} 
                  alt="Hungry Outback" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-[#ff6b35]/10 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Desktop Navigation and CTA - Right side */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[#ff6b35] px-4 py-2 rounded-lg transition-all duration-300 relative group text-lg"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ff6b35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#ff6b35] hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-[#2a2a2a] rounded-lg mt-2 border border-white/10">
              {/* Mobile Brand Info */}
              <div className="px-4 py-3 border-b border-white/10 mb-2">
                <div className="text-center">
                  <div className="text-[#ff6b35] text-xs font-medium tracking-wider">
                    SITE CANTEEN & VENDING MACHINES
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    CONSTRUCTION • MINING • REMOTE SITES
                  </div>
                </div>
              </div>
              
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-3 rounded-lg transition-colors text-white hover:text-[#ff6b35] hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-3 rounded-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
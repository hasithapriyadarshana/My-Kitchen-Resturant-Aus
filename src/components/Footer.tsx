import { MapPin, Phone, Mail, Clock, Shield, Truck, Users, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function Footer() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1546777128-0f53ec083d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY2F0ZXJpbmclMjBtb2JpbGUlMjBraXRjaGVufGVufDF8fHx8MTc1NjcyNzc1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Mobile Kitchen Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1744309844200-924d05738659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdHJ1Y2slMjBtb2JpbGUlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NTY3Mjc3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Food Truck Catering"
    },
    {
      src: "https://images.unsplash.com/photo-1675647699232-76b8f533b006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGZvb2QlMjBwcmVwYXJhdGlvbnxlbnwxfHx8fDE3NTY3Mjc3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Commercial Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1627955280978-f54fff2f316a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByZXBhcmVkJTIwbWVhbHMlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NTY3Mjc3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh Prepared Meals"
    },
    {
      src: "https://images.unsplash.com/photo-1726312350238-6544d136fb27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2F0ZXJpbmclMjBsdW5jaCUyMHdvcmtlcnN8ZW58MXx8fHwxNzU2NzI3NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Industrial Catering"
    },
    {
      src: "https://images.unsplash.com/photo-1646505256959-db71754a5790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwZWF0aW5nJTIwbHVuY2h8ZW58MXx8fHwxNzU2NzI3NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Workers Enjoying Lunch"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-black border-t border-[#ff6b35]/20 relative overflow-hidden">
      {/* Background Construction Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #ff6b35 10px,
            #ff6b35 12px
          )`
        }}></div>
      </div>
      
      {/* Main 4-Column Footer */}
      <div className="relative py-16">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Logo and About Us */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={logoImage} 
                    alt="My Kitchen Café" 
                    className="h-12 w-auto object-contain"
                  />
                  <div className="h-12 w-px bg-[#ff6b35]"></div>
                  <img 
                    src={hungryOutbackLogo} 
                    alt="Hungry Outback" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-white text-xl">My Kitchen Café</h3>
              </div>
              
              <p className="text-gray-400 text-base leading-relaxed">
                Australia's leading construction site catering specialists. We fuel the workforce with quality meals, 
                reliable service, and unmatched expertise across Sydney and surrounding regions.
              </p>
              
              <div className="flex items-center space-x-2 text-[#ff6b35]">
                <Shield className="h-5 w-5" />
                <span className="text-base text-gray-300">Licensed & Fully Insured</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-white text-base">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Services List */}
            <div className="space-y-6">
              <h3 className="text-white text-xl">Our Services</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <Truck className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">Construction Site Catering</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <Users className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">Mobile Canteens</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <MapPin className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">On-Site Vending Machines</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <Clock className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">24/7 Catering Solutions</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <Shield className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">Mining Site Services</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors cursor-pointer">
                  <Users className="h-5 w-5 text-[#ff6b35]" />
                  <span className="text-base">Remote Site Catering</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Coverage */}
            <div className="space-y-6">
              <h3 className="text-white text-xl">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-[#ff6b35]" />
                  <div>
                    <p className="text-white text-base">0415 671480</p>
                    <p className="text-gray-500 text-sm">24/7 Availability</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-[#ff6b35]" />
                  <div>
                    <p className="text-white text-base">info@mykitchencafe.com.au</p>
                    <p className="text-gray-500 text-sm">Quick Response</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-[#ff6b35]" />
                  <div>
                    <p className="text-white text-base">Sydney & Regions</p>
                    <p className="text-gray-500 text-sm">Wide Coverage Area</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-[#ff6b35]" />
                  <div>
                    <p className="text-white text-base">Mon-Sun: 5AM-8PM</p>
                    <p className="text-gray-500 text-sm">Emergency Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Photo Gallery */}
            <div className="space-y-6">
              <h3 className="text-white text-xl">Our Work</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer w-[80px] h-[80px]">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs text-center px-2 leading-tight">{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-500 text-sm">
                Quality service across construction sites, mining operations, and remote locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative py-8 bg-black border-t border-white/5">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 My Kitchen Café. All rights reserved. Designed and developed by Edge Tech Digital
            </div>

            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#ff6b35] transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-[#ff6b35] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
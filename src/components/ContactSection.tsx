import { Button } from './ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function ContactSection() {
  return (
    <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Logo Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left */}
        <div className="absolute top-8 left-12 opacity-5 rotate-15 scale-75">
          <img 
            src={logoImage} 
            alt="" 
            className="h-20 w-auto object-contain"
          />
        </div>
        
        {/* Top right */}
        <div className="absolute top-12 right-16 opacity-5 -rotate-20 scale-60">
          <img 
            src={hungryOutbackLogo} 
            alt="" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        {/* Bottom left */}
        <div className="absolute bottom-8 left-8 opacity-5 -rotate-25 scale-70">
          <img 
            src={hungryOutbackLogo} 
            alt="" 
            className="h-14 w-auto object-contain"
          />
        </div>
        
        {/* Bottom right */}
        <div className="absolute bottom-12 right-10 opacity-5 rotate-10 scale-80">
          <img 
            src={logoImage} 
            alt="" 
            className="h-18 w-auto object-contain"
          />
        </div>
        
        {/* Center background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-3 rotate-5 scale-120">
          <img 
            src={logoImage} 
            alt="" 
            className="h-24 w-auto object-contain"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Want to fuel your workforce?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch today to discuss your construction site catering needs
          </p>
          <Button 
            size="lg" 
            className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 text-lg rounded-lg mb-8"
          >
            Get in Touch
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#ff6b35] p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white text-lg mb-2">Call Con Voutas</h3>
            <p className="text-gray-300">0415 671480</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-[#ff6b35] p-3 rounded-full mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white text-lg mb-2">Email Us</h3>
            <p className="text-gray-300">info@mykitchencafe.com.au</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-[#ff6b35] p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white text-lg mb-2">Service Area</h3>
            <p className="text-gray-300">Sydney & surrounding areas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
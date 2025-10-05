import { Phone, Mail } from 'lucide-react';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function BrandHeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-black border-t border-[#ff6b35]/20 relative overflow-hidden">
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
      
      {/* Hero Brand Section */}
      <div className="relative py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Large Brand Display */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-12 mb-6">
              <img 
                src={logoImage} 
                alt="My Kitchen Café" 
                className="h-20 md:h-28 w-auto object-contain"
              />
              <div className="h-20 md:h-28 w-px bg-gradient-to-b from-transparent via-[#ff6b35] to-transparent"></div>
              <img 
                src={hungryOutbackLogo} 
                alt="Hungry Outback" 
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>
            
            <div className="text-[#ff6b35] text-2xl md:text-3xl tracking-wider mb-4 font-medium">
              CONSTRUCTION SITE CATERING SPECIALISTS
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Fueling Australia's workforce with quality meals, reliable service, and unmatched expertise. 
              From remote mining sites to bustling construction zones - we deliver.
            </p>
          </div>

          {/* Quick Contact CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-3 bg-[#ff6b35] text-white px-8 py-4 rounded-full hover:bg-[#e55d2e] transition-colors cursor-pointer">
              <Phone className="h-5 w-5" />
              <span className="font-medium">0415 671480</span>
            </div>
            <div className="flex items-center space-x-3 bg-[#2a2a2a] text-gray-300 px-8 py-4 rounded-full border border-white/10 hover:border-[#ff6b35]/50 transition-colors cursor-pointer">
              <Mail className="h-5 w-5" />
              <span>info@mykitchencafe.com.au</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Utensils, Building, Coffee, ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { UnifiedBrandLabel } from './UnifiedBrandLabel';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';
import waterBottleLabel from 'figma:asset/718fda94e20091678ee6165d3d4c8b6d1a25cd01.png';
import { Shield, Users, Truck, MapPin } from 'lucide-react';
import myKitchenCafeTruck from 'figma:asset/c4f7c4183c61ed2807566cbed22d938fc24470f6.png';
import foodDisplayCase from 'figma:asset/f74334eab35fa1b973020bb252f6b01148d744c6.png';
import pastriesBox from 'figma:asset/aae131648915edc11ad58d3b11174b424a2405ba.png';
import cateringBoxes from 'figma:asset/ae7c99eaf47e831cef72499d8db18d66825122c6.png';
import kitchenTeam from 'figma:asset/354e632b1ce4a05ca5330bab83f08391e286f9f5.png';
import grazingPlatter from 'figma:asset/b148e76722b8d6fa235b3a96ce8f89a519b1f3d2.png';
import mobileCanteen from 'figma:asset/c4f7c4183c61ed2807566cbed22d938fc24470f6.png';

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Construction Site Catering',
      description: 'Tailored catering for construction projects – keeping your workforce well-fed, motivated, and on site.',
      images: [
        cateringBoxes,
        kitchenTeam,
        grazingPlatter,
        myKitchenCafeTruck,
        foodDisplayCase
      ],
      ctaText: 'Explore Catering',
      featured: true,
      icon: <Utensils className="h-8 w-8 text-[#ff6b35]" />,
      features: ['Fresh daily menus', 'Nutritious options', 'On-time delivery', 'Flexible scheduling']
    },
    {
      title: 'On-Site Canteens',
      description: 'Complete canteen solutions for your workplace, providing convenient and quality dining experiences.',
      images: [mobileCanteen],
      ctaText: 'Learn More',
      featured: false,
      icon: <Building className="h-8 w-8 text-green-500" />,
      features: ['Full setup service', 'Professional staff', 'Complete facilities', 'Daily operations']
    },
    {
      title: 'Vending Machines',
      description: 'Modern vending solutions providing 24/7 access to snacks, beverages, and essential items.',
      images: ['https://images.unsplash.com/photo-1572701589342-40cc36fa1c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzNzgzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
      ctaText: 'View Options',
      featured: false,
      icon: <Coffee className="h-8 w-8 text-blue-500" />,
      features: ['24/7 availability', 'Fresh products', 'Card payments', 'Regular restocking']
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services[0].images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [services]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services[0].images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services[0].images.length) % services[0].images.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Unified Branding */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-[#ff6b35]/20 rounded-2xl">
              <Star className="h-10 w-10 text-[#ff6b35]" />
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900">Our Key Services</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional food services designed specifically for construction sites and workplaces
          </p>
          

          
          <div className="h-1 w-24 bg-[#ff6b35] mx-auto rounded-full"></div>
        </div>

        {/* Featured Service Card with Image Slider */}
        <div className="mb-12">
          <Card className="overflow-hidden bg-gradient-to-r from-gray-50 to-white border border-[#ff6b35]/20 shadow-2xl hover:shadow-[#ff6b35]/20 transition-all duration-500">
            <div className="lg:flex lg:items-center">
              
              {/* Image Slider Section */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  {services[0].images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${services[0].title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {services[0].images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide 
                            ? 'bg-[#ff6b35] w-8 h-3' 
                            : 'bg-white/50 hover:bg-white/70 w-3 h-3'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-2 bg-[#ff6b35]/20 rounded-full">
                      <span className="text-[#ff6b35] text-sm font-medium">FEATURED SERVICE</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl text-gray-900 mb-4">
                    {services[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{services[0].description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {services[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#ff6b35] flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group">
                    {services[0].ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.slice(1).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#ff6b35]/10 via-[#ff6b35]/5 to-[#ff6b35]/10 rounded-2xl p-8 border border-[#ff6b35]/20">
            <h3 className="text-2xl text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We understand that every project is unique. Let us create a tailored food service solution that perfectly fits your specific requirements.
            </p>
            <Button className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#d04827] text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discuss Your Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for other service cards
function ServiceCard({ service, index }) {
  return (
    <Card className="group overflow-hidden bg-white border border-gray-200 hover:border-[#ff6b35]/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
          {service.icon}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      
      <CardContent className="p-8 relative">
        <CardTitle className="text-2xl text-gray-900 mb-4">{service.title}</CardTitle>
        <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#ff6b35] flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline"
          className="w-full border-[#ff6b35]/50 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white py-3 rounded-xl transition-all duration-300 group/btn"
        >
          {service.ctaText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import myKitchenCafeTruck from 'figma:asset/c4f7c4183c61ed2807566cbed22d938fc24470f6.png';
import foodDisplayCase from 'figma:asset/f74334eab35fa1b973020bb252f6b01148d744c6.png';
import pastriesBox from 'figma:asset/aae131648915edc11ad58d3b11174b424a2405ba.png';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: myKitchenCafeTruck,
      title: "My Kitchen Café Mobile Unit",
      subtitle: "Our fully equipped food truck bringing delicious roasts, burgers, and more directly to your construction site"
    },
    {
      image: foodDisplayCase,
      title: "Fresh Daily Selection",
      subtitle: "Quality hot meals, fresh salads, pastries and drinks - all prepared daily with clear pricing and variety"
    },
    {
      image: pastriesBox,
      title: "Premium Treats & Desserts",
      subtitle: "Indulgent selection of cakes, pastries, muffins and sweet treats to satisfy your team's cravings"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[72vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Decorative Logo Watermarks */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Main logo watermark - top left */}
        <div className="absolute top-20 left-20 opacity-5 rotate-12 scale-75">
          <img 
            src={logoImage} 
            alt="" 
            className="h-28 w-auto object-contain"
          />
        </div>
        
        {/* Hungry Outback logo watermark - bottom right */}
        <div className="absolute bottom-32 right-16 opacity-10 -rotate-12 scale-90">
          <img 
            src={hungryOutbackLogo} 
            alt="" 
            className="h-18 w-auto object-contain"
          />
        </div>
        
        {/* Small decorative logo - center right */}
        <div className="absolute top-1/3 right-8 opacity-5 rotate-45 scale-50">
          <img 
            src={logoImage} 
            alt="" 
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">MY KITCHEN</span>
              <span className="block text-[#ff6b35]">CAFÉ</span>
            </h1>
            <div className="h-1 w-24 bg-[#ff6b35] mx-auto rounded-full"></div>
          </div>

          {/* Dynamic Subtitle */}
          <div className="min-h-[120px] flex items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-[#ff6b35]/20 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-[#ff6b35]/20 rounded-full mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-[#ff6b35]/20 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">99%</h3>
              <p className="text-gray-300">Customer Retention</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Your Quote
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#ff6b35] w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
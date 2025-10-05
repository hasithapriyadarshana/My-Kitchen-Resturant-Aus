import image_1f94110faf5b768dd31a69166c4aa5e41abbe09e from 'figma:asset/1f94110faf5b768dd31a69166c4aa5e41abbe09e.png';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Shield, 
  Truck,
  ChevronLeft,
  ChevronRight,
  Quote,
  Phone
} from 'lucide-react';
import { useState } from 'react';

export function ConstructionSiteCateringPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff6b35]" />,
      title: "Boost Productivity",
      description: "Well-fed workers are 23% more productive and focused throughout the day",
      accent: "bg-[#ff6b35]/20"
    },
    {
      icon: <Users className="w-8 h-8 text-[#4CAF50]" />,
      title: "Keep Workforce On Site",
      description: "No more lengthy lunch breaks - fresh meals delivered right to your location",
      accent: "bg-[#4CAF50]/20"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#757575]" />,
      title: "Save Costs",
      description: "Reduce downtime and increase efficiency with convenient on-site catering",
      accent: "bg-[#757575]/20"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff6b35]" />,
      title: "Time Efficient",
      description: "Quick service that fits into break schedules without delays",
      accent: "bg-[#ff6b35]/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#4CAF50]" />,
      title: "Fully Licensed",
      description: "Licensed and insured with full food safety compliance",
      accent: "bg-[#4CAF50]/20"
    },
    {
      icon: <Truck className="w-8 h-8 text-[#757575]" />,
      title: "Mobile Service",
      description: "Complete mobile kitchen setup brings restaurant quality to site",
      accent: "bg-[#757575]/20"
    }
  ];

  const clients = [
    { name: "Mirvac", logo: "M" },
    { name: "Lendlease", logo: "L" },
    { name: "Multiplex", logo: "MP" },
    { name: "CPB Contractors", logo: "CPB" }
  ];

  const testimonials = [
    {
      quote: "My Kitchen Café has transformed how we handle meal times on our construction sites. The quality is exceptional and our workers actually look forward to lunch breaks now.",
      author: "Mark Thompson",
      position: "Project Manager",
      company: "Mirvac Construction"
    },
    {
      quote: "Having reliable, hot meals delivered directly to site has boosted our team's morale significantly. The service is professional and never lets us down.",
      author: "Sarah Chen", 
      position: "Site Supervisor",
      company: "Lendlease"
    },
    {
      quote: "The efficiency gains from on-site catering are remarkable. No more workers leaving site for lunch - everything runs smoother with My Kitchen Café.",
      author: "David Rodriguez",
      position: "Construction Manager", 
      company: "Multiplex"
    }
  ];

  const menuItems = [
    {
      image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODAwMTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hearty Burgers",
      description: "Gourmet burgers with quality beef patties, fresh vegetables and artisan buns"
    },
    {
      image: "https://images.unsplash.com/photo-1686860794212-164e570439fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHdyYXAlMjBzYW5kd2ljaCUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTgwMTY1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fresh Wraps",
      description: "Nutritious wraps packed with protein, fresh salads and flavorful sauces"
    },
    {
      image: "https://images.unsplash.com/photo-1617954096045-2b85d8edfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBjb2ZmZWUlMjBjdXAlMjBtb3JuaW5nfGVufDF8fHx8MTc1ODAxNjYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Coffee",
      description: "Barista-quality coffee to kickstart your day and keep energy levels high"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={image_1f94110faf5b768dd31a69166c4aa5e41abbe09e}
            alt="Construction workers enjoying mobile catering service on site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 bottom-[10%] bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Catering Service for
            <span className="text-[#ff6b35] block">Construction Sites</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tailored catering solutions that keep your workforce well-fed, motivated, and on site.
          </p>
          <Button size="lg" className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white text-lg px-8 py-4 rounded-xl">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* How We Serve Construction Sites */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Modern header section */}
            <div className="text-center mb-16 relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent flex-1 max-w-20"></div>
                <Badge className="bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] px-4 py-2">
                  OUR SERVICES
                </Badge>
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent flex-1 max-w-20"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Construction Site
                <span className="block text-[#ff6b35]">Food Solutions</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Professional catering services designed specifically for construction environments. 
                From mobile kitchens to permanent facilities.
              </p>
            </div>
            
            {/* Modern services layout */}
            <div className="space-y-8 relative z-10">
              {/* Featured Service - Construction Site Catering */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#ff6b35] via-[#ff7a45] to-[#ff8c35] rounded-3xl p-1">
                  <div className="bg-background rounded-[22px] p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8c35] rounded-2xl flex items-center justify-center">
                            <Truck className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <Badge className="bg-[#ff6b35]/10 text-[#ff6b35] mb-2">FEATURED</Badge>
                            <h3 className="text-2xl md:text-3xl text-white">Construction Site Catering</h3>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          Premium mobile catering service bringing restaurant-quality meals directly to your construction site. 
                          Our fully equipped mobile kitchens serve fresh, hot meals from 5:00 AM.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-[#ff6b35]/10">
                            <Clock className="w-5 h-5 text-[#ff6b35] mt-0.5" />
                            <div>
                              <div className="text-white text-sm">Early Service</div>
                              <div className="text-gray-400 text-xs">From 5:00 AM daily</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-[#ff6b35]/10">
                            <Shield className="w-5 h-5 text-[#ff6b35] mt-0.5" />
                            <div>
                              <div className="text-white text-sm">Licensed</div>
                              <div className="text-gray-400 text-xs">Fully insured</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-[#ff6b35]/10">
                            <Users className="w-5 h-5 text-[#ff6b35] mt-0.5" />
                            <div>
                              <div className="text-white text-sm">Capacity</div>
                              <div className="text-gray-400 text-xs">50-500+ workers</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-[#ff6b35]/10">
                            <TrendingUp className="w-5 h-5 text-[#ff6b35] mt-0.5" />
                            <div>
                              <div className="text-white text-sm">Quality</div>
                              <div className="text-gray-400 text-xs">Restaurant-grade</div>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c35] hover:from-[#ff8c35] hover:to-[#ff6b35] text-white px-8 py-3 rounded-xl">
                          Get Started
                        </Button>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1647686898085-ef3c0bd74f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbW9iaWxlJTIwY2F0ZXJpbmclMjB0cnVjayUyMGZvb2QlMjBzZXJ2aWNlfGVufDF8fHx8MTc1ODI3NjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Mobile catering truck serving construction workers"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#ff6b35] to-[#ff8c35] rounded-2xl flex items-center justify-center">
                          <span className="text-white text-2xl">🚛</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Services Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Construction Site Canteen */}
                <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-[#4CAF50]/30 transition-all duration-300">
                  <div className="absolute top-6 right-6">
                    <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                      <Users className="w-7 h-7 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white group-hover:text-[#4CAF50] transition-colors">Construction Site Canteen</h3>
                      <p className="text-sm text-gray-400">Permanent facilities</p>
                    </div>
                  </div>
                  
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1622611906499-c25a07b79bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY2FudGVlbiUyMGNhZmV0ZXJpYSUyMHdvcmtlcnMlMjBkaW5pbmd8ZW58MXx8fHwxNzU4Mjc2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Construction site canteen dining area"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Permanent canteen setup for long-term projects with full dining facilities, 
                    kitchen equipment, and comfortable seating areas.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-3"></div>
                      Permanent dining facilities
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-3"></div>
                      Full kitchen setup
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-3"></div>
                      Comfortable seating areas
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-[#4CAF50]/30 text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white rounded-xl">
                    Learn More
                  </Button>
                </div>
                
                {/* Vending Machines */}
                <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-[#757575]/30 transition-all duration-300">
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-[#757575]/10 text-[#757575] text-xs px-2 py-1">24/7</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#757575]/10 border border-[#757575]/20 rounded-xl flex items-center justify-center group-hover:bg-[#757575]/20 transition-colors">
                      <DollarSign className="w-7 h-7 text-[#757575]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white group-hover:text-[#757575] transition-colors">Vending Machines</h3>
                      <p className="text-sm text-gray-400">Round-the-clock access</p>
                    </div>
                  </div>
                  
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1578084087847-23c3c9f6c44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW5kaW5nJTIwbWFjaGluZSUyMGluZHVzdHJpYWwlMjB3b3JrcGxhY2UlMjBzbmFja3MlMjBkcmlua3N8ZW58MXx8fHwxNzU4Mjc2MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Vending machines in industrial workplace"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    24/7 access to snacks, drinks, and essential items through strategically placed 
                    vending machines. Perfect for round-the-clock operations.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#757575] rounded-full mr-3"></div>
                      24/7 availability
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#757575] rounded-full mr-3"></div>
                      Snacks & beverages
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#757575] rounded-full mr-3"></div>
                      Strategic placement
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-[#757575]/30 text-[#757575] hover:bg-[#757575] hover:text-white rounded-xl">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Modern Call-to-Action Section */}
            <div className="mt-20 relative z-10">
              <div className="bg-gradient-to-r from-[#ff6b35]/5 via-[#ff8c35]/10 to-[#ff6b35]/5 border border-[#ff6b35]/20 rounded-3xl p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8c35] rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl text-white mb-6">
                    Ready to Get Started?
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Every construction site is unique. Let's design the perfect food service solution 
                    for your project timeline, workforce size, and budget.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c35] hover:from-[#ff8c35] hover:to-[#ff6b35] text-white px-8 py-4 rounded-xl">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    
                    <Button variant="outline" size="lg" className="border-[#ff6b35]/30 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 rounded-xl">
                      Get Free Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading construction companies across Australia rely on My Kitchen Café to keep their teams well-fed and productive on site
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => {
              const clientLogos = [
                "https://mirvac-cdn-web.azureedge.net/-/media/project/mirvac/corporate/main-site/corporate-theme/images/icons/mirvac-logo---corp.svg?h=58&iar=0&w=180&hash=53A9F1B727B588E51471D084FCFF9915",
                "https://www.lendlease.com/globalassets/all-sites/logos/ll-logos-master_lendlease_primary_logo_corporate_rgb.svg",
                "https://www.multiplex.global/assets/img/logo-multiplex.svg",
                "https://edge.sitecorecloud.io/cimicgroupl634d-cimicxmcloud-production-16eb/media/project/cimic/cpb/logos/cpb-contractors-logo-full.png?h=186&iar=0&w=851"
              ];
              
              return (
                <Card key={index} className="p-8 bg-card border-border rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 group transform hover:scale-105">
                  <div className="flex flex-col items-center justify-center h-32">
                    <div className="w-full h-20 flex items-center justify-center mb-4">
                      <ImageWithFallback
                        src={clientLogos[index]}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-lg text-white text-center group-hover:text-[#ff6b35] transition-colors duration-300">{client.name}</h3>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Statistics section removed */}
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Fresh, Quality Food
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hearty breakfasts to satisfying lunches, our menu is designed to fuel hard-working teams
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-card border-border rounded-xl overflow-hidden hover:border-[#ff6b35]/50 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#ff6b35] to-[#ff8c35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">
            Ready to fuel your construction project?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Phone className="w-8 h-8 text-white" />
            <p className="text-2xl md:text-3xl text-white">
              Contact Con Voutas on 
              <span className="block md:inline md:ml-2 text-3xl md:text-4xl">0415 671 480</span>
            </p>
          </div>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#ff6b35] text-lg px-8 py-4 rounded-xl">
            Call Now for Immediate Service
          </Button>
        </div>
      </section>
    </div>
  );
}
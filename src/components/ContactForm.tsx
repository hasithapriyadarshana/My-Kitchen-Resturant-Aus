import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, MapPin, Send, Clock, Shield, Users, Star } from 'lucide-react';
import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectSize: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 bg-[#1a1a1a] relative overflow-hidden">
      {/* Minimal Background Logo Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-3 rotate-12 scale-50">
          <img 
            src={logoImage} 
            alt="" 
            className="h-16 w-auto object-contain"
          />
        </div>
        <div className="absolute bottom-10 right-10 opacity-3 -rotate-12 scale-50">
          <img 
            src={hungryOutbackLogo} 
            alt="" 
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-white mb-3">Contact Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get in touch for a personalized catering solution for your construction project.
          </p>
        </div>

        {/* Two Column Layout: Map Left, Form Right - Equal Heights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 lg:h-[600px]">
          {/* Left Column - Map and Contact Info */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Map Section - Square Shape */}
            <div className="bg-[#2a2a2a] rounded-lg shadow-lg border border-white/10 p-4 flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8274635892655!2d151.04285901521283!3d-33.86495858065471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb4d7b0b7e6b%3A0x5017d681632bcc0!2s4A%20Bachell%20Ave%2C%20Lidcombe%20NSW%202141%2C%20Australia!5e0!3m2!1sen!2sau!4v1635123456789!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-full min-h-[350px]"
                title="My Kitchen Café Location"
              />
            </div>
            
            {/* Contact Information */}
            <div className="bg-[#2a2a2a] rounded-lg shadow-lg border border-white/10 p-6 space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-[#ff6b35]" />
                  <h4 className="text-white text-sm">Location</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  4A Bachell Ave, Lidcombe NSW 2141, Australia
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-[#ff6b35]" />
                  <h4 className="text-white text-sm">Call Con Voutas</h4>
                </div>
                <p className="text-gray-300 text-sm">0415 671480</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-4 w-4 text-[#ff6b35]" />
                  <h4 className="text-white text-sm">Email</h4>
                </div>
                <p className="text-gray-300 text-sm">info@mykitchencafe.com.au</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form - Square Shape */}
          <div className="h-full">
            <Card className="border-0 shadow-lg bg-[#2a2a2a] border-white/10 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl text-white mb-2">Send Us a Message</h3>
                  <p className="text-gray-300 text-sm">
                    Fill out the form below and we'll get back to you within 2 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                  {/* Personal Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 text-sm">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="h-12 bg-[#3a3a3a] border-white/10 text-white placeholder:text-gray-500 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 text-sm">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        className="h-12 bg-[#3a3a3a] border-white/10 text-white placeholder:text-gray-500 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 text-sm">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="0400 000 000"
                        className="h-12 bg-[#3a3a3a] border-white/10 text-white placeholder:text-gray-500 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-gray-300 text-sm">Service Required *</Label>
                      <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger className="h-12 bg-[#3a3a3a] border-white/10 text-white focus:border-[#ff6b35] focus:ring-[#ff6b35]/20">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#3a3a3a] border-white/10">
                          <SelectItem value="construction-catering">Construction Site Catering</SelectItem>
                          <SelectItem value="onsite-canteen">On-Site Canteen</SelectItem>
                          <SelectItem value="vending-machines">Vending Machines</SelectItem>
                          <SelectItem value="bush-tucker">Bush Tucker Food Services</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label htmlFor="message" className="text-gray-300 text-sm">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project location, timeline, and requirements..."
                      className="bg-[#3a3a3a] border-white/10 text-white placeholder:text-gray-500 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 resize-none flex-1 min-h-[120px]"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#d04827] text-white py-4 h-auto rounded-lg text-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Simple Trust Indicators */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 text-center max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="h-4 w-4 text-green-400" />
              </div>
              <p className="text-white text-sm">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                <Clock className="h-4 w-4 text-blue-400" />
              </div>
              <p className="text-white text-sm">24hr Setup</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center mb-2">
                <Star className="h-4 w-4 text-[#ff6b35]" />
              </div>
              <p className="text-white text-sm">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
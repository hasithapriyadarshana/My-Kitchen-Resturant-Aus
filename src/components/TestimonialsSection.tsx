import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { createTailwindMerge } from 'tailwind-merge';


export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Project Manager",
      company: "BuildTech Construction",
      image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2MTc4NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "My Kitchen Café has been our go-to catering partner for over 3 years. Their reliability and quality food service keeps our 150+ workforce happy and productive. The variety and freshness of their meals is outstanding."
    },
    {
      name: "Michael Torres",
      title: "Site Supervisor", 
      company: "Metro Infrastructure",
      image: "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYW5hZ2VyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2MjkwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "Con and his team understand construction sites. They deliver hot, filling meals right on schedule, every single day. Their canteen setup made our long-term project so much more manageable for the crew."
    },
    {
      name: "James Robertson",
      title: "Construction Foreman",
      company: "Robertson Building Group", 
      image: "https://images.unsplash.com/photo-1612006767176-225f7f9af5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY29uc3RydWN0aW9uJTIwd29ya2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2MjkwMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      text: "The guys love the food variety and portion sizes. My Kitchen Café caters for all dietary needs including our vegetarian and gluten-free workers. Professional service that we can always count on."
    }
  ];

  return (
    <>
    <section className="py-20 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Quote className="h-10 w-10 text-[#ff6b35]" />
            <h2 className="text-4xl md:text-5xl text-white">What Our Clients Say</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what construction professionals say about our catering services.
          </p>
          <div className="h-1 w-24 bg-[#ff6b35] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-white/10 hover:border-[#ff6b35]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#ff6b35] opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#ff6b35] fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#ff6b35]/20 group-hover:border-[#ff6b35]/50 transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6b35]/10 to-transparent"></div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg group-hover:text-[#ff6b35] transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.title}
                    </p>
                    <p className="text-[#ff6b35] text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-4xl text-[#ff6b35] mb-2">500+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl text-[#ff6b35] mb-2">15+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl text-[#ff6b35] mb-2">98%</h3>
            <p className="text-gray-300">Client Retention</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl text-[#ff6b35] mb-2">24/7</h3>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
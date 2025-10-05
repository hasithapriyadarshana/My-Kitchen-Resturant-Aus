import { Card, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      name: "Harold Park",
      location: "Sydney, NSW",
      type: "Residential Development"
    },
    {
      name: "Maitland Hospital",
      location: "Maitland, NSW", 
      type: "Healthcare Facility"
    },
    {
      name: "Western Sydney Stadium",
      location: "Parramatta, NSW",
      type: "Sports Infrastructure"
    },
    {
      name: "Central Station Redevelopment",
      location: "Sydney, NSW",
      type: "Transport Hub"
    },
    {
      name: "Barangaroo South",
      location: "Sydney, NSW",
      type: "Commercial Development"
    },
    {
      name: "M4 Motorway Extension",
      location: "Western Sydney, NSW",
      type: "Infrastructure"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Major Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've proudly served catering and canteen services across some of Australia's most significant construction projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MenuSection() {
  const menuItems = [
    {
      image: 'https://images.unsplash.com/photo-1617686578518-12580f986942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBzYW5kd2ljaCUyMGZyZXNoJTIwZm9vZHxlbnwxfHx8fDE3NTYyODg4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Fresh Burgers & Wraps',
      description: 'Made to order with quality ingredients'
    },
    {
      image: 'https://images.unsplash.com/photo-1575221731327-2a7644e9b9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBwcm9mZXNzaW9uYWwlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzU2Mjg4ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Barista Coffee',
      description: 'Professional coffee to fuel your day'
    },
    {
      image: 'https://images.unsplash.com/photo-1752584157962-8821ce8b732b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBidWZmZXQlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzU2Mjg4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Catering Platters',
      description: 'Perfect for team meetings and events'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Café-Quality Food</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, well-priced food that keeps your workforce satisfied and productive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {menuItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
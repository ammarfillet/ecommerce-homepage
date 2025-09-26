import { Truck, Headphones, ShieldCheck } from 'lucide-react';

export default function ServiceHighlights() {
  const services = [
    {
      icon: Truck,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over 1.000.000 IDR'
    },
    {
      icon: Headphones,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: ShieldCheck,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  return (
    <section className="py-10">
      <div className="container-px">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" role="list">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group" role="listitem">
              <div className="mb-4 group-hover:-translate-y-0.5 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold uppercase mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
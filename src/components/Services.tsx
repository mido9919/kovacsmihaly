import React from 'react';
import { Home, Combine as Cabinet, Sofa, DoorOpen as Door, Wrench, Hammer, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Konyhabútor tervezés és gyártás',
      description: 'Egyedi konyhák tervezése és kivitelezése a legmodernebb megoldásokkal'
    },
    {
      icon: <Cabinet size={40} />,
      title: 'Beépített szekrények',
      description: 'Helyiségekhez tökéletesen illeszkedő, funkcionalitást maximalizáló szekrények'
    },
    {
      icon: <Sofa size={40} />,
      title: 'Egyedi bútorok',
      description: 'Asztalok, ágyak, polcok és minden egyéb bútor egyedi igények szerint'
    },
    {
      icon: <Door size={40} />,
      title: 'Beltéri faajtók, lépcsők',
      description: 'Masszív fa ajtók és lépcsők készítése, felújítása'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Fa javítás, felújítás',
      description: 'Meglévő bútorok és faelemek szakszerű javítása, felújítása'
    },
    {
      icon: <Hammer size={40} />,
      title: 'Teljes asztalos kivitelezés',
      description: 'Komplex projektek teljes körű megvalósítása A-tól Z-ig'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Szolgáltatásaink
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Professzionális asztalosmunkák minden igényre - a tervezéstől a kivitelezésig
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900 hover:bg-gray-850 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-orange-400/50"
            >
              <div className="text-orange-400 mb-6 group-hover:text-orange-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-4 group-hover:text-orange-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-poppins leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle size={16} className="mr-2" />
                <span className="text-sm font-poppins font-medium">Minőségi kivitelezés</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
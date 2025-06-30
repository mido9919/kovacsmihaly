import React from 'react';
import { 
  Award, 
  Clock, 
  Users, 
  Hammer, 
  Ruler, 
  CheckCircle2,
  Quote
} from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: '10+ év tapasztalat',
      description: 'Szakértelem, ami látszik a munkán'
    },
    {
      icon: <Hammer size={32} />,
      title: 'Egyedi, kézműves megoldások',
      description: 'Minden projekt egyedi tervezés alapján készül'
    },
    {
      icon: <Clock size={32} />,
      title: 'Gyors határidő, precíz munka',
      description: 'Rövid átfutási idő, minőségi kivitelezés'
    },
    {
      icon: <Ruler size={32} />,
      title: 'Tervezéstől a kivitelezésig',
      description: 'Minden egy kézben - teljes körű szolgáltatás'
    },
    {
      icon: <Users size={32} />,
      title: 'Elégedett ügyfelek',
      description: 'Visszatérő megrendelők, ajánlások'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Minőségi anyagok',
      description: 'Csak a legjobb alapanyagokat használjuk'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-orange-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-orange-400 rounded-xl rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Miért válasszon <span className="text-orange-400">minket?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Tapasztalat, minőség és megbízhatóság - ezek az értékek vezérelnek bennünket minden projektben
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl border border-gray-700/50 hover:border-orange-400/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 text-orange-400 rounded-xl mb-6 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-4 group-hover:text-orange-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-poppins leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Master Quote Section */}
        <div className="mt-20 mb-16 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"></div>
          <div className="relative py-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={28} className="text-white" />
              </div>
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text italic leading-relaxed mb-4">
              „Az igazi mesterség a részletekben rejlik."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-2xl border border-orange-400/20">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Szakértelem és szenvedély
              </h3>
              <p className="text-gray-300 font-poppins max-w-2xl">
                Minden projekt egyedi kihívás számunkra. A hagyományos asztalosmesterség 
                és a modern technológia ötvözésével készítjük el álmai bútorait.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
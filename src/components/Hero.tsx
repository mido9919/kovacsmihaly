import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const { displayText: mainText, isComplete: mainComplete } = useTypewriter(
    'Egyedi asztalosmunkák Kovács Mihálytól',
    80,
    500
  );
  
  const { displayText: subText, isComplete: subComplete } = useTypewriter(
    '– tervezéstől a kivitelezésig',
    60,
    mainComplete ? 300 : 0
  );

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f26b1d' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://i.imgur.com/QPdwoHr.jpeg" 
              alt="Kovács Mihály e.v. Logo" 
              className="h-24 w-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight min-h-[1.2em]">
            {mainText}
            {!mainComplete && <span className="animate-pulse text-orange-400">|</span>}
            {mainComplete && (
              <>
                {' '}
                <span className="text-orange-400">
                  {subText}
                  {!subComplete && <span className="animate-pulse">|</span>}
                </span>
              </>
            )}
          </h1>
          
          <div className={`transition-opacity duration-1000 ${subComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-poppins leading-relaxed">
              Konyhák, szekrények, lépcsők, bútorok – minőségi kivitelezés rövid határidővel. 
              10+ év tapasztalat, egyedi megoldások minden igényre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+36309657163" 
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone size={24} />
                <span>Hívjon bizalommal: +36 30 965 7163</span>
              </a>
              
              <button 
                onClick={scrollToContact}
                className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg text-lg font-poppins font-semibold transition-all duration-300 flex items-center space-x-3"
              >
                <span>Kapcsolatfelvétel</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
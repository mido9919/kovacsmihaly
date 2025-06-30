import React from 'react';
import { Phone, Mail, Facebook, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-orange-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Lépjen <span className="text-orange-400">kapcsolatba</span> velünk
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Várjuk megkeresését! Kérjen árajánlatot vagy egyeztessen időpontot ingyenes helyszíni felméréssel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Elérhetőségek
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+36309657163"
                  className="group flex items-center space-x-4 p-4 bg-gray-800 hover:bg-orange-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-poppins">Telefon</p>
                    <p className="text-white font-poppins font-medium text-lg">+36 30 965 7163</p>
                  </div>
                </a>

                <a 
                  href="mailto:kovacs.mihaly83083052@gmail.com"
                  className="group flex items-center space-x-4 p-4 bg-gray-800 hover:bg-orange-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-sm font-poppins">Email</p>
                    <p className="text-white font-poppins font-medium break-all">kovacs.mihaly83083052@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/profile.php?id=61564638639960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gray-800 hover:bg-blue-500/10 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-poppins">Facebook</p>
                    <p className="text-white font-poppins font-medium">Kovács Mihály Asztalos</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Szolgáltatási terület
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-poppins font-medium text-lg mb-2">
                    Dunaújváros és környéke
                  </p>
                  <p className="text-gray-400 font-poppins">
                    Helyszíni felmérés és kivitelezés Dunaújvárosban és a környező településeken
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-playfair font-semibold text-white mb-4">
                Munkaidő
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-poppins">
                    <span className="font-medium">Hétfő - Péntek:</span> 8:00 - 18:00
                  </p>
                  <p className="text-gray-400 font-poppins text-sm">
                    Hétvégén is bármikor elérhető
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <p className="text-gray-300 font-poppins text-sm">
                <span className="text-orange-400 font-medium">Gyors válaszidő:</span> 
                Telefonhívásokat általában azonnal, emaileket 24 órán belül megválaszoljuk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
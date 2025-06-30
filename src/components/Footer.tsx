import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img 
              src="https://i.imgur.com/QPdwoHr.jpeg" 
              alt="Kovács Mihály e.v. Logo" 
              className="h-16 w-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h3 className="text-2xl font-playfair font-bold text-white mb-2">
            Kovács Mihály e.v.
          </h3>
          <p className="text-gray-400 font-poppins mb-8">
            Egyedi asztalosmunkák szakértője
          </p>
          
          <div className="border-t border-gray-800 w-full pt-6">
            <p className="text-gray-500 font-poppins text-sm flex items-center justify-center space-x-2">
              <span>© 2024 Kovács Mihály e.v. - Minden jog fenntartva</span>
              <Heart size={16} className="text-red-500" />
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 z-40"
        aria-label="Vissza a tetejére"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
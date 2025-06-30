import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://i.imgur.com/QPdwoHr.jpeg" 
              alt="Kovács Mihály e.v. Logo" 
              className="h-12 w-auto rounded-lg shadow-md"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-playfair font-bold text-white">Kovács Mihály e.v.</h1>
              <p className="text-sm text-gray-300">Asztalosmester</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins">
              Szolgáltatások
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins">
              Rólunk
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins">
              Munkáink
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins">
              Kapcsolat
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+36309657163" className="hidden md:flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors font-poppins font-medium">
              <Phone size={18} />
              <span>+36 30 965 7163</span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins text-left">
                Szolgáltatások
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins text-left">
                Rólunk
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins text-left">
                Munkáink
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-400 transition-colors font-poppins text-left">
                Kapcsolat
              </button>
              <a href="tel:+36309657163" className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors font-poppins font-medium w-fit">
                <Phone size={18} />
                <span>+36 30 965 7163</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
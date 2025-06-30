import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      title: 'Fürdőszoba bútor',
      images: [
        'https://i.imgur.com/Q2mXICf.jpeg',
        'https://i.imgur.com/O3HShUN.jpeg',
        'https://i.imgur.com/fudHjlS.jpeg',
        'https://i.imgur.com/McwlSee.jpeg'
      ]
    },
    {
      title: 'Kis helységbe nagy konyha, szép lett',
      images: [
        'https://i.imgur.com/LzbuPXT.jpeg',
        'https://i.imgur.com/H81hJ6L.jpeg',
        'https://i.imgur.com/Gdk0mBw.jpeg',
        'https://i.imgur.com/1mnxGIk.jpeg',
        'https://i.imgur.com/oaHTzq9.jpeg'
      ]
    }
  ];

  const allImages = projects.flatMap(project => 
    project.images.map(image => ({ url: image, title: project.title }))
  );

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Munkáink - <span className="text-orange-400">Galéria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Tekintse meg néhány kiemelkedő projektünket - minden munka egyedi tervezés és precíz kivitelezés eredménye
          </p>
        </div>

        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-8 text-center">
              {project.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {project.images.map((image, imageIndex) => {
                const globalIndex = projects.slice(0, projectIndex).reduce((acc, p) => acc + p.images.length, 0) + imageIndex;
                return (
                  <div 
                    key={imageIndex}
                    className="group cursor-pointer relative overflow-hidden rounded-xl bg-gray-700 aspect-square"
                    onClick={() => openModal(globalIndex)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${imageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-poppins text-sm font-medium">
                          Kattintson a nagyobb képért
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400 transition-colors duration-300 rounded-xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={allImages[selectedImage].url}
              alt={allImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg text-center">
              <p className="font-poppins font-medium">{allImages[selectedImage].title}</p>
              <p className="text-sm text-gray-300 mt-1">
                {selectedImage + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
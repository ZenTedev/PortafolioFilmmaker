import React from 'react';

import { optimizeCloudinary } from '../utils/cloudinary';

const creators = [
  { 
    name: 'Prasad Golatkar', 
    image: 'https://res.cloudinary.com/demo/image/upload/creator-1.jpg',
    stats: '23.1K on IG',
    url: 'https://www.instagram.com/prasad.golatkar/'
  },
  { 
    name: 'Bryan Delimata', 
    image: 'https://res.cloudinary.com/demo/image/upload/creator-2.jpg',
    stats: '55.9K on IG',
    url: 'https://www.instagram.com/bryandelimata/'
  },
  { 
    name: 'Cynthia Galindo', 
    image: 'https://res.cloudinary.com/demo/image/upload/creator-3.jpg',
    stats: '35.3K on IG',
    url: 'https://www.instagram.com/cynthiagalindo/'
  },
  { 
    name: 'Alex Rivera', 
    image: 'https://res.cloudinary.com/demo/image/upload/creator-4.jpg',
    stats: '120K on YT',
    url: 'https://www.youtube.com/@AlexRivera'
  },
  { 
    name: 'Sofia Chen', 
    image: 'https://res.cloudinary.com/demo/image/upload/creator-5.jpg',
    stats: '89K on TikTok',
    url: 'https://www.tiktok.com/@sofiachen'
  }
];

const ContentCreators: React.FC = () => {
  // Duplicamos los creadores varias veces para asegurar un loop infinito fluido
  const extendedCreators = [...creators, ...creators, ...creators, ...creators];

  return (
    <section id="content-creators" className="py-24 bg-[#0b0b0f] overflow-hidden">
      <div className="w-full mx-auto">
        <h2 className="text-center text-4xl md:text-5xl mb-20">
          <span className="font-bold text-white tracking-tight">I </span>
          <span className="text-blue-500 italic font-serif">Worked</span> 
          <span className="font-bold text-white tracking-tight"> With</span>
        </h2>

        {/* Contenedor principal con overflow hidden para ocultar los lados - MÁXIMO ANCHO */}
        <div className="relative w-full max-w-[95%] mx-auto overflow-hidden">
          {/* Capas de bloqueo laterales reducidas para mostrar más contenido */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0b0b0f] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0b0b0f] to-transparent z-20 pointer-events-none"></div>

          {/* Carrusel */}
          <div className="flex animate-scroll-infinite gap-6 w-max px-4 md:px-8">
            {extendedCreators.map((creator, index) => (
              <a 
                key={index} 
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="View Profile"
                className="flex-shrink-0 w-[240px] md:w-[300px] aspect-[3/4] relative group rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-none block"
              >
                {/* Background Image */}
                <img 
                  src={optimizeCloudinary(creator.image, 600)} 
                  alt={creator.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h4 className="text-lg md:text-xl font-medium text-white mb-1 tracking-wide">
                    {creator.name}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm font-light">
                    {creator.stats.split(' on ')[0]} <span className="text-gray-500">on</span> <span className="font-semibold text-gray-300">{creator.stats.split(' on ')[1]}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreators;

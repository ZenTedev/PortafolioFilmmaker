import React from 'react';

import { optimizeCloudinary } from '../utils/cloudinary';

const creators = [
  { 
    name: 'Nico Ruiz', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772682239/Nico_Ruiz_Solo_mekflh.png', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Bryson Bowman', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772682234/Bryson_Bowman_Solo_eeaxax.png', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Benpi', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772682069/Benpi_uitwjp.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'LuchoSSJ', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681422/LuchoSSJ_k3jnmk.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Lucas Espinoza', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681420/Lucas_Espinoza_k4pi37.jpg', 
    stats: 'Comedian on IG', 
    url: '#' 
  },
  { 
    name: 'Jason Cooperson', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681418/Jason_Cooperson_a5abjb.jpg', 
    stats: 'Creator on IG', 
    url: '#' 
  },
  { 
    name: 'Exterminia', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681416/Exterminia_2_vkpayd.webp', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Teorema', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681412/Teorema_lod1v7.jpg', 
    stats: 'Rapper on IG', 
    url: '#' 
  },
  { 
    name: 'Esteban Dütch', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681409/Esteban_D%C3%BCtch_fd2gkx.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Cynthia Galindo', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681407/Cynthia_Galindo_xb6vt0.jpg', 
    stats: '35.3K on IG', 
    url: 'https://www.instagram.com/cynthiagalindo/' 
  },
  { 
    name: 'Caoz', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681404/Caoz_awpdii.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Altoyoyo', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681403/Altoyoyo_iqb3t0.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'BknLukas', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681389/BknLukas_hge2ss.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Brian Hough', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681388/BrianHough_dyurzq.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
  },
  { 
    name: 'Adverso', 
    image: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772681387/Adverso_jujqka.jpg', 
    stats: 'Artist on IG', 
    url: '#' 
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

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { optimizeCloudinary } from '../utils/cloudinary';

const showreelVideos = [
  {
    id: 1,
    title: "LuchoSSJ Aftermovie",
    url: "https://www.youtube.com/embed/P-oiGjVQmDQ?si=bjIhUpVjn7CH1r6P",
    description: "Una selección de los mejores trabajos realizados durante el último año."
  },
  {
    id: 2,
    title: "Nico Ruiz Aftermovie",
    url: "https://www.youtube.com/embed/ueBF3SNFNXA?si=D5K-1xRaYXdNCEJI",
    description: "Producción audiovisual para campaña de temporada."
  },
  {
    id: 3,
    title: "Documental Corporativo",
    url: "https://www.youtube.com/embed/rYSj2kQFOvw?si=wLXGuwadayr9VCac",
    description: "Historia de éxito y valores institucionales."
  },
  {
    id: 4,
    title: "Video de Producto Tech",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Lanzamiento de nueva línea de dispositivos."
  },
  {
    id: 5,
    title: "Evento Internacional",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Cobertura completa y aftermovie de gran escala."
  }
];

export default function Showreel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 para izquierda, 1 para derecha

  const getIndex = (offset: number) => {
    return (currentIndex + offset + showreelVideos.length) % showreelVideos.length;
  };

  const nextVideo = () => {
    setDirection(1);
    setCurrentIndex(getIndex(1));
  };

  const prevVideo = () => {
    setDirection(-1);
    setCurrentIndex(getIndex(-1));
  };

  const prevIndex = getIndex(-1);
  const nextIndex = getIndex(1);

  // Función para obtener el ID de YouTube de diferentes formatos de URL
  const getYouTubeId = (url: string) => {
    if (url.includes('embed/')) return url.split('embed/').pop()?.split('?')[0];
    if (url.includes('v=')) return url.split('v=').pop()?.split('&')[0];
    if (url.includes('youtu.be/')) return url.split('youtu.be/').pop()?.split('?')[0];
    return '';
  };

  return (
    <section id="showreel" className="py-24 bg-[#0b0b0f] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          {t.showreel.title}
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed h-12">
          {t.showreel.videos[showreelVideos[currentIndex].id as keyof typeof t.showreel.videos].desc}
        </p>

        <div className="relative flex items-center justify-center h-[300px] md:h-[500px] lg:h-[600px]">
          {/* Contenedor de Deslizamiento */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Video Anterior (Preview) */}
            <div 
              key={`prev-${prevIndex}`}
              className="absolute left-0 w-[20%] md:w-[25%] aspect-video bg-gray-900 rounded-xl overflow-hidden opacity-20 scale-75 cursor-pointer hover:opacity-40 transition-all duration-700 ease-in-out z-0 hidden md:block"
              style={{ transform: `translateX(-10%)` }}
              onClick={prevVideo}
            >
              <div className="relative w-full h-full pointer-events-none">
                <img 
                  src={`https://img.youtube.com/vi/${getYouTubeId(showreelVideos[prevIndex].url)}/maxresdefault.jpg`}
                  alt={showreelVideos[prevIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            </div>

            {/* Video Actual (Principal) - AHORA MÁS GRANDE */}
            <div 
              key={`current-${currentIndex}`}
              className="relative w-full md:w-[70%] lg:w-[75%] aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 z-10 animate-slide-in"
              style={{ '--slide-direction': direction } as React.CSSProperties}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={showreelVideos[currentIndex].url}
                title={showreelVideos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Botones de Navegación sobre el video principal */}
              <div className="absolute inset-y-0 left-2 md:left-4 flex items-center z-20">
                <button
                  onClick={prevVideo}
                  className="p-3 md:p-4 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all backdrop-blur-md border border-blue-500/30 shadow-xl"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute inset-y-0 right-2 md:right-4 flex items-center z-20">
                <button
                  onClick={nextVideo}
                  className="p-3 md:p-4 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all backdrop-blur-md border border-blue-500/30 shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Video Siguiente (Preview) */}
            <div 
              key={`next-${nextIndex}`}
              className="absolute right-0 w-[20%] md:w-[25%] aspect-video bg-gray-900 rounded-xl overflow-hidden opacity-20 scale-75 cursor-pointer hover:opacity-40 transition-all duration-700 ease-in-out z-0 hidden md:block"
              style={{ transform: `translateX(10%)` }}
              onClick={nextVideo}
            >
              <div className="relative w-full h-full pointer-events-none">
                <img 
                  src={`https://img.youtube.com/vi/${getYouTubeId(showreelVideos[nextIndex].url)}/maxresdefault.jpg`}
                  alt={showreelVideos[nextIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-3">
            {showreelVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'w-10 bg-blue-500' : 'w-4 bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-1">
              {t.showreel.videos[showreelVideos[currentIndex].id as keyof typeof t.showreel.videos].title}
            </h3>
            <span className="text-sm text-blue-400 font-medium tracking-widest uppercase">
              {currentIndex + 1} / {showreelVideos.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f] z-[5]"></div>

      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
          } transform transition-transform duration-[5000ms]`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-between px-4 md:px-8">
        <button
          onClick={prevImage}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Matías Guzmán
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light tracking-wide">
          Realizador Audiovisual & Director
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl">
          Producción versátil de video para marcas modernas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Ver Trabajos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Trabajemos Juntos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#showreel" className="text-gray-400 hover:text-blue-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}

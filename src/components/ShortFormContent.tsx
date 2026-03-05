import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const shorts = [
  { id: 1, url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 2, url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  { id: 3, url: "https://www.youtube.com/embed/pWbfrT_5Fj4" },
  { id: 4, url: "https://www.youtube.com/embed/S9bCLPwzSC0" },
  { id: 5, url: "https://www.youtube.com/embed/8J7z3R2x1dE" },
  { id: 6, url: "https://www.youtube.com/embed/impSuIygMiQ" },
];

export default function ShortFormContent() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3;
  const maxIndex = shorts.length - itemsToShow;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="short-form" className="py-24 bg-[#0b0b0f] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="font-bold text-white tracking-tight">{t.shortForm.title_prefix} </span>
            <span className="text-blue-500 italic font-serif">{t.shortForm.title_accent}</span>
            {t.shortForm.title_suffix && <span className="font-bold text-white tracking-tight"> {t.shortForm.title_suffix}</span>}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t.shortForm.subtitle}
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-all backdrop-blur-md border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/30"
            aria-label="Previous video"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-all backdrop-blur-md border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/30"
            aria-label="Next video"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full -mx-4 px-4"> {/* Negative margin to handle padding cut-off */}
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {shorts.map((video) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0 w-full md:w-1/3 px-3 md:px-4 box-border"
                >
                  <div className="aspect-[9/16] bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 relative group/item hover:border-blue-500/30 transition-colors duration-300">
                    <iframe 
                      src={`${video.url}?controls=0&rel=0&modestbranding=1`} 
                      title={`Short video ${video.id}`}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="w-10 h-1 rounded-full bg-blue-500 mb-2"></div>
                        <p className="text-white font-medium text-sm">Watch Full Video</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-blue-500 w-8' : 'bg-gray-700 w-2 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

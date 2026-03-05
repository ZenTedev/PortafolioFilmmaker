import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { optimizeCloudinary } from '../utils/cloudinary';

type CategoryKey = 'all' | 'commercial' | 'corporate' | 'social' | 'events';

interface ProjectData {
  id: number;
  category: Exclude<CategoryKey, 'all'>;
  thumbnail: string;
  gallery: string[];
}

interface Project extends ProjectData {
  title: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    category: 'commercial',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/couple.jpg',
      'https://res.cloudinary.com/demo/image/upload/dog.jpg',
      'https://res.cloudinary.com/demo/image/upload/landscape.jpg',
      'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
      'https://res.cloudinary.com/demo/image/upload/woman.jpg',
      'https://res.cloudinary.com/demo/image/upload/car.jpg',
      'https://res.cloudinary.com/demo/image/upload/fire.jpg',
      'https://res.cloudinary.com/demo/image/upload/bike.jpg',
    ]
  },
  {
    id: 2,
    category: 'corporate',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/coffee.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/coffee.jpg',
      'https://res.cloudinary.com/demo/image/upload/camera.jpg',
      'https://res.cloudinary.com/demo/image/upload/watch.jpg',
      'https://res.cloudinary.com/demo/image/upload/laptop.jpg',
      'https://res.cloudinary.com/demo/image/upload/phone.jpg',
      'https://res.cloudinary.com/demo/image/upload/headphones.jpg',
      'https://res.cloudinary.com/demo/image/upload/tablet.jpg',
      'https://res.cloudinary.com/demo/image/upload/glasses.jpg',
      'https://res.cloudinary.com/demo/image/upload/shoes.jpg',
    ]
  },
  {
    id: 3,
    category: 'social',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/woman.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/couple.jpg',
      'https://res.cloudinary.com/demo/image/upload/dog.jpg',
      'https://res.cloudinary.com/demo/image/upload/landscape.jpg',
      'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
      'https://res.cloudinary.com/demo/image/upload/woman.jpg',
      'https://res.cloudinary.com/demo/image/upload/car.jpg',
      'https://res.cloudinary.com/demo/image/upload/fire.jpg',
      'https://res.cloudinary.com/demo/image/upload/bike.jpg',
    ]
  },
  {
    id: 4,
    category: 'events',
  thumbnail: 'https://res.cloudinary.com/demo/image/upload/fire.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/couple.jpg',
      'https://res.cloudinary.com/demo/image/upload/dog.jpg',
      'https://res.cloudinary.com/demo/image/upload/landscape.jpg',
      'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
      'https://res.cloudinary.com/demo/image/upload/woman.jpg',
      'https://res.cloudinary.com/demo/image/upload/car.jpg',
      'https://res.cloudinary.com/demo/image/upload/fire.jpg',
      'https://res.cloudinary.com/demo/image/upload/bike.jpg',
    ]
  },
  {
    id: 5,
    category: 'commercial',
  thumbnail: 'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/couple.jpg',
      'https://res.cloudinary.com/demo/image/upload/dog.jpg',
      'https://res.cloudinary.com/demo/image/upload/landscape.jpg',
      'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
      'https://res.cloudinary.com/demo/image/upload/woman.jpg',
      'https://res.cloudinary.com/demo/image/upload/car.jpg',
      'https://res.cloudinary.com/demo/image/upload/fire.jpg',
      'https://res.cloudinary.com/demo/image/upload/bike.jpg',
    ]
  },
  {
    id: 6,
    category: 'corporate',
  thumbnail: 'https://res.cloudinary.com/demo/image/upload/car.jpg',
    gallery: [
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/couple.jpg',
      'https://res.cloudinary.com/demo/image/upload/dog.jpg',
      'https://res.cloudinary.com/demo/image/upload/landscape.jpg',
      'https://res.cloudinary.com/demo/image/upload/sheep.jpg',
      'https://res.cloudinary.com/demo/image/upload/woman.jpg',
      'https://res.cloudinary.com/demo/image/upload/car.jpg',
      'https://res.cloudinary.com/demo/image/upload/fire.jpg',
      'https://res.cloudinary.com/demo/image/upload/bike.jpg',
    ]
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isZoomExiting, setIsZoomExiting] = useState(false);

  // Mapear datos estáticos con traducciones dinámicas
  const projects: Project[] = projectsData.map(p => ({
    ...p,
    title: t.projects.items[p.id as keyof typeof t.projects.items].title
  }));

  const categories: CategoryKey[] = ['all', 'commercial', 'corporate', 'social', 'events'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setZoomedImage(null);
    setIsZoomExiting(false);
  };

  const handleCloseModal = () => {
    if (zoomedImage) {
      handleBackToGallery();
      setTimeout(() => {
        setSelectedProject(null);
      }, 300);
    } else {
      setSelectedProject(null);
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc);
    setIsZoomExiting(false);
  };

  const handleBackToGallery = () => {
    setIsZoomExiting(true);
    setTimeout(() => {
      setZoomedImage(null);
      setIsZoomExiting(false);
    }, 300); // Duración de la animación en index.css
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-[#0b0b0f] to-[#121218]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="font-bold text-white tracking-tight">{t.projects.title_prefix} </span>
          <span className="text-blue-500 italic font-serif">{t.projects.title_accent}</span> 
          <span className="font-bold text-white tracking-tight"> {t.projects.title_suffix}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white backdrop-blur-sm'
              }`}
            >
              {t.projects.categories[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
            >
              <img
                src={optimizeCloudinary(project.thumbnail, 800)}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm font-medium">
                  {t.projects.categories[project.category]}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-[#121218]/80 border border-white/10 rounded-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 md:top-4 md:right-4 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500 text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {!zoomedImage && (
              <div className="mb-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedProject.title}</h3>
                <p className="text-blue-400">
                  {t.projects.categories[selectedProject.category]}
                </p>
              </div>
            )}

            {zoomedImage ? (
              <div className={`relative w-full h-full bg-black/20 rounded-lg overflow-hidden flex justify-center items-center ${isZoomExiting ? 'animate-zoom-out' : 'animate-zoom-in'}`}>
                <img
                  src={optimizeCloudinary(zoomedImage, 1920)}
                  alt="Imagen ampliada"
                  className="w-full h-full object-contain cursor-zoom-out"
                  onClick={handleBackToGallery}
                />
                <button
                  onClick={handleBackToGallery}
                  className="absolute top-4 left-4 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500 text-white transition-colors z-10"
                >
                  <ArrowLeft size={24} />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[75vh] overflow-y-auto pr-2 animate-in fade-in duration-500">
                {selectedProject.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="aspect-square bg-black/20 rounded-lg overflow-hidden cursor-zoom-in"
                    onClick={() => handleImageClick(img)}
                  >
                    <img
                      src={optimizeCloudinary(img, 600)}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

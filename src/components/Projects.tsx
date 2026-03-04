import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

type Category = 'Todos' | 'Comercial' | 'Corporativo' | 'Redes Sociales' | 'Eventos';

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, 'Todos'>;
  thumbnail: string;
  gallery: string[];
}

const generateGallery = (seed: number, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `https://images.pexels.com/photos/${seed + i}/pexels-photo-${seed + i}.jpeg?auto=compress&cs=tinysrgb&w=800`);
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Lanzamiento de Marca Tecnológica',
    category: 'Comercial',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ]
  },
  {
    id: 2,
    title: 'Película de Identidad Corporativa',
    category: 'Corporativo',
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ]
  },
  {
    id: 3,
    title: 'Campaña de Instagram',
    category: 'Redes Sociales',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: generateGallery(3184339, 9)
  },
  {
    id: 4,
    title: 'Evento de Lanzamiento de Producto',
    category: 'Eventos',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: generateGallery(2774556, 9)
  },
  {
    id: 5,
    title: 'Campaña de Marca de Moda',
    category: 'Comercial',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: generateGallery(3184360, 9)
  },
  {
    id: 6,
    title: 'Video de Valores Corporativos',
    category: 'Corporativo',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: generateGallery(3184465, 9)
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isZoomExiting, setIsZoomExiting] = useState(false);

  const categories: Category[] = ['Todos', 'Comercial', 'Corporativo', 'Redes Sociales', 'Eventos'];

  const filteredProjects = selectedCategory === 'Todos'
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
          Trabajos Destacados
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
              {category}
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
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm font-medium">{project.category}</p>
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
                <p className="text-blue-400">{selectedProject.category}</p>
              </div>
            )}

            {zoomedImage ? (
              <div className={`relative w-full h-full bg-black/20 rounded-lg overflow-hidden flex justify-center items-center ${isZoomExiting ? 'animate-zoom-out' : 'animate-zoom-in'}`}>
                <img
                  src={zoomedImage}
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
                      src={img}
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

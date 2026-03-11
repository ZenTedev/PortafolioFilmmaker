import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { optimizeCloudinary } from '../utils/cloudinary';
import SectionTitle from './SectionTitle';

type CategoryKey = 'all' | 'Miniaturas' | 'Matrimonios' | 'Corporativo' | 'Sociales';

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
    category: 'Miniaturas',
    thumbnail: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692120/f89793195730981.6953e9ff6b6a2_qohzsx.webp',
    gallery: [
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692120/f89793195730981.6953e9ff6b6a2_qohzsx.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692118/d551e8195730981.6953e9ff6c3d2_hq4h6l.png',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692116/cc2cad195730981.6953e9ff6b26b_isool4.png',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692114/7264ce195730981.6953e9ff6a60b_dkjlgp.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692112/81dcd9195730981.6953e9ff6ca56_orpmex.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692110/73ca79195730981.6953e9ff6bd3e_dwkblb.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772692109/059dc2195730981.6953e9ff69f32_bwb6xi.webp',
    ]
  },
  {
    id: 2,
    category: 'Matrimonios',
    thumbnail: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048884/fc358f227241647.683cd254da171_vwteig.webp',
    gallery: [
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048884/fc358f227241647.683cd254da171_vwteig.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048882/c7d1c9227241647.683cd254cff7d_mkw8rm.jpg',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048879/436e48227241647.683cd254d2b0b_uoqx7y.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048877/47a33e227241647.683cd254d5511_owwbah.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048876/b5d12c227241647.683cd254d067b_idvwmw.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048874/d1bf9c227241647.683cd254d9120_xulqnd.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048871/41f325227241647.683cd254d1e08_rgwu3d.webp',
    ]
  },
  {
    id: 3,
    category: 'Corporativo',
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
    category: 'Sociales',
  thumbnail: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048790/e59d74243605069.6984c6fc55ef1_kmrdlk.webp',
    gallery: [
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048790/e59d74243605069.6984c6fc55ef1_kmrdlk.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048787/e1c02b243605069.6984c6faef11a_uykwwf.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048785/d11517243605069.6984c6f88f21c_r9ri8u.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048783/cbbe80243605069.6984c6fc5537c_kp8qzm.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048780/c6f24d243605069.6984c6f88e798_pjbgbn.jpg',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048778/b5794d243605069.6984c6f9ed693_mtcoum.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048777/a50c0b243605069.6984c6f88e053_jz47fm.webp',
      'https://res.cloudinary.com/dlpdodtjp/image/upload/v1773048776/4d55c6243605069.6984c6faee2fb_lmomk9.webp',
    ]
  },
  {
    id: 5,
    category: 'Miniaturas',
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
    category: 'Corporativo',
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

  // Los datos (URLs + categoría) viven acá; los textos (títulos/categorías) salen de translations.ts.
  const projects: Project[] = projectsData.map(p => ({
    ...p,
    title: t.projects.items[p.id as keyof typeof t.projects.items].title
  }));

  // Estas claves deben existir también en t.projects.categories.
  const categories: CategoryKey[] = ['all', 'Miniaturas', 'Matrimonios', 'Corporativo', 'Sociales'];

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
        <SectionTitle
          prefix={t.projects.title_prefix}
          accent={t.projects.title_accent}
          suffix={t.projects.title_suffix}
          className="mb-12"
        />

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

import React from 'react';

const brands = [
  { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta/white' },
  { name: 'Autodesk', logo: 'https://cdn.simpleicons.org/autodesk/white' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/white' },
  { name: 'Navan', logo: 'https://cdn.simpleicons.org/navan/white' },
  { name: 'Riot Games', logo: 'https://cdn.simpleicons.org/riotgames/white' },
  { name: 'ServiceTitan', logo: 'https://cdn.simpleicons.org/servicetitan/white' },
  { name: 'Stack Overflow', logo: 'https://cdn.simpleicons.org/stackoverflow/white' },
  { name: 'Zscaler', logo: 'https://cdn.simpleicons.org/zscaler/white' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/white' },
];

const Brands: React.FC = () => {
  const extendedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-[#0b0b0f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-gray-500 font-medium tracking-widest uppercase mb-12">
          Con la confianza de marcas líderes
        </h3>
        <div className="relative">
          <div className="w-full overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {extendedBrands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-6">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-8 w-auto object-contain transition-opacity duration-300 opacity-50 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

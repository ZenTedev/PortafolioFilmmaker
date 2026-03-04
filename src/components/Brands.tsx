import React from 'react';

import { optimizeCloudinary } from '../utils/cloudinary';

const brands = [
  { name: 'Meta', logo: 'https://res.cloudinary.com/demo/image/upload/meta-logo.svg' },
  { name: 'Autodesk', logo: 'https://res.cloudinary.com/demo/image/upload/autodesk-logo.svg' },
  { name: 'Figma', logo: 'https://res.cloudinary.com/demo/image/upload/figma-logo.svg' },
  { name: 'Navan', logo: 'https://res.cloudinary.com/demo/image/upload/navan-logo.svg' },
  { name: 'Riot Games', logo: 'https://res.cloudinary.com/demo/image/upload/riot-games-logo.svg' },
  { name: 'ServiceTitan', logo: 'https://res.cloudinary.com/demo/image/upload/servicetitan-logo.svg' },
  { name: 'Stack Overflow', logo: 'https://res.cloudinary.com/demo/image/upload/stackoverflow-logo.svg' },
  { name: 'Zscaler', logo: 'https://res.cloudinary.com/demo/image/upload/zscaler-logo.svg' },
  { name: 'Kubernetes', logo: 'https://res.cloudinary.com/demo/image/upload/kubernetes-logo.svg' },
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
                    src={optimizeCloudinary(brand.logo)} 
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

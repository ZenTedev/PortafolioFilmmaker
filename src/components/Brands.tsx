import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import { optimizeCloudinary } from '../utils/cloudinary';

const brands = [
  { name: 'Formula Kart', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687700/Formula_Kart_avgzt4.png' },
  { name: 'CCHC', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687640/CCHC_b5txlz.png' },
  { name: 'Sorrel', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772688931/Sorrel_x2_etjade.png' },
  { name: 'Salazar Israel', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772688930/Salazar_x2_icyduo.png' },
  { name: 'REC', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687634/REC_qktm4v.png' },
  { name: 'Mobil', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687633/Mobil_xyddoa.png' },
  { name: 'Made inn Conce', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772689304/MADEINCONCE_x2_mlxqw7.png' },
  { name: 'Latam Win', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687630/latamwin_doydhj.png' },
  { name: 'Entel Empresas', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772689298/Entel_EMpresas_x2_rdynno.png' },
  { name: 'Copec', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687614/Copec_i6yw2v.png' },
  { name: 'Blumar', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687613/Blumar_yhzstg.png' },
  { name: 'Andritz', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687612/Andritz_mzdjud.png' },
  { name: 'Backroom', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772689128/BACKROOM_nvn5qq.png' }
];

const Brands: React.FC = () => {
  const { t } = useLanguage();
  const extendedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-[#0b0b0f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h3 className="text-center text-gray-500 font-medium tracking-widest uppercase">
          {t.brands.title}
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10"></div>
        
        <div className="flex w-max animate-scroll-infinite">
          {extendedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 flex items-center justify-center mx-8">
              <img 
                src={optimizeCloudinary(brand.logo)} 
                alt={brand.name} 
                className="h-20 w-auto object-contain transition-opacity duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

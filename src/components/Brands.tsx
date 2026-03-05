import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import { optimizeCloudinary } from '../utils/cloudinary';

const brands = [
  { name: 'Formula Kart', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687700/Formula_Kart_avgzt4.png' },
  { name: 'CCHC', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687640/CCHC_b5txlz.png' },
  { name: 'Sorrel', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687637/Sorrel_q5kfc5.png' },
  { name: 'Salazar Israel', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687636/Salazar_Israel_jadjr5.png' },
  { name: 'REC', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687634/REC_qktm4v.png' },
  { name: 'Mobil', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687633/Mobil_xyddoa.png' },
  { name: 'Made inn Conce', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687632/Made_inn_Conce_mnydpk.png' },
  { name: 'Latam Win', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687630/latamwin_doydhj.png' },
  { name: 'Entel', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687615/Entel_Empresas_hfrgkj.webp' },
  { name: 'Copec', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687614/Copec_i6yw2v.png' },
  { name: 'Blumar', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687613/Blumar_yhzstg.png' },
  { name: 'Andritz', logo: 'https://res.cloudinary.com/dlpdodtjp/image/upload/v1772687612/Andritz_mzdjud.png' }
];

const Brands: React.FC = () => {
  const { t } = useLanguage();
  const extendedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-[#0b0b0f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-gray-500 font-medium tracking-widest uppercase mb-12">
          {t.brands.title}
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

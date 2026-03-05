import { Video, Scissors, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const serviceIcons = [Video, Scissors, Palette, Smartphone];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#121218] to-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          <span className="font-bold text-white tracking-tight">{t.services.title_prefix} </span>
          <span className="text-blue-500 italic font-serif">{t.services.title_accent}</span> 
          {t.services.title_suffix && <span className="font-bold text-white tracking-tight"> {t.services.title_suffix}</span>}
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceIcons.map((Icon, index) => {
            const serviceData = t.services.items[(index + 1) as keyof typeof t.services.items];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="text-blue-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {serviceData.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {serviceData.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

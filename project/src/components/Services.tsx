import { Video, Scissors, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Producción de Video',
    description: 'Servicios de producción integrales desde desarrollo de concepto hasta entrega final, adaptados para narrativa de marca e impacto comercial.'
  },
  {
    icon: Scissors,
    title: 'Edición',
    description: 'Postproducción profesional con atención al ritmo, gradación de color y diseño de sonido que eleva tu contenido y cautiva audiencias.'
  },
  {
    icon: Palette,
    title: 'Dirección Creativa',
    description: 'Conceptos visuales estratégicos alineados con tu identidad de marca y objetivos de marketing, garantizando consistencia en todos los puntos de contacto.'
  },
  {
    icon: Smartphone,
    title: 'Contenido para Redes Sociales',
    description: 'Contenido de video optimizado para plataforma diseñado para máximo engagement, desde reels cortos hasta campañas sociales completas.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#121218] to-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Servicios
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Soluciones de video integrales para marcas que exigen excelencia
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
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

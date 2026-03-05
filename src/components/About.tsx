import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />

              <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />

              <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />

              <p className="text-white font-medium pt-4">
                {t.about.cta}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <img
                src="https://res.cloudinary.com/dauwmekm4/image/upload/v1772609540/samples/people/kitchen-bar.jpg"
                alt="Matías Guzmán"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Acerca de Mí
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Soy <span className="text-white font-semibold">Matías Guzmán</span>, realizador audiovisual y director
                especializado en <span className="text-blue-400 font-medium">producción de video comercial y corporativo</span>.
              </p>

              <p>
                Con años de experiencia trabajando con <span className="text-blue-400 font-medium">marcas y empresas</span>,
                creo contenido visual que genera resultados y se conecta con las audiencias. Mi enfoque combina
                <span className="text-white font-semibold"> visión creativa</span> con
                <span className="text-white font-semibold"> pensamiento estratégico</span>, garantizando que cada proyecto
                entregue tanto excelencia estética como impacto medible.
              </p>

              <p>
                De concepto a entrega final, manejo todo el proceso de producción con enfoque en
                <span className="text-blue-400 font-medium"> calidad, eficiencia y alineación de marca</span>.
                Ya sea un comercial de alto nivel, película de identidad corporativa o campaña en redes sociales,
                aporto versatilidad y profesionalismo a cada colaboración.
              </p>

              <p className="text-white font-medium pt-4">
                Creemos algo excepcional juntos.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
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

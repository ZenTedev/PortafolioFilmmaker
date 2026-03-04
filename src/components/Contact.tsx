import { useState } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0b0b0f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Trabajemos Juntos
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Hablemos de cómo podemos hacer realidad tu visión.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="tu.correo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Detalles del Proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Conecta</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <img src="https://cdn.simpleicons.org/x/white" alt="X" width={20} height={20} />
                  </div>
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Matías Guzmán. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}

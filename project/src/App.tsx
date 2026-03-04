import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Projects from './components/Projects';
import Brands from './components/Brands';
import ContentCreators from './components/ContentCreators';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor'; // Importar el cursor personalizado

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] cursor-none"> {/* Ocultar cursor por defecto */}
      <CustomCursor /> {/* Añadir el cursor personalizado */}
      <Hero />
      <Brands />
      <ContentCreators />
      <Showreel />
      <Projects />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;

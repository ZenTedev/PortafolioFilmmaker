import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Projects from './components/Projects';
import Brands from './components/Brands';
import ContentCreators from './components/ContentCreators';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0b0b0f] cursor-none">
        <CustomCursor />
        <LanguageSwitcher />
        <Hero />
        <Brands />
        <ContentCreators />
        <Showreel />
        <Projects />
        <About />
        <Services />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;

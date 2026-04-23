import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>

      <footer className="bg-black/40 backdrop-blur-xl w-full py-12 border-t border-white/5 px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto space-y-8 md:space-y-0">
          <div className="text-neutral-100 font-black tracking-widest font-display text-base lg:text-lg uppercase text-center md:text-left">
            DAVID ROSADO PULIDO // STREAMFLOW STUDIO
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em]">
            <a href="#proyectos" className="text-slate-500 hover:text-indigo-400 transition-all">
              SOLUCIONES
            </a>
            <a href="#recorrido" className="text-slate-500 hover:text-indigo-400 transition-all">
              RECORRIDO
            </a>
            <a href="#sobre-mi" className="text-slate-500 hover:text-indigo-400 transition-all">
              METODOLOGÍA
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-all">
              STREAMFLOW_NET
            </a>
          </div>

          <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600 text-center">
            © 2024 DAVID ROSADO PULIDO // STREAMFLOW STUDIO
          </div>
        </div>
      </footer>
    </div>
  );
}

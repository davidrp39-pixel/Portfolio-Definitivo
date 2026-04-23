import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket, Briefcase, User, MessageCircle, GraduationCap } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const categories = [
    {
      title: "NAVEGACIÓN",
      links: [
        { name: "INICIO", href: "#inicio", icon: <Rocket className="w-4 h-4" /> },
        { name: "SOLUCIONES", href: "#proyectos", icon: <Briefcase className="w-4 h-4" /> },
        { name: "RECORRIDO", href: "#recorrido", icon: <GraduationCap className="w-4 h-4" /> },
        { name: "METODOLOGÍA", href: "#sobre-mi", icon: <User className="w-4 h-4" /> },
        { name: "CONTACTO", href: "#contacto", icon: <MessageCircle className="w-4 h-4" /> },
      ]
    }
  ];

  return (
    <nav className="fixed top-4 left-6 right-6 z-[60]">
      <div className="glass-nav rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center px-6 lg:px-8 py-4 w-full max-w-screen-2xl mx-auto relative z-20">
          <div className="text-lg lg:text-xl font-bold text-white tracking-tight flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            DAVID <span className="text-indigo-400 italic">ROSADO PULIDO</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 mr-6">
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest border-r border-white/10 pr-6">
                STATUS: <span className="text-green-400">ONLINE</span>
              </span>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-white transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-indigo-600/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="text-xs font-bold tracking-widest relative z-10 px-1">MENU</span>
              {isOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="border-t border-white/10 bg-indigo-950/40 backdrop-blur-xl overflow-hidden"
            >
              <div className="p-8 max-w-md mx-auto">
                <div className="space-y-6">
                  <h5 className="text-[10px] font-black text-indigo-400 tracking-[0.3em] uppercase opacity-60 text-center">
                    MENÚ
                  </h5>
                  <div className="flex flex-col gap-3">
                    {categories[0].links.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="flex items-center gap-6 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:scale-110 transition-all">
                          {link.icon}
                        </div>
                        <span className="text-sm font-bold text-white tracking-widest group-hover:text-indigo-300">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-black/20 border-t border-white/5 flex items-center justify-between font-mono text-[8px] lg:text-[10px] text-slate-500 tracking-[0.2em]">
                <span>V4.2.0_GLASS // SYSTEM_ACTIVE</span>
                <span className="hidden sm:inline">DAVID ROSADO PULIDO // STREAMFLOW</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

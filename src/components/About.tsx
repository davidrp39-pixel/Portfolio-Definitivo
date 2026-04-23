import { motion } from "motion/react";
import { Network, LayoutDashboard, Zap, Cpu, Video, Box, PenTool, Languages, Users } from "lucide-react";
import StarRain from "./StarRain";

export default function About() {
  const capabilityItems = [
    { name: "Apoyo interno y organización de tareas", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Distribución rápida de información", icon: <Zap className="w-4 h-4" />, desc: "Comunicación fluida entre departamentos" },
    { name: "Manejo de herramientas digitales", icon: <Cpu className="w-4 h-4" /> },
    { name: "Edición de vídeo profesional", icon: <Video className="w-4 h-4" />, desc: "Adobe Premiere y DaVinci Resolve" },
    { name: "Animación y modelado 3D", icon: <Box className="w-4 h-4" />, desc: "Maya y Blender" },
    { name: "Ecosistema de Adobe", icon: <PenTool className="w-4 h-4" />, desc: "Trabajo experto con programas de Adobe" },
    { name: "Nivel de inglés excelente", icon: <Languages className="w-4 h-4" /> },
    { name: "Dinamización de actividades", icon: <Users className="w-4 h-4" />, desc: "Capacidad de trabajo con personas" },
  ];

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 px-6 lg:px-24 relative overflow-hidden">
      <StarRain />
      
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-20 bottom-0 w-96 h-96 bg-indigo-600/10 blur-[100px] z-0" 
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[9px] lg:text-[10px] font-black text-indigo-400 tracking-[0.4em] uppercase mb-4">
            PERFIL_PROFESIONAL
          </h4>
          <h2 className="text-3xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
            SOLUCIONES <br className="hidden lg:block" /> DE ALTO IMPACTO
          </h2>
          <p className="text-base lg:text-xl text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Como Agente Digitalizador, mi enfoque combina la eficiencia técnica con la fluidez creativa. 
            Me dedico a eliminar barreras comunicativas y optimizar procesos internos mediante herramientas de última generación.
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="text-center">
            <h5 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4 inline-block">
              MIS_CAPACIDADES
            </h5>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {capabilityItems.map((item) => (
              <div key={item.name} className="flex items-start gap-4 group p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-indigo-600 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                  <div className="text-indigo-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white group-hover:text-indigo-300 transition-colors uppercase tracking-tight mb-1">
                    {item.name}
                  </span>
                  {item.desc && (
                    <span className="block text-[11px] text-slate-500 font-medium leading-tight">
                      {item.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

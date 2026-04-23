import { useState } from "react";
import { Play, Tag, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  id?: string;
  onPlay: (url: string) => void;
  key?: number | string;
}

function ProjectCard({ title, description, badge, tags, imageUrl, videoUrl, onPlay, id }: ProjectCardProps) {
  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/[0.03] backdrop-blur-md group p-8 lg:p-12 hover:bg-white/[0.06] transition-all duration-500 border border-white/10 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-[60px] rounded-full group-hover:bg-indigo-600/20 transition-colors" />
      
      <div className="aspect-video mb-8 relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
        <img
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => videoUrl && onPlay(videoUrl)}
            className="w-20 h-20 rounded-full bg-indigo-600/90 backdrop-blur-md border border-white/20 hover:scale-110 transition-all cursor-pointer flex items-center justify-center shadow-2xl shadow-indigo-500/30 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <Play className="text-white fill-current w-8 h-8" />
          </button>
        </div>
        
        <div className="absolute top-4 left-4 bg-indigo-600/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-white border border-white/20 uppercase tracking-[0.2em]">
          {badge}
        </div>
      </div>

      <h3 className="text-xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 font-sans mb-8 text-sm lg:text-base leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-bold text-slate-300 border border-white/5 uppercase tracking-widest"
          >
            <Tag className="w-2.5 h-2.5 text-indigo-400" />
            {tag}
          </span>
        ))}
      </div>

      <button 
        onClick={() => videoUrl && onPlay(videoUrl)}
        className="flex items-center gap-2 text-[11px] font-black text-indigo-400 tracking-[0.3em] uppercase group-hover:gap-4 transition-all"
      >
        VER SOLUCIÓN <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      id: "social",
      title: "Crecer en redes sociales",
      description: "Estrategias de conexión real y constancia para transformar tu presencia digital en una comunidad activa.",
      badge: "SOCIAL_GROWTH_V1",
      tags: ["AI_CONTENT", "CONEXION", "ESTRATEGIA"],
      imageUrl: "https://picsum.photos/seed/social-media/800/600",
      videoUrl: "/videos/crecer.mp4",
    },
    {
      id: "pedidos",
      title: "Instrucciones para hacer un pedido",
      description: "Guía visual paso a paso para realizar tus pedidos de forma rápida, segura y sin errores en nuestra nueva plataforma.",
      badge: "ORDER_GUIDE",
      tags: ["TUTORIAL", "LOGISTICA", "AYUDA"],
      imageUrl: "/pedido-thumb.png",
      videoUrl: "/videos/pedido.mp4",
    },
    {
      id: "gym",
      title: "Reserva de clase en un gimnasio",
      description: "Gestión automatizada de reservas: elige tu actividad favorita y asegura tu plaza en segundos desde cualquier dispositivo.",
      badge: "GYM_SYNC_PRO",
      tags: ["BOOKING", "FITNESS", "SYNC_APP"],
      imageUrl: "/gym-thumb.png",
      videoUrl: "/videos/gym.mp4",
    },
    {
      id: "seguridad",
      title: "Agente Informador de seguridad en la oficina",
      description: "Protocolos de emergencia inteligentes: guía paso a paso sobre cómo actuar ante incendios y evacuaciones seguras.",
      badge: "SAFETY_BOT_SEC",
      tags: ["SECURITY", "PREVENCION", "OFFICE_X"],
      imageUrl: "/seguridad-thumb.png",
      videoUrl: "/videos/seguridad.mp4",
    },
  ];

  const handlePlay = (url: string) => {
    if (url) {
      setActiveVideo(url);
    } else {
      alert("Demostración personalizada en preparación.");
    }
  };

  return (
    <section id="proyectos" className="py-24 lg:py-40 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-900/5 blur-[120px] -z-10" />
      
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 lg:mb-32">
          <h4 className="text-[10px] font-black text-indigo-400 tracking-[0.5em] uppercase mb-4">
            BIBLIOTECA_DE_CASOS
          </h4>
          <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
            DEMOSTRACIONES <br /> <span className="text-indigo-500 italic">VINCULADAS</span> AL ÉXITO
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans text-base lg:text-lg leading-relaxed">
            Explora cómo nuestros agentes autónomos y sistemas de IA resuelven problemas complejos en entornos reales de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              onPlay={handlePlay}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 lg:p-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.2)] border border-white/10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 hover:bg-indigo-600 transition-all hover:scale-110 active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>
              
              <video 
                src={activeVideo} 
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

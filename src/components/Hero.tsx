import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-48 pb-20 overflow-hidden text-slate-100"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 mb-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
        >
          <span className="text-[10px] lg:text-xs font-bold text-indigo-300 tracking-[0.2em] uppercase">
            Ecosistemas de Comunicación Inteligente
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] lg:leading-[0.9] tracking-tighter mb-8 break-words"
        >
          DAVID <br className="hidden sm:block" />
          <span className="text-indigo-400 italic">ROSADO PULIDO</span> <br className="hidden sm:block" />
          AGENTE DE DIGITALIZACIÓN<br className="hidden sm:block" />
          CORPORATIVA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg lg:text-xl text-slate-400 max-w-2xl font-sans leading-relaxed mb-12"
        >
          Especializado en la creación de agentes de IA y chatbots avanzados para comunicación interna. 
          Desbloquea la productividad facilitando el intercambio de información y 
          automatizando flujos operativos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 text-neutral-600"
        >
          <div className="w-px h-12 bg-neutral-800" />
          <span className="text-[10px] font-display tracking-widest uppercase">
            CONECTIVIDAD_SINÁPTICA
          </span>
        </motion.div>
      </div>
    </section>
  );
}

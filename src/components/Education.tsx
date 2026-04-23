import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Layers, Compass } from "lucide-react";

export default function Education() {
  const steps = [
    {
      year: "2026",
      status: "ACTUALMENTE",
      title: "Agente de Digitalización",
      institution: "Formación Especializada",
      desc: "Enfocado en la integración de IA, automatización de procesos y optimización de flujos de trabajo corporativos.",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      color: "bg-indigo-500"
    },
    {
      year: "2023 - 2025",
      status: "GRADO SUPERIOR",
      title: "Animación 3D y Entornos Interactivos",
      institution: "IES Juan Antonio Castro",
      desc: "Especialización en modelado, animación y desarrollo de experiencias digitales interactivas de alto impacto.",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      color: "bg-purple-500"
    },
    {
      year: "2021 - 2023",
      status: "TÉCNICO SUPERIOR",
      title: "Animación Sociocultural y Turística",
      institution: "IES Puerta de Cuartos",
      desc: "Desarrollo de capacidades de gestión de grupos, dinamización de comunidades y liderazgo de proyectos sociales.",
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      color: "bg-blue-500"
    },
    {
      year: "2019 - 2021",
      status: "BACHILLERATO",
      title: "Bachillerato de Ciencias",
      institution: "IES Juan Antonio Castro",
      desc: "Base académica sólida en pensamiento lógico, analítico y fundamentos científicos tecnológicos.",
      icon: <BookOpen className="w-5 h-5 text-slate-400" />,
      color: "bg-slate-500"
    }
  ];

  return (
    <section id="recorrido" className="py-24 lg:py-40 px-6 lg:px-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h4 className="text-[10px] font-black text-indigo-400 tracking-[0.5em] uppercase mb-4">
            REGISTRO_ACADÉMICO
          </h4>
          <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
            RECORRIDO <span className="text-indigo-500 italic">EVOLUTIVO</span>
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans text-base lg:text-lg leading-relaxed">
            Una trayectoria diseñada para fusionar la capacidad técnica avanzada con la gestión humana y la optimización digital.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line for the timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-white/10 to-transparent hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col lg:flex-row items-start gap-10 group"
            >
              {/* Timeline bubble */}
              <div className="hidden lg:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 z-10 group-hover:scale-150 transition-transform duration-300" />
              
              <div className="lg:w-48 pt-2">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="text-2xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
                    {step.year}
                  </span>
                  <span className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-[9px] font-black text-indigo-400 tracking-widest uppercase">
                    {step.status}
                  </span>
                </div>
              </div>

              <div className="flex-1 glass-card p-8 lg:p-12 hover:bg-white/[0.08] transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                {/* Background glow on hover */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${step.color}/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:scale-110 transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <MapPin className="w-3 h-3 text-indigo-400" />
                        {step.institution}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 font-sans text-sm lg:text-base leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-slate-600 tracking-widest uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    ACADEMIC_ENTRY_VALIDATED
                  </div>
                  <GraduationCap className="w-5 h-5 text-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggestion block (based on user request to mention details that would make it better) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 lg:p-12 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="w-12 h-12 text-indigo-400/20" />
          </div>
          <div className="max-w-2xl">
            <h5 className="text-[10px] font-black text-indigo-400 tracking-[0.4em] uppercase mb-4">NOTA_DE_DIGITALIZADOR</h5>
            <h3 className="text-2xl lg:text-4xl font-black text-white tracking-tighter mb-6 uppercase">FILOSOFÍA DE APRENDIZAJE</h3>
            <p className="text-slate-300 font-sans leading-relaxed">
              Cada etapa de mi formación ha sido un bloque de construcción estratégico. Desde la base científica del bachillerato hasta la creatividad técnica del 3D, culminando hoy en la digitalización activa. Mi objetivo no es solo acumular títulos, sino conectar estos conocimientos para resolver problemas estructurales en las organizaciones.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

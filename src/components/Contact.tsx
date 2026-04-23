import { Mail, Users } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 uppercase">
              INICIAR_CONSULTA
            </h2>
            <p className="text-base lg:text-lg text-slate-400 font-sans mb-10 leading-relaxed max-w-2xl mx-auto">
              Especializado en interconectar cada departamento de su empresa para crear flujos de trabajo dinámicos. Eliminemos los fallos de comunicación y transformemos su estructura en un ecosistema fluido y eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="mailto:Davidrp39@gmail.com" className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex items-center gap-6 group hover:bg-white/10 transition-colors overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Mail className="text-indigo-400 w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CORREO_CORPORATIVO</h4>
                <p className="text-white text-sm lg:text-lg group-hover:text-indigo-400 transition-colors truncate">Davidrp39@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/david-rosado-pulido-0a1268378" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex items-center gap-6 group hover:bg-white/10 transition-colors overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Users className="text-indigo-400 w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Buscame en LinkedIn como</h4>
                <p className="text-white text-sm lg:text-lg group-hover:text-indigo-400 transition-colors truncate">David Rosado Pulido</p>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col items-center">
            <h5 className="text-[9px] lg:text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">
              ESTADO_DISPONIBILIDAD
            </h5>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <span className="text-xs lg:text-sm font-bold text-white uppercase tracking-widest">
                ONLINE_FOR_PROJECTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

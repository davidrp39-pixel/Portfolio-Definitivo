import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Primary moving blob */}
      <motion.div
        animate={{
          x: ["0%", "25%", "-15%", "0%"],
          y: ["0%", "20%", "30%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/15 blur-[140px] rounded-full"
      />

      {/* Secondary moving blob */}
      <motion.div
        animate={{
          x: ["0%", "-20%", "15%", "0%"],
          y: ["10%", "-30%", "10%", "10%"],
          rotate: [0, 120, 240, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[70%] bg-purple-500/12 blur-[120px] rounded-full"
      />

      {/* Third accent blob */}
      <motion.div
        animate={{
          x: ["0%", "10%", "-10%", "0%"],
          y: ["0%", "-15%", "15%", "0%"],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/3 w-[30%] h-[30%] bg-blue-400/10 blur-[100px] rounded-full"
      />

      {/* Static grid for texture */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", 
          backgroundSize: "60px 60px" 
        }} 
      />
    </div>
  );
}

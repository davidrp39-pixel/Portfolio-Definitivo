import { motion } from "motion/react";
import React, { useMemo } from "react";

export default function StarRain() {
  const lights = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const xMove = 100 + Math.random() * 100;
      const yMove = 200 + Math.random() * 200;
      // Calculate rotation to align the trail with movement (down and right)
      const angle = Math.atan2(yMove, xMove) * (180 / Math.PI);
      
      return {
        id: i,
        left: `${Math.random() * 100 - 10}%`,
        top: `${Math.random() * 80 - 20}%`,
        size: Math.random() * 2 + 1.5,
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 10,
        xMove,
        yMove,
        angle: angle + 90, // +90 because our trail is vertical upwards by default
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            x: light.xMove, 
            y: light.yMove, 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5]
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: light.left,
            top: light.top,
            transform: `rotate(${light.angle}deg)`, // Rotate the whole container to align the trail
          }}
        >
          {/* The Trail (Rastro) - Oriented upwards relative to the parent rotation */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-transparent via-white/10 to-white/30 blur-[3px]"
            style={{
              width: `${light.size}px`,
              height: `${light.size * 60}px`, 
              transformOrigin: "bottom center",
              transform: "translateY(-10px)", // Position behind the head
            }}
          />

          {/* The Head (Luz) */}
          <motion.div 
            animate={{
              boxShadow: [
                `0 0 ${light.size * 5}px rgba(255, 255, 255, 0.6)`,
                `0 0 ${light.size * 10}px rgba(255, 255, 255, 0.9)`,
                `0 0 ${light.size * 5}px rgba(255, 255, 255, 0.6)`,
              ]
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="relative bg-white rounded-full"
            style={{
              width: `${light.size * 2}px`,
              height: `${light.size * 2}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

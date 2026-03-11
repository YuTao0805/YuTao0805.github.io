import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const progress = useMotionValue(0);
  const widthPercent = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // Total duration in ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);
      
      progress.set(nextProgress);

      if (nextProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsVisible(false), 800);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-sky-500 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-full flex flex-col items-center">
            {/* Text Container */}
            <div className="relative mb-2 select-none">
              {/* Background Text (Dark Gray) */}
              <h1 className="text-slate-700/40 text-xl md:text-3xl font-cartoon text-center whitespace-nowrap">
                现实有限，想象无边。
              </h1>
              
              {/* Foreground Text (White) - Clipped by Progress */}
              <motion.div 
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: widthPercent }}
              >
                <h1 className="text-white text-xl md:text-3xl font-cartoon text-center whitespace-nowrap">
                  现实有限，想象无边。
                </h1>
              </motion.div>
            </div>

            {/* Progress Line - Full Width */}
            <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ width: widthPercent }}
              />
            </div>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/60 text-sm font-cartoon mt-2 tracking-widest"
            >
              想象中。。。
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

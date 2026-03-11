import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(14,165,233,0.04),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4 max-w-5xl"
      >
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            {t("hero.role")}
          </div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-extrabold text-slate-900 mb-6 tracking-tighter uppercase">
          {t("hero.name")}
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 font-mono text-[10px] text-slate-400 font-bold tracking-[0.2em]">
          <span className="flex items-center gap-2">MULTIMODAL LEARNING</span>
          <span className="flex items-center gap-2">GRAPH NEURAL NETWORKS</span>
          <span className="flex items-center gap-2">INTELLIGENT DECISION</span>
        </div>

        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative glass-card p-10 rounded-2xl text-left">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-slate-300 uppercase font-bold tracking-widest">Abstract.v26</div>
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
              {t("hero.bio")}
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          <a
            href="mailto:eu@"
            className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-sky-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-2 hover:scale-105"
          >
            <Mail className="w-4 h-4" /> {t("hero.init_contact")}
          </a>
          <a
            href="#publications"
            className="px-10 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-bold hover:bg-white transition-all hover:border-sky-200 hover:text-sky-600"
          >
            {t("hero.view_pub")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

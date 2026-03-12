import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
// import taoImg from '../img/tao.png';
export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      {/* Scribbled Decorations */}
      <svg className="absolute top-20 right-10 w-32 h-32 text-muted-paper opacity-40 hidden md:block" viewBox="0 0 100 100">
        <path d="M10,50 Q25,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
      </svg>
      <svg className="absolute bottom-20 left-10 w-40 h-40 text-muted-paper opacity-40 hidden md:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
      </svg>

      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
      >
        {/* Left Side: Photo with Tape Decoration */}
        <div className="relative group flex-shrink-0 -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="tape-decoration" />
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 bg-white border-[3px] border-pencil hard-shadow-lg z-10 overflow-hidden"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
          >
              <img
                src="/tao.png"
              alt={t("hero.name")}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-6xl md:text-8xl font-heading text-pencil mb-2 tracking-tight"
            >
              {t("hero.name")}
            </motion.h1>
            
            <div className="mb-6 rotate-1">
              <div className="inline-block px-4 py-1 border-2 border-pencil wobbly-md bg-muted-paper text-pencil text-sm font-bold uppercase tracking-widest">
                {t("hero.role")}
              </div>
            </div>

            <div className="max-w-2xl mb-10 -rotate-1">
              <p className="text-pencil text-2xl md:text-3xl leading-tight font-bold">
                {t("hero.bio")}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <motion.a
                href="mailto:id8670@alunos.uminho.pt"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95, boxShadow: '0px 0px 0px 0px #2d2d2d' }}
                className="px-8 py-4 bg-white border-[3px] border-pencil text-pencil rounded-none hard-shadow font-heading text-xl hover:bg-marker-red hover:text-white transition-colors flex items-center gap-2"
                style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
              >
                <Mail className="w-5 h-5" strokeWidth={3} /> {t("hero.init_contact")}
              </motion.a>
              <motion.a
                href="#publications"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95, boxShadow: '0px 0px 0px 0px #2d2d2d' }}
                className="px-8 py-4 bg-muted-paper border-[3px] border-pencil text-pencil rounded-none hard-shadow font-heading text-xl hover:bg-pen-blue hover:text-white transition-colors"
                style={{ borderRadius: '225px 15px 255px 15px / 15px 255px 15px 225px' }}
              >
                {t("hero.view_pub")}
              </motion.a>
            </div>
          </div>

          {/* Vertical Contact Links */}
          <div className="flex flex-row md:flex-col gap-6 md:gap-8 md:border-l-2 md:border-pencil md:border-dashed md:pl-10">
            {[
              { label: "Wechat", href: "#" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "E-mail", href: "mailto:id8670@alunos.uminho.pt" }
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ 
                  x: [0, -2, 2, -2, 2, 0],
                  y: [0, 1, -1, 1, -1, 0],
                  transition: { duration: 0.3, repeat: Infinity },
                  color: '#ff4d4d'
                }}
                className="text-pencil/50 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer font-heading"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

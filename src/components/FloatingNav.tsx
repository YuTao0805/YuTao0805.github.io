import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Home, Briefcase, Trophy, History, Image as ImageIcon, Zap, Target, Languages } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export const FloatingNav = () => {
  const { t, language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: t("nav.home"), link: "#home", icon: <Home className="w-4 h-4" /> },
    { name: t("nav.education"), link: "#education", icon: <History className="w-4 h-4" /> },
    { name: t("nav.experience"), link: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: t("nav.projects"), link: "#projects", icon: <Target className="w-4 h-4" /> },
    { name: t("nav.publications"), link: "#publications", icon: <Trophy className="w-4 h-4" /> },
    { name: t("nav.skills"), link: "#skills", icon: <Zap className="w-4 h-4" /> },
    { name: t("nav.photos"), link: "#photos", icon: <ImageIcon className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.link.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-slate-200 rounded-full bg-white/80 backdrop-blur-xl z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-4 shadow-lg shadow-slate-200/50"
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-slate-500 hover:text-accent transition-colors text-xs font-medium tracking-tight",
              activeSection === navItem.link.substring(1) && "text-accent"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
            {activeSection === navItem.link.substring(1) && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-x-0 -bottom-1 bg-accent h-0.5 rounded-full"
              />
            )}
          </a>
        ))}
        
        <div className="h-4 w-px bg-slate-200" />

        <button 
          onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          title="Toggle Language"
        >
          <Languages className="w-4 h-4" />
        </button>

        <button className="bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-full hover:bg-accent transition-colors uppercase tracking-widest">
          <span>{t("nav.connect")}</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

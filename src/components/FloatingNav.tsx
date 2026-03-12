import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Home, Briefcase, Trophy, History, Image as ImageIcon, Zap, Target } from "lucide-react";
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
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border-[3px] border-pencil bg-white z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-4 hard-shadow"
        )}
        style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-pencil/60 hover:text-marker-red transition-colors text-sm font-heading tracking-tight",
              activeSection === navItem.link.substring(1) && "text-marker-red"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
            {activeSection === navItem.link.substring(1) && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-x-0 -bottom-1 bg-marker-red h-0.5 rounded-full"
              />
            )}
          </a>
        ))}
        
        <div className="h-4 w-px bg-pencil/20 border-dashed border-l" />

        <button 
          onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          className="flex items-center justify-center px-2 py-1 hover:bg-muted-paper rounded transition-colors text-pencil/60 group gap-1 font-heading"
          title="Toggle Language"
        >
          <span className={cn("text-xs", language === "zh" ? "text-pen-blue" : "text-pencil/40")}>中</span>
          <div className="w-px h-3 bg-pencil/20" />
          <span className={cn("text-[10px]", language === "en" ? "text-pen-blue" : "text-pencil/40")}>EN</span>
        </button>

        {/* <button 
          className="bg-pencil text-white text-xs font-heading px-4 py-2 hard-shadow-sm hover:bg-marker-red transition-colors uppercase tracking-widest"
          style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
        >
          <span>{t("nav.connect")}</span>
        </button> */}
      </motion.nav>
    </AnimatePresence>
  );
};

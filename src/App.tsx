/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FloatingNav } from "./components/FloatingNav";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Skills } from "./components/Skills";
import { Photos } from "./components/Photos";
import { LoadingScreen } from "./components/LoadingScreen";
import { Github, Twitter, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { motion } from "motion/react";

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-paper min-h-screen selection:bg-marker-red/20 selection:text-marker-red relative">
      <LoadingScreen />
      <FloatingNav />
      
      <div className="relative z-10 font-bold text-[20px]">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Photos />
      </div>

      <footer className="py-24 bg-white border-t-4 border-pencil border-dashed px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-5xl font-heading text-pencil mb-6 tracking-tight">于 涛 <span className="text-pen-blue">Yu Tao</span></h3>
              <p className="text-pencil max-w-md mb-10 text-xl font-bold leading-relaxed -rotate-1">
                {t("footer.tagline")}
              </p>
              <div className="flex gap-6">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "#" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                  { icon: <Mail className="w-6 h-6" />, href: "mailto:id8670@alunos.uminho.pt" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                    className="p-4 bg-muted-paper border-2 border-pencil wobbly hard-shadow-sm text-pencil hover:bg-marker-red hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="rotate-1">
              <h4 className="text-pencil font-heading mb-8 uppercase tracking-widest text-lg">{t("footer.contact")}</h4>
              <ul className="space-y-4 text-pencil text-lg font-bold">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-marker-red" /> +86 18844585349「微信同步」
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-marker-red" /> yu@tao1995.cn
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-marker-red" /> www.tao1995.cn
                </li>
              </ul>
            </div>

            <div className="-rotate-1">
              <h4 className="text-pencil font-heading mb-8 uppercase tracking-widest text-lg">{t("footer.links")}</h4>
              <ul className="space-y-4 text-pencil text-lg font-bold">
                <li><a href="#education" className="hover:text-marker-red transition-colors underline decoration-dashed underline-offset-4">{t("nav.education")}</a></li>
                <li><a href="#experience" className="hover:text-marker-red transition-colors underline decoration-dashed underline-offset-4">{t("nav.experience")}</a></li>
                <li><a href="#publications" className="hover:text-marker-red transition-colors underline decoration-dashed underline-offset-4">{t("nav.publications")}</a></li>
                <li><a href="#skills" className="hover:text-marker-red transition-colors underline decoration-dashed underline-offset-4">{t("nav.skills")}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t-2 border-pencil border-dashed text-center">
            <p className="text-pencil/40 text-sm font-bold uppercase tracking-widest font-heading">© 2026 于涛 Yu Tao. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

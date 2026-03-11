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
import { NeuronBackground } from "./components/NeuronBackground";
import { LoadingScreen } from "./components/LoadingScreen";
import { Github, Twitter, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-sky-500/30 selection:text-sky-600 relative">
      <LoadingScreen />
      <NeuronBackground />
      <FloatingNav />
      
      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Photos />
      </div>

      <footer className="py-24 bg-white border-t border-slate-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">于 涛 <span className="text-sky-500">Yu Tao</span></h3>
              <p className="text-slate-500 max-w-md mb-10 text-lg font-medium leading-relaxed">
                {t("footer.tagline")}
              </p>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:eu@" className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">{t("footer.contact")}</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sky-500" /> 1******
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-500" /> eu@
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-sky-500" /> www
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">{t("footer.links")}</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#education" className="hover:text-sky-500 transition-colors">{t("nav.education")}</a></li>
                <li><a href="#experience" className="hover:text-sky-500 transition-colors">{t("nav.experience")}</a></li>
                <li><a href="#publications" className="hover:text-sky-500 transition-colors">{t("nav.publications")}</a></li>
                <li><a href="#skills" className="hover:text-sky-500 transition-colors">{t("nav.skills")}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2026 于涛 Yu Tao. {t("footer.rights")}</p>
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

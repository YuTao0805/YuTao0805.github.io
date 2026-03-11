import React from "react";
import { motion } from "motion/react";
import { Code2, Globe, Cpu, Languages, Lightbulb, Wrench, Heart } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const skillGroups = [
  {
    title: { zh: "人工智能与编程", en: "AI & Programming" },
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "PyTorch", "GNN", "LLM", "Multimodal Learning"]
  },
  {
    title: { zh: "开发与架构", en: "Dev & Architecture" },
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML/JS/PHP", "Web Dev", "Data Viz", "VR/AR Dev"]
  },
  {
    title: { zh: "硬件与物联网", en: "Hardware & IoT" },
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Arduino", "Raspberry Pi", "Sensors", "ESP8266/Zigbee"]
  },
  {
    title: { zh: "学术与交流", en: "Academic & Comm" },
    icon: <Languages className="w-6 h-6" />,
    skills: ["Academic Writing", "Public Speaking", "Communication"]
  },
  {
    title: { zh: "软技能", en: "Soft Skills" },
    icon: <Lightbulb className="w-6 h-6" />,
    skills: ["Innovation", "Learning", "Collaboration"]
  },
  {
    title: { zh: "智能制造", en: "Smart Manufacturing" },
    icon: <Wrench className="w-6 h-6" />,
    skills: ["3D Printing", "Laser Cutting", "Maker Ed"]
  }
];

export const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <div className="section-label">05 / Technical_Stack</div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">{t("sections.skills")}</h2>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex items-center gap-6 mb-10 text-sky-500">
                <div className="p-4 bg-white shadow-sm rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">{group.title[language]}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white text-slate-500 text-[10px] font-bold rounded-full border border-slate-100 uppercase tracking-widest group-hover:border-sky-100 group-hover:text-sky-600 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

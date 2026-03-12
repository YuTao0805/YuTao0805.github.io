import React from "react";
import { motion } from "motion/react";
import { Code2, Globe, Cpu, Languages, Lightbulb, Wrench } from "lucide-react";
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
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center rotate-1">
          <div className="font-heading text-marker-red text-sm mb-2 tracking-widest uppercase">05 / Technical_Stack</div>
          <h2 className="text-5xl md:text-6xl font-heading text-pencil mb-6 uppercase tracking-tight">{t("sections.skills")}</h2>
          <div className="h-1.5 w-32 bg-pencil border-dashed border-b-2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 bg-white border-[3px] border-pencil hard-shadow transition-all duration-300 group relative"
              style={{ borderRadius: '30px 10px 25px 12px / 12px 25px 10px 30px' }}
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-muted-paper border-2 border-pencil wobbly group-hover:bg-marker-red group-hover:text-white transition-colors">
                  {React.cloneElement(group.icon as React.ReactElement, { strokeWidth: 3 })}
                </div>
                <h3 className="text-xl font-heading text-pencil uppercase tracking-tight">{group.title[language]}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-paper border-2 border-pencil text-pencil text-sm font-bold wobbly-md group-hover:border-pen-blue group-hover:text-pen-blue transition-colors">
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

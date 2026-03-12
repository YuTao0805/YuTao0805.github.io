import React from "react";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const education = [
  {
    school: { zh: "葡萄牙米尼奥大学", en: "University of Minho" },
    degree: { zh: "电子与计算机工程 博士研究生", en: "PhD in Electronic and Computer Engineering" },
    period: "2019 - 2026",
    lab: { zh: "算法中心 (Centro ALGORITMI)", en: "Centro ALGORITMI" },
    focus: { zh: "图神经网络，大模型，多模态大模型", en: "GNN, LLM, Multimodal Models" }
  },
  {
    school: { zh: "日本高知工科大学", en: "Kochi University of Technology" },
    degree: { zh: "人机交互 硕士研究生", en: "Master in Human-Computer Interaction" },
    period: "2019 - 2021",
    lab: { zh: "人机交互技术研究所 (CHEC)", en: "CHEC" },
    focus: { zh: "人机交互，VR/AR开发", en: "HCI, VR/AR Development" }
  },
  {
    school: { zh: "吉林大学", en: "Jilin University" },
    degree: { zh: "软件工程 硕士研究生", en: "Master in Software Engineering" },
    period: "2015 - 2018",
    lab: { zh: "以人为中心人工智能实验室 (HAI)", en: "HAI Lab" },
    focus: { zh: "智慧教育，游戏化，个性化教育", en: "Smart Education, Gamification" }
  }
];

export const Education = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 rotate-1">
          <div className="font-heading text-marker-red text-sm mb-2 tracking-widest uppercase">01 / Academic_Path</div>
          <h2 className="text-5xl md:text-6xl font-heading text-pencil mb-6 uppercase tracking-tight">{t("sections.education")}</h2>
          <div className="h-1.5 w-32 bg-pencil border-dashed border-b-2" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white border-[3px] border-pencil hard-shadow transition-all duration-300 relative"
              style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
            >
              <div className="tape-decoration" />
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="p-5 bg-muted-paper border-2 border-pencil wobbly text-pencil group-hover:bg-marker-red group-hover:text-white transition-colors">
                  <GraduationCap className="w-8 h-8" strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h3 className="text-3xl font-heading text-pencil group-hover:text-marker-red transition-colors">{edu.school[language]}</h3>
                    <span className="text-lg text-pencil font-bold bg-muted-paper px-4 py-1 border-2 border-pencil wobbly-md">{edu.period}</span>
                  </div>
                  <p className="text-pen-blue font-bold text-xl mb-6 tracking-tight uppercase -rotate-1 inline-block">{edu.degree[language]}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="text-xs text-pencil/40 font-bold uppercase tracking-widest font-heading">Laboratory</span>
                      <p className="text-pencil text-lg font-bold">{edu.lab[language]}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-pencil/40 font-bold uppercase tracking-widest font-heading">Research Focus</span>
                      <p className="text-pencil text-lg font-bold">{edu.focus[language]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

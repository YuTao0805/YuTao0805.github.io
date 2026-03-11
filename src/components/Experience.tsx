import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";

const experiences = [
  {
    company: { zh: "吉林知是科技有限公司", en: "Jilin Zhishi Tech" },
    role: { zh: "总经理", en: "General Manager" },
    period: "2020 - 2026",
    description: { 
      zh: "主导基于语义技术和深度学习的知识图谱关键技术研发与应用；开发基于知识图谱的科技资源智能服务平台；负责中国农业科学院特产研究所微信小程序及数据可视化平台、吉林省高校科技成果VR展厅等项目。",
      en: "Led R&D of knowledge graph technologies based on semantic tech and deep learning. Developed intelligent service platforms for tech resources. Managed projects like CAAS mini-programs and VR exhibition halls."
    },
    skills: ["Knowledge Graph", "Deep Learning", "VR", "Data Viz"]
  },
  {
    company: { zh: "吉林大学力旺实验小学", en: "Liwang Experimental Primary School" },
    role: { zh: "创客项目竞赛负责人", en: "Maker Project Competition Lead" },
    period: "2017 - 2019",
    description: {
      zh: "培养小学生计算思维与信息素养；受邀到访芬兰各个小学对其创客教育参观学习；辅导少儿编程项目创作并指导参与信息科技类比赛，累计获得 30+ 项国家级/省级奖项。",
      en: "Cultivated computational thinking in primary students. Visited Finland for maker education exchange. Mentored students in programming competitions, winning 30+ national/provincial awards."
    },
    skills: ["Maker Ed", "Scratch", "Computational Thinking", "Mentoring"]
  }
];

export const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="section-label">02 / Professional_History</div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">{t("sections.experience")}</h2>
          <div className="h-1 w-24 bg-sky-500 rounded-full" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-16 border-l-2 border-slate-200"
            >
              <div className="absolute left-[-11px] top-0 w-[20px] h-[20px] bg-white border-4 border-sky-500 rounded-full shadow-lg shadow-sky-100" />
              
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">{exp.company[language]}</h3>
                <span className="text-xs text-slate-400 font-bold font-mono bg-white px-4 py-1.5 rounded-full border border-slate-100">{exp.period}</span>
              </div>
              
              <p className="text-sky-600 font-bold text-lg mb-8 tracking-tight uppercase">{exp.role[language]}</p>
              
              <div className="glass-card p-10 rounded-3xl mb-8">
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {exp.description[language]}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-sky-50 text-sky-600 text-[10px] font-bold rounded-full border border-sky-100 uppercase tracking-widest">
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

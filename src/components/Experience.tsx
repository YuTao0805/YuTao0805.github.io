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
        <div className="mb-20 rotate-1">
          <div className="font-heading text-marker-red text-sm mb-2 tracking-widest uppercase">02 / Professional_History</div>
          <h2 className="text-5xl md:text-6xl font-heading text-pencil mb-6 uppercase tracking-tight">{t("sections.experience")}</h2>
          <div className="h-1.5 w-32 bg-pencil border-dashed border-b-2" />
        </div>

        <div className="space-y-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 md:pl-20 border-l-4 border-pencil border-dashed"
            >
              <div className="absolute left-[-14px] top-0 w-[24px] h-[24px] bg-marker-red border-2 border-pencil rounded-full shadow-[2px_2px_0px_0px_#2d2d2d]" />
              
              <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-3xl font-heading text-pencil uppercase tracking-tight">{exp.company[language]}</h3>
                <span className="text-lg text-pencil font-bold bg-muted-paper px-4 py-1 border-2 border-pencil wobbly-md rotate-1">{exp.period}</span>
              </div>
              
              <p className="text-pen-blue font-bold text-xl mb-8 tracking-tight uppercase -rotate-1 inline-block">{exp.role[language]}</p>
              
              <div className="bg-white border-[3px] border-pencil p-10 hard-shadow mb-10 rotate-1" style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}>
                <div className="tack-decoration" />
                <p className="text-pencil text-xl leading-tight font-bold">
                  {exp.description[language]}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-paper border-2 border-pencil text-pencil text-sm font-bold wobbly-md hover:bg-marker-red hover:text-white transition-colors">
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

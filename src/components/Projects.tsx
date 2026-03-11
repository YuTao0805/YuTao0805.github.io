import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";

const projects = [
  {
    title: { zh: "华为海思高校众智项目", en: "Huawei Hisilicon Project" },
    description: { 
      zh: "负责深度学习模型的国产化芯片迁移，将 MobileNet 等经典模型代码从 GPU 迁移到华为 NPU 芯片上，并配合华为开发人员调试 AI 处理器。",
      en: "Responsible for migrating deep learning models to domestic chips. Ported MobileNet and other classic models from GPU to Huawei NPU."
    },
    image: "https://picsum.photos/seed/huawei/800/600",
    tags: ["Deep Learning", "NPU", "Huawei"]
  },
  {
    title: { zh: "知识图谱科技资源平台", en: "KG Tech Resource Platform" },
    description: {
      zh: "基于语义技术和深度学习，构建智能化的科技资源服务系统，实现高效的知识检索与关联分析。",
      en: "Built an intelligent tech resource service system based on semantic tech and deep learning for efficient retrieval."
    },
    image: "https://picsum.photos/seed/kg/800/600",
    tags: ["Knowledge Graph", "Semantic Tech"]
  },
  {
    title: { zh: "VR 科技成果展厅", en: "VR Tech Exhibition Hall" },
    description: {
      zh: "为吉林省高校开发的虚拟现实展厅，通过 VR 技术直观展示科技成果，提升交互体验。",
      en: "Developed a virtual reality exhibition hall for universities to showcase tech achievements intuitively."
    },
    image: "https://picsum.photos/seed/vr/800/600",
    tags: ["VR", "Unity", "3D"]
  },
];

export const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="section-label">03 / Engineering_Projects</div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">{t("sections.projects")}</h2>
          <div className="h-1 w-24 bg-sky-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-sky-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 uppercase tracking-tight group-hover:text-sky-600 transition-colors">{project.title[language]}</h3>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full border border-slate-200 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

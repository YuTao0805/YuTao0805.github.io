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
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 rotate-1">
          <div className="font-heading text-marker-red text-sm mb-2 tracking-widest uppercase">03 / Engineering_Projects</div>
          <h2 className="text-5xl md:text-6xl font-heading text-pencil mb-6 uppercase tracking-tight">{t("sections.projects")}</h2>
          <div className="h-1.5 w-32 bg-pencil border-dashed border-b-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border-[3px] border-pencil hard-shadow overflow-hidden transition-all duration-300 relative"
              style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
            >
              <div className="tack-decoration" />
              <div className="relative h-56 overflow-hidden border-b-[3px] border-pencil">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-heading text-pencil mb-4 tracking-tight group-hover:text-marker-red transition-colors">{project.title[language]}</h3>
                <p className="text-pencil text-lg mb-8 line-clamp-3 leading-tight font-bold">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted-paper border-2 border-pencil text-pencil text-xs font-bold wobbly-md">
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

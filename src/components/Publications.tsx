import React from "react";
import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const publications = [
  {
    title: "From Multimodal Evidence to Auditable Grouping Decisions in Elementary STEAM Project-Based Learning",
    journal: "Cogsci [Under Review]",
    description: {
      zh: "面向小学 STEAM 项目式学习，提出对齐感知与可审计的多模态证据驱动分组框架；将音视频、转写、问卷与量表等证据组织为可追溯证据单元，并以跨模态注意力估计对齐置信度作为可靠性权重。",
      en: "Proposed an alignment-aware auditable multimodal evidence-driven grouping framework for STEAM PBL. Organized audio-visual, transcription, and survey data into traceable units."
    },
    tags: ["Multimodal", "STEAM", "Decision Making"]
  },
  {
    title: "GEML: A Graph-enhanced Pre-trained Language Model Framework for Text Classification via Mutual Learning",
    journal: "Applied Intelligence",
    description: {
      zh: "提出图增强预训练语言模型文本分类框架，将 TextGCN 的全局词文档关系与 BERT 等 PLM 的局部语义表示解耦为双通道，通过预测分布层面的互学习实现一致性协同。",
      en: "Proposed a graph-enhanced PLM framework for text classification, decoupling TextGCN's global relations and PLM's local semantics into dual channels via mutual learning."
    },
    tags: ["GNN", "PLM", "Mutual Learning"]
  },
  {
    title: "Federated spatial-temporal Graph Attention Networks for Skeleton-based Action Recognition",
    journal: "Sensors",
    description: {
      zh: "提出面向骨骼动作识别的联邦学习方法 CF STGAT，利用本地 STGAT 的注意力统计构造隐私友好的客户端描述并进行动态聚类。",
      en: "Proposed a federated learning method CF STGAT for skeleton-based action recognition, using attention statistics for privacy-friendly client clustering."
    },
    tags: ["Federated Learning", "STGAT", "Action Recognition"]
  },
  {
    title: "An enjoyable learning experience in personalising learning based on knowledge management: A case study",
    journal: "Eurasia Journal of Mathematics, Science and Technology Education",
    description: {
      zh: "提出基于知识管理的个性化学习设计，构建语义知识库与知识结构实现学习资源结构化管理与个性化学习路径编排。",
      en: "Proposed personalized learning design based on knowledge management, building semantic knowledge bases for structured resource management."
    },
    tags: ["Knowledge Management", "Personalized Learning", "AR"]
  }
];

export const Publications = () => {
  const { t, language } = useLanguage();

  return (
    <section id="publications" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 rotate-1">
          <div className="font-heading text-marker-red text-sm mb-2 tracking-widest uppercase">04 / Scientific_Publications</div>
          <h2 className="text-5xl md:text-6xl font-heading text-pencil mb-6 uppercase tracking-tight">{t("sections.publications")}</h2>
          <div className="h-1.5 w-32 bg-pencil border-dashed border-b-2" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20, rotate: idx % 2 === 0 ? 1 : -1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white border-[3px] border-pencil hard-shadow transition-all duration-300 group relative"
              style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
            >
              <div className="tape-decoration" />
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="p-6 bg-muted-paper border-2 border-pencil wobbly text-pencil group-hover:bg-marker-red group-hover:text-white transition-colors">
                  <FileText className="w-10 h-10" strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading text-pencil mb-4 leading-tight tracking-tight group-hover:text-marker-red transition-colors">{pub.title}</h3>
                  <div className="inline-block px-4 py-1.5 bg-muted-paper border-2 border-pencil text-pencil text-sm font-bold mb-8 uppercase tracking-widest wobbly-md rotate-1">
                    {pub.journal}
                  </div>
                  <p className="text-pencil text-xl leading-tight mb-10 font-bold border-l-4 border-pencil border-dashed pl-8 -rotate-1">
                    {pub.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-paper border-2 border-pencil text-pencil text-xs font-bold wobbly-md">
                        {tag}
                      </span>
                    ))}
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

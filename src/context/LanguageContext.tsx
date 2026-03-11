import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "zh" | "en";

interface Translations {
  [key: string]: {
    zh: string;
    en: string;
  };
}

export const translations: any = {
  nav: {
    home: { zh: "主页", en: "Home" },
    education: { zh: "教育", en: "Education" },
    experience: { zh: "经历", en: "Experience" },
    projects: { zh: "项目", en: "Projects" },
    publications: { zh: "论文", en: "Publications" },
    skills: { zh: "技能", en: "Skills" },
    photos: { zh: "照片", en: "Photos" },
    connect: { zh: "联系", en: "Connect" },
  },
  hero: {
    role: { zh: "电子与计算机工程博士（26届）", en: "PhD in Electronic and Computer Engineering ('26)" },
    name: { zh: "于 涛", en: "Yu Tao" },
    bio: { 
      zh: "我目前在葡萄牙米尼奥大学 Centro Algoritmi 攻读博士，研究聚焦多模态表示学习与可落地的智能决策。我提出对齐感知的证据可靠性建模方法，将不一致与噪声显式转化为可靠性权重。代表性工作包括图增强预训练语言模型 GEML，以及面向教育场景的多模态证据驱动分组。我擅长把多模态、图学习与优化决策等前沿方法工程化为可评估可迭代的系统，面向真实约束输出可部署的智能方案。",
      en: "I am currently a PhD candidate at Centro Algoritmi, University of Minho, focusing on multimodal representation learning and actionable intelligent decision-making. I proposed alignment-aware evidence reliability modeling to explicitly transform inconsistency and noise into reliability weights. Representative works include GEML (Graph-enhanced Pre-trained Language Model) and multimodal evidence-driven grouping for educational scenarios. I excel at engineering cutting-edge methods into evaluable systems for real-world deployment."
    },
    init_contact: { zh: "联系我", en: "INITIALIZE_CONTACT" },
    view_pub: { zh: "学术成果", en: "VIEW_PUBLICATIONS" },
  },
  sections: {
    education: { zh: "教育经历", en: "Education" },
    experience: { zh: "工作经历", en: "Experience" },
    projects: { zh: "项目经验", en: "Projects" },
    publications: { zh: "论文发表", en: "Publications" },
    skills: { zh: "专业技能", en: "Skills" },
    photos: { zh: "生活瞬间", en: "Visual Archive" },
  },
  footer: {
    tagline: { zh: "致力于多模态学习与图神经网络研究，探索人工智能在教育与决策领域的无限可能。", en: "Dedicated to multimodal learning and graph neural networks, exploring the infinite possibilities of AI in education and decision-making." },
    contact: { zh: "联系方式", en: "Contact" },
    links: { zh: "快速链接", en: "Quick Links" },
    rights: { zh: "保留所有权利。", en: "All Rights Reserved." },
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (path: string) => {
    const keys = path.split(".");
    let current = translations;
    for (const key of keys) {
      if (current[key]) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current[language] || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

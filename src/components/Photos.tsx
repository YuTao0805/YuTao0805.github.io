import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";

const photos = [
  { url: "https://picsum.photos/seed/p1/800/1000", title: { zh: "城市光影", en: "Urban Light" } },
  { url: "https://picsum.photos/seed/p2/800/600", title: { zh: "自然之息", en: "Nature Breath" } },
  { url: "https://picsum.photos/seed/p3/800/800", title: { zh: "极简主义", en: "Minimalism" } },
  { url: "https://picsum.photos/seed/p4/800/600", title: { zh: "代码人生", en: "Code Life" } },
  { url: "https://picsum.photos/seed/p5/800/1200", title: { zh: "远方旅途", en: "Long Journey" } },
  { url: "https://picsum.photos/seed/p6/800/700", title: { zh: "日常瞬间", en: "Daily Moments" } },
];

export const Photos = () => {
  const { t, language } = useLanguage();

  return (
    <section id="photos" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <div className="section-label">06 / Visual_Archive</div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">{t("sections.photos")}</h2>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group rounded-3xl overflow-hidden cursor-crosshair border border-slate-200 shadow-sm"
            >
              <img
                src={photo.url}
                alt={photo.title[language]}
                className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <div className="font-mono text-[8px] text-sky-400 mb-2 uppercase tracking-widest font-bold">Frame_{idx+1}</div>
                <p className="text-white font-bold uppercase tracking-tight text-lg">{photo.title[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

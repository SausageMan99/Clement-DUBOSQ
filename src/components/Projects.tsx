"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Pause, Maximize2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { projects, videoShowcase } from "@/data/projects";
import { LineReveal } from "./ui/TextReveal";

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <LineReveal>
          <span className="text-[13px] tracking-[0.3em] uppercase text-white/30">
            03 — {t(translations.projects.title)}
          </span>
        </LineReveal>

        <div className="mt-16 space-y-0">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.name}
              project={project}
              index={index}
              t={t}
              language={language}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}

function ProjectRow({
  project,
  index,
  t,
  language,
}: {
  project: (typeof projects)[number];
  index: number;
  t: (obj: { fr: string; en: string }) => string;
  language: "fr" | "en";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isExpanded, setIsExpanded] = useState(false);
  const isWebVision = project.name === "WebVision";
  const hasLink = !!project.link;

  const handleClick = () => {
    if (isWebVision) {
      setIsExpanded(!isExpanded);
    } else if (hasLink) {
      window.open(project.link!, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={hasLink || isWebVision ? "button" : undefined}
        tabIndex={hasLink || isWebVision ? 0 : undefined}
        aria-expanded={isWebVision ? isExpanded : undefined}
        data-cursor-hover
        className={`group border-t border-white/[0.06] py-10 md:py-14 transition-all duration-300 ${
          hasLink || isWebVision ? "cursor-none" : ""
        }`}
      >
        <div className="grid md:grid-cols-[1fr_1fr_auto] gap-6 md:gap-12 items-center">
          {/* Name + emoji */}
          <div className="flex items-center gap-4">
            <span className="text-3xl">{project.emoji}</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {project.name}
              </h3>
              <span className="text-xs tracking-[0.15em] uppercase text-indigo-400/70">
                {t(project.status)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed max-w-md">
            {t(project.description)}
          </p>

          {/* Arrow - only for projects with links */}
          <div className="hidden md:flex items-center justify-end">
            {hasLink && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            )}
            {isWebVision && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-xl leading-none">+</span>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-white/[0.03] border border-white/[0.06] px-3 py-1 text-xs text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* WebVision video showcase - expandable */}
      {isWebVision && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-10 space-y-8">
                <p className="text-sm text-white/30 tracking-wide uppercase">
                  {t({ fr: "Réalisations vidéo", en: "Video productions" })}
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                  {videoShowcase.map((video, i) => (
                    <VideoCard key={i} video={video} t={t} isExpanded={isExpanded} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

function VideoCard({
  video,
  t,
  isExpanded,
}: {
  video: (typeof videoShowcase)[number];
  t: (obj: { fr: string; en: string }) => string;
  isExpanded: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div>
      <div
        className="relative aspect-video w-full overflow-hidden rounded-sm bg-white/[0.02] border border-white/[0.04]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlay}
        data-cursor-hover
      >
        {/* Lazy load video src only when expanded */}
        <video
          ref={videoRef}
          src={isExpanded ? video.src : undefined}
          className="h-full w-full object-cover"
          loop
          playsInline
          preload="metadata"
          poster=""
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Poster overlay with play icon when no video loaded */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center" />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isPlaying && !isHovered ? 0 : 1 }}
        >
          <div
            className="flex h-14 w-14 md:h-14 md:w-14 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-200"
            style={{
              transform: isHovered || !isPlaying ? "scale(1)" : "scale(0.8)",
              opacity: isHovered || !isPlaying ? 1 : 0,
            }}
          >
            {isPlaying ? (
              <Pause size={20} className="text-white" />
            ) : (
              <Play size={20} className="text-white ml-0.5" />
            )}
          </div>

          <button
            type="button"
            onClick={handleFullscreen}
            className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            style={{ opacity: isHovered ? 1 : 0 }}
            aria-label="Fullscreen"
          >
            <Maximize2 size={14} className="text-white" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-white/70">{t(video.title)}</h4>
        <p className="mt-1 text-xs text-white/30">{t(video.description)}</p>
      </div>
    </div>
  );
}

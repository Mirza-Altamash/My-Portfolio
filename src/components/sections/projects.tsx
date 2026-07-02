"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PROJECTS = [
  {
    id: "trai",
    title: "TRAI Complaint & Workflow Portal",
    type: "Enterprise Application",
    description: "Developed a role-based internal system for the Telecom Regulatory Authority of India (TRAI) to manage complaints and approvals. Includes multi-tier authentication, dynamic dashboard charts, and automated workflow tracking.",
    tech: ["MERN Stack", "JWT", "RBAC", "Chart.js", "Tailwind CSS"],
    link: "/projects/trai",
    github: "https://github.com/Mirza-Altamash/Trai-Complaints-Portal",
    color: "from-blue-500/20 to-blue-900/20",
    border: "border-blue-500/30 hover:border-blue-500/50",
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    type: "Full Stack Platform",
    description: "A comprehensive booking platform architecture featuring dynamic property listings, secure user authentication, interactive map integration, and robust search functionality.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Mapbox", "Passport.js"],
    link: "/projects/wanderlust",
    github: "https://github.com/Mirza-Altamash/WanderLust",
    color: "from-emerald-500/20 to-emerald-900/20",
    border: "border-emerald-500/30 hover:border-emerald-500/50",
  },
  {
    id: "tradesphere",
    title: "TradeSphere",
    type: "E-Commerce System",
    description: "A responsive e-commerce web application with a focus on UI/UX, product catalog management, and seamless frontend interactions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "/projects/tradesphere",
    github: "https://github.com/Mirza-Altamash/TradeSphere",
    color: "from-amber-500/20 to-amber-900/20",
    border: "border-amber-500/30 hover:border-amber-500/50",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <SectionWrapper id="projects" className="bg-background relative py-32 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-24 relative z-10">
          <Badge variant="outline" className="mb-6 glass px-4 py-1.5 text-foreground border-border uppercase tracking-widest text-xs font-semibold">Featured Work</Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6 uppercase leading-none">
            Selected <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Case Studies.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ProjectRow key={project.title} project={project} isEven={isEven} index={index} />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ProjectProps {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
  border: string;
}

function ProjectRow({ project, isEven, index }: { project: ProjectProps, isEven: boolean, index: number }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Parallax effects for the image/placeholder block
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center group`}>
      
      {/* Project Visual / Parallax Container */}
      <motion.div 
        style={{ y, opacity }}
        className="w-full lg:w-3/5 aspect-[4/3] lg:aspect-[16/10] relative rounded-[2rem] overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} backdrop-blur-3xl`} />
        
        {/* Animated Inner Visuals (Image or Fallback) */}
        <div className="absolute inset-4 lg:inset-8 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-[0.21,0.47,0.32,0.98]">
          <div className="h-10 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2 z-20">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-black/20">
            {!hasError ? (
              <Image
                src={`/projects/${project.id}/hero.jpg`}
                alt={`${project.title} Preview`}
                fill
                className={`object-cover object-top transition-all duration-700 ease-in-out ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"}`}
                sizes="(max-width: 768px) 100vw, 60vw"
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl lg:text-5xl font-black text-white/20 tracking-tighter text-center uppercase group-hover:text-white/40 transition-colors duration-700 relative z-10 px-4">
                  {project.title}
                </h3>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            )}
          </div>
        </div>

        {/* Cinematic Overlay on Hover */}
        <Link href={project.link} className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-background/20 backdrop-blur-sm transition-all duration-500">
          <div className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
            View Case Study <ArrowUpRight className="w-5 h-5" />
          </div>
        </Link>
      </motion.div>

      {/* Project Details */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 flex items-center gap-4">
          <span className="w-8 h-px bg-primary/50" /> 0{index + 1} {"//"} {project.type}
        </p>
        <h3 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t: string) => (
            <Badge key={t} variant="outline" className={`bg-transparent ${project.border} px-3 py-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors`}>
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={project.link} className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors pb-1 border-b border-foreground hover:border-primary">
            Read Case Study <ArrowRight className="w-4 h-4" />
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
    </div>
  );
}

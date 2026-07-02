"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";

const EXPERIENCE = [
  {
    role: "IT Intern",
    company: "Telecom Regulatory Authority of India (TRAI)",
    period: "June 2026 - Present",
    description: "Developing robust internal portals using the MERN stack. Designed and implemented role-based workflows for complaint management and approval tracking, significantly streamlining internal administrative processes.",
    tech: ["MERN Stack", "JWT Auth", "Role-Based Access Control", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "XIO Infotech",
    period: "Jan 2026 - Mar 2026",
    description: "Architected end-to-end full stack solutions with a focus on responsive UI components and reliable backend API services. Optimized database queries for improved application speed.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
  },
  {
    role: "Full Stack Intern",
    company: "Destiny IT Services Pvt. Ltd.",
    period: "Jun 2025 - Aug 2025",
    description: "Built a comprehensive Document Management System with secure role-based access, enabling internal teams to securely upload, track, and manage sensitive documents.",
    tech: ["MERN Stack", "Document Storage", "Authentication"],
  },
  {
    role: "Internship Trainee",
    company: "Solitaire Infosys Pvt. Ltd.",
    period: "Jun 2024 - Aug 2024",
    description: "Developed a fully responsive e-commerce web platform. Gained foundational experience in agile development methodologies and UI/UX best practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Agile Workflow"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <SectionWrapper id="experience" className="bg-muted/10 relative overflow-hidden py-32">
      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-6 uppercase">
            Career <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Timeline.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Building enterprise tools, workflow systems, and consumer platforms across various organizational scales.
          </p>
        </div>

        {/* Scrollable Timeline */}
        <div className="lg:w-2/3 space-y-8">
          {EXPERIENCE.map((exp, index) => {
            return (
              <TimelineCard key={index} exp={exp} index={index} />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

function TimelineCard({ exp, index }: { exp: ExperienceProps, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-colors group relative overflow-hidden shadow-sm"
    >
      <div className="absolute top-0 right-0 p-8 text-6xl font-black text-muted-foreground/10 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
        0{index + 1}
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{exp.role}</h3>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider w-fit">
          {exp.period}
        </span>
      </div>
      
      <h4 className="text-xl font-medium text-foreground/80 mb-6 flex items-center gap-2">
        <span className="w-6 h-px bg-foreground/30" /> {exp.company}
      </h4>
      
      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        {exp.description}
      </p>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {exp.tech.map((t: string) => (
          <Badge key={t} variant="secondary" className="bg-secondary/50 border border-border/50 px-4 py-1.5 text-sm">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Users, Briefcase, GraduationCap } from "lucide-react";

export function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <SectionWrapper id="leadership" className="bg-background relative overflow-hidden py-32">
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent)] pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-8 uppercase">
          Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">& Impact.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-20 leading-relaxed">
          Taking ownership beyond the codebase to guide teams, foster communities, and drive organizational success at scale.
        </p>

        <motion.div style={{ scale, y }} className="grid md:grid-cols-3 gap-8 w-full">
          <div className="glass-card p-10 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-colors group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-5 bg-primary/10 rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">President</h3>
            <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-6">CSE Society</h4>
            <p className="text-muted-foreground leading-relaxed">
              Directed technical initiatives, organized hackathons, and fostered a collaborative environment for hundreds of computer science students.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[2rem] border border-border/50 hover:border-accent/50 transition-colors group flex flex-col items-center text-center relative overflow-hidden md:-translate-y-8">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-5 bg-accent/10 rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Briefcase className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Placement Manager</h3>
            <h4 className="text-sm font-black text-accent uppercase tracking-widest mb-6">Dept. of Computer Science</h4>
            <p className="text-muted-foreground leading-relaxed">
              Coordinated with top tech companies to facilitate recruitment drives and optimized the interview pipeline for the graduating cohort.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[2rem] border border-border/50 hover:border-emerald-500/50 transition-colors group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-5 bg-emerald-500/10 rounded-full mb-8 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Class Representative</h3>
            <h4 className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-6">CSE 7th Semester</h4>
            <p className="text-muted-foreground leading-relaxed">
              Acted as the primary liaison between students and faculty, ensuring academic requirements and operational logistics were met efficiently.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

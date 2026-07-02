"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Star, GitCommit, Code, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const STATS = [
  { label: "Repositories", value: "25+", icon: Code, color: "text-blue-500", border: "border-blue-500/30" },
  { label: "Total Stars", value: "10+", icon: Star, color: "text-amber-500", border: "border-amber-500/30" },
  { label: "Contributions", value: "500+", icon: GitCommit, color: "text-emerald-500", border: "border-emerald-500/30" },
];

export function GithubSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  const weeks = Array.from({ length: 52 });
  
  return (
    <SectionWrapper id="github" className="bg-background relative py-32 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Text & CTA */}
        <div className="lg:w-1/3 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6 uppercase">
            Open Source <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic">Activity.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Consistent contributions, clean commit histories, and public projects showcasing backend implementations and system architectures.
          </p>
          <a href="https://github.com/Mirza-Altamash" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300">
            <GithubIcon className="mr-3 h-6 w-6" /> Follow on GitHub
            <ArrowUpRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>

        {/* Right: Abstract Graph & Stats */}
        <motion.div style={{ y, opacity }} className="lg:w-2/3 w-full space-y-8">
          
          <div className="grid sm:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className={`glass-card p-6 rounded-3xl border ${stat.border} hover:scale-105 transition-transform duration-500 flex flex-col justify-between aspect-square relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className={`h-10 w-10 ${stat.color} mb-4`} />
                <div>
                  <p className="text-4xl font-black text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 rounded-3xl border border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent)]" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="font-bold text-foreground text-xl flex items-center gap-3">
                <GitCommit className="w-6 h-6 text-emerald-500" />
                Contribution Graph
              </h3>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-full">Last 12 Months</span>
            </div>
            
            <div className="w-full overflow-x-auto pb-4 relative z-10 custom-scrollbar">
              <div className="flex gap-2 min-w-[800px]">
                {weeks.map((_, i) => (
                  <div key={i} className="flex flex-col gap-2 flex-1">
                    {Array.from({ length: 7 }).map((_, j) => {
                      // Deterministic pseudo-randomness based on indices to prevent React Hydration errors
                      const activityLevel = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1;
                      let bgClass = "bg-muted/50 border-border/50";
                      if (activityLevel > 0.9) bgClass = "bg-emerald-400 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]";
                      else if (activityLevel > 0.7) bgClass = "bg-emerald-500 border-emerald-500";
                      else if (activityLevel > 0.5) bgClass = "bg-emerald-600 border-emerald-600";
                      else if (activityLevel > 0.2) bgClass = "bg-emerald-800 border-emerald-800";
                      
                      return (
                        <div 
                          key={j} 
                          className={`w-full pt-[100%] rounded-sm border transition-colors hover:scale-125 hover:z-10 relative cursor-crosshair ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

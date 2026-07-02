"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Trophy, Code2 } from "lucide-react";

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <SectionWrapper id="achievements" className="bg-muted/5 relative overflow-hidden py-32">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-20 text-center uppercase">
          Milestones & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600 italic">Achievements.</span>
        </h2>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto overflow-hidden px-4">
          <motion.div style={{ x: x1 }} className="glass-card p-8 md:p-12 rounded-[2rem] border border-border/50 hover:border-yellow-500/50 transition-colors group flex flex-col md:flex-row items-center gap-8 bg-background/50 backdrop-blur-xl">
            <div className="p-6 bg-yellow-500/10 rounded-[2rem] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
              <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-black text-yellow-500 uppercase tracking-widest mb-2">Top Project Award</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">Engineer&apos;s Day Showcase</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Secured 1st Rank among 30 competing engineering projects on Engineer&apos;s Day, standing out across all branches and academic years.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ x: x2 }} className="glass-card p-8 md:p-12 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-colors group flex flex-col md:flex-row-reverse items-center gap-8 bg-background/50 backdrop-blur-xl">
            <div className="p-6 bg-primary/10 rounded-[2rem] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shrink-0">
              <Code2 className="w-12 h-12 text-primary" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-black text-primary uppercase tracking-widest mb-2">Technical Excellence</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">Enterprise Solutions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consistently delivered production-ready applications utilizing modern architectures, reducing manual workflow times significantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

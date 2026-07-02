"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Code2, Database, Layout, CheckCircle2 } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity and scale for the sticky background element
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      {/* Sticky Background / Title Area */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: bgOpacity, scale }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="text-[15vw] font-black text-muted/10 uppercase tracking-tighter whitespace-nowrap select-none">
            Systems Engineer
          </div>
        </motion.div>
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-12" /> {/* Spacer for visual balance with scrolling right side */}
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Scalable Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              I am a Software Engineer currently working as an IT Intern at the <strong className="text-foreground">Telecom Regulatory Authority of India (TRAI)</strong>, building internal workflow platforms that manage critical compliance approvals.
            </p>
          </div>
          <div className="hidden lg:block" /> {/* Empty column for scrolling content to pass over */}
        </div>
      </div>

      {/* Scrolling Content Panels */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-32 -mt-[50vh]">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="hidden lg:block" />
          
          <div className="flex flex-col gap-12">
            <Panel 
              icon={<Code2 className="w-8 h-8 text-primary" />} 
              title="Backend API Design"
              color="bg-primary/5 border-primary/20"
              desc="I specialize in the MERN stack, designing robust RESTful services with deep knowledge of JWT authentication, Role-Based Access Control, and complex middleware pipelining."
            />
            
            <Panel 
              icon={<Database className="w-8 h-8 text-accent" />} 
              title="Database Architecture"
              color="bg-accent/5 border-accent/20"
              desc="Experience structuring NoSQL schemas in MongoDB. I focus on indexing strategies, aggregation pipelines, and maintaining referential integrity for large-scale datasets."
            />
            
            <Panel 
              icon={<Layout className="w-8 h-8 text-emerald-500" />} 
              title="Frontend Dashboards"
              color="bg-emerald-500/5 border-emerald-500/20"
              desc="Building highly responsive, data-rich interfaces using React, Next.js, and Tailwind CSS. I prioritize fluid motion, strong component architecture, and Chart.js integrations."
            />
            
            <Panel 
              icon={<CheckCircle2 className="w-8 h-8 text-amber-500" />} 
              title="Workflow Automation"
              color="bg-amber-500/5 border-amber-500/20"
              desc="Architecting enterprise logic for automated state transitions, multi-tier approvals, and real-time status tracking for internal operations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className={`p-8 md:p-10 rounded-[2rem] glass-card border ${color} shadow-2xl backdrop-blur-xl transform transition-all duration-500 hover:scale-[1.02]`}>
      <div className="p-4 bg-background/50 rounded-2xl inline-flex mb-6 border border-white/5">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

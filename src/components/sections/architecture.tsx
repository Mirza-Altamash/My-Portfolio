"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Workflow, Lock, Network, DatabaseBackup, Activity, Combine } from "lucide-react";

const ARCHITECTURE_PILLARS = [
  {
    title: "Auth & Authorization",
    description: "Secure JWT sessions, RBAC, and protected API routes.",
    icon: Lock,
    color: "text-red-500",
  },
  {
    title: "Workflow Automation",
    description: "Automated state transitions and real-time status tracking.",
    icon: Workflow,
    color: "text-amber-500",
  },
  {
    title: "API Architecture",
    description: "Scalable RESTful services with strict validation.",
    icon: Network,
    color: "text-blue-500",
  },
  {
    title: "Data Modeling",
    description: "MongoDB schemas with efficient indexing and aggregation.",
    icon: DatabaseBackup,
    color: "text-emerald-500",
  },
  {
    title: "System Telemetry",
    description: "Logging, health checks, and analytics dashboards.",
    icon: Activity,
    color: "text-violet-500",
  },
  {
    title: "Full Stack Integration",
    description: "Connecting React/Next.js frontends with Node.js.",
    icon: Combine,
    color: "text-pink-500",
  },
];

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="architecture" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6 uppercase">
              Architectural <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Focus.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-6">
              Beyond writing code, I focus on the structural integrity, security, and scalability of the platforms I build. A strong foundation dictates long-term success.
            </p>
          </div>

          {/* Isometric Grid */}
          <motion.div 
            style={{ scale, opacity }}
            className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 perspective-[1000px]"
          >
            {ARCHITECTURE_PILLARS.map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                whileHover={{ scale: 1.05, z: 20, rotateX: 10, rotateY: -10 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl bg-background/60 backdrop-blur-md flex flex-col justify-between aspect-square"
              >
                <pillar.icon className={`w-8 h-8 ${pillar.color} mb-4`} />
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base leading-tight mb-2 uppercase">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}

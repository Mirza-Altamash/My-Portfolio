"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Server, LayoutPanelLeft, Wrench, ShieldCheck, LucideIcon } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & Systems",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/50",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Socket.IO", "C/C++", "Java"]
  },
  {
    title: "Frontend & UI",
    icon: LayoutPanelLeft,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Chart.js"]
  },
  {
    title: "Security & Auth",
    icon: ShieldCheck,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    skills: ["JWT Authentication", "Role-Based Access Control", "Passport.js", "Bcrypt", "Data Validation (Zod)"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/50",
    skills: ["Git & GitHub", "Postman", "Vercel", "VS Code", "Agile Workflows", "System Design"]
  }
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SectionWrapper id="skills" className="bg-muted/5 relative overflow-hidden py-32">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6 uppercase">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Capability</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit focused on building scalable, secure, and highly interactive web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Left Column moving up */}
          <motion.div style={{ y: isMobile ? 0 : y1 }} className="flex flex-col gap-8">
            {SKILL_CATEGORIES.slice(0, 2).map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </motion.div>
          
          {/* Right Column moving down slightly for asymmetrical parallax */}
          <motion.div style={{ y: isMobile ? 0 : y2 }} className="flex flex-col gap-8 md:mt-24">
            {SKILL_CATEGORIES.slice(2, 4).map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

interface CategoryProps {
  title: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  skills: string[];
}

function SkillCard({ category }: { category: CategoryProps }) {
  return (
    <div className={`glass-card p-10 rounded-[2rem] border ${category.border} transition-all duration-700 group hover:shadow-2xl relative overflow-hidden`}>
      <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${category.bg} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="flex items-center gap-6 mb-8 relative z-10">
        <div className={`p-4 rounded-2xl ${category.bg} border border-background/10`}>
          <category.icon className={`w-8 h-8 ${category.color}`} />
        </div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">{category.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill: string) => (
          <span
            key={skill}
            className="px-5 py-2.5 bg-background/50 backdrop-blur-md border border-border/50 hover:border-foreground/30 text-foreground font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

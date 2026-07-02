"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Mail, Code2, Layers, Cpu, Compass, Database } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParallaxText } from "@/components/ui/parallax-text";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { GithubIcon } from "@/components/icons";
import { useRef } from "react";

const METRICS = [
  { label: "Production Apps", value: "15+" },
  { label: "Enterprise Systems", value: "5+" },
  { label: "Years Coding", value: "4+" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Typography stagger animation
  const wordAnimation: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Dynamic Ambient Background */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] min-w-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] min-w-[600px] rounded-full bg-accent/15 blur-[150px] mix-blend-screen" />
        
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
      </motion.div>

      <SectionWrapper id="hero" className="relative z-10 pt-32 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center max-w-7xl mx-auto w-full">
          
          {/* Left Column: Typography & Story */}
          <motion.div style={{ scale, opacity }} className="flex flex-col relative z-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div variants={wordAnimation} className="h-px w-12 bg-primary/50" />
                <motion.span variants={wordAnimation} className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                  Mirza Altamash Baig
                </motion.span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[1.05] mb-8 [perspective:1000px]">
                <div className="overflow-hidden"><motion.div variants={wordAnimation}>Engineering</motion.div></div>
                <div className="overflow-hidden">
                  <motion.div variants={wordAnimation} className="flex items-center gap-4">
                    <span className="italic font-light text-muted-foreground">the</span> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative">
                      Future
                      {/* Glow behind text */}
                      <span className="absolute inset-0 bg-primary blur-2xl opacity-20" />
                    </span>
                  </motion.div>
                </div>
                <div className="overflow-hidden"><motion.div variants={wordAnimation}>of Workflow.</motion.div></div>
              </h1>

              <motion.p variants={wordAnimation} className="text-xl md:text-2xl text-muted-foreground/90 font-medium max-w-2xl leading-relaxed mb-12">
                I architect production-ready enterprise systems, focusing on scalable backend services, RBAC security, and premium frontend interactions.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton strength={30}>
                <Link href="#projects" className="group relative flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-semibold text-lg hover:scale-105 transition-transform">
                  Explore Architecture
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {/* Subtle border glow */}
                  <div className="absolute -inset-1 rounded-full border border-foreground/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </Link>
              </MagneticButton>
              
              <MagneticButton strength={20}>
                <Link href="#contact" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground font-medium transition-colors">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center glass group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  Contact For Roles
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
          {/* Right Column - Premium Identity Card */}
          <div className="lg:w-[45%] relative hidden lg:flex items-center justify-center pt-8">
            <motion.div 
              style={{ y: y2 }}
              className="relative w-full max-w-[420px] aspect-[4/5] z-10 group perspective-[1000px]"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] blur-[100px] -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full h-full p-3 bg-background/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden relative"
              >
                {/* Image Section */}
                <div className="relative w-full flex-1 rounded-[2.5rem] overflow-hidden bg-muted/20">
                  <ProfilePhoto className="rounded-[2.5rem]" />
                </div>
                
                {/* Identity Footer */}
                <div className="p-6 md:p-8 flex items-center justify-between bg-gradient-to-t from-background/80 to-transparent absolute bottom-0 left-0 right-0 pointer-events-none">
                  <div className="pointer-events-auto">
                    <h3 className="text-2xl font-black text-white drop-shadow-md tracking-tight">Mirza Altamash</h3>
                    <p className="text-sm text-primary font-bold tracking-widest uppercase mt-1 drop-shadow-md">Software Engineer</p>
                  </div>
                  <div className="pointer-events-auto">
                    <Link href="#contact" className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center hover:bg-primary/40 hover:scale-110 transition-all text-white shadow-xl">
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Cinematic Marquee Base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-center border-t border-border/10 bg-background/40 backdrop-blur-md overflow-hidden z-20 mask-image-fade">
        <ParallaxText baseVelocity={-2} className="text-5xl font-black text-transparent opacity-10 [-webkit-text-stroke:1px_var(--color-foreground)] tracking-widest uppercase">
          FULL STACK DEVELOPMENT • SYSTEM ARCHITECTURE • BACKEND ENGINEERING • UI/UX DESIGN • 
        </ParallaxText>
      </div>
    </div>
  );
}

// Ensure icons used in satellite cards are imported above, I will just swap Database for Cpu if needed, or import it.
// I imported Cpu, Compass, Layers, Code2, Mail, ArrowRight.

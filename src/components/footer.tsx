import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/30">
      {/* Cinematic Layered Background */}
      <div className="absolute bottom-[-20%] left-[10%] w-[80%] h-[50%] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
              Let&apos;s build <br className="hidden sm:block" /> something legendary.
            </h2>
            <p className="text-lg text-muted-foreground max-w-md font-medium leading-relaxed">
              Software Engineer specializing in enterprise architecture and premium frontend experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap md:justify-end gap-4">
            <Link
              href="mailto:mirzaaltamash203@gmail.com"
              className="group flex items-center gap-2 px-8 py-5 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-all shadow-2xl relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Start a Conversation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-primary tracking-tighter">MAB</span>
            <span className="text-sm font-medium text-muted-foreground">© {new Date().getFullYear()} Mirza Altamash Baig.</span>
          </div>
          
          <div className="flex gap-6">
            <Link
              href="https://github.com/Mirza-Altamash"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-background hover:text-foreground hover:-translate-y-1 hover:shadow-lg transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mirza-altamash-baig"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:-translate-y-1 hover:shadow-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

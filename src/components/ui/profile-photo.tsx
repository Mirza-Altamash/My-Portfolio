"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Camera, X, Download, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  className?: string;
  src?: string;
}

export function ProfilePhoto({ className, src = "/profile/mirza-profile.jpg" }: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={cn("relative group w-full h-full rounded-[2rem] overflow-hidden cursor-pointer", className)}
      >
        {/* Animated Glow Border */}
        <div className="absolute -inset-[2px] bg-gradient-to-br from-primary via-accent to-emerald-500 rounded-[2.1rem] opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-700 pointer-events-none" />
        <div className="absolute inset-0 rounded-[2rem] bg-background/80 backdrop-blur-xl border border-white/10 z-10" />

        {/* Content Container */}
        <div className="absolute inset-1 rounded-[1.8rem] bg-muted/20 overflow-hidden z-20 flex items-center justify-center">
          {!hasError ? (
            <Image
              src={src}
              alt="Mirza Altamash Baig"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={cn(
                "object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1",
                isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
              )}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-6 bg-background/50 backdrop-blur-md rounded-full shadow-2xl border border-white/5"
              >
                <User className="w-16 h-16 text-foreground/50" />
              </motion.div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground bg-background/50 px-4 py-2 rounded-full border border-white/5">
                <Camera className="w-4 h-4" /> Drop Photo Here
              </div>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center pointer-events-none rounded-[2rem]">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-8 h-8" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute top-8 right-8 flex gap-4 z-[110]">
              <a 
                href={src}
                download="Mirza_Altamash_Baig_Profile.jpg"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors text-white"
                onClick={(e) => e.stopPropagation()}
                title="Download Photo"
              >
                <Download className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors text-white"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt="Mirza Altamash Baig"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

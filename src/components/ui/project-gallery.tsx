"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Screenshot {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  category?: string;
}

interface ProjectGalleryProps {
  images: Screenshot[];
  className?: string;
}

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {images.map((image, idx) => (
          <GalleryItem 
            key={idx} 
            image={image} 
            onClick={() => setSelectedImage(image)} 
          />
        ))}
      </div>

      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}

function GalleryItem({ image, onClick }: { image: Screenshot, onClick: () => void }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-white/5 cursor-zoom-in aspect-[4/3]",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      
      {!hasError ? (
        <div className="absolute inset-4 overflow-hidden rounded-xl bg-black/20 shadow-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-contain object-center transition-transform duration-700 group-hover:scale-[1.02] z-10",
              isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
            )}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground z-10 bg-background/50 backdrop-blur-sm">
          <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
          <p className="text-sm font-semibold uppercase tracking-widest">{image.title}</p>
          <p className="text-xs mt-2 opacity-50">{image.src.split('/').pop()}</p>
        </div>
      )}

      {/* Hover Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
        <div className="flex items-center justify-between">
          <div>
            {image.category && (
              <span className="text-xs font-black text-primary uppercase tracking-widest block mb-2">{image.category}</span>
            )}
            <h4 className="text-xl font-bold text-white">{image.title}</h4>
            {image.caption && <p className="text-sm text-white/70 mt-1">{image.caption}</p>}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ image, onClose }: { image: Screenshot | null, onClose: () => void }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-12"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors z-[110]"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            quality={100}
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
            {image.caption && <p className="text-white/80">{image.caption}</p>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

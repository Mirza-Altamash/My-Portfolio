import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, ShoppingCart, Layout, Smartphone, Zap, MonitorSmartphone } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/ui/project-gallery";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const FEATURES = [
  { icon: Layout, title: "Modern UI/UX", desc: "Designed with a focus on visual hierarchy, white space, and micro-interactions for a premium feel." },
  { icon: Smartphone, title: "Responsive Layouts", desc: "Flawless rendering across all devices, ensuring a consistent shopping experience on mobile and desktop." },
  { icon: ShoppingCart, title: "Cart Interactions", desc: "Dynamic cart state management using vanilla JavaScript for instant UI updates." },
  { icon: Zap, title: "Performance Optimized", desc: "Lightweight DOM manipulation and optimized asset loading for near-instant page transitions." },
];

const SCREENSHOTS = [
  { src: "/projects/tradesphere/hero.jpg", alt: "TradeSphere Landing Page", title: "Landing Page", category: "Design", caption: "Premium hero section with clear call-to-actions." },
  { src: "/projects/tradesphere/products.jpg", alt: "Product Grid", title: "Product Catalog", category: "UI", caption: "Responsive grid layout for easy product browsing." },
  { src: "/projects/tradesphere/cart.jpg", alt: "Shopping Cart", title: "Cart Experience", category: "Interaction", caption: "Dynamic cart updates without page reloads." },
  { src: "/projects/tradesphere/login.jpg", alt: "User Login", title: "Authentication Flow", category: "Security", caption: "Secure user access and account management." },
  { src: "/projects/tradesphere/orders.jpg", alt: "Order Management", title: "Order Tracking", category: "Feature", caption: "Comprehensive view of past purchases and fulfillment status." },
];

export const metadata = {
  title: "TradeSphere | Mirza Altamash Baig",
  description: "Responsive e-commerce web application with a focus on UI/UX and frontend interactions.",
};

export default function TradeSphereProject() {
  return (
    <div className="pt-24 pb-16 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-background to-background pointer-events-none" />

      <SectionWrapper id="tradesphere-header" className="relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
        
        <div className="mb-24">
          <Badge variant="outline" className="mb-6 glass px-4 py-1.5 text-emerald-500 border-emerald-500/20 uppercase tracking-widest text-xs font-black">E-Commerce Frontend</Badge>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] uppercase">
            TradeSphere <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 italic">Platform.</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            A responsive, highly interactive frontend interface designed to deliver a seamless product browsing and checkout experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation", "UI/UX"].map((t) => (
            <Badge key={t} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 border border-border/50">
              {t}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10 mb-20">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] glass-card border border-border/50 hover:border-emerald-500/50 transition-colors group bg-background/50 backdrop-blur-xl">
              <feature.icon className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tighter">
            Interface <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 italic">Screenshots.</span>
          </h2>
          <ProjectGallery images={SCREENSHOTS} />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MonitorSmartphone className="w-8 h-8 text-emerald-500" /> UI/UX Engineering
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                <p>
                  TradeSphere was engineered with a mobile-first philosophy, utilizing fluid CSS grid and flexbox layouts to ensure pristine rendering across all device breakpoints. 
                </p>
                <p>
                  Vanilla JavaScript handles complex DOM manipulations for dynamic cart updates, product filtering, and interactive modal displays without the overhead of heavy frameworks, resulting in near-instant load times.
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-border/50 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1">Type</dt>
                  <dd className="font-medium text-foreground">Frontend Engineering</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Focus</dt>
                  <dd className="font-medium text-foreground">Responsive UI/UX</dd>
                </div>
              </dl>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="https://github.com/Mirza-Altamash/TradeSphere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", className: "w-full rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all h-12 text-base" })}
                >
                  <GithubIcon className="mr-2 h-5 w-5" /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

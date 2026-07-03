import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Map, UserCheck, Search, ShieldCheck, Database } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/ui/project-gallery";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const FEATURES = [
  { icon: Map, title: "Interactive Mapping", desc: "Integrated Mapbox API to provide dynamic, interactive maps for property locations with custom clustering." },
  { icon: ShieldCheck, title: "Secure Authentication", desc: "Implemented Passport.js for robust local and OAuth authentication strategies." },
  { icon: Search, title: "Advanced Search", desc: "Complex filtering algorithms allowing users to query properties by location, price, and amenities instantly." },
  { icon: Database, title: "Robust Data Layer", desc: "Complex MongoDB schemas handling user profiles, property listings, reviews, and booking transactions." },
];

const SCREENSHOTS = [
  { src: "/projects/wanderlust/hero.jpg", alt: "Wanderlust Home Page", title: "Landing Experience", category: "UI/UX", caption: "Dynamic property listings with advanced search capabilities." },
  { src: "/projects/wanderlust/property-details.jpg", alt: "Property Details View", title: "Property Details", category: "Feature", caption: "Detailed view with interactive Mapbox integration." },
  { src: "/projects/wanderlust/reviews.jpg", alt: "Review System", title: "User Reviews", category: "Interaction", caption: "Authenticated users can leave and manage property reviews." },
];

export const metadata = {
  title: "Wanderlust | Mirza Altamash Baig",
  description: "Full Stack booking platform architecture featuring interactive maps and secure authentication.",
};

export default function WanderlustProject() {
  return (
    <div className="pt-24 pb-16 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-background to-background pointer-events-none" />

      <SectionWrapper id="wanderlust-header" className="relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
        
        <div className="mb-24">
          <Badge variant="outline" className="mb-6 glass px-4 py-1.5 text-accent border-accent/20 uppercase tracking-widest text-xs font-black">Full Stack Platform</Badge>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] uppercase">
            Wanderlust <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary italic">Booking.</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive property listing and reservation platform, featuring robust backend architecture, interactive mapping, and a seamless user experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {["Node.js", "Express", "MongoDB", "EJS", "Passport.js", "Mapbox", "Cloudinary", "Bootstrap"].map((t) => (
            <Badge key={t} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 border border-border/50">
              {t}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] glass-card border border-border/50 hover:border-accent/50 transition-colors group bg-background/50 backdrop-blur-xl">
                <feature.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
        </div>

        {/* Project Gallery */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tighter">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary italic">Screenshots.</span>
          </h2>
          <ProjectGallery images={SCREENSHOTS} />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-accent" /> Authentication & Safety
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                <p>
                  Security is paramount in booking systems. Wanderlust implements <strong>Passport.js</strong> for robust local authentication, ensuring secure user sessions and password hashing. 
                </p>
                <p>
                  The platform utilizes <strong>Joi validation schemas</strong> at the middleware level to sanitize all incoming data before it reaches the MongoDB database, preventing injection attacks and ensuring data integrity for property listings and reviews.
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
                  <dd className="font-medium text-foreground">Independent Project</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Focus</dt>
                  <dd className="font-medium text-foreground">Backend Architecture</dd>
                </div>
              </dl>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="https://github.com/Mirza-Altamash/majorproject" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", className: "w-full rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all h-12 text-base" })}
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

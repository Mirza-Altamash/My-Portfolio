import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Workflow, ShieldCheck, Database, LayoutDashboard } from "lucide-react";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const FEATURES = [
  { icon: ShieldCheck, title: "Role-Based Access", desc: "Multi-tier JWT authentication ensuring strictly isolated data access between administrators, department heads, and standard users." },
  { icon: Workflow, title: "Automated Workflows", desc: "State machine logic for complaint lifecycle management, automating email notifications and status escalations." },
  { icon: LayoutDashboard, title: "Real-time Analytics", desc: "Interactive Chart.js dashboards providing macro-level insights into resolution times and departmental bottlenecks." },
  { icon: Database, title: "Scalable Data Model", desc: "MongoDB aggregation pipelines designed to handle hundreds of thousands of concurrent ticket reads with sub-second latency." },
];

const SCREENSHOTS = [
  { src: "/projects/trai/hero.jpg", alt: "TRAI Portal Dashboard", title: "Main Dashboard", category: "Analytics", caption: "Overview of complaint statistics and recent activity." },
  { src: "/projects/trai/dashboard.jpg", alt: "Analytics Dashboard", title: "Data Visualization", category: "Analytics", caption: "Deep dive into regional performance and resolution metrics." },
  { src: "/projects/trai/tickets.jpg", alt: "Ticket Management View", title: "Ticket Workflow", category: "Interface", caption: "Role-based interface for assigning and resolving user complaints." },
  { src: "/projects/trai/reports.jpg", alt: "Reporting Module", title: "Automated Reports", category: "Feature", caption: "Generate and export PDF reports based on custom date ranges." },
];

export const metadata = {
  title: "TRAI Complaint Portal | Mirza Altamash Baig",
  description: "Enterprise workflow application built for the Telecom Regulatory Authority of India (TRAI).",
};

export default function TraiProject() {
  return (
    <div className="pt-24 pb-16 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />

      <SectionWrapper id="trai-header" className="relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
        
        <div className="mb-24">
          <Badge variant="outline" className="mb-6 glass px-4 py-1.5 text-primary border-primary/20 uppercase tracking-widest text-xs font-black">Enterprise Web Application</Badge>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] uppercase">
            TRAI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Workflow.</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive role-based internal system for managing complaints, automating approvals, and generating actionable data insights.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Chart.js"].map((t) => (
            <Badge key={t} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 border border-border/50">
              {t}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10 mb-20">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] glass-card border border-border/50 hover:border-primary/50 transition-colors group bg-background/50 backdrop-blur-xl">
              <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-12 uppercase tracking-tighter">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Screenshots.</span>
          </h2>
          <ProjectGallery images={SCREENSHOTS} />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" /> Architecture & Security
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                <p>
                  Built with strict enterprise constraints in mind. The portal utilizes a custom <strong>Role-Based Access Control (RBAC)</strong> layer over JWT authentication, ensuring that only authorized regional managers can approve or escalate specific complaint types.
                </p>
                <p>
                  The backend relies on <strong>Express.js</strong> with robust middleware for input validation and sanitization, communicating with a <strong>MongoDB</strong> database structured to handle complex query aggregations for the frontend dashboard charts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-accent" /> Key Features
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span><strong>Multi-Tier Dashboards:</strong> Customized views for different clearance levels, visualizing real-time complaint data via Chart.js.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span><strong>Automated Workflows:</strong> Logic-driven state machine for tracking complaint resolution status and SLA breaches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span><strong>Secure File Uploads:</strong> End-to-end handling of evidentiary documents with strict MIME-type validation.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-border/50 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1">Organization</dt>
                  <dd className="font-medium text-foreground">Telecom Regulatory Authority of India</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Role</dt>
                  <dd className="font-medium text-foreground">Lead Developer (IT Intern)</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Timeline</dt>
                  <dd className="font-medium text-foreground">2026 - Present</dd>
                </div>
              </dl>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="https://github.com/Mirza-Altamash/TRAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", className: "w-full rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all h-12 text-base" })}
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

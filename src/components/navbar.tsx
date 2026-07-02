"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Architecture", href: "/#architecture" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Achievements", href: "/#achievements" },
  { name: "GitHub", href: "/#github" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-2xl border-border/50 shadow-sm" 
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter text-primary">
          MAB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <a href="/resume/mirza-altamash-baig-resume.pdf" download className={buttonVariants({ variant: "default", className: "hidden md:inline-flex rounded-full px-6" })}>
            Download Resume
          </a>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "lg:hidden" })} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Links to navigate the portfolio
              </SheetDescription>
              <Link href="/" className="font-bold text-2xl tracking-tighter text-primary mb-8 mt-4">
                MAB
              </Link>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="/resume/mirza-altamash-baig-resume.pdf" download className={buttonVariants({ variant: "default", className: "mt-4 rounded-full w-full" })}>
                  Download Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

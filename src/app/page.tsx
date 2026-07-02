import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Architecture } from "@/components/sections/architecture";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Leadership } from "@/components/sections/leadership";
import { Achievements } from "@/components/sections/achievements";
import { GithubSection } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Architecture />
      <Projects />
      <Experience />
      <Leadership />
      <Achievements />
      <GithubSection />
      <Contact />
    </div>
  );
}

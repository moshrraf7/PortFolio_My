
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 text-white dark:text-white overflow-x-hidden transition-all duration-500">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import resumePdf from "@/assets/SHREYASINGH.pdf";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 flex items-center justify-center min-h-[80vh] bg-black">
      {/* Dark Unsplash background image */}
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="dark background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-3xl mx-auto rounded-xl backdrop-blur-lg bg-black/60 shadow-xl border border-white/10 glassmorphism">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
          alt="Shreya Singh profile"
          className="w-32 h-32 rounded-full border-4 border-primary shadow-lg mb-6 object-cover animate-fade-in"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
          Hi, I'm <span className="text-primary">Shreya Singh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 animate-slide-up delay-200">Full Stack Developer </h2>
        <p className="text-lg text-white/80 mb-8 animate-fade-in delay-500">
          Building powerful web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
          <a href="#projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Projects
            </Button>
          </a>
          <a href="#contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              Contact Me
            </Button>
          </a>
          <a href={resumePdf} download="Shreya_Singh_Resume.pdf">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary/5 flex items-center"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <span className="animate-bounce text-primary text-3xl">↓</span>
          <span className="text-xs text-white/60 mt-1">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

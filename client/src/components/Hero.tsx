import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import resumePdf from "@/assets/SHREYASINGH.pdf";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Hi, I'm <span className="text-primary">Shreya Singh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6">Full Stack Developer</h2>
          <p className="text-lg text-dark/80 mb-8">
            Building powerful web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

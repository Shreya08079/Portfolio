import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-black">
      {/* Unsplash dark background */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="about background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-xl backdrop-blur-lg bg-black/60 shadow-xl border border-white/10 glassmorphism p-8 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">About Me</h2>
          <h3 className="text-xl font-heading font-semibold text-primary mb-4 text-center">Full Stack Developer</h3>
          <p className="text-lg text-white/80 mb-6">
            I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies. With a strong foundation in Computer Science and Engineering from Lovely Professional University, I specialize in creating responsive and intuitive web applications.
          </p>
          <p className="text-lg text-white/80 mb-6">
            My journey in programming began with C++ and Java, and I've since expanded my skills to include modern web technologies like React, Node.js, and MongoDB. I believe in writing clean, efficient code and constantly learning new tools and frameworks to stay at the forefront of web development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://linkedin.com/in/shreya-singh8/" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#0077B5]/90">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/shreya08079" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-[#333] hover:bg-[#333]/90">
                <Github size={18} />
                GitHub
              </Button>
            </a>
            <a href="mailto:shreya0578@gmail.com">
              <Button className="flex items-center gap-2 bg-[#EA4335] hover:bg-[#EA4335]/90">
                <Mail size={18} />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

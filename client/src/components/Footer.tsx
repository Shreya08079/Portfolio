import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/95 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold">Shreya Singh</h2>
            <p className="text-white/80">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/shreya-singh8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/shreya08079" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:shreya0578@gmail.com" 
              className="hover:text-white/80 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918292017170" 
              className="hover:text-white/80 transition"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/80">Thank you for visiting my portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

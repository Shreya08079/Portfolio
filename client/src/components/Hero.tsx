import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Hi, I'm <span className="text-primary">Shreya Singh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6">Full Stack Developer</h2>
          <p className="text-lg text-dark/80 mb-8">
            Building powerful web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend solutions.
          </p>
          <div className="flex space-x-4">
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
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Shreya Singh" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

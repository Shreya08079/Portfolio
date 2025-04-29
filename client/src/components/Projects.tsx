import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsList } from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: "primary" | "secondary" | "accent";
  onViewDetails: (id: string) => void;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  color,
  onViewDetails,
}: ProjectCardProps) => {
  let bgColorClass = "";
  let textColorClass = "";
  let buttonClass = "";
  
  switch (color) {
    case "secondary":
      bgColorClass = "bg-secondary/80";
      textColorClass = "text-secondary";
      buttonClass = "bg-secondary hover:bg-secondary/90";
      break;
    case "accent":
      bgColorClass = "bg-accent/80";
      textColorClass = "text-accent";
      buttonClass = "bg-accent hover:bg-accent/90";
      break;
    default:
      bgColorClass = "bg-primary/80";
      textColorClass = "text-primary";
      buttonClass = "bg-primary hover:bg-primary/90";
  }

  return (
    <div className="project-card bg-black/70 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition backdrop-blur-lg border border-white/10 glassmorphism animate-fade-in">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div 
          className={`absolute inset-0 bg-${color}/80 opacity-0 transition-opacity duration-300 flex items-center justify-center hover:opacity-100`}
        >
          <h3 className="text-2xl font-heading font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-heading font-semibold text-white mb-3`}>{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className={`text-white bg-white/20`}>
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-white border-2 border-primary"
          onClick={() => onViewDetails(id)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleViewDetails = (id: string) => {
    setActiveProject(id);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-black">
      {/* Dark Unsplash background */}
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="projects background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-6">My Projects</h2>
        <p className="text-lg text-white/90 text-center mb-12 max-w-3xl mx-auto">
          Showcasing my technical expertise through real-world applications and solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.summary}
              image={project.image}
              tags={project.technologies}
              color={project.color as "primary" | "secondary" | "accent"}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
      {activeProject && (
        <ProjectModal 
          projectId={activeProject} 
          isOpen={activeProject !== null} 
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;

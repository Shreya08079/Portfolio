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
    <div className="project-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div 
          className={`absolute inset-0 ${bgColorClass} opacity-0 transition-opacity duration-300 
                    flex items-center justify-center hover:opacity-100`}
        >
          <h3 className="text-2xl font-heading font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-heading font-semibold ${textColorClass} mb-3`}>{title}</h3>
        <p className="text-dark/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className={`${textColorClass} bg-${color}/20`}>
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          size="sm" 
          className={buttonClass}
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
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-dark text-center mb-6">My Projects</h2>
        <p className="text-lg text-dark/80 text-center mb-12 max-w-3xl mx-auto">
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

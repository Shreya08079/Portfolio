import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsList } from "@/data/projects";

interface ProjectModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ projectId, isOpen, onClose }: ProjectModalProps) => {
  const project = projectsList.find(p => p.id === projectId);
  
  if (!project) return null;
  
  let textColorClass = "";
  let badgeBgClass = "";
  
  switch (project.color) {
    case "secondary":
      textColorClass = "text-secondary";
      badgeBgClass = "bg-secondary/20 text-secondary";
      break;
    case "accent":
      textColorClass = "text-accent";
      badgeBgClass = "bg-accent/20 text-accent";
      break;
    default:
      textColorClass = "text-primary";
      badgeBgClass = "bg-primary/20 text-primary";
  }

  return (
    <div 
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className={`text-2xl font-heading font-bold ${textColorClass}`}>{project.title}</h3>
            <button 
              className="text-dark hover:text-primary"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          
          <div>
            <h4 className={`text-lg font-heading font-semibold ${textColorClass} mb-2`}>Project Overview</h4>
            <p className="text-dark/80 mb-4">{project.description}</p>
          </div>
          
          <div>
            <h4 className={`text-lg font-heading font-semibold ${textColorClass} mb-2`}>Key Features</h4>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`text-lg font-heading font-semibold ${textColorClass} mb-2`}>Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} className={badgeBgClass}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

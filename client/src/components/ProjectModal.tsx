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
  
  // White mode modal with improved readability
  const textColorClass = "text-primary";
  const badgeBgClass = "bg-primary/10 text-primary border border-primary/30";
  const modalBgClass = "bg-white";
  const modalTextClass = "text-gray-900";
  const sectionTitleClass = "text-xl font-heading font-semibold text-primary mb-2";

  return (
    <div 
      className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`w-full max-w-3xl mx-auto rounded-2xl shadow-2xl ${modalBgClass} ${modalTextClass} relative p-0 overflow-y-auto max-h-[90vh]`}>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={28} />
        </button>
        <div className="p-8 pb-0">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">{project.title}</h2>
          <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6 shadow max-h-64 object-cover bg-gray-100" />
        </div>
        <div className="p-8 pt-0 space-y-6">
          <div>
            <h3 className={sectionTitleClass}>Project Overview</h3>
            <p className="mb-4 text-gray-800 leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h3 className={sectionTitleClass}>Key Features</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={sectionTitleClass}>Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className={badgeBgClass + " inline-block px-3 py-1 rounded-full text-sm font-medium"}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

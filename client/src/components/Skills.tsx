import { 
  Code, 
  Laptop, 
  Server, 
  Drill, 
  Brain, 
  MessageSquare, 
  Users, 
  BookOpen, 
  CheckSquare 
} from "lucide-react";

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  children 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode 
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
    <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
      <Icon className="mr-3 text-2xl" />
      {title}
    </h3>
    {children}
  </div>
);

const SkillIcon = ({ src, alt, name }: { src: string; alt: string; name: string }) => (
  <div className="flex flex-col items-center">
    <img src={src} alt={alt} className="w-16 h-16 mb-2" />
    <span className="font-medium">{name}</span>
  </div>
);

const SoftSkill = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="bg-primary/10 rounded-lg p-4 flex items-center">
    <Icon className="text-2xl text-primary mr-3" />
    <span className="font-medium">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#f5f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-dark text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <SkillCategory title="Languages" icon={Code}>
            <div className="flex flex-wrap gap-4">
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                alt="C++" 
                name="C++" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                alt="Java" 
                name="Java" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                alt="JavaScript" 
                name="JavaScript" 
              />
            </div>
          </SkillCategory>
          
          {/* Frontend */}
          <SkillCategory title="Frontend" icon={Laptop}>
            <div className="flex flex-wrap gap-4">
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                alt="HTML" 
                name="HTML" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                alt="CSS" 
                name="CSS" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt="ReactJS" 
                name="ReactJS" 
              />
            </div>
          </SkillCategory>
          
          {/* Backend */}
          <SkillCategory title="Backend" icon={Server}>
            <div className="flex flex-wrap gap-4">
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                alt="NodeJS" 
                name="NodeJS" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                alt="MongoDB" 
                name="MongoDB" 
              />
            </div>
          </SkillCategory>
          
          {/* Tools & Platforms */}
          <SkillCategory title="Tools & Platforms" icon={Drill}>
            <div className="flex flex-wrap gap-4">
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                alt="Git" 
                name="Git" 
              />
              <SkillIcon 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub" 
                name="GitHub" 
              />
            </div>
          </SkillCategory>
        </div>
        
        {/* Soft Skills */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
            <Brain className="mr-3 text-2xl" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SoftSkill icon={MessageSquare} name="Communication" />
            <SoftSkill icon={Users} name="Teamwork" />
            <SoftSkill icon={BookOpen} name="Adaptive Learner" />
            <SoftSkill icon={CheckSquare} name="Problem Solving" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

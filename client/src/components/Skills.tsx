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
  <div className="bg-black/70 rounded-lg shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-lg border border-white/10 glassmorphism animate-fade-in">
    <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center">
      <Icon className="mr-3 text-2xl text-white" />
      {title}
    </h3>
    {children}
  </div>
);

const SkillIcon = ({ src, alt, name }: { src: string; alt: string; name: string }) => (
  <div className="flex flex-col items-center group">
    <img src={src} alt={alt} className="w-16 h-16 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
    <span className="font-medium text-white/90">{name}</span>
  </div>
);

const SoftSkill = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="bg-black/70 rounded-lg p-4 flex items-center backdrop-blur-lg border border-white/10 glassmorphism">
    <Icon className="text-2xl text-white mr-3" />
    <span className="font-medium text-white/90">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-black">
      {/* Dark Unsplash background */}
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="skills background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">My Skills</h2>
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
        <div className="mt-12 bg-black/70 rounded-lg shadow-lg p-6 backdrop-blur-lg border border-white/10 glassmorphism animate-fade-in">
          <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center">
            <Brain className="mr-3 text-2xl text-white" />
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

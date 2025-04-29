import { 
  Briefcase, 
  GraduationCap 
} from "lucide-react";

const TimelineItem = ({ 
  title, 
  period, 
  institution, 
  location, 
  details 
}: { 
  title: string;
  period: string;
  institution: string;
  location: string;
  details: string[];
}) => (
  <div className="relative mb-10">
    <div className="absolute w-4 h-4 bg-primary rounded-full left-2 top-6 transform -translate-x-1/2"></div>
    <div className="bg-black/70 rounded-lg shadow-md p-6 ml-8 hover:shadow-lg transition">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
        <h3 className="text-xl font-heading font-semibold text-white">{title}</h3>
        <span className="text-white/80">{period}</span>
      </div>
      <h4 className="text-lg font-medium text-white/80 mb-1">{institution}</h4>
      <p className="text-white/80 mb-3">{location}</p>
      {details.map((detail, index) => (
        <p key={index} className="text-white/80">{detail}</p>
      ))}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-16 relative overflow-hidden bg-black">
      {/* Dark background for education */}
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="education background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
          <GraduationCap className="text-primary" />
          Education & Training
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 pb-4">
            <div className="absolute left-4 top-0 w-0.5 h-full bg-primary"></div>
            
            {/* Training */}
            <TimelineItem
              title="Summer Training"
              period="May 2024-June 2024"
              institution="BoardInfinity"
              location=""
              details={[
                "• Completed Summer Training in Core and Advanced Java at BoardInfinity",
                "• Gained hands-on experience in Object-Oriented Programming (OOP), software design patterns, and best coding practices"
              ]}
            />
            
            {/* LPU */}
            <TimelineItem
              title="Bachelor of Technology"
              period="Since November 2022"
              institution="Lovely Professional University"
              location="Phagwara, Punjab"
              details={[
                "Computer Science and Engineering",
                "CGPA: 7.25"
              ]}
            />
            
            {/* Intermediate */}
            <TimelineItem
              title="Intermediate"
              period="April 2020 - May 2022"
              institution="Atomic Energy Central School, Jadugoda"
              location="Jamshedpur, Jharkhand"
              details={[
                "Percentage: 72.4%"
              ]}
            />
            
            {/* Matriculation */}
            <TimelineItem
              title="Matriculation"
              period="April 2019 - March 2020"
              institution="Atomic Energy Central School, Narwapahar"
              location="Jamshedpur, Jharkhand"
              details={[
                "Percentage: 84.6%"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

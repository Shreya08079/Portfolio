import { Trophy, HandHeart } from "lucide-react";

const AchievementItem = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="border-l-4 border-primary pl-4">
    <h4 className="text-lg font-medium text-dark mb-2">{title}</h4>
    <p className="text-dark/80 mb-1">{description}</p>
    <p className="text-dark/70 text-sm">{date}</p>
  </div>
);

const ExtracurricularItem = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="border-l-4 border-secondary pl-4">
    <h4 className="text-lg font-medium text-dark mb-2">{title}</h4>
    <p className="text-dark/80 mb-1">{description}</p>
    <p className="text-dark/70 text-sm">{date}</p>
  </div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-[#f5f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-dark text-center mb-12">Achievements & Extracurricular</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
              <Trophy className="mr-3 h-6 w-6" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              <AchievementItem 
                title="RIE Entrance Exam"
                description="Cracked the RIE Entrance Exam and received an admission offer to Government Colleges in Haryana (Central University of Haryana) and Odisha."
                date="July 2022"
              />
              
              <AchievementItem 
                title="Impressive Rank in RIE Entrance Exam"
                description="Secured an impressive Rank 526 out of over 30,000 applicants in the highly competitive RIE Entrance Exam."
                date="July 2022"
              />
            </div>
          </div>
          
          {/* Extracurricular */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
              <HandHeart className="mr-3 h-6 w-6" />
              Extracurricular
            </h3>
            
            <div className="space-y-6">
              <ExtracurricularItem 
                title="CDP (Helpage India)"
                description="Worked in NGO for one month and provided them their necessities."
                date="June 2023"
              />
              
              <div className="flex items-center justify-center h-40">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Volunteer work" 
                  className="max-h-full rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { Trophy, HandHeart } from "lucide-react";

const AchievementItem = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="bg-black/70 rounded-lg shadow-md p-6 flex items-center gap-6 border border-white/10 glassmorphism animate-fade-in">
    <Trophy className="text-primary text-4xl" />
    <div>
      <h3 className="text-lg font-semibold text-white/90 mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
      <p className="text-white/60 text-sm">{date}</p>
    </div>
  </div>
);

const ExtracurricularItem = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="bg-black/70 rounded-lg shadow-md p-6 flex items-center gap-6 border border-white/10 glassmorphism animate-fade-in">
    <HandHeart className="text-primary text-4xl" />
    <div>
      <h3 className="text-lg font-semibold text-white/90 mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
      <p className="text-white/60 text-sm">{date}</p>
    </div>
  </div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 relative overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="achievements background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Achievements & Extracurricular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition">
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
          <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
              <HandHeart className="mr-3 h-6 w-6" />
              Extracurricular
            </h3>
            <div className="space-y-6">
              <ExtracurricularItem 
                title="CDP (Helpage India)"
                description="Worked in NGO for one month and provided them their necessities."
                date="July 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

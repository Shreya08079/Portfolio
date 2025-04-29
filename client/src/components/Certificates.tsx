import { Award } from "lucide-react";
import { certificatesList } from "@/data/certificates";
import genAiCertificate from "@/assets/gen-ai-certificate.png";
import dynamicProgrammingCertificate from "@/assets/dynamic-programming-certificate.png";
import nptelCloudCertificate from "@/assets/nptel-cloud-certificate.png";

// Map certificate titles to their respective images
const certificateImages: Record<string, string> = {
  "Google Cloud-Certificate": genAiCertificate,
  "Coursera University of Colorado Boulder": dynamicProgrammingCertificate,
  "NPTEL Certified": nptelCloudCertificate
};

const CertificateCard = ({ 
  title, 
  issuer, 
  date 
}: { 
  title: string; 
  issuer: string; 
  date: string;
}) => (
  <div className="bg-black/70 rounded-lg shadow-md p-6 flex flex-col items-center border border-white/10 glassmorphism animate-fade-in">
    {certificateImages[title] ? (
      <img 
        src={certificateImages[title]} 
        alt={`${title} Certificate`} 
        className="w-32 h-32 object-contain mb-4" 
      />
    ) : (
      <div className="text-center px-4">
        <Award className="h-12 w-12 text-white/90 mb-4 mx-auto" />
        <p className="text-white/90 font-medium">{title}</p>
        <p className="text-white/90 text-sm">{issuer}</p>
      </div>
    )}
    <h3 className="text-lg font-semibold text-white/90 mb-2 text-center">{title}</h3>
    <p className="text-white/90 text-center mb-1">{issuer}</p>
    <p className="text-white/60 text-center">{date}</p>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 relative overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="certificates background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesList.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

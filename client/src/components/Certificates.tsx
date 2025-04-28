import { Award } from "lucide-react";
import { certificatesList } from "@/data/certificates";

const CertificateCard = ({ 
  title, 
  issuer, 
  date 
}: { 
  title: string; 
  issuer: string; 
  date: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <div className="h-48 bg-gray-200 flex items-center justify-center">
      <div className="text-center px-4">
        <Award className="h-12 w-12 text-primary mb-4 mx-auto" />
        <p className="text-dark font-medium">{title}</p>
        <p className="text-dark/70 text-sm">{issuer}</p>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-heading font-semibold text-primary">{title}</h3>
      <p className="text-dark/70 text-sm">{issuer}</p>
      <p className="text-dark/70 text-sm mt-1">{date}</p>
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 bg-[#f5f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-dark text-center mb-12">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-dark/70 italic">More certificates will be added soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

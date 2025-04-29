import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  value, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string; 
  href: string;
}) => (
  <div className="flex items-start bg-black/70 p-6 rounded-lg">
    <div className="bg-primary/10 p-3 rounded-full mr-4">
      <Icon className="text-primary h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-white/90">{title}</h4>
      <a href={href} className="text-white/90 hover:underline">{value}</a>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="contact background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            <ContactInfo 
              icon={Mail}
              title="Email"
              value="shreya0578@gmail.com"
              href="mailto:shreya0578@gmail.com"
            />
            
            <ContactInfo 
              icon={Phone}
              title="Phone"
              value="+91-8292017170"
              href="tel:+918292017170"
            />
            
            <ContactInfo 
              icon={Linkedin}
              title="LinkedIn"
              value="linkedin.com/in/shreya-singh8/"
              href="https://linkedin.com/in/shreya-singh8/"
            />
            
            <ContactInfo 
              icon={Github}
              title="GitHub"
              value="github.com/shreya08079"
              href="https://github.com/shreya08079"
            />
            
            <ContactInfo 
              icon={MapPin}
              title="Location"
              value="Punjab, India"
              href="#"
            />
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 bg-black/70 rounded-lg shadow-md p-8 flex flex-col gap-6 border border-white/10 glassmorphism animate-fade-in">
            <Input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your Name"
              className="border border-white/20 rounded-lg px-4 py-3 bg-black/80 text-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <Input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Your Email"
              className="border border-white/20 rounded-lg px-4 py-3 bg-black/80 text-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <Input 
              type="text" 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required 
              placeholder="Subject"
              className="border border-white/20 rounded-lg px-4 py-3 bg-black/80 text-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5} 
              required 
              placeholder="Your Message"
              className="border border-white/20 rounded-lg px-4 py-3 bg-black/80 text-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <Button 
              type="submit" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

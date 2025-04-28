import { useState } from "react";
import { 
  Mail, 
  Phone, 
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
  <div className="flex items-start">
    <div className="bg-primary/10 p-3 rounded-full mr-4">
      <Icon className="text-primary h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-dark">{title}</h4>
      <a href={href} className="text-primary hover:underline">{value}</a>
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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-dark text-center mb-12">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-heading font-semibold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
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
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-heading font-semibold text-primary mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark mb-2">Your Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-dark mb-2">Your Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark mb-2">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  required 
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

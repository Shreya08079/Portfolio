import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSection({
    sections: ["about", "skills", "projects", "education", "certificates", "achievements", "contact"],
    offset: 200
  });

  useEffect(() => {
    // Set page title
    document.title = "Shreya Singh - Full Stack Developer";
    
    // Set document font-family
    document.documentElement.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div ref={homeRef}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

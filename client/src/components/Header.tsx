import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "wouter";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className={`py-2 transition duration-300 ${
      isActive 
        ? "text-primary font-semibold border-b-2 border-primary" 
        : "text-dark hover:text-primary"
    }`}
    onClick={onClick}
  >
    {children}
  </a>
);

const Header = ({ activeSection }: { activeSection: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [sticky, setSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <header className={`bg-white ${sticky ? "shadow-md" : ""} sticky top-0 z-50 transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-heading font-bold text-primary">Shreya Singh</span>
        </a>
        
        {!isMobile && (
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                href={item.href} 
                isActive={activeSection === item.name.toLowerCase()}
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
            >
              Contact
            </a>
          </nav>
        )}
        
        {isMobile && (
          <button 
            className="text-dark" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && (
        <div className={`bg-white shadow-md ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`py-2 transition duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-primary font-semibold"
                    : "text-dark hover:text-primary"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white py-2 px-4 rounded-md text-center hover:bg-primary/90 transition"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

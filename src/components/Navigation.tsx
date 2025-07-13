import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "resume", label: "Resume", href: "#resume" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                const topElement = document.querySelector("#hero");
                if (topElement) {
                  topElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-2xl font-bold text-white focus:outline-none hover:text-blue-400 transition-colors duration-300"
            >
              Makani S
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-slate-700/50"
                      : "text-white hover:text-blue-400 hover:bg-slate-700/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 animate-slide-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`block px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? "text-blue-400 bg-slate-700/50"
                    : "text-white hover:text-blue-400 hover:bg-slate-700/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

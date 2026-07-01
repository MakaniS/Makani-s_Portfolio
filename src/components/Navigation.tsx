import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "certificates", label: "Certificates", href: "#certificates" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Makani S
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-400 bg-slate-700/50"
                    : "text-white hover:text-blue-400 hover:bg-slate-700/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
          <div className="flex flex-col p-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`text-left px-4 py-3 rounded-lg transition ${
                  activeSection === item.id
                    ? "bg-slate-700 text-blue-400"
                    : "text-white hover:bg-slate-800 hover:text-blue-400"
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
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatImDoing from "../components/WhatImDoing";
import Resume from "../components/Resume";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "resume",
        "certificates",
        "projects",
        "testimonials",
        "contact",
      ];

      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Smooth scroll observer animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    const sectionElements = document.querySelectorAll("section");

    sectionElements.forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700",
        "ease-out"
      );

      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      
      {/* ✅ FIX: Layout spacing for fixed navbar */}
      <Navigation activeSection={activeSection} />

      <main className="pt-16 scroll-smooth">
        <Hero />
        <About />
        <WhatImDoing />
        <Resume />
        <Certificates />
        <Projects />
        <Testimonials />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Index;
import React from "react";

const Resume = () => {
  const experiences = [
    {
      title: "Assistant Field Support Officer",
      company: "Technovera (Pty) Ltd",
      period: "Mar 2025 – Jul 2025",
      description:
        "Responsible for providing on-site and remote technical support for hardware and software systems across deployment sites. Tasks include installing and maintaining devices, troubleshooting field issues, assisting end-users, and documenting technical incidents. Actively support the rollout of smart locker solutions and contribute to ensuring service uptime, system reliability, and user satisfaction.",
    },
    {
      title: "4IR Machine Learning Intern",
      company: "Tshwane University of Technology",
      period: "June 2024 – Feb 2025",
      description:
        "Worked at the 4IR Lab, applying machine learning and AI to solve practical problems. Developed and trained models, managed datasets, and contributed to robotics projects. Notable work includes autonomous navigation with TurtleBot3 (Burger) and JetBot (Jetank), featuring line following, obstacle avoidance, color detection, and servo control using a gamepad. Gained hands-on experience in embedded systems and AI-driven robotics.",
    },
    {
      title: "Academic Tutor",
      company: "Tshwane University of Technology",
      period: "Jan 2024 – June 2024",
      description:
        "Provided academic support in Computer Systems Engineering, helping students understand complex concepts, complete assignments, and improve problem-solving skills. Encouraged collaborative learning and critical thinking to help students reach academic success.",
    },
    {
      title: "Residence Mentor",
      company: "Tshwane University of Technology",
      period: "Jan 2023 – Dec 2023",
      description:
        "Served as a Residence Mentor, fostering teamwork, leadership, and community engagement among students. Provided guidance and support to ensure a positive living and learning environment, while promoting collaboration, accountability, and effective communication within the residence team.",
    },
  ];

  const education = [
     {
      degree: " Advanced Diploma in Computer Systems Engineering",
      school: "Tshwane University of Technology",
      period: "2025 – present",
      description:
        "This Advanced Diploma deepens your expertise in cutting-edge areas like embedded systems, AI, and digital signal processing, building directly on your foundational diploma. It provides professional recognition through ECSA accreditation and develops advanced problem-solving skills via a significant engineering project.",
    },
    {
      degree: "Diploma in Computer Systems Engineering",
      school: "Tshwane University of Technology",
      period: "2021 – 2024",
      description:
        "Specialized in Software Engineering and Human-Computer Interaction. Developed strong technical foundations in programming, systems design, and user experience.",
    },
    {
      degree: "National Senior Certificate (NSC) – Bachelor Admission",
      school: "Funiwe Senior Secondary School",
      period: "2014 – 2020",
      description:
        "Obtained a National Senior Certificate from the Department of Basic Education with a Bachelor-level pass, qualifying for university entrance.",
    },
  ];

  // Droplet component to animate water droplets sliding down
  const Droplet = ({ style }: { style: React.CSSProperties }) => (
    <span
      className="absolute rounded-full bg-white/40 blur-sm opacity-80"
      style={{
        width: 6,
        height: 12,
        filter: "blur(1.5px)",
        ...style,
        animationFillMode: "forwards",
        animationTimingFunction: "ease-out",
      }}
    />
  );

  // Cards with droplet water slide effect on hover
  // We'll add multiple droplets positioned randomly

  const WaterEffectWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-700 ease-in-out hover:bg-white/30 hover:backdrop-blur-sm hover:backdrop-saturate-150 hover:shadow-lg hover:shadow-white/30">
        {/* Droplets container */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          {/* Multiple droplets with animation */}
          {[...Array(10)].map((_, i) => {
            const left = Math.random() * 100;
            const delay = i * 0.15;
            return (
              <Droplet
                key={i}
                style={{
                  left: `${left}%`,
                  top: "-15px",
                  animationName: "slideDownFade",
                  animationDuration: "1.2s",
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
        {children}
      </div>
    );
  };

  return (
    <section id="resume" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></span>
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -translate-x-1/2"></div>

                    <WaterEffectWrapper>
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">
                            {exp.title}
                          </h4>
                          <span className="text-purple-400 text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-purple-300 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </WaterEffectWrapper>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></span>
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full -translate-x-1/2"></div>

                    <WaterEffectWrapper>
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-green-400 text-sm font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-green-300 font-medium mb-3">
                          {edu.school}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </WaterEffectWrapper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/assets/Makani S-Resume.pdf"
            download
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Global styles for droplet animation */}
      <style>{`
        @keyframes slideDownFade {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0.8;
          }
          70% {
            transform: translateY(20px) scaleY(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translateY(40px) scaleY(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;

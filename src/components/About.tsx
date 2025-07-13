import { Wrench, MapPin, Laptop2, Smile } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  const skills = [
    { name: "Programming & Software Development", level: 80 },
    { name: "Python", level: 70 },
    { name: "ROS", level: 90 },
    { name: "IoT", level: 70 },
    { name: "C++/C/C#", level: 85 },
    { name: "Digital Electronics & Circuit Design:", level: 85 },
    { name: "Industrial Automation & Robotics", level: 70 },
    { name: "Embedded Systems Development", level: 70 },
    { name: "Engineering Project Execution", level: 80 },
    { name: "Systems Troubleshooting & Maintenance", level: 90 },
    { name: "AI/Robotics", level: 80 },
    { name: "Advanced Networking", level: 80 },




  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Card */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareColor="#93c5fd"
          >
            <motion.div
              className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:bg-slate-700/50 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hi there! 👋
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am Makani Siyamthanda, a passionate technology enthusiast and
                problem-solver from South Africa, specializing in web
                development, IT infrastructure, and software solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My work revolves around building intuitive systems and websites
                that are user-friendly and aesthetically appealing. I bring
                technical expertise and creativity to every project.
              </p>

              <div className="grid grid-cols-2 gap-4 text-blue-400">
                <div className="flex items-center space-x-2">
                  <Wrench size={20} />
                  <span>Tech Troubleshooter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={20} />
                  <span>Field Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Laptop2 size={20} />
                  <span>System Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smile size={20} />
                  <span>User-Focused</span>
                </div>
              </div>
            </motion.div>
          </Tilt>

          {/* Right Card */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareColor="#93c5fd"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:bg-slate-700/50 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { count: "5+", label: "Projects" },
                  { count: "1+", label: "Years Exp." },
                  { count: "2+", label: "Happy Clients" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600/30 hover:bg-slate-700/50 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {item.count}
                    </div>
                    <div className="text-gray-300 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

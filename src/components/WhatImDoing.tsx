import React from "react";
import { Wrench, Globe, Cpu, Plane } from "lucide-react";

const WhatImDoing = () => {
  const services = [
    {
      icon: Cpu,
      title: "Robotics",
      description:
        "Hands-on experience with building and programming robotic systems, integrating hardware with software for real-world tasks.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Developed responsive and secure web applications using modern frameworks to support operational and internal tools.",
      color: "from-slate-500 to-gray-500",
    },
    {
      icon: Wrench,
      title: "IoT Projects",
      description:
        "Passionate about solving real-world problems through connected devices—leveraging sensors, microcontrollers, and cloud platforms.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Plane,
      title: "Drone Programming",
      description:
        "Worked with ROS, ArduPilot, Gazebo simulations, and Linux environments to program and simulate autonomous drone systems.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Doing
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I offer a wide range of services to help bring your digital vision
            to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:bg-slate-700/50 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatImDoing;

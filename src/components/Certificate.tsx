import React from "react";

const certificates = [
  {
    title: "Residence Mentor Certificate",
    issuer: "Tshwane University of Technology",
    period: "Jan 2023 – Dec 2023",
    description:
      "Awarded for fostering teamwork, leadership, and community engagement among students as a Residence Mentor.",
    file: "/assets/Residence_Mentor_Certificate.pdf",
  },
  {
    title: "Diploma in Computer Systems Engineering",
    issuer: "Tshwane University of Technology",
    period: "2021 – 2024",
    description:
      "Specialized in Software Engineering and Human-Computer Interaction. Developed strong technical foundations in programming and systems design.",
    file: "/assets/Diploma Certificate- SM.pdf",
  },
  {
    title: "Introduction to Networks Basics",
    issuer: "Cisco",
    period: "2025",
    description:
      "Completed foundational networking course covering LAN/WAN, protocols, and network design concepts.",
    file: "/assets/NetworkingBasicsUpdate20250911-32-iafvwd.pdf",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    period: "2025",
    description:
      "Learned core data science concepts, data analysis, and visualization techniques.",
    file: "/assets/IntrotoDataScienceUpdate20250914-30-mqemrv.pdf",
  },
  {
    title: "Machine Learning Project: Heart Attack Prediction Analysis",
    issuer: "Udemy",
    period: "2025",
    description:
      "Built a heart attack prediction model using Python, NumPy, and machine learning techniques.",
    file: "/assets/UC-c8934959-ce35-4845-85b8-f27042bb2764.pdf",
  },
  {
    title: "Create a Web Application with Python + Flask + PostgreSQL",
    issuer: "Udemy",
    period: "2025",
    description:
      "Developed a full-stack web application using Flask and PostgreSQL for backend and Python programming.",
    file: "/assets/UC-65428798-10d5-45a0-81e4-77f055e5756e.pdf",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-4 bg-white/5 backdrop-blur-sm min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Courses and certifications I have completed
          </p>
        </div>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-white">
                  {cert.title}
                </h4>
                <span className="text-purple-400 text-sm font-medium">
                  {cert.period}
                </span>
              </div>
              <p className="text-purple-300 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-300 mb-4">{cert.description}</p>

              <a
                href={cert.file}
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Download Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React, { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  videoIds?: string[];
  liveUrl?: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "TurtleBot Project",
    description:
      "A robotics project using TurtleBot, built with Python, ROS2, and Linux. It includes autonomous navigation, sensor integration, and real-time control systems.",
    image: "/assets/turtle.JPG",
    technologies: ["Python", "ROS2", "Linux"],
    videoIds: ["1pXfpwL6Oy0_LTDgtdFYq0wqXmDzjjhQO"],
    githubUrl: "https://github.com/MakaniS?tab=repositories",
    category: "Robotics",
  },
  {
    title: "E-commerce Website",
    description:
      "A dynamic e-commerce platform featuring product listings, user authentication, shopping cart, and payment integration. Built with HTML, CSS, JavaScript, Python, and MySQL.",
    image: "/assets/ecommerce.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/MakaniS?tab=repositories",
    category: "Web Development",
  },
  {
    title: "Blog",
    description:
      "A full-stack blog platform featuring user authentication, post creation/editing, and comment functionality. Built with Python for the backend and a responsive frontend using HTML, CSS, and JavaScript. Data is stored and managed in a MySQL database.",
    image: "/assets/blog.jpg",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/MakaniS?tab=repositories",
    category: "Web Development",
  },
  {
    title: "Jetank Project",
    description:
      "A robotics system developed using Python, ROS2, and Linux. Features include autonomous movement, obstacle avoidance, and sensor-driven control for real-time decision-making.",
    image: "/assets/jetank1.png",
    technologies: ["Python", "ROS2", "Linux"],
    videoIds: [
      "1zDvXRtd4JfFkNIMBEpLUo1VKcaWwA1Ie",
      "1yAeo5uLMHZm8k3pv_MJQmgYiqpCvNviD",
      "1SamTfHUnTcjUAiLyfqIu3rSvV8_Al__c",
      "1pXfpwL6Oy0_LTDgtdFYq0wqXmDzjjhQO",
      "1ltGrG4eDEBBYwgzPDfZGYHhcr83eFLiN",
      "1TOn56YPoSH3LxwJnwykZYUqsjCYkFE3M",
      "1QbJIAv0ibFhAQZn5fUvEyU-4pi4XzlHP",
    ],
    githubUrl: "https://github.com/MakaniS?tab=repositories",
    category: "Robotics",
  },
  {
    title: "Heart Attack Detection Project",
    description:
      "An IoT-based health monitoring system that detects irregular heart activity using a heartbeat/pulse sensor. Built with Python for data processing, Arduino Uno for sensor interfacing, and MySQL for data storage. Useful for early detection and alerting in critical situations.",
    image: "/assets/heart.png",
    technologies: ["Python", "MySQL", "Arduino Uno", "Heartbeat/Pulse Sensor"],
    githubUrl: "https://github.com/MakaniS?tab=repositories",
    category: "IoT",
    videoIds: [""],
  },
];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const openModal = (project: Project) => {
    if (
      !project.videoIds ||
      project.videoIds.length === 0 ||
      project.videoIds.every((id) => id.trim() === "")
    ) {
      showSnackbar("Video Not Found");
      return;
    }
    setActiveProject(project);
    setActiveVideoIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveVideoIndex(0);
  };

  const handleLiveUrlClick = (liveUrl?: string) => {
    if (!liveUrl || liveUrl.trim() === "") {
      showSnackbar("Live URL Not Found");
      return;
    }
    window.open(liveUrl, "_blank");
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const hasValidVideos =
              project.videoIds &&
              project.videoIds.length > 0 &&
              !project.videoIds.every((id) => id.trim() === "");
            const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== "";

            return (
              <div
                key={project.title}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {hasValidVideos ? (
                        <button
                          onClick={() => openModal(project)}
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          aria-label={`Watch video(s) for ${project.title}`}
                        >
                          <ExternalLink size={16} className="text-white" />
                        </button>
                      ) : hasLiveUrl ? (
                        <button
                          onClick={() => handleLiveUrlClick(project.liveUrl)}
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          aria-label={`Visit live site for ${project.title}`}
                        >
                          <ExternalLink size={16} className="text-white" />
                        </button>
                      ) : (
                        <button
                          onClick={() => showSnackbar("Resource Not Found")}
                          className="p-2 bg-white/10 rounded-full cursor-not-allowed opacity-50"
                          aria-label="No live URL or videos available"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </button>
                      )}

                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repo for ${project.title}`}
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {activeProject && activeProject.videoIds && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          aria-modal="true"
          role="dialog"
          aria-label="Project video"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden bg-black"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
              aria-label="Close video"
            >
              <X size={24} className="text-white" />
            </button>

            <iframe
              title={`Project video ${activeVideoIndex + 1}`}
              src={`https://drive.google.com/file/d/${activeProject.videoIds[activeVideoIndex]}/preview`}
              allow="autoplay"
              allowFullScreen
              className="w-full h-full"
            />

            {/* Video selector buttons */}
            {activeProject.videoIds.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/70 rounded p-1">
                {activeProject.videoIds.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`px-3 py-1 rounded ${
                      idx === activeVideoIndex
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
                    }`}
                    aria-label={`Watch video ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Projects;

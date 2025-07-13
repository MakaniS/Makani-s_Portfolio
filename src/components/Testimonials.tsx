import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const testimonials = [
    {
      name: "Kulani Baloyi",
      position:
        "4IR Machine Learning Intern, Tshwane University of Technology.",
      content:
        "Siya is a great hard worker. We were very pleased with the work done.from when we started, He has a lot of experience now..",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Banele Qwatekana",
      position: "4IR Machine Learning Intern, Tshwane University of Technology",
      content:
        "Siya was hired to create a corporate identity. We were very pleased with the work done.he has a lot of experience",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Henry William",
      position: "4IR Machine Learning Intern, Tshwane University of Technology",
      content:
        "Alex transformed our digital presence completely. The UI/UX design was intuitive and the development was flawless. Highly recommend his services!",
      rating: 5,
      avatar: "👨‍🚀",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection("left");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextTestimonial();
      else if (e.key === "ArrowLeft") prevTestimonial();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextTestimonial, prevTestimonial]);

  return (
    <div className="animate-slideInRight">
      <section
        id="testimonials"
        className="py-20 px-4 bg-white/5 backdrop-blur-sm"
        aria-label="Testimonials"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What People{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Say
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my colleagues have to
              say about working with me
            </p>
          </div>

          <div className="relative">
            <div
              key={currentIndex}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden
              transform transition-all duration-700 ease-in-out
              ${
                direction === "right"
                  ? "animate-slideInRight"
                  : "animate-slideInLeft"
              }
              hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-600/40 cursor-pointer
            `}
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20 select-none pointer-events-none">
                <Quote size={48} className="text-purple-400" />
              </div>

              <div className="relative z-10">
                {/* Stars with pulse animation */}
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDuration: `${1 + i * 0.2}s` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <blockquote className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-lg shadow-purple-600/40">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl select-none">
                      {testimonials[currentIndex].avatar}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-300">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-transform duration-500 ease-in-out
                ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-400 to-blue-400 scale-125 animate-bounce"
                    : "bg-white/30 hover:bg-white/50"
                }
              `}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

import {
  motion,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState, useLayoutEffect } from "react";
import MinimizableNav from "./MinimizableNav";

interface Project {
  id: number;
  label: string;
  color: string;
  image: string;
  explanation: string;
  link: string;
  tech: string;
  isOtherProjects?: boolean;
}

interface Props {
  scrollProgress: MotionValue<number>;
}

const Projects: React.FC<Props> = ({ scrollProgress }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const [taglinePos, setTaglinePos] = useState({ x: 0, y: 0 });

  const font = { fontFamily: "'Changa One', cursive" };
  const slate = "#64748b";

  const projects: Project[] = [
    {
      id: 1,
      label: "I.N.S.P.I.R.E.",
      color: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800",
      explanation:
        "An AI-driven platform for businesses in Rwanda focusing on NLP for partner identification.",
      link: "#",
      tech: "Python / Django / NLP",
    },
    {
      id: 2,
      label: "Kiota Poultry",
      color: "#000000",
      image:
        "https://images.unsplash.com/photo-1516383740770-fbcc5c24770d?q=80&w=800",
      explanation:
        "A management software project dedicated to poultry farming data and tracking.",
      link: "#",
      tech: "React / Vite / Tailwind",
    },
    {
      id: 3,
      label: "OpenClaw AI",
      color: "#38bdf8", // New Sky Blue card
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      explanation:
        "Configuring autonomous AI agents and local LLMs using terminal-based automation and Ollama.",
      link: "#",
      tech: "Ollama / Qwen2.5 / Automation",
    },
    {
      id: 4,
      label: "AI Backend",
      color: "#64748b",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800",
      explanation:
        "Developing RESTful APIs with JWT/OAuth and optimizing databases for high-performance applications.",
      link: "#",
      tech: "Node.js / Azure / AWS",
    },
    {
      id: 5,
      label: "Other Projects",
      color: "#5a2a4a",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
      explanation:
        "Explore more projects in our portfolio including web applications, mobile apps, and custom solutions.",
      link: "#",
      tech: "Various Technologies",
      isOtherProjects: true,
    },
  ];

  const otherProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with payment integration",
      tech: "Next.js / Stripe / PostgreSQL",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: "React / Node.js / Socket.io",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with predictive analytics",
      tech: "Vue.js / Python / TensorFlow",
      link: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Data visualization tool for social media metrics",
      tech: "React / D3.js / MongoDB",
      link: "#"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with video streaming and assessments",
      tech: "Angular / Django / AWS",
      link: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile app for workout planning and progress tracking",
      tech: "React Native / Firebase / Redux",
      link: "#"
    }
  ];

  useLayoutEffect(() => {
    const measure = () => {
      if (!taglineRef.current) return;
      const rect = taglineRef.current.getBoundingClientRect();
      setTaglinePos({ x: rect.left, y: rect.top });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ==============================================================
     FAN EXPANSION LOGIC (5-Card Horizontal Spread)
     ============================================================== */
  const contentOpacity = useTransform(scrollProgress, [0.3, 0.4], [0, 1]);
  const contentY = useTransform(scrollProgress, [0.4, 0.6], ["0%", "-120%"]);

  // Card 1: Far Left
  const fanX1 = useTransform(scrollProgress, [0.5, 0.85], [0, -600]);
  const fanR1 = useTransform(scrollProgress, [0.5, 0.85], [0, -355]);

  // Card 2: Mid Left
  const fanX2 = useTransform(scrollProgress, [0.5, 0.85], [0, -300]);
  const fanR2 = useTransform(scrollProgress, [0.5, 0.85], [0, -8]);

  // Card 3: Center
  const fanX3 = useTransform(scrollProgress, [0.5, 0.85], [0, 0]);
  const fanY3 = useTransform(scrollProgress, [0.5, 0.85], [0, -40]);

  // Card 4: Mid Right
  const fanX4 = useTransform(scrollProgress, [0.5, 0.85], [0, 300]);
  const fanR4 = useTransform(scrollProgress, [0.5, 0.85], [0, 8]);

  // Card 5: Far Right
  const fanX5 = useTransform(scrollProgress, [0.5, 0.85], [0, 600]);
  const fanR5 = useTransform(scrollProgress, [0.5, 0.85], [0, 15]);

  const cardTransforms = [
    {
      x: fanX1,
      rotate: fanR1,
      y: useTransform(scrollProgress, [0.5, 0.85], [0, 20]),
    },
    { x: fanX2, rotate: fanR2, y: 0 },
    { x: fanX3, rotate: 0, y: fanY3 },
    { x: fanX4, rotate: fanR4, y: 0 },
    {
      x: fanX5,
      rotate: fanR5,
      y: useTransform(scrollProgress, [0.5, 0.85], [0, 20]),
    },
  ];

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      <MinimizableNav />
      <AnimatePresence>
        {!selectedId ? (
          <motion.div
            key="grid"
            exit={{ opacity: 0 }}
            className="relative h-full w-full flex flex-col items-center justify-center"
          >
            <motion.div
              style={{ y: contentY, opacity: contentOpacity, x: -350 }}
              className="flex flex-col items-start z-10 mb-72"
            >
              <div className="flex items-center space-x-6">
                <div
                  style={{ backgroundColor: slate }}
                  className="w-12 h-12 rounded-full"
                />
                <h2
                  style={{ ...font, color: slate }}
                  className="text-8xl font-black uppercase"
                >
                  Projects
                </h2>
              </div>
              <p
                ref={taglineRef}
                style={{ ...font, color: slate }}
                className="text-3xl ml-20"
              >
                Scroll to fan out / Click to explore
              </p>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-[400px] h-[300px] flex items-center justify-center">
                {projects.map((proj, i) => (
                  <motion.div
                    key={proj.id}
                    layoutId={`card-${proj.id}`}
                    onClick={() => setSelectedId(proj.id)}
                    className="absolute w-full h-full rounded-[40px] shadow-2xl cursor-pointer overflow-hidden pointer-events-auto border-4 border-white"
                    style={{
                      backgroundColor: proj.color,
                      zIndex: 10 + i,
                      ...cardTransforms[i],
                    }}
                    whileHover={{
                      scale: 1.1,
                      zIndex: 100,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.img
                      layoutId={`image-${proj.id}`}
                      src={proj.image}
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <motion.h3
                        layoutId={`title-${proj.id}`}
                        style={font}
                        className={`text-4xl uppercase text-center ${proj.color === "#FFFFFF" || proj.color === "#38bdf8" ? "text-slate-900" : "text-white"}`}
                      >
                        {proj.label}
                      </motion.h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white z-[150] flex p-16 gap-16 items-center"
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-10 right-16 text-slate-600 font-black text-2xl z-[200]"
              style={font}
            >
              CLOSE [X]
            </button>

            {projects.find((p) => p.id === selectedId)?.isOtherProjects ? (
              // Other Projects List View
              <div className="w-full max-w-4xl mx-auto">
                <motion.h2
                  layoutId={`title-${selectedId}`}
                  style={{ ...font, color: slate }}
                  className="text-8xl font-black uppercase leading-none mb-12 text-center"
                >
                  Other Projects
                </motion.h2>
                
                <div className="space-y-6">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          className="bg-slate-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-700 transition-all"
                        >
                          View Project
                        </a>
                      </div>
                      <p className="text-slate-600 mb-3 text-lg">
                        {project.description}
                      </p>
                      <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                        {project.tech}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              // Regular Project Detail View
              <>
                <motion.div
                  layoutId={`card-${selectedId}`}
                  className="w-1/2 h-[75vh] rounded-[60px] overflow-hidden shadow-2xl"
                >
                  <motion.img
                    layoutId={`image-${selectedId}`}
                    src={projects.find((p) => p.id === selectedId)?.image}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="w-1/2 flex flex-col justify-center space-y-8">
                  <motion.h2
                    layoutId={`title-${selectedId}`}
                    style={{ ...font, color: slate }}
                    className="text-9xl font-black uppercase leading-none"
                  >
                    {projects.find((p) => p.id === selectedId)?.label}
                  </motion.h2>

                  <div className="space-y-4">
                    <p className="text-3xl text-slate-800 leading-tight">
                      {projects.find((p) => p.id === selectedId)?.explanation}
                    </p>
                    <p className="text-slate-600 font-mono font-bold text-xl uppercase tracking-widest">
                      {projects.find((p) => p.id === selectedId)?.tech}
                    </p>
                  </div>

                  <a
                    href={projects.find((p) => p.id === selectedId)?.link}
                    className="bg-slate-600 text-white px-12 py-5 rounded-full text-2xl font-bold w-fit shadow-xl hover:bg-slate-700 transition-all"
                    style={font}
                  >
                    VIEW LIVE PROJECT
                  </a>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

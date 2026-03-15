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

/* ================================================================
   SKILLS DATA
   ================================================================ */
const skillCategories = [
  {
    id: 1,
    category: "Backend Development",
    icon: "",
    color: "#FFFFFF",
    accent: "#64748b",
    skills: ["Python (Django, FastAPI)", "Node.js", "Express.js", ".Net", "RESTful APIs"],
  },
  {
    id: 2,
    category: "Frontend Development",
    icon: "",
    color: "#0f172a",
    accent: "#38bdf8",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    id: 3,
    category: "Machine Learning",
    icon: "",
    color: "#38bdf8",
    accent: "#0f172a",
    skills: ["TensorFlow", "Keras", "PyTorch", "NLP", "CNNs", "RNNs", "Reinforcement Learning", "AI Agents", "Automation"],
  },
  {
    id: 4,
    category: "Databases",
    icon: "",
    color: "#5a2a4a",
    accent: "#f8fafc",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
  },
  {
    id: 5,
    category: "Cloud & DevOps",
    icon: "",
    color: "#FFFFFF",
    accent: "#64748b",
    skills: ["Docker", "AWS", "Azure", "Kubernetes", "Hetzner", "Digital Ocean", "Railway", "Git"],
  },
  {
    id: 6,
    category: "Mobile & Others",
    icon: "",
    color: "#0f172a",
    accent: "#38bdf8",
    skills: ["Flutter", "Typebot", "WhatsApp Business API", "Postman", "Linux", "Locust"],
  },
];

/* ================================================================
   SKILL CARD
   ================================================================ */
const SkillCard: React.FC<{
  cat: (typeof skillCategories)[0];
  index: number;
  scrollProgress: MotionValue<number>;
}> = ({ cat, index, scrollProgress }) => {
  const font = { fontFamily: "'Changa One', cursive" };

  const startIn = 0.92 + index * 0.02;
  const endIn = Math.min(startIn + 0.05, 1.0);

  const cardY = useTransform(scrollProgress, [startIn, endIn], ["80px", "0px"]);
  const cardOpacity = useTransform(scrollProgress, [startIn, endIn], [0, 1]);

  const isLight = cat.color === "#FFFFFF" || cat.color === "#38bdf8";
  const textColor = isLight ? "#0f172a" : cat.accent;
  const mutedColor = isLight ? "#475569" : "rgba(255,255,255,0.55)";
  const borderColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  const tagBg = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.12)";

  return (
    <motion.div
      style={{
        y: cardY,
        opacity: cardOpacity,
        backgroundColor: cat.color,
        borderColor,
      }}
      className="rounded-[28px] p-7 flex flex-col gap-5 border"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span style={{ ...font, color: cat.accent, fontSize: "2rem", lineHeight: 1 }}>
          {cat.icon}
        </span>
        <h3
          style={{ ...font, color: textColor }}
          className="text-2xl uppercase tracking-wide"
        >
          {cat.category}
        </h3>
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ backgroundColor: borderColor }} />

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm font-mono tracking-wide"
            style={{
              backgroundColor: tagBg,
              color: mutedColor,
              border: `1px solid ${borderColor}`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ================================================================
   SKILLS SECTION
   ================================================================ */
const Skills: React.FC<{ scrollProgress: MotionValue<number> }> = ({
  scrollProgress,
}) => {
  const font = { fontFamily: "'Changa One', cursive" };
  const slate = "#64748b";

  const panelY = useTransform(scrollProgress, [0.88, 1.0], ["100vh", "0vh"]);
  const panelOpacity = useTransform(scrollProgress, [0.88, 0.98], [0, 1]);

  // FIX: disable pointer events when panel is off-screen so it doesn't block project clicks
  const panelPointerEvents = useTransform(
    scrollProgress,
    (v) => (v < 0.87 ? "none" : "auto") as "none" | "auto"
  );

  const headingY = useTransform(scrollProgress, [0.9, 1.0], [40, 0]);
  const headingOpacity = useTransform(scrollProgress, [0.9, 1.0], [0, 1]);

  return (
    <motion.div
      style={{
        y: panelY,
        opacity: panelOpacity,
        pointerEvents: panelPointerEvents,
        position: "fixed",
        inset: 0,
        backgroundColor: "#f8fafc",
        zIndex: 120,
        overflowY: "auto",
      }}
    >
      {/* Top accent stripe */}
      <div
        className="w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, #64748b 0%, #38bdf8 40%, #5a2a4a 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-10 py-16">
        {/* Section header */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="flex items-center gap-6 mb-14"
        >
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: slate }} />
          <div>
            <h2
              style={{ ...font, color: slate }}
              className="text-8xl font-black uppercase leading-none"
            >
              Skills
            </h2>
            <p
              style={{ ...font, color: slate }}
              className="text-2xl ml-1 opacity-60"
            >
              Technologies &amp; Expertise
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.id}
              cat={cat}
              index={i}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ================================================================
   PROJECTS COMPONENT
   ================================================================ */
const Projects: React.FC<Props> = ({ scrollProgress }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

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
      color: "#38bdf8",
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
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: "React / Node.js / Socket.io",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with predictive analytics",
      tech: "Vue.js / Python / TensorFlow",
      link: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Data visualization tool for social media metrics",
      tech: "React / D3.js / MongoDB",
      link: "#",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with video streaming and assessments",
      tech: "Angular / Django / AWS",
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile app for workout planning and progress tracking",
      tech: "React Native / Firebase / Redux",
      link: "#",
    },
  ];

  useLayoutEffect(() => {
    const measure = () => {
      if (!taglineRef.current) return;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const contentOpacity = useTransform(scrollProgress, [0.1, 0.2], [0, 1]);
  const contentY = useTransform(scrollProgress, [0.2, 0.4], ["0%", "-120%"]);

  const fanX1 = useTransform(scrollProgress, [0.3, 0.5], [0, -600]);
  const fanR1 = useTransform(scrollProgress, [0.3, 0.5], [0, -15]);
  const fanX2 = useTransform(scrollProgress, [0.3, 0.5], [0, -300]);
  const fanR2 = useTransform(scrollProgress, [0.3, 0.5], [0, -8]);
  const fanX3 = useTransform(scrollProgress, [0.3, 0.5], [0, 0]);
  const fanY3 = useTransform(scrollProgress, [0.3, 0.5], [0, -40]);
  const fanX4 = useTransform(scrollProgress, [0.3, 0.5], [0, 300]);
  const fanR4 = useTransform(scrollProgress, [0.3, 0.5], [0, 8]);
  const fanX5 = useTransform(scrollProgress, [0.3, 0.5], [0, 600]);
  const fanR5 = useTransform(scrollProgress, [0.3, 0.5], [0, 15]);

  const cardTransforms = [
    {
      x: fanX1,
      rotate: fanR1,
      y: useTransform(scrollProgress, [0.3, 0.5], [0, 20]),
    },
    { x: fanX2, rotate: fanR2, y: 0 },
    { x: fanX3, rotate: 0, y: fanY3 },
    { x: fanX4, rotate: fanR4, y: 0 },
    {
      x: fanX5,
      rotate: fanR5,
      y: useTransform(scrollProgress, [0.3, 0.5], [0, 20]),
    },
  ];

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <>
      {/* ── Projects layer ── */}
      <div className="fixed inset-0 bg-white overflow-hidden">
        <MinimizableNav />

        <AnimatePresence mode="wait">
          {selectedId === null ? (
            /* ── Fan / Grid view ── */
            <motion.div
              key="grid"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-full w-full flex flex-col items-center justify-center"
            >
              {/* Heading */}
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

              {/* Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[400px] h-[300px] flex items-center justify-center">
                  {projects.map((proj, i) => (
                    <motion.div
                      key={proj.id}
                      layoutId={`card-${proj.id}`}
                      onClick={() => setSelectedId(proj.id)}
                      className="absolute w-full h-full rounded-[40px] shadow-2xl cursor-pointer overflow-hidden border-4 border-white"
                      style={{
                        backgroundColor: proj.color,
                        zIndex: 10 + i,
                        pointerEvents: "auto", // FIX: re-enable per card
                        ...cardTransforms[i],
                      }}
                      whileHover={{
                        scale: 1.08,
                        zIndex: 100,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.img
                        layoutId={`image-${proj.id}`}
                        src={proj.image}
                        alt={proj.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <motion.h3
                          layoutId={`title-${proj.id}`}
                          style={font}
                          className={`text-4xl uppercase text-center ${
                            proj.color === "#FFFFFF" || proj.color === "#38bdf8"
                              ? "text-slate-900"
                              : "text-white"
                          }`}
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
            /* ── Detail view ── */
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // FIX: use inline style for z-index instead of invalid Tailwind z-150
              style={{ zIndex: 150 }}
              className="absolute inset-0 bg-white flex p-16 gap-16 items-center"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                // FIX: use inline style for z-index instead of invalid Tailwind z-200
                style={{ ...font, zIndex: 200 }}
                className="absolute top-10 right-16 text-slate-600 font-black text-2xl cursor-pointer bg-transparent border-none"
              >
                CLOSE [X]
              </button>

              {selectedProject?.isOtherProjects ? (
                /* ── Other Projects list ── */
                <div className="w-full max-w-4xl mx-auto overflow-y-auto max-h-full">
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
                /* ── Single project detail ── */
                <>
                  <motion.div
                    layoutId={`card-${selectedId}`}
                    className="w-1/2 h-[75vh] rounded-[60px] overflow-hidden shadow-2xl flex-shrink-0"
                  >
                    <motion.img
                      layoutId={`image-${selectedId}`}
                      src={selectedProject?.image}
                      alt={selectedProject?.label}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="w-1/2 flex flex-col justify-center space-y-8">
                    <motion.h2
                      layoutId={`title-${selectedId}`}
                      style={{ ...font, color: slate }}
                      className="text-9xl font-black uppercase leading-none"
                    >
                      {selectedProject?.label}
                    </motion.h2>
                    <div className="space-y-4">
                      <p className="text-3xl text-slate-800 leading-tight">
                        {selectedProject?.explanation}
                      </p>
                      <p className="text-slate-600 font-mono font-bold text-xl uppercase tracking-widest">
                        {selectedProject?.tech}
                      </p>
                    </div>
                    <a
                      href={selectedProject?.link}
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

      {/* ── Skills layer — slides over Projects as scroll continues ── */}
      <Skills scrollProgress={scrollProgress} />
    </>
  );
};

export default Projects;
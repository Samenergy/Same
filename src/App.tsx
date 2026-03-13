// src/App.tsx (No changes required)
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function App() {
  // This makes the page tall enough so you can actually scroll
  const { scrollYProgress } = useScroll();

  const aboutScrollProgress = useTransform(scrollYProgress, [1 / 4, 3 / 4], [0, 1]);
  const whatWeDoScrollProgress = useTransform(
    scrollYProgress,
    [3 / 4, 1],
    [0, 1]
  );

  const heroZIndex = useTransform(scrollYProgress, [0, 1 / 4], [30, 0]);
  const aboutZIndex = useTransform(scrollYProgress, [1 / 4, 3 / 4], [30, 0]);
  const whatWeDoZIndex = useTransform(scrollYProgress, [3 / 4, 1], [30, 0]);

  const heroOpacity = useTransform(scrollYProgress, [0.22, 0.25], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.28, 0.85, 0.9], [0, 1, 1, 0]);
  const whatWeDoOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

  return (
    <>
      {/* This invisible div creates scrollable height */}
      <div className="h-[1000vh]" />

      {/* ← 3× screen height = plenty of scroll */}
      <div className="sticky top-0 h-screen">
        <motion.div style={{ zIndex: heroZIndex, opacity: heroOpacity }}>
          <Hero scrollProgress={scrollYProgress} />
        </motion.div>
        <motion.div style={{ zIndex: aboutZIndex, opacity: aboutOpacity }}>
          <About scrollProgress={aboutScrollProgress} />
        </motion.div>
        <motion.div style={{ zIndex: whatWeDoZIndex, opacity: whatWeDoOpacity }}>
          <Projects scrollProgress={whatWeDoScrollProgress} />
        </motion.div>
      </div>
    </>
  );
}
// src/App.tsx (No changes required)
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function App() {
  // This makes the page tall enough so you can actually scroll
  const { scrollYProgress } = useScroll();

  const aboutScrollProgress = useTransform(scrollYProgress, [1 / 6, 2 / 6], [0, 1]);
  const whatWeDoScrollProgress = useTransform(
    scrollYProgress,
    [2 / 6, 5 / 6],
    [0, 1]
  );

  const heroZIndex = useTransform(scrollYProgress, [0, 1 / 6], [30, 0]);
  const aboutZIndex = useTransform(scrollYProgress, [1 / 6, 2 / 6], [30, 0]);
  const whatWeDoZIndex = useTransform(scrollYProgress, [2 / 6, 5 / 6], [30, 0]);

  const heroOpacity = useTransform(scrollYProgress, [0.15, 0.18], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
  const whatWeDoOpacity = useTransform(scrollYProgress, [0.32, 0.35], [0, 1]);

  return (
    <>
      {/* This invisible div creates scrollable height */}
      <div className="h-[2000vh]" />

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
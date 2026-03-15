// src/App.tsx (No changes required)

import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "./Components/Hero";

import About from "./Components/About";

import Projects from "./Components/Projects";

import Contact from "./Components/Contact";



export default function App() {
  // This makes the page tall enough so you can actually scroll
  const { scrollYProgress } = useScroll();

  const aboutScrollProgress = useTransform(scrollYProgress, [1 / 6, 4 / 6], [0, 1]);
  const whatWeDoScrollProgress = useTransform(
    scrollYProgress,
    [4 / 6, 8 / 10],
    [0, 1]
  );
  const contactScrollProgress = useTransform(
    scrollYProgress,
    [8 / 10, 1],
    [0, 1]
  );

  const heroZIndex = useTransform(scrollYProgress, [0, 1 / 6], [30, 0]);
  const aboutZIndex = useTransform(scrollYProgress, [1 / 6, 4 / 6], [30, 0]);
  const whatWeDoZIndex = useTransform(scrollYProgress, [4 / 6, 8 / 10], [30, 0]);
  const contactZIndex = useTransform(scrollYProgress, [8 / 10, 1], [150, 150]);

  const heroOpacity = useTransform(scrollYProgress, [0.15, 0.18], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.65, 0.70], [0, 1, 1, 0]);
  const whatWeDoOpacity = useTransform(scrollYProgress, [0.70, 0.75], [0, 1]);
  const contactOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);

  return (
    <>

      {/* This invisible div creates scrollable height */}

      <div className="h-[3000vh]" />

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
        <motion.div style={{ zIndex: contactZIndex, opacity: contactOpacity }}>
          <Contact scrollProgress={contactScrollProgress} />
        </motion.div>
      </div>
    </>
  );



}




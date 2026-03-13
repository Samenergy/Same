import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";
import MinimizableNav from "./MinimizableNav";

interface Props {
  scrollProgress: MotionValue<number>;
}

const About: React.FC<Props> = ({ scrollProgress }) => {
  // Using a cleaner, more modern font stack if Changa isn't loaded
  const font = { fontFamily: "'Changa One', cursive, sans-serif" };

  /* ==============================================================
     ANIMATION CURVES
     ============================================================== */
  // 1. Hero Text: Fades out and shrinks as you dive deeper
  const mainTitleY = useTransform(scrollProgress, [0, 0.3], ["0%", "-20%"]);
  const mainOpacity = useTransform(scrollProgress, [0.2, 0.4], [1, 0]);

  // 2. The Dark "Backend" Overlay (Slides from Bottom)
  const overlayY = useTransform(scrollProgress, [0.15, 0.45], ["100%", "0%"]);

  // 3. Large Background Text (Moving horizontally behind everything)
  const bgTextX = useTransform(scrollProgress, [0.3, 1], ["20%", "-40%"]);

  // 4. Content Reveal
  const contentX = useTransform(scrollProgress, [0.5, 0.8], ["100%", "0%"]);
  const detailOpacity = useTransform(scrollProgress, [0.7, 0.9], [0, 1]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-50 isolate">
      {/* SECTION 1: THE INTRO (Light Mode) */}
      <motion.div 
        style={{ y: mainTitleY, opacity: mainOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center p-10"
      >
        <span className="text-sky-600 font-bold tracking-[0.5em] mb-4 uppercase">Software Engineer</span>
        <h1 style={font} className="text-7xl md:text-9xl text-slate-900 text-center leading-[0.85]">
          ENGINEERING <br /> SOLUTIONS <br /> 
          <span className="text-slate-400">WITH AI.</span>
        </h1>
      </motion.div>

      {/* SECTION 2: THE DEEP DIVE (Dark Mode Overlay) */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 bg-slate-950 z-20 flex items-center shadow-2xl"
      >
        {/* Animated Ghost Text in Background */}
        <motion.div
          style={{ x: bgTextX, fontFamily: font.fontFamily }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[30vh] text-slate-900 select-none z-0"
        >
          SCALABLE CLOUD BACKEND AI DATA
        </motion.div>

        {/* SECTION 3: THE BIO CONTENT */}
        <motion.div
          style={{ x: contentX }}
          className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between px-12 md:px-24"
        >
          <div className="max-w-4xl">
             <h2 style={font} className="text-sky-400 text-8xl md:text-[12rem] leading-none mb-4">
              RESULTS<br/>DRIVEN.
            </h2>
            
            <motion.div 
              style={{ opacity: detailOpacity }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 border-t border-slate-800 pt-8"
            >
              <p className="text-xl leading-relaxed">
                Specializing in <span className="text-white font-bold">Backend Architecture</span> and 
                <span className="text-white font-bold"> Machine Learning</span>. I build the invisible systems 
                that power high-performance, data-driven applications.
              </p>
              <ul className="space-y-2 text-sky-200 font-mono text-sm uppercase tracking-widest">
                <li>• Scalable APIs & Microservices</li>
                <li>• Cloud-Native Deployment</li>
                <li>• Intelligent ML Integration</li>
                <li>• Problem Solving at Scale</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Grid Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Minimizable Navigation */}
      <MinimizableNav />
    </div>
  );
};

export default About;
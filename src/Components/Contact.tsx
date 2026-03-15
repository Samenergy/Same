import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MinimizableNav from "./MinimizableNav";

interface Props {
  scrollProgress: MotionValue<number>;
}

const Contact: React.FC<Props> = ({ scrollProgress }) => {
  const font = { fontFamily: "'Changa One', cursive, sans-serif" };

  // Animation curves
  const mainTitleY = useTransform(scrollProgress, [0, 0.3], ["0%", "-20%"]);
  const mainOpacity = useTransform(scrollProgress, [0.2, 0.4], [1, 0]);
  const overlayY = useTransform(scrollProgress, [0.15, 0.45], ["100%", "0%"]);
  const bgTextX = useTransform(scrollProgress, [0.3, 1], ["20%", "-40%"]);
  const contentX = useTransform(scrollProgress, [0.5, 0.8], ["100%", "0%"]);
  const detailOpacity = useTransform(scrollProgress, [0.7, 0.9], [0, 1]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-50 isolate z-[150]">
      {/* SECTION 1: THE INTRO */}
      <motion.div 
        style={{ y: mainTitleY, opacity: mainOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center p-10"
      >
        <span className="text-sky-600 font-bold tracking-[0.5em] mb-4 uppercase">Get In Touch</span>
        <h1 style={font} className="text-7xl md:text-9xl text-slate-900 text-center leading-[0.85]">
          LET'S <br /> BUILD <br /> 
          <span className="text-slate-400">TOGETHER.</span>
        </h1>
      </motion.div>

      {/* SECTION 2: FORM OVERLAY */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 bg-slate-950 z-20 flex items-center shadow-2xl"
      >
        {/* Animated Ghost Text */}
        <motion.div
          style={{ x: bgTextX, fontFamily: font.fontFamily }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[30vh] text-slate-900 select-none z-0"
        >
          CONNECT COLLABORATE CREATE INNOVATE
        </motion.div>

        {/* SECTION 3: CONTACT FORM */}
        <motion.div
          style={{ x: contentX }}
          className="relative z-10 w-full max-w-4xl mx-auto px-12 md:px-24"
        >
          <div className="space-y-8">
            <h2 style={font} className="text-sky-400 text-8xl md:text-[10rem] leading-none">
              START A<br/>CONVERSATION.
            </h2>
            {/* Download CV */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Samuel-Dushimeresss.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full transition-colors"
              >
                Download CV
              </a>
              <span className="text-slate-400 text-sm">
                Or reach out directly through any channel below.
              </span>
            </div>
            
            <motion.div 
              style={{ opacity: detailOpacity }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <p className="flex items-center space-x-3">
                      <MdEmail className="text-sky-400 text-xl" />
                      <a href="mailto:sdushime38@gmail.com" className="hover:text-sky-400 transition-colors">
                        sdushime38@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center space-x-3">
                      <FaLinkedin className="text-sky-400 text-xl" />
                      <a href="https://www.linkedin.com/in/samuel-dushime-47a927278/" className="hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    </p>
                    <p className="flex items-center space-x-3">
                      <FaGithub className="text-sky-400 text-xl" />
                      <a href="https://github.com/Samenergy" className="hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </p>
                    <p className="flex items-center space-x-3">
                      <MdEmail className="text-sky-400 text-xl" />
                      <a href="mailto:samueldushime@proton.me" className="hover:text-sky-400 transition-colors">
                        samueldushime@proton.me
                      </a>
                    </p>
                    <p className="flex items-center space-x-3">
                      <FaTelegramPlane className="text-sky-400 text-xl" />
                      <a
                        href="https://t.me/samenergy42"
                        className="hover:text-sky-400 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram
                      </a>                      
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:sdushime38@gmail.com"
                      className="w-full inline-flex justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors"
                    >
                      Email Me
                    </a>
                    <a
                      href="https://wa.me/250791449850"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-8 text-center">
                <p className="text-slate-400">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
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

export default Contact;

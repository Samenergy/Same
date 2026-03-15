import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MinimizableNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show nav when mouse is within 50px of right edge
      const threshold = 50;
      const isNearRightEdge = window.innerWidth - e.clientX <= threshold;
      
      setIsVisible(isNearRightEdge);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = ["Home", "We are","Projects", "Skills",  "Get in touch"];

  return (
    <>
      {/* Persistent indicator icon */}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 text-slate-600 opacity-60 hover:opacity-100 transition-opacity duration-200"
        animate={{ 
          x: isVisible ? -100 : 0,
          opacity: isVisible ? 0 : 0.6 
        }}
        transition={{ duration: 0.3 }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-sm rounded-l-2xl shadow-2xl p-8 border-l-4 border-slate-600"
          >
            <div className="hidden lg:block text-2xl font-light space-y-6 text-right">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: -10, scale: 1.05 }}
                  className="block hover:text-slate-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle navigation here
                    console.log(`Navigate to ${item}`);
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile version */}
            <div className="lg:hidden text-lg font-light space-y-4 text-right">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: -5, scale: 1.05 }}
                  className="block hover:text-slate-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigate to ${item}`);
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MinimizableNav;

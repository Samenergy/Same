// src/components/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollProgress: MotionValue<number>;
}

const TARGET_FIRST_LINE = "Life?*";
const TARGET_SECOND_LINE = "Very Simple";

const Hero: React.FC<Props> = ({ scrollProgress }) => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const dotRef = useRef<HTMLSpanElement>(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  // Typing (Hook 5)
  useEffect(() => {
    let i = 0;
    const t1 = setInterval(() => {
      if (i <= TARGET_FIRST_LINE.length)
        setFirstLine(TARGET_FIRST_LINE.slice(0, i++));
      else {
        clearInterval(t1);
        let j = 0;
        const t2 = setInterval(() => {
          if (j <= TARGET_SECOND_LINE.length)
            setSecondLine(TARGET_SECOND_LINE.slice(0, j++));
          else clearInterval(t2);
        }, 100);
      }
    }, 130);
  }, []);

  // Measure dot (Hook 6)
  useEffect(() => {
    if (secondLine !== TARGET_SECOND_LINE || !dotRef.current) return;

    const measure = () => {
      const rect = dotRef.current!.getBoundingClientRect();
      setDotPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [secondLine]);

  // --- UNCONDITIONAL HOOK CALLS START HERE ---

  // Circle explosion transforms
  const size = useTransform(scrollProgress, [0, 1], [10, 6000]);
  const x = useTransform(
    scrollProgress,
    [0, 0.4],
    [dotPos.x || innerWidth / 2, innerWidth / 2],
  );
  const y = useTransform(
    scrollProgress,
    [0, 0.4],
    [dotPos.y || innerHeight / 2, innerHeight / 2],
  );

  // Hero content fade out
  const heroOpacity = useTransform(scrollProgress, [0.4, 0.5], [1, 0]);

  // 🚨 FIXED HOOK CALL: Mask fade out must be defined here, unconditionally
  const maskOpacity = useTransform(scrollProgress, [0.35, 0.45], [1, 0]);

  // Disable pointer events on Hero layer once it has faded out so it doesn't block Projects clicks
  const heroPointerEvents = useTransform(
    scrollProgress,
    (v) => (v >= 0.5 ? "none" : "auto") as "none" | "auto",
  );

  return (
    <>
      {/* SLATE FLASH (z-50) */}
      {/* The component is still conditionally rendered, but all its hooks are defined above */}
      {dotPos.x > 0 && (
        <motion.div
          className="fixed left-0 top-6 rounded-full bg-slate-950 pointer-events-none z-50"
          style={{
            width: size,
            height: size,
            x,
            y,
            opacity: maskOpacity, // Use the new, unconditionally defined MotionValue
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* HERO CONTENT (The layer that acts as the peelable mask) */}
      <motion.div
        className="fixed inset-0 z-40 bg-gray-50 pointer-events-auto flex flex-col"
        style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }} // Fades out and then stops catching clicks
      >
        {/* Logo text */}
        <div
          className="
            absolute top-4 left-4
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold tracking-wide text-slate-900
          "
        >
          Samuel Dushime
        </div>

        {/* Text */}
        <div className="flex-1 flex items-center justify-between px-16 lg:px-32 xl:px-80">
          <h1 className="text-7xl lg:text-7xl font-bold leading-none">
            <div>– {firstLine}</div>
            <div className="mt-8">
              – {secondLine}
              {/* FINAL SLATE DOT WITH PERIOD-LIKE POSITIONING */}
              {secondLine === TARGET_SECOND_LINE && (
                <span
                  ref={dotRef}
                  className="text-slate-950 text-[100px] font-black leading-none inline-block 
                             ml-[-8px] relative top-[0px] "
                >
                  .
                </span>
              )}
            </div>
          </h1>

          {/* Nav */}
          <nav className="hidden lg:block text-2xl font-light space-y-8 text-right">
            {["Home", "We are", "Partners", "Projects", "Get in touch"].map(
              (t) => (
                <motion.a
                  key={t}
                  href="#"
                  whileHover={{ x: -20 }}
                  className="block hover:text-slate-600"
                >
                  {t}
                </motion.a>
              ),
            )}
          </nav>
        </div>

        <div className="px-16 lg:px-32 xl:px-80 pb-20 text-lg text-gray-600">
          <p>Life* is complicated enough.</p>
          <p>Let's add clarity, ease, structure and a bit of fun.</p>
          <p>No extra noise. Just what matters.</p>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;

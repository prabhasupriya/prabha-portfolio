import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Decorative background layers that translate at different rates on scroll (parallax).
 * Uses transform only — no layout-thrashing properties animated.
 */
export function ParallaxDecor() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const ySlow = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 180],
  );
  const yFast = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -260],
  );
  const rotateOrb = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 45],
  );
  const yOrb = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 100],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
      aria-hidden
    >
      <motion.div
        style={{ y: ySlow }}
        className="absolute -top-[20%] -left-[15%] w-[min(85vw,520px)] h-[min(85vw,520px)] rounded-full bg-violet-600/[0.07] blur-[100px]"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute top-[35%] -right-[20%] w-[min(70vw,440px)] h-[min(70vw,440px)] rounded-full bg-cyan-500/[0.06] blur-[110px]"
      />
      <motion.div
        style={{ rotate: rotateOrb, y: yOrb }}
        className="absolute bottom-[5%] left-[10%] w-[280px] h-[280px] rounded-full border border-white/[0.04]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />
    </div>
  );
}

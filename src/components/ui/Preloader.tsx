"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(0);
  const rafRef = useRef(0);

  const tick = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const duration = 1200;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-in-out cubic
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    const value = Math.round(eased * 100);
    setCount(value);

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10001] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Logo above counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Image
              src="/logo.svg"
              alt="CD"
              width={48}
              height={48}
              className="opacity-60"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <span className="text-[clamp(4rem,15vw,10rem)] font-bold tracking-tighter text-white tabular-nums leading-none">
              {count.toString().padStart(3, "0")}
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-8 text-xs tracking-[0.3em] uppercase text-white/40"
          >
            Clément Dubosq — Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

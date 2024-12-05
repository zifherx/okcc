"use client";
import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "./VariantsTransition";

export function MotionTransition() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-redCustom/40"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}

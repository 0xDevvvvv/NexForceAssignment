"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";

export function AboutUs() {
  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to <span className="text-red-900">TheCompany</span>
        </div>
        <div className="font-mono md:text-4xl text-2xl text-center">
        
          Where Passion Meets Progress
        </div>
        <div
          className="font-mono text-base text-center md:text-2xl dark:text-neutral-200 py-4">
          We offer a wide range of services to help you achieve your goals.
        </div>
      </motion.div>
    </AuroraBackground>)
  );
}

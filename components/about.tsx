"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect } from "./text-generate-effect";

export default function About() {
  const { ref, inView } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect
        words="I'm a 22 yo engineering student from Paris currently living in California. I'm specialized myself in UI/UX Design and front-end development, but I'm also proficient in full-stack development too. Recently, I've explored TensorFlow and built my first neural network, capable of running directly in a browser. Driven by a passion for perfection, I spend a lot of time refining every aspect of my UI designs and actively search for opportunities to learn and grow as a developer and human being."
        inView={inView}
      ></TextGenerateEffect>
    </motion.section>
  );
}

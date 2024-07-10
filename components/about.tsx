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
      className="py-32 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect
        words="I'm a 22 yo engineering student from Paris currently living in California. I've been practicing user experience design for few years now, but my journey with coding began in 2022, and I started exploring web development in 2023. I've decided to specialize myself in front-end development because I know how infuriating a bad UI can be, but I'm also able to do full-stack too. Oh and recently, I've explored TensorFlow and built my first neural network, capable of running directly in a browser. Driven by a passion for perfection, I spend a lot of time refining every aspect of my UI designs and actively search for opportunities to learn and grow as a developer and human being."
        inView={inView}
      ></TextGenerateEffect>
    </motion.section>
  );
}

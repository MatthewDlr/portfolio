"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, redirectUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 w-full"
      id="project"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-white/50 dark:bg-black/50 relative group/card  dark:hover:shadow-2xl dark:border-white/20 border-black/[0.1] w-auto sm:w-1/2 h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="25"
            className="text-xl font-bold text-sky-600/90 dark:text-sky-100/90"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="35"
            className="text-sky-500/90 text-sm w-full mt-2 dark:text-sky-100/90"
          >
            {description}
          </CardItem>
          <CardItem
            translateZ="50"
            className="w-full mt-4"
          >
            <Image
              src={imageUrl}
              quality={75}
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
              alt="thumbnail"
              onClick={() => window.open(redirectUrl, "_blank")}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={25}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-sky-100/90 text-sky-900 px-3 py-1 text-xs uppercase tracking-wider rounded-full dark:text-sky-100/90 dark:bg-sky-900"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

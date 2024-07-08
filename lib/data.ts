import transmitImg from "@/public/transmit.png";
import ratioImg from "@/public/ratio.png";
import prospectixImg from "@/public/Prospectix-8.png";
import digitalAwarenessImg from "@/public/digital-awareness.png";
import heartBeatsImg from "@/public/heartBeats.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaDev, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Solutions Engineer",
    location: "Doctolib, Paris",
    description:
      "I worked within the Team Support to address concerns from health professionals. As part of my internship project, I developed a database of SQL queries aimed at streamlining case resolutions for my team.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Jan 2024",
  },
  {
    title: "Technical Manager",
    location: "Junior ISEP, Paris",
    description:
      "Junior ISEP is an association within my school that I helped develop many internal tools to participate in its growth and progress.",
    icon: React.createElement(FaDev),
    date: "July 2023 - July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Transmit",
    description:
      "Transmit is a group project designed to simulate the functionality and features of a social networking platform, such as Facebook.",
    tags: ["Angular", "Tailwind", "Supabase", "d3.js", "Vercel"],
    imageUrl: transmitImg,
    redirectUrl: "https://transmit-project.vercel.app/about",
  },
  {
    title: "Ratio",
    description:
      "Ratio is a group project made in web class. We decided to make a podcast player capable of streaming podcasts, discover tailored content, and upload new episodes",
    tags: ["Angular", "Tailwind", "Spring Boot", "PostgreSQL", "Docker"],
    imageUrl: ratioImg,
    redirectUrl: "https://github.com/smansteel/A2Web",
  },
  {
    title: "Prospectix 8",
    description:
      "I developed the next evolution of an internal Junior ISEP tool. My updates were focused on making the app responsive on mobile devices, enhancing the overall usability, and ensuring its long-term sustainability by rewriting components.",
    tags: ["Angular", "Tailwind", "DaisyUI", "NestJs", "TypeORM", "PostgreSQL", "Docker", "GitLab CI"],
    imageUrl: prospectixImg,
    redirectUrl: "https://staging.prospectix.juniorisep.com",
  },
  {
    title: "Digital Awareness",
    description:
      "Digital Awareness is a Chrome extension I developed to be more productive by hiding distracting websites behind a timed-walled. No need to resist temptation then, all you need is wait enough.",
    tags: ["Angular", "Tailwind", "Chrome API", "GitHub Actions"],
    imageUrl: digitalAwarenessImg,
    redirectUrl: "https://chromewebstore.google.com/detail/digital-awareness/eciijpgppecgdjfemignfbgnnhnmnkia?hl=en",
  },
  {
    title: "HeartBeats",
    description:
      "HeartBeats is a group project that aimed to create a fictional startup with a product idea. Our objective was to design a website that adapts music to environmental changes, such as physical activity. This marks my very first attempt at web development in January 2023, and our website did not utilize any frameworks.",
    tags: ["HTML", "CSS", "JS", "PHP"],
    imageUrl: heartBeatsImg,
    redirectUrl: "https://chromewebstore.google.com/detail/digital-awareness/eciijpgppecgdjfemignfbgnnhnmnkia?hl=en",
  },
] as const;

export const skillsData = [
  "Angular",
  "TailwindCSS",
  "Nest.js",
  "TypeORM",
  "Supabase",
  "TensorFlow.js",
  "Next.js",
  "Git",
  "Vercel",
  "d3.js",
  "PostgreSQL",
  "Python",
  "PHP",
  "Java",
  "Docker",
  "Figma",
  "Metabase",
] as const;

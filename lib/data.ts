import prospectixImg from "@/public/Prospectix-8.webp";
import digitalAwarenessImg from "@/public/digital-awareness.webp";
import heartBeatsImg from "@/public/heartBeats.webp";
import ratioImg from "@/public/ratio.webp";
import transmitImg from "@/public/transmit.webp";
import sudokuImg from "@/public/sudoku.webp";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaDev } from "react-icons/fa";

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
    tags: ["Angular", "TailwindCSS", "Supabase", "d3.js", "Vercel"],
    imageUrl: transmitImg,
    redirectUrl: "https://transmit-project.vercel.app/about",
  },
  {
    title: "Ratio",
    description:
      "Ratio is a group project made in web class. We decided to make a podcast player capable of streaming podcasts, discover tailored content, and upload new episodes",
    tags: ["Angular", "TailwindCSS", "Spring Boot", "PostgreSQL", "Docker"],
    imageUrl: ratioImg,
    redirectUrl: "https://github.com/smansteel/A2Web",
  },
  {
    title: "Prospectix 8",
    description:
      "I developed the next evolution of an internal tool made by Junior ISEP. My updates were focused on making the app responsive on mobile devices, enhancing the overall usability, and ensuring its long-term sustainability by rewriting components.",
    tags: ["Angular", "TailwindCSS", "DaisyUI", "NestJs", "TypeORM", "PostgreSQL", "Docker", "GitLab CI"],
    imageUrl: prospectixImg,
    redirectUrl: "https://staging.prospectix.juniorisep.com",
  },
  {
    title: "Digital Awareness",
    description:
      "Digital Awareness is a Chrome extension I developed to be more productive by hiding distracting websites behind a timed-wall. No need to resist temptation then, all you need is wait enough. This project is still in beta and not fully released.",
    tags: ["Angular", "TailwindCSS", "TensorFlow", "Chrome API", "GitHub Actions"],
    imageUrl: digitalAwarenessImg,
    redirectUrl: "https://chromewebstore.google.com/detail/digital-awareness",
  },
  {
    title: "Sudoku Solver",
    description: "This program is able to solve any given sudoku grid using a backtracking algorithm.",
    tags: ["Python"],
    imageUrl: sudokuImg,
    redirectUrl: "https://github.com/MatthewDlr/sudoku-solver",
  },
  {
    title: "HeartBeats",
    description:
      "HeartBeats is a group project that aimed to create a fictional startup with a product idea. Our objective was to design a website that adapts music to environmental changes, such as physical activity. This marked my very first attempt at web development in January 2023",
    tags: ["HTML", "CSS", "JS", "PHP"],
    imageUrl: heartBeatsImg,
    redirectUrl: "https://github.com/HeartBeats-APP/HeartBeats-Website",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "PHP",
  "Angular",
  "TailwindCSS",
  "Nest.js",
  "TypeORM",
  "PostgreSQL",
  "SQL",
  "Supabase",
  "Next.js",
  "TensorFlow.js",
  "Git",
  "d3.js",
  "Framer",
  "Vercel",
  "Docker",
  "Figma",
  "Metabase",
] as const;

"use client";

import { FaGithubSquare } from "react-icons/fa";

export default function GithubButton() {
  return (
    <a
      className="fixed bottom-20 z-20 right-5 flex items-center justify-center bg-white/75 w-[3rem] h-[3rem] text-gray-700 gap-2 text-[1.35rem] rounded-full hover:scale-110 hover:text-gray-950 transition cursor-pointer border border-white border-opacity-40 dark:bg-white/10 dark:text-white/60"
      href="https://github.com/MatthewDlr"
      target="_blank"
    >
      <FaGithubSquare />
    </a>
  );
}

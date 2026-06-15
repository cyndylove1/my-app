"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatedItem } from "./animatedItem";
import suft from "@/public/assets/suft.png";
import chequemate from "@/public/assets/chequemate 2.png";
import lapo from "@/public/assets/lapo1.png";
import propapay from "@/public/assets/propapay1.png";
import rsa from "@/public/assets/rsa1.png";
import nextaflow from "@/public/assets/nextaflow2.png";
import Button from "./button";
import DotIcon from "./dotIcon";
import Title from "./title";

type Project = {
  image: StaticImageData;
  stack: string;
  title: string;
  desc: string;
  buttons: string[];
  live?: string;
  github?: string;
};

export default function Project() {
  const projects: Project[] = [
    {
      image: propapay,
      stack:
        "React js, Tailwindcss, Daisy UI, Typescript, Restful-Apis, React-Query",
      title: "Propapay",
      desc: "PropaPay is a real estate platform that simplifies property buying, selling, renting, and investment management by connecting users with verified property listings and secure payment solutions.",
      buttons: ["Live <~>"],
      live: "https://propapay-tech-red.vercel.app/",
      github: "https://github.com/cyndylove1/propapay-tech",
    },
    {
      image: lapo,
      stack:
        "Reactjs, Tailwindcss, Daisy UI, Typescript, Material UI, Recharts",
      title: "Lapo MicroFinance Dashboard",
      desc: "A simple dashboard showing every activities of a user",
      buttons: ["Live <~>"],
      live: "https://lapo-psi.vercel.app/",
      github: "https://github.com/cyndylove1/Lapo",
    },
    {
      image: rsa,
      stack: "Next js, Tailwindcss, typescript, React-Query, Apis",
      title: "Residential Staffing Agency",
      desc: "An agency dedicated to delivering reliable, compassionate, and high-quality care solutions.",
      buttons: ["Live <~>"],
      live: "https://rsaproject-xi.vercel.app/",
      github: "https://github.com/edoubleone/rsaproject",
    },
  ];

  return (
    <section className="relative z-0">
      <div className="lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 py-[7rem] text-white">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-10">
          {/* title */}
          <Title text="projects" width={400} />

          <Link
            href="/projects"
            className="text-(--gray) hover:text-white text-sm transition whitespace-nowrap"
          >
            View all →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((p, index) => (
            <AnimatedItem key={index} index={index} delay={0.05 * index}>
              {/* CARD */}
              <div
                className="
                  group
                  border border-gray-600
                  rounded-sm
                  overflow-hidden
                  bg-[#2c3036]
                  h-full
                  flex flex-col
                  transition-all
                  duration-500
                  ease-in-out
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-gray-400
                "
              >
                {/* IMAGE */}
                <div className="h-[140px] w-full bg-black/40 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="
                      w-full h-full object-cover
                      transition-transform
                      duration-500
                      ease-in-out
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
                    border-t border-gray-600
                    flex-1 flex flex-col
                    transition-colors
                    duration-500
                    group-hover:border-gray-400
                  "
                >
                  <p
                    className="
                      text-[12px]
                      border-b
                      py-2 px-4
                      text-gray-400
                      transition-colors
                      duration-500
                      group-hover:text-gray-300
                    "
                  >
                    {p.stack}
                  </p>

                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        mb-1
                        transition-colors
                        duration-500
                        group-hover:text-white
                      "
                    >
                      {p.title}
                    </h3>

                    <p
                      className="
                        text-[12px]
                        text-gray-400
                        flex-1
                        transition-colors
                        duration-500
                        group-hover:text-gray-300
                      "
                    >
                      {p.desc}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-[20px] mt-4">
                      {/* BUTTONS (DIRECT HOVER ONLY) */}
                      <div className="flex gap-3">
                        {p.buttons.map((btn, i) => (
                          <a key={i} href={p.live ?? "#"} target="blank">
                            <Button text={btn} hideIcon />
                          </a>
                        ))}
                      </div>

                      {/* GITHUB ICON (DIRECT HOVER ONLY) */}
                      <Link href={p.github ?? "#"} target="_blank">
                        <IoLogoGithub
                          className="
                            text-2xl
                            text-(--gray)
                            transition-colors
                            duration-300
                            hover:text-white
                            cursor-pointer
                          "
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
      <div className="absolute -left-10 top-[14rem] z-0 hidden lg:flex">
        <DotIcon width={84} height={84} />
      </div>
    </section>
  );
}

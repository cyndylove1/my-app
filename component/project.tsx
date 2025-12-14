"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatedItem } from "./animatedItem";
import suft from "../app/assets/suft.png";
import chequemate from "../app/assets/chequemate 2.png";
import flowApp from "../app/assets/flow app1.png";
import blott from "../app/assets/blottImage.png";
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
      image: suft,
      stack:
        "React js, Tailwindcss, Daisy UI, Context-Api, Typescript, Restful-Apis",
      title: "Suft",
      desc: "Suft website is an E-commerce platform that enables individuals to buy products and make payments online",
      buttons: ["Live <~>"],
      live: "https://suft-comfort.vercel.app/",
      github: "https://github.com/cyndylove1/suft",
    },
    {
      image: blott,
      stack: "Next js, Tailwindcss, typescript, React-Query, Apis",
      title: "Blott News",
      desc: "News Channel",
      buttons: ["Live <~>"],
      live: "https://blott-news.vercel.app/",
      github: "https://github.com/cyndylove1/Blott",
    },
    {
      image: chequemate,
      stack: "React js, Tailwindcss, Javascript",
      title: "ChequeMate",
      desc: "Chequemate is an Ajo website that Manage and control multiple Ajo groups with Chequemate you earn up to 20% interest per annum.",
      buttons: ["Live <~>"],
      live: "https://chequiemate.vercel.app/",
      github: "https://github.com/cyndylove1/chequie",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.map((p, index) => (
            <AnimatedItem key={index} index={index} delay={0.05 * index}>
              <div className="border border-gray-600 rounded-sm overflow-hidden bg-[#2c3036] h-full flex flex-col">
                <div className="h-[140px] w-full bg-black/40 overflow-hidden group">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="border-t border-gray-600 flex-1 flex flex-col">
                  <p className="text-[12px] border-b py-2 px-4 text-gray-400">
                    {p.stack}
                  </p>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[18px] font-semibold mb-1">
                      {p.title}
                    </h3>

                    <p className="text-[12px] text-gray-400 flex-1">{p.desc}</p>

                    <div className="flex items-center gap-[20px] mt-4">
                      <div className="flex gap-3">
                        {p.buttons.map((btn, i) => (
                          <Link key={i} href={p.live ?? "#"}>
                            <Button text={btn} hideIcon />
                          </Link>
                        ))}
                      </div>

                      <Link href={p.github ?? "#"} target="_blank">
                        <IoLogoGithub className="text-2xl text-(--gray) hover:text-white transition cursor-pointer" />
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

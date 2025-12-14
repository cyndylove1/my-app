"use client";

import Image, { StaticImageData } from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatedItem } from "@/component/animatedItem";
import Link from "next/link";
import suft from "../assets/suft.png";
import chequemate from "../assets/chequemate 2.png";
import mental from "../assets/mental.png";
import flowApp from "../assets/flow app1.png";
import blott from "../assets/blottImage.png";
import dashboard from "../assets/dashboard 2.png";
import Button from "@/component/button";
import DotIcon from "@/component/dotIcon";


type Project = {
  image: StaticImageData;
  stack: string;
  title: string;
  desc: string;
  buttons: string[];
  live?: string;
  github?: string;
};

export default function Projects() {
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
    {
      image: flowApp,
      stack: "React js, Tailwindcss, Javascript",
      title: "Flow App",
      desc: "Flow App is designed exclusively for making seamless payments.",
      buttons: ["Live <~>"],
      live: "https://flow-app-five.vercel.app/",
      github: "https://github.com/cyndylove1/Flow-app",
    },
    {
      image: mental,
      stack: "Next js, Tailwindcss, Typescript, Daisy UI, Material UI, Jest",
      title: "Mental Health",
      desc: "A Mental Health Assessment Form.",
      buttons: ["Live <~>"],
      live: "https://mental-health-form.vercel.app/",
      github: "https://github.com/cyndylove1/mental-health",
    },
    {
      image: dashboard,
      stack:
        "React js, Tailwindcss, Javascript, Material UI, react-chartjs-2, recharts",
      title: "Lapo",
      desc: "MicroFinance bank DashBoard",
      buttons: ["Live <~>"],
      live: "https://lapo-psi.vercel.app/dashboard",
      github: "https://github.com/cyndylove1/Lapo",
    },
  ];

  return (
    <>
      <section className="lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 py-[7rem] text-white overflow-hidden relative">
        <h2 className="text-[26px] font-semibold whitespace-nowrap">
          <span className="text-(--primary)">/</span>projects
        </h2>
        <h3 className="text-[13px] my-3 text-(--gray)">List of my projects</h3>
        <h2 className="font-semibold whitespace-nowrap py-10 text-white text-[26px]">
          <span className="text-(--primary) ">#</span>complete-apps
        </h2>

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

        {/* left Icon */}
        <div className="absolute -left-10 top-[14rem] z-0 hidden lg:flex">
          <DotIcon width={84} height={84} />
        </div>
        {/* right icon */}
        <div className="absolute -right-10 top-[10rem] w-[91px] h-[91px] border border-(--gray) z-0 hidden lg:flex"></div>
      </section>
    </>
  );
}

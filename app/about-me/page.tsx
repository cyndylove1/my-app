"use client";

import Image from "next/image";
import hero from "@/public/woman with.png";
import DotIcon from "../../component/dotIcon";
import SkillsGrid from "@/component/skillsGrid";
import FunFacts from "@/component/funFacts";
import { AnimatedItem } from "@/component/animatedItem";

export default function AboutMe() {
  return (
    <section>
      <div className="w-full text-white py-[7rem] lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 grid lg:grid-cols-2 grid-cols-1 relative">
        {/* Left Content */}
        <div className="xl:max-w-lg">
          <h2 className="text-[26px] font-semibold mb-10 whitespace-nowrap">
            <div>
              <span className="text-(--primary)">/</span>about-me
            </div>
          </h2>
          <AnimatedItem index={0} delay={0.05}>
            <p className="text-[13px] mt-2 text-(--gray) font-[400]">
              Who am i?
            </p>
            <p className="mb-3 text-[14px] text-(--gray)">
              Hello, I’m Cynthia!
            </p>
            <p className="mb-4 leading-[25px] md:text-[14px] text-[12px] text-(--gray)">
              I'm a passionate Frontend Developer with a deep love for building
              beautiful, responsive, and high-performing web applications. I
              specialize in turning design ideas into reality, combining clean
              code, innovative user experiences and modern technologies to craft
              products that users love. I bring creativity and precision to
              every project. I care about user experience just as much as code
              quality ensuring every interaction feels smooth, intuitive, and
              accessible across all devices.When I’m not coding, you’ll find me
              refining my design sense, exploring new frameworks, or learning
              about the latest in web performance optimization.
            </p>
          </AnimatedItem>
        </div>
        {/* Right Image */}
        <AnimatedItem index={1} delay={0.1}>
          <div className="relative w-full lg:flex justify-center items-center hidden ">
            {/* Purple Squares Behind Head */}
            <div className="absolute top-[6rem] xl:top-[10rem] left-[7rem] xl:left-[7rem] z-0">
              <DotIcon height={84} width={84} />
            </div>
            {/* Image Section*/}
            <div className="h-full">
              <Image
                src={hero}
                alt="hero"
                className="relative z-10 opacity-90 select-none w-[600px]"
              />
            </div>
            {/* Dot Pattern below*/}
            <div className="absolute top-[16rem] xl:top-[22rem] right-[3rem] xl:right-[5rem] z-20">
              <DotIcon width={84} height={84} />
            </div>
          </div>
        </AnimatedItem>
      </div>
      {/* Skills */}
      <div className="lg:px-[4rem] xl:px-[6rem] px-4 md:px-8">
        <h2 className="text-[26px] font-semibold whitespace-nowrap text-white mb-10">
          <span className="text-(--primary)">#</span>skills
        </h2>
        <SkillsGrid
          cols="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          renderItem={(content, index) => (
            <AnimatedItem index={index} delay={0.07 * index}>
              {content}
            </AnimatedItem>
          )}
        />
      </div>
      {/* fun Facts */}
      <FunFacts />

      {/* left Icon */}
      <div className="absolute -left-10 top-[10rem] z-0 hidden lg:flex">
        <DotIcon width={84} height={84} />
      </div>
    </section>
  );
}

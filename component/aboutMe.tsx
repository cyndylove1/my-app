"use client";
import { AnimatedItem } from "./animatedItem";
import Image from "next/image";
import hero from "@/public/assets/woman with.png";
import DotIcon from "./dotIcon";
import Title from "./title";
import Button from "./button";
import Link from "next/link";


export default function AboutMe() {
  return (
    <section className="w-full text-(--gray) py-[7rem] lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 grid lg:grid-cols-2 grid-cols-1 relative">
      {/* Left Content */}
      <div className="xl:max-w-lg">
        <Title text="about-me" width={350} />
        <AnimatedItem index={0} delay={0.05}>
          <p className="mb-4 text-[14px] text-(--gray) pt-10">
            Hello, I’m Cynthia!
          </p>
          <p className="mb-4 leading-[25px] md:text-[14px] text-[12px] text-(--gray)">
            I'm a passionate Frontend Developer with a deep love for building
            beautiful, responsive, and high-performing web applications. I
            specialize in turning design ideas into reality, combining clean
            code, innovative user experiences and modern technologies to craft
            products that users love. I bring creativity and precision to every
            project. I care about user experience just as much as code quality
            ensuring every interaction feels smooth, intuitive, and accessible
            across all devices.When I’m not coding, you’ll find me refining my
            design sense, exploring new frameworks, or learning about the latest
            in web performance optimization.
          </p>
        </AnimatedItem>
        {/* Button */}
        <AnimatedItem index={1} delay={0.1}>
          <Link href="/about-me">
            <Button text="Read More" hideIcon={false} />
          </Link>
        </AnimatedItem>
      </div>

      {/* Right Image */}
      <AnimatedItem index={2} delay={0.25}>
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
              className="relative z-10 opacity-90 select-none w-[800px]"
            />
          </div>
          {/* Dot Pattern below*/}
          <div className="absolute top-[16rem] xl:top-[22rem] right-[3rem] xl:right-[5rem] z-20">
            <DotIcon width={84} height={84} />
          </div>
        </div>
      </AnimatedItem>

      {/* left icon */}
      <div className="absolute -left-10 top-[14rem] w-[91px] h-[91px] border border-(--gray) z-0 hidden lg:flex"></div>
    </section>
  );
}

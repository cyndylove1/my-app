"use client";

import { AnimatedItem } from "../component/animatedItem"; 
import Button from "./button";
import ImageSection from "./imageSection";

export default function HeroContent() {
  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 pt-[7rem] lg:pt-[5rem]">
        {/* LEFT TEXT */}
        <div className="mt-[3rem] lg:mt-0"><AnimatedItem index={0} delay={0.05}>
          
            <span className="text-(--primary) text-[15px]">
              Frontend developer
            </span>
          </AnimatedItem>

          <AnimatedItem index={1} delay={0.1}>
            <h1 className="md:text-[45px] text-[40px] xl:text-[50px] font-[600] leading-[100%]">
              Hello I'm <br />
              <span className="text-(--primary)">Nweke Cynthia</span>
            </h1>
          </AnimatedItem>

          <AnimatedItem index={2} delay={0.15}>
            <p className="text-(--gray) leading-[25px] mt-2 mb-6 md:text-[14px] text-[12px] xl:text-[16px] lg:max-w-[500px]">
              I am a Frontend Developer,&nbsp;I provide clean codes and pixel
              perfect designs. I enjoy solving problems, improving user
              experience and staying updated with the latest web technologies.
            </p>
          </AnimatedItem>

          <AnimatedItem index={3} delay={0.2}>
            <a
              href="Nweke Cynthia  Resume.pdf"
              download="Nweke Cynthia  Resume.pdf"
            >
              <Button text="Download Cv" hideIcon={true} />
            </a>
          </AnimatedItem>
        </div>

        {/* RIGHT IMAGE */}
        <AnimatedItem index={4} delay={0.25}>
          <ImageSection />
        </AnimatedItem>
      </section>
    </>
  );
}

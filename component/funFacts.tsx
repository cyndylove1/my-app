"use client";

import { AnimatedItem } from "./animatedItem";
import DotIcon from "./dotIcon";
import PurpleIcon from "./purpleIcon";

export default function FunFacts() {
  const facts: string[] = [
    "I love exploring new places just for good food.",
    "I love peaceful environments, that's when my creativity works best.",
    "I like pizza and shawarma.",
    "I like observing people quietly; you learn a lot that way.",
    "My favorite movie Squid Game.",
    "I am a graduate.",
    "I read Food Science and Technology.",
  ];

  return (
    <section className="relative w-full text-[#D7D7D7] flex flex-col lg:flex-row items-center justify-between lg:p-[4rem] xl:p-[6rem] px-4 py-[6rem] md:px-8">
      {/* Left Section */}
      <div>
        {/* Title */}
        <h2 className="text-[26px] font-semibold whitespace-nowrap mb-10 text-white">
          <span className="text-(--primary)">#</span>my-fun-facts
        </h2>

        <div className="flex flex-wrap gap-3 lg:max-w-2xl">
          {facts.map((fact, i) => (
            <AnimatedItem key={i} index={i} delay={0.05 * i}>
              <span className="border-[1px] border-(--gray) px-4 py-2 text-[13px] text-(-gray)">
                {fact}
              </span>
            </AnimatedItem>
          ))}
        </div>
      </div>

      {/* Right Side Icons */}
      <AnimatedItem index={facts.length} delay={0.05 * facts.length + 0.2}>
        <div className="relative w-[200px] hidden lg:flex">
          {/* Dot Grid */}
          <div className="absolute -top-8 right-[5rem]">
            <DotIcon width={84} height={84} />
          </div>
          <div className="absolute top-10 right-0">
            <PurpleIcon width={125} height={125} />
          </div>
        </div>
      </AnimatedItem>
    </section>
  );
}

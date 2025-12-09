"use client";

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AnimatedItem } from "./animatedItem";
import DotIcon from "./dotIcon";
import Title from "./title";


export default function Contact() {
  return (
    <section className="w-full text-gray-200 lg:px-[4rem] xl:px-[6rem] md:px-8 px-4 pb-[6rem] relative">
      {/* Title */}
      <Title text="contacts" width={150} />

      <div className="flex flex-col lg:flex-row justify-between items-start pt-10">
        {/* Left text */}
        <AnimatedItem index={0} delay={0.05}>
          <div className="md:text-[14px] text-[12px] leading-[25px] text-(--gray) lg:w-[70%]">
            <p>
              I’m interested in any opportunities. However, if you have other
              request or question, don’t hesitate to contact me.
            </p>
          </div>
        </AnimatedItem>

        {/* Right Contact Box */}
        <AnimatedItem index={1} delay={0.1}>
          <div className="border-[1px] border-(--gray) p-6 text-[14px] mt-8 md:mt-0">
            <h3 className="font-semibold mb-4 text-white">Message me here</h3>

            <div className="flex items-center gap-3 mb-3 text-(--gray) hover:text-white transition">
              <IoLogoWhatsapp className="text-lg" />
              <span>09034023722</span>
            </div>

            <div className="flex items-center gap-3 text-(--gray) hover:text-white transition">
              <MdEmail className="text-lg" />
              <span>nwekecynthia2015@gmail.com</span>
            </div>
          </div>
        </AnimatedItem>
      </div>
      <div className="absolute -left-10 top-[4rem] z-0 hidden lg:flex">
        <DotIcon width={84} height={84} />
      </div>
    </section>
  );
}

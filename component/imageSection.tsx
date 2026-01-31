import Image from "next/image";
import hero from "@/public/assets/woman with.png";
import DotIcon from "@/component/dotIcon";
import PurpleIcon from "./purpleIcon";
export default function ImageSection() {
  return (
    <>
      <section>
        <div className="relative w-full lg:flex justify-center items-center hidden">
          {/* Purple Squares Behind Head */}
          <div className="absolute top-[6rem] xl:top-[10rem] left-[6rem] xl:left-[7rem] z-0">
            <PurpleIcon height={125} width={125} />
          </div>
          {/* Main Hero Image */}
          <div className="h-full w-full">
            <Image
              src={hero}
              alt="hero"
              className="relative z-10 opacity-90 select-none w-full"
            />
          </div>
          {/* Dot Pattern on Arm */}
          <div className="absolute top-[15rem] xl:top-[22rem] right-[3rem] xl:right-[5rem] z-20">
            <DotIcon width={84} height={84} />
          </div>
          {/* Bottom Text Badge */}
          <div
            className="absolute bottom-[7rem] left-1/2 -translate-x-1/2 translate-y-[65px] w-[300px] mx-auto
            flex items-center gap-3 border border-gray-600 
            px-4 py-[6px] z-30"
          >
            <span className="w-[12px] h-[12px] bg-(--primary) font-[600]"></span>{" "}
            <p className="text-(--gray) text-[12px]">
              Currently working on&nbsp;
              <span className="font-semibold">Projects</span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

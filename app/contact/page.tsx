"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DotIcon from "../../component/dotIcon";
import Button from "@/component/button";
import { AnimatedItem } from "@/component/animatedItem";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_nqerapm",
        "template_0albnh7",
        form.current,
        "oAjyzmxKCMONiqFu2"
      )
      .then(
        () => {
          toast.success("Sent Successfully!");
          form.current?.reset();
        },
        () => {
          toast.error("Failed to submit");
        }
      );
  };
  return (
    <section className="w-full text-gray-200 lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 pb-[6rem] pt-[7rem] relative">
      {/* Title */}
      <h2 className="text-[26px] font-semibold whitespace-nowrap mb-4">
        <span className="text-(--primary)">/</span>contacts
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-start">
        {/* Left text */}
        <AnimatedItem index={0} delay={0.05}>
          <div className="md:text-[14px] text-[12px] leading-[25px] text-(--gray) w-[75%]">
            <p>
              I’m interested in any opportunities. However, if you have other
              request or question, don’t hesitate to contact me.
            </p>
          </div>
        </AnimatedItem>

        {/* Right Contact Boxr */}
        <AnimatedItem index={1} delay={0.1}>
          <form ref={form} onSubmit={sendEmail} className="mt-10 lg:mt-0">
            <div className="w-full mb-4">
              <label htmlFor="" className="text-[12px]">
                Full Name
              </label>{" "}
              <br />
              <input
                placeholder="Full Name"
                type="text"
                className="h-[48px] w-full border-[1px] border-(--gray) text-[14px] p-4 rounded-[8px] text-white outline-none"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="" className="text-[12px]">
                Email
              </label>
              <br />
              <input
                placeholder="Email"
                type="email"
                className="h-[48px] w-full border-[1px] border-(--gray) text-[14px] p-4 rounded-[8px] text-white outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="text-[12px]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="Your message"
                required
                className="w-full text-[14px] p-4 mt-[5px] text-white border-(--gray) border-[1px] rounded-[8px] outline-none"
              ></textarea>
            </div>
            <Button text="Send Message" hideIcon={true} />
          </form>
        </AnimatedItem>
      </div>
      <div className="absolute -left-10 top-[4rem] z-0 hidden lg:flex">
        <DotIcon width={84} height={84} />
      </div>
    </section>
  );
}

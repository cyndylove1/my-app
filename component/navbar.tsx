"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { TbMenu } from "react-icons/tb";
import { IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "about-me", href: "/about-me" },
    { label: "contacts", href: "/contact" },
  ];

  const socialIcons = [
    { icon: <IoLogoGithub />, href: "https://github.com/cyndylove1" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/cyndylove1/" },
    { icon: <MdEmail />, href: "mailto:Nwekecynthia2015@gmail.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#282c33] text-gray-300">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between py-10 md:px-8 lg:px-[4rem] xl:px-[6rem]  px-4">
        <Logo />
        <ul className="flex items-center gap-10 text-[14px] font-[600]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`transition ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                <Link href={link.href}>
                  <span className="text-[#9b59b6]">#</span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between py-5 px-4">
        <Logo />
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-white focus:outline-none text-2xl"
        >
          <TbMenu />
        </button>
      </div>

      {/* Mobile Sidebar*/}
      <div
        className={`fixed top-0 right-0 h-full w-84 bg-[#282c33] shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between p-6">
          {/* Top Section: Logo + Close Button */}
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-2xl focus:outline-none"
            >
              <IoCloseOutline/>
            </button>
          </div>

          {/* Links */}
          <ul className="mt-10 flex flex-col gap-6 text-[16px] font-semibold text-(--gray)">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={`transition ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  <Link href={link.href} onClick={() => setIsMobileOpen(false)}>
                    <span className="text-[#9b59b6]">#</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom Section: Social Icons */}
          <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-center gap-4 text-xl">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

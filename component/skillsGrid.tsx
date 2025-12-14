"use client";

import React from "react";

type SkillGroup = {
  title: string;
  items: string[];
  height?: string;
};

interface SkillsGridProps {
  cols?: string;
  renderItem?: (content: React.ReactNode, index: number) => React.ReactNode;
}

export default function SkillsGrid({
  cols = "grid-cols-1 md:grid-cols-3",
  renderItem,
}: SkillsGridProps) {
  const skillGroups: SkillGroup[] = [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript"],
      height: "h-[104px]",
    },
    {
      title: "CSS Frameworks",
      items: ["Bootstrap", "Tailwind CSS"],
      height: "h-[104px]",
    },
    {
      title: "Frameworks",
      items: ["React Js", "Next Js"],
      height: "h-[104px]",
    },
    {
      title: "Other",
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "RESTful APIs",
        "GraphQL",
        "Vite",
        "Bootstrap",
        "Material-UI",
        "Shadcn",
        "Framer-motion",
      ],
    },
    {
      title: "Tools",
      items: [
        "Node js",
        "Figma",
        "Git",
        "GitHub",
        "Context-Api",
        "React-Query",
        "Redux-Toolkit",
        "Swagger UI",
        "Postman"
      ],
    },
  ];

  return (
    <div className={`grid ${cols} gap-4 md:text-[14px] text-[12px]`}>
      {skillGroups.map((group, index) => {
        const content = (
          <div
            className={`border border-(--gray) ${group.height ?? ""}`}
            key={index}
          >
            <h3 className="text-white font-semibold border-b border-(--gray) p-2">
              {group.title}
            </h3>

            <p className="flex flex-wrap gap-x-1 p-2 text-(--gray)">
              {group.items.map((item, i) => (
                <span key={i}>
                  {item}
                  {i !== group.items.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>
        );
        return renderItem ? renderItem(content, index) : content;
      })}
    </div>
  );
}

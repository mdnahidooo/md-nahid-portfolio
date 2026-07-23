"use client";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiVercel,
    SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Row 1: 8 Items
const row1 = [
    { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Express.js", icon: SiExpress, color: "text-foreground" },
];

// Row 2: 7 Items (Staggered Alignment)
const row2 = [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "GitHub", icon: FaGithub, color: "text-foreground" },
    { name: "Vercel", icon: SiVercel, color: "text-foreground" },
    { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]" },
    { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
    { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
];

export default function TechStack() {
    return (
        <section className="relative py-20 px-6 bg-background text-foreground overflow-hidden">
            {/* Background Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[[24px_24px] opacity-25 -z-10" />

            {/* Large Watermark Text */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-black text-muted/20 select-none pointer-events-none tracking-[0.2em] uppercase -z-10">
                TECHNOLOGIES
            </div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <div className="relative inline-block">
                    <h2 className="text-xl md:text-3xl font-extrabold tracking-wider uppercase">
                        TECHNO<span className="text-primary">LOGIES</span>
                    </h2>
                    {/* Accent Line matching theme primary color */}
                    <div className="w-10 h-1 mt-2 mx-auto rounded-full bg-purple-500" />
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    Technologies I use to build fast, scalable, and user-friendly web applications.
                </p>

                {/* Tech Icons Layout */}
                <div className="mt-16 flex flex-col items-center gap-10">

                    {/* First Row (8 Icons) */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        {row1.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={tech.name}
                                    className="group flex flex-col items-center justify-center gap-3 w-20 sm:w-24"
                                >
                                    <div className="w-20 h-20 rounded-full bg-secondary/60 border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-md">
                                        <Icon className={`text-3xl ${tech.color}`} />
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Second Row (7 Icons - Off-center alignment matching image) */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        {row2.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={tech.name}
                                    className="group flex flex-col items-center justify-center gap-3 w-20 sm:w-24"
                                >
                                    <div className="w-20 h-20 rounded-full bg-secondary/60 border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-md">
                                        <Icon className={`text-3xl ${tech.color}`} />
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
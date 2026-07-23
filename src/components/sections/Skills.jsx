"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayout, FiSettings } from "react-icons/fi";

const skillCategories = [
    {
        title: "Frontend Development",
        subtitle: "Building responsive and interactive web interfaces with modern frontend technologies...",
        categoryBadge: "CORE",
        icon: FiCode,
        iconBg: "bg-blue-500/10 text-blue-500",
        badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        dotColor: "bg-blue-500",
        skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    },
    {
        title: "Backend Development",
        subtitle: "Building secure, scalable, and efficient server-side applications and REST APIs.",
        categoryBadge: "CORE",
        icon: FiServer,
        iconBg: "bg-emerald-500/10 text-emerald-500",
        badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        dotColor: "bg-emerald-500",
        skills: ["Node.js", "Express.js", "MongoDB", "Authentication"],
    },
    {
        title: "UI / UX Design",
        subtitle: "Creating smooth, responsive, and user-focused interfaces with reusable components...",
        categoryBadge: "UI",
        icon: FiLayout,
        iconBg: "bg-amber-500/10 text-amber-500",
        badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        dotColor: "bg-amber-500",
        skills: ["Responsive Design", "Reusable Components", "Animations", "Accessibility"],
    },
    {
        title: "Tools & Workflow",
        subtitle: "Using modern development tools and workflows for efficient development and...",
        categoryBadge: "TOOLS",
        icon: FiSettings,
        iconBg: "bg-rose-500/10 text-rose-500",
        badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        dotColor: "bg-rose-500",
        skills: ["Git & GitHub", "VS Code", "Figma", "Vercel"],
    },
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.25,
                ease: "power3.out",
                clearProps: "transform,opacity", // Clears GSAP inline styles after entry so Framer Motion hover works seamlessly
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative px-6 py-20 max-w-6xl mx-auto bg-background text-foreground overflow-hidden"
        >
            {/* Background Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 -z-10" />

            {/* Large Watermark Text */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-black text-muted/20 select-none pointer-events-none tracking-[0.2em] uppercase -z-10">
                SKILLS
            </div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <div className="relative inline-block">
                    <h2 className="text-xl md:text-3xl font-extrabold tracking-wider uppercase">
                        MY <span className="text-primary">SKILLS</span>
                    </h2>
                    {/* Accent Line */}
                    <div className="w-10 h-1 mt-2 mx-auto rounded-full bg-purple-500" />
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    I enjoy building modern web applications with clean UI, responsive design, and scalable architecture while continuously learning new technologies.
                </p>

                {/* Skills Cards Grid */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {skillCategories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={index}
                                className="skill-card group flex flex-col justify-between rounded-2xl border border-border bg-secondary/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:shadow-lg"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div>
                                    {/* Card Header: Icon & Badge */}
                                    <div className="flex items-center justify-between">
                                        <div className={`p-3 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                                            <Icon className="text-xl" />
                                        </div>
                                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeBg}`}>
                                            {cat.categoryBadge}
                                        </span>
                                    </div>

                                    {/* Card Title & Description */}
                                    <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                                        {cat.title}
                                    </h3>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                        {cat.subtitle}
                                    </p>

                                    <div className="my-6 border-t border-border/80" />

                                    {/* Bullet List */}
                                    <ul className="space-y-3">
                                        {cat.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-2.5">
                                                <span className={`w-2 h-2 rounded-full shrink-0 ${cat.dotColor}`} />
                                                <span className="text-xs font-medium text-foreground/90">
                                                    {skill}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
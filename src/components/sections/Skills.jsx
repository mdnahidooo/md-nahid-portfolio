"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import skills from "@/data/skills.json";
import Image from "next/image";

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".skills-title", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.utils.toArray(".skill-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.06,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });

                const bar = card.querySelector(".progress-bar");

                gsap.fromTo(
                    bar,
                    { width: "0%" },
                    {
                        width: bar.dataset.level + "%",
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        },
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
        >
            {/* TITLE */}
            <h2 className="skills-title text-3xl md:text-4xl font-bold text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            {/* GRID */}
            <div className="mt-14 grid md:grid-cols-2 gap-6">

                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="skill-card group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:scale-[1.02] transition"
                    >

                        {/* glow background */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                            style={{
                                background: `radial-gradient(circle at top left, ${skill.color}25, transparent 60%)`
                            }}
                        />

                        {/* top row */}
                        <div className="flex items-center justify-between relative z-10">

                            <div className="flex items-center gap-3">

                                {/* ICON */}
                                {skill.iconUrl ? (
                                    <Image
                                        src={skill.iconUrl}
                                        alt={skill.name}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6"
                                    />
                                ) : (
                                    <span className="text-xl">{skill.icon}</span>
                                )}

                                <span className="font-medium">
                                    {skill.name}
                                </span>
                            </div>

                            <span className="text-sm text-muted-foreground">
                                {skill.level}%
                            </span>
                        </div>

                        {/* progress bar */}
                        <div className="mt-4 w-full h-2 rounded-full bg-white/10 overflow-hidden relative z-10">

                            <div
                                className="progress-bar h-full rounded-full"
                                data-level={skill.level}
                                style={{
                                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                                }}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // LEFT SIDE ANIMATION
            gsap.from(".about-left", {
                x: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            // ✅ FIXED CARD ANIMATION (ALL CARDS WORK NOW)
            gsap.utils.toArray(".about-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE */}
                <div className="about-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        I am a Frontend Developer focused on building modern, high-performance
                        web applications using Next.js and React.
                    </p>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        I specialize in animation-driven UI, smooth user experiences, and
                        scalable frontend architecture.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-4">

                    {/* EDUCATION */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg">🎓 Education</h3>

                        <div className="mt-3 space-y-3 text-sm text-muted-foreground">

                            <div>
                                <p className="font-medium text-foreground">
                                    Daffodil International University
                                </p>
                                <p>B.Sc in Computer Science & Engineering (CSE)</p>
                                <p>2022 – 2025 • CGPA: 3.51</p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground">
                                    Savar Cantonment Public School & College
                                </p>
                                <p>Higher Secondary Certificate (Science)</p>
                                <p>2020 • GPA: 5.00</p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground">
                                    Police Lines Adarsh High School, Tangail
                                </p>
                                <p>Secondary School Certificate (Science)</p>
                                <p>2018 • GPA: 4.89</p>
                            </div>

                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg">💼 Experience</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Working with modern frontend technologies including React, Next.js,
                            Tailwind CSS and building responsive UI systems.
                        </p>
                    </div>

                    {/* FOCUS */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg">🚀 Focus</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Creating animated, scalable and performance-optimized web
                            applications with clean architecture.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
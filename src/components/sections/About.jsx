"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

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

                    <div className="text-muted-foreground leading-relaxed text-justify">

                        <p className="mt-4">
                            I am a web developer focused on building modern, responsive, and high-performance web applications using Next.js and React. I recently completed my B.Sc in Computer Science & Engineering from Daffodil International University (December 2025), which strengthened my foundation in software development and problem-solving.
                        </p>

                        <p className="mt-4">
                            I enjoy creating clean user interfaces and smooth user experiences while continuously improving my frontend skills. Outside of development, I like playing football and staying active, which helps me maintain creativity and balance in my work.
                        </p>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-4">

                    {/* EDUCATION */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <FaUserGraduate className="text-primary" />
                            Education
                        </h3>

                        {/* TIMELINE WRAPPER */}
                        <div className="mt-6 relative pl-6">

                            {/* vertical line */}
                            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />

                            <div className="space-y-6 text-sm text-muted-foreground">

                                {/* UNIVERSITY */}
                                <div className="relative">
                                    {/* dot */}
                                    <span className="absolute -left-4.5 top-1 w-3 h-3 rounded-full bg-primary shadow-md" />

                                    <p className="font-medium text-foreground">
                                        Daffodil International University
                                    </p>
                                    <p>B.Sc in Computer Science & Engineering (CSE)</p>
                                    <p>2022 – 2025 • CGPA: 3.51</p>
                                </div>

                                {/* HSC */}
                                <div className="relative">
                                    <span className="absolute -left-4.5 top-1 w-3 h-3 rounded-full bg-blue-400 shadow-md" />

                                    <p className="font-medium text-foreground">
                                        Savar Cantonment Public School & College
                                    </p>
                                    <p>Higher Secondary Certificate (Science)</p>
                                    <p>2020 • GPA: 5.00</p>
                                </div>

                                {/* SSC */}
                                <div className="relative">
                                    <span className="absolute -left-4.5 top-1 w-3 h-3 rounded-full bg-green-400 shadow-md" />

                                    <p className="font-medium text-foreground">
                                        Police Lines Adarsh High School, Tangail
                                    </p>
                                    <p>Secondary School Certificate (Science)</p>
                                    <p>2018 • GPA: 4.89</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <FaBriefcase className="text-primary" />
                            Experience
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Working with modern frontend technologies including React, Next.js,
                            Tailwind CSS and building responsive UI systems.
                        </p>
                    </div>

                    {/* FOCUS */}
                    <div className="about-card p-6 rounded-xl bg-secondary border border-border hover:border-primary/40 transition">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <FiTarget className="text-primary" />
                            Focus
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            I am a junior developer focused on building responsive and user-friendly web applications, with a strong focus on clean code, performance, and continuous learning.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
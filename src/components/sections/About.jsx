"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";
import { motion } from "framer-motion";
import {
    FiCode,
    FiLayers,
    FiLayout,
    FiCheckCircle,
    FiExternalLink,
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const whatIDoTags = [
    { label: "WEB DEVELOPMENT", icon: FiCode },
    { label: " NEXT.JS & REACT APPS", icon: FiLayers },
    { label: "RESPONSIVE UI DESIGN", icon: FiLayout },
    { label: "PROBLEM SOLVING", icon: HiOutlineSparkles },
    { label: "CLEAN CODE", icon: FiCheckCircle },
];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in & slide up cards/content on scroll
            gsap.from(".about-animate", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                clearProps: "transform,opacity",
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
            id="about"
            ref={sectionRef}
            className="relative py-20 px-6 bg-background text-foreground overflow-hidden min-h-screen flex items-center"
        >
            {/* Background Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 -z-10" />

            {/* Large Watermark Text */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-black text-muted/20 select-none pointer-events-none tracking-[0.2em] uppercase -z-10">
                ABOUT ME
            </div>

            <div className="max-w-6xl mx-auto text-center w-full">
                {/* Section Title */}
                <div className="relative inline-block">
                    <h2 className="text-xl md:text-3xl font-extrabold tracking-wider uppercase">
                        ABOUT <span className="text-purple-500">ME</span>
                    </h2>
                    {/* Accent Line matching reference code dimensions */}
                    <div className="w-10 h-1 mt-2 mx-auto rounded-full bg-purple-500" />
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    A curious and consistent developer, dedicated to continuous learning and technical growth.
                </p>

                {/* Main Content Layout */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">

                    {/* LEFT COLUMN: Profile Image with Circular Glow & Floating Badges */}
                    <div className="about-animate lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

                            {/* Outer Circular Purple Glow & Border Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-purple-500/40 p-2 shadow-2xl shadow-purple-500/20">
                                <div className="w-full h-full rounded-full overflow-hidden relative border border-border bg-secondary">
                                    <Image
                                        src="/image/profile.png"
                                        alt="Md Panda"
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Top-Right Floating Badge */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="absolute -top-2 -right-2 sm:right-0 bg-secondary/90 border border-purple-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold text-foreground z-10"
                            >
                                <FiCode className="text-purple-500 text-sm" />
                                <span>Full-Stack Developer</span>
                            </motion.div>

                            {/* Bottom-Left Floating Badge */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="absolute -bottom-2 -left-2 sm:left-0 bg-secondary/90 border border-purple-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold text-foreground z-10"
                            >
                                <HiOutlineSparkles className="text-purple-500 text-sm" />
                                <span>Forever Learner</span>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Bio, What I Do Tags & Actions */}
                    <div className="about-animate lg:col-span-7 space-y-6">

                        {/* Greeting Header */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            Hey! I'm <span className="text-purple-500 uppercase">Md. Nahid</span>
                        </h3>

                        {/* Paragraph Bio */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            As a Web Developer building a strong foundation in the MERN stack, I focus on bringing ideas to life through robust, full-stack ecosystems. Whether I am designing responsive landing pages or tackling complex JavaScript logic, I am a fast learner dedicated to writing clean, efficient code. My consistency is fueled by public coding challenges and continuous community engagement, always looking for the next project to expand my skill set and deliver high-quality web solutions.
                        </p>

                        {/* WHAT I DO Sub-section */}
                        <div className="pt-2">
                            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                                WHAT I DO <span className="w-12 h-px bg-border inline-block" />
                            </span>

                            {/* Category Badges Grid */}
                            <div className="mt-4 flex flex-wrap gap-3">
                                {whatIDoTags.map((tag) => {
                                    const TagIcon = tag.icon;
                                    return (
                                        <motion.div
                                            key={tag.label}
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-secondary/70 border border-border text-xs font-semibold text-foreground/90 hover:border-purple-500/40 transition-colors"
                                        >
                                            <TagIcon className="text-purple-500 text-sm" />
                                            <span>{tag.label}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CONNECT WITH ME & View Resume Action */}
                        <div className="pt-4 space-y-3">
                            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                                CONNECT WITH ME
                            </span>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">

                                {/* Social Media Icons */}
                                <div className="flex items-center gap-3">
                                    {[
                                        { icon: FiGithub, href: "https://github.com/mdnahidooo", label: "GitHub" },

                                        { icon: FiLinkedin, href: "https://www.linkedin.com/in/md-nahidul-islam-nahid/", label: "LinkedIn" },

                                        // { icon: FaDiscord, href: "md_nahidooo", label: "Discord" },

                                        { icon: FiMail, href: "mailto:md.nahidofficial.cse@gmail.com", label: "Email" },
                                    ].map((social, i) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={social.label}
                                                whileHover={{ y: -3 }}
                                                className="w-10 h-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-purple-500 hover:border-purple-500/50 transition-colors"
                                            >
                                                <Icon className="text-lg" />
                                            </motion.a>
                                        );
                                    })}
                                </div>

                                {/* View Resume Primary Button */}
                                <motion.a
                                    href="https://drive.google.com/file/d/1sjHvLBBw8dW5xlzRfEZ9WlVxqFz9xmhB/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/25 transition-all"
                                >
                                    <span>View Resume</span>
                                    <FiExternalLink className="text-base" />
                                </motion.a>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
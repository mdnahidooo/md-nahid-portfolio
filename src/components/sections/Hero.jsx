"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import gsap from "@/lib/gsap";
import Link from "next/link";
import { FiArrowUp, FiSend } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ✅ FIX: ensure buttons are visible before animation
            gsap.set(".hero-btn", { opacity: 1, y: 0 });

            const tl = gsap.timeline();

            tl.from(".hero-img", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            })
                .from(
                    ".hero-title span",
                    {
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power4.out",
                        stagger: 0.1,
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-desc",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-btn",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.15,
                        clearProps: "all"
                    },
                    "-=0.2"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-50 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-50 right-1/2 translate-x-1/2 w-100 h-100 bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Profile Image */}
            <motion.div className="hero-img relative">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full p-0.5 bg-linear-to-tr from-primary via-purple-500 to-transparent">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
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

                <div className="absolute inset-0 rounded-full blur-3xl bg-primary/20 -z-10" />
            </motion.div>

            {/* Name */}
            <h1 className="hero-title mt-6 text-4xl md:text-6xl font-bold tracking-tight overflow-hidden">
                {/* <span className="inline-block">Hi,</span>{" "}
                <span className="inline-block">I’m</span>{" "} */}
                <span className="inline-block text-primary">Md.</span>{" "}
                <span className="inline-block text-primary">Nahid</span>
            </h1>


            <h1 className="hero-title mt-6 text-xl md:text-2xl font-bold tracking-tight overflow-hidden">
                <span className="inline-block text-primary">Full-Stack</span>{" "}
                <span className="inline-block text-primary">Developer</span>
            </h1>

            {/* Role */}
            <p className="hero-desc mt-4 text-muted-foreground text-sm md:text-lg max-w-xl">
                Building modern, responsive web experiences using Next.js and React with a focus on performance, usability, and clean frontend architecture.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
                <a
                    href="https://drive.google.com/file/d/191MkUJSiey3xPidkFO1Ez_VaaD5Xj3bX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="hero-btn rounded-lg px-6">
                        <FaFileAlt className="text-base" />
                        Resume
                    </Button>
                </a>

                <Link href="#contact">
                    <Button variant="outline" className="hero-btn rounded-lg px-6 flex items-center gap-2">
                        <FiSend className="text-base" />
                        Contact Me
                    </Button>
                </Link>
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <a
                href="#home"
                className="fixed bottom-6 right-6 z-50 group"
            >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                    <FiArrowUp className="text-foreground group-hover:text-primary transition" />
                </div>

                {/* glow effect */}
                <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition" />
            </a>

        </section>
    );
}
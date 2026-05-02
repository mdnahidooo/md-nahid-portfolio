"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-animate", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                },
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative mt-20 border-t border-white/10 bg-background/40 backdrop-blur-2xl"
        >
            {/* glow */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-10 items-start">

                    {/* LEFT - BRAND */}
                    <div className="footer-animate">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Md. Panda<span className="text-primary">.</span>
                        </h2>

                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                            Crafting modern, animated and high-performance web experiences
                            using Next.js, GSAP and Framer Motion.
                        </p>
                    </div>

                    {/* CENTER - NAV (FIXED CENTER ALIGN) */}
                    <div className="footer-animate flex flex-col items-center text-center">
                        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {[
                                { name: "Explore Home", href: "#home" },
                                { name: "About Me", href: "#about" },
                                { name: "Selected Work", href: "#projects" },
                                { name: "Tech Stack", href: "#skills" },
                                { name: "Let’s Connect", href: "#contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="relative hover:text-primary transition-colors group"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-primary transition-all group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT - SOCIAL (FIXED RIGHT ALIGN) */}
                    <div className="footer-animate flex flex-col items-end text-right">
                        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
                            Connect
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
                            >
                                <FaGithub className="group-hover:text-primary transition" />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition group"
                            >
                                <FaLinkedin className="group-hover:text-blue-400 transition" />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="p-3 rounded-xl bg-white/5 hover:bg-sky-500/20 transition group"
                            >
                                <FaTwitter className="group-hover:text-sky-400 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="footer-animate my-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                {/* BOTTOM */}
                <div className="footer-animate flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">

                    <p>
                        © {new Date().getFullYear()} Md. Nahid. All rights reserved.
                    </p>

                    <p className="text-primary/70">
                        Where code meets motion, and ideas become experience
                    </p>

                </div>
            </div>
        </footer>
    );
}
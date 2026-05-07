"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ModeToggle from "../ModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Community", href: "#contact" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 w-full z-50"
            >
                <div className="border-b border-border/40 bg-background/70 backdrop-blur-xl">
                    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">

                        {/* MOBILE HAMBURGER (ONLY PHONE) */}
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden mr-3"
                        >
                            <Menu size={22} />
                        </button>

                        {/* LEFT - Logo */}
                        <Link
                            href="#home"
                            className="group relative text-lg md:text-xl tracking-wide text-foreground/90 transition-colors"
                        >
                            <span className="font-[Style_Script] text-[22px] md:text-[26px]">
                                Md. Nahid
                            </span>

                            {/* signature underline stroke */}
                            <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                            {/* glow accent */}
                            <span className="absolute -right-2 top-0 text-primary opacity-60 group-hover:opacity-100 transition text-xs">
                                ✦
                            </span>
                        </Link>

                        {/* NAV LINKS (DESKTOP ONLY) */}
                        <nav className="hidden md:flex items-center gap-6 ml-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* RIGHT SIDE */}
                        <div className="ml-auto flex items-center gap-3">
                            <ModeToggle />
                            <Link href="#contact">
                                <Button className="rounded-lg px-5 hover:scale-105 transition-transform duration-300">
                                    Hire Me
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* ================= MOBILE DRAWER ================= */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${open ? "visible" : "invisible"
                    }`}
            >
                {/* overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setOpen(false)}
                />

                {/* drawer */}
                <div
                    className={`absolute left-0 top-0 h-full w-72 bg-background border-r border-border p-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* close */}
                    <button onClick={() => setOpen(false)} className="mb-6">
                        <X />
                    </button>

                    {/* links (WITH UNDERLINE ANIMATION) */}
                    <div className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="relative text-sm text-muted-foreground hover:text-primary transition group"
                            >
                                {item.name}

                                {/* underline animation */}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* SOCIAL (BOTTOM PREMIUM STYLE) */}
                    <div className="absolute bottom-6 left-6 flex gap-4">

                        <a
                            href="https://www.facebook.com/md.nahidooo/"
                            target="_blank"
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
                        >
                            <FaFacebook className="group-hover:text-blue-500 transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/md-nahidul-islam-nahid/"
                            target="_blank"
                            className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition group"
                        >
                            <FaLinkedin className="group-hover:text-blue-400 transition" />
                        </a>

                        <a
                            href="https://www.instagram.com/md_nahidooo/"
                            target="_blank"
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
                        >
                            <FaInstagram className="group-hover:text-pink-500 transition" />
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}
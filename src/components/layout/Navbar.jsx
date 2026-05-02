"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ModeToggle from "../ModeToggle";

export default function Navbar() {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Community", href: "#community" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50"
        >
            <div className="border-b border-border/40 bg-background/70 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">

                    {/* LEFT - Logo */}
                    <Link
                        href="#home"
                        className="text-xl font-serif italic tracking-wide text-foreground/90 hover:text-primary transition-colors"
                    >
                        Md. Panda<span className="text-primary">.</span>
                    </Link>

                    {/* NAV LINKS (START RIGHT AFTER LOGO) */}
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

                        <Button className="rounded-lg px-5 hover:scale-105 transition-transform duration-300">
                            Hire Me
                        </Button>

                    </div>
                </div>
            </div>
        </motion.header>
    );
}
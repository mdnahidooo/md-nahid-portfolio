"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/data/projects.json";
import { Button } from "@/components/ui/button";

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
        >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                My <span className="text-primary">Projects</span>
            </h2>

            {/* Grid */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card group rounded-xl overflow-hidden border border-border bg-secondary"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">
                                {project.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mt-2 text-justify">
                                {project.description}
                            </p>

                            {/* TECH */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 mt-6">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-md px-4"
                                >
                                    <a href={project.live} target="_blank">
                                        Live Demo
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="rounded-md px-4"
                                >
                                    <a href={project.github} target="_blank">
                                        GitHub
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
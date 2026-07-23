"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "@/lib/gsap";
import projectsData from "@/data/projectsData.json";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    const sectionRef = useRef(null);

    // Take the last 3 items and reverse them so newest appears first
    const displayProjects = projectsData.slice(-3).reverse();

    // GSAP ScrollTrigger Entrance Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".featured-card-item", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="featured-projects"
            ref={sectionRef}
            className="relative py-20 px-6 max-w-6xl mx-auto"
        >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-500">
                        Portfolio Highlight
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-1">
                        Featured <span className="text-purple-500">Projects</span>
                    </h2>
                </div>

                {/* View All Projects Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-purple-500 transition-colors group"
                >
                    <span>View All Projects</span>
                    <FiArrowRight className="transition-transform group-hover:translate-x-1 text-purple-500" />
                </Link>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProjects.map((project, index) => {
                    // Robust key fallback in case project.id is undefined or null
                    const key = project.id || project.slug || project.title || index;

                    return (
                        <div key={key} className="featured-card-item">
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
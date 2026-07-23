"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { getAllProjects } from "@/data/projectsData";
import { FiSearch, FiLayers } from "react-icons/fi";
import ProjectCard from "@/components/sections/ProjectCard";

const categories = ["All", "Full-Stack", "Front-End"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const sectionRef = useRef(null);

    const allProjects = getAllProjects();

    // Filter projects dynamically based on search & category
    const filteredProjects = allProjects.filter((project) => {
        const matchesCategory =
            selectedCategory === "All" || project.category === selectedCategory;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchQuery.toLowerCase())
            );

        return matchesCategory && matchesSearch;
    });

    // Entrance animations using GSAP ScrollTrigger
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".projects-animate", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                clearProps: "transform,opacity",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [selectedCategory, searchQuery]);

    return (
        <main
            ref={sectionRef}
            className="relative min-h-screen px-6 py-20 max-w-6xl mx-auto bg-background text-foreground overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 -z-10" />

            {/* Watermark Text */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-black text-muted/20 select-none pointer-events-none tracking-[0.2em] uppercase -z-10">
                PROJECTS
            </div>

            <div className="max-w-7xl mx-auto w-full">
                {/* Page Header */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wider uppercase">
                            ALL <span className="text-purple-500">PROJECTS</span>
                        </h1>
                        {/* Purple Accent Line */}
                        <div className="w-12 h-1 mt-2 mx-auto rounded-full bg-purple-500" />
                    </div>

                    <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                        Explore my latest web development applications, from interactive full-stack platforms to responsive front-end user interfaces.
                    </p>
                </div>

                {/* Filter Controls: Search Input & Category Badges */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border/60 pb-8">

                    {/* Category Filter Tabs */}
                    <div className="flex items-center mx-auto w-full md:w-auto bg-secondary/60 border border-border rounded-full p-0.5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-1 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap
                                        ${selectedCategory === cat
                                        ? "bg-black text-white shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input Box */}
                    {/* <div className="relative w-full md:w-72">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
                        <input
                            type="text"
                            placeholder="Search by title or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary/60 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500/60 transition-colors"
                        />
                    </div> */}

                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="projects-animate">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="mt-16 text-center py-16 rounded-3xl border border-dashed border-border/80 bg-secondary/30">
                        <FiLayers className="mx-auto text-4xl text-purple-500/60 mb-3" />
                        <h3 className="text-lg font-bold text-foreground">No Projects Found</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                            Try adjusting your search query or switching categories.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
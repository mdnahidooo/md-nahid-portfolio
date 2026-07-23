"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }) {
    const {
        id,
        title,
        subtitle,
        category,
        description,
        thumbnail,
        technologies = [],
        links = {},
    } = project;

    // Extract links matching your data structure
    const liveUrl = links?.live || project?.live || "#";
    const githubUrl =
        links?.githubClient || links?.githubServer || project?.github || "#";
    const techStack = technologies.length > 0 ? technologies : project?.tech || [];
    const imageUrl = thumbnail || project?.image || "/assets/placeholder.png";

    return (
        <motion.div
            className="project-card group flex flex-col justify-between h-110 rounded-xl overflow-hidden border border-border bg-card p-5 transition-all duration-300 hover:border-purple-500/50 shadow-md"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div>
                {/* IMAGE */}
                <div className="relative w-full h-44 overflow-hidden rounded-lg bg-muted border border-border/60">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                    {/* Title & Highlighted Category */}
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-card-foreground truncate">
                            {title}
                        </h3>

                        {/* Category Highlighted Tag (Right Side) */}
                        {category && (
                            <span className="shrink-0 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground uppercase shadow-sm">
                                {category}
                            </span>
                        )}
                    </div>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                            {subtitle}
                        </p>
                    )}

                    {/* Description - Fixed 2 lines */}
                    <p className="text-sm text-muted-foreground mt-2 text-justify line-clamp-2 leading-relaxed">
                        {description}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {techStack.slice(0, 4).map((t, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50"
                            >
                                {t}
                            </span>
                        ))}
                        {techStack.length > 4 && (
                            <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/50">
                                +{techStack.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* FOOTER BUTTONS & DETAILS LINK */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/60">
                <div className="flex gap-2">
                    <Button
                        asChild
                        size="sm"
                        className="rounded-md px-4"
                    >
                        <a href={liveUrl} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </Button>

                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-md px-4"
                    >
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </Button>
                </div>

                {/* Details Link (Far Right) */}
                <Link
                    href={`/projects/${id}`}
                    className="text-xs text-muted-foreground hover:text-purple-500 transition-colors font-medium underline underline-offset-4"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import projectsData from "@/data/projectsData.json";
import { Button } from "@/components/ui/button";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

export default function ProjectDetailsPage({ params }) {
    // Unwrap params using React.use() for Next.js App Router
    const resolvedParams = use(params);
    const projectId = resolvedParams.id;

    // Find project or fallback to first project matching sample
    const project =
        projectsData.find((p) => String(p.id) === String(projectId)) || projectsData[0];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-foreground">
                <p>Project not found.</p>
            </div>
        );
    }

    const {
        title,
        subtitle,
        category,
        description,
        longDescription,
        thumbnail,
        technologies = [],
        features = [],
        links = {},
    } = project;

    return (
        <main className="min-h-screen bg-background text-foreground py-12 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* TOP NAVIGATION */}
                <div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <FiArrowLeft className="text-base" />
                        <span>All Projects</span>
                    </Link>
                </div>

                {/* HEADER SECTION */}
                <header className="space-y-4">
                    <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                        Featured Project
                    </p>

                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                        {title}
                    </h1>

                    {/* CATEGORY & SUBTITLE BADGES */}
                    <div className="flex flex-wrap items-center gap-2">
                        {category && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full border border-border bg-muted/50 text-foreground">
                                {category}
                            </span>
                        )}
                        {subtitle && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full border border-border/60 bg-background text-muted-foreground">
                                {subtitle}
                            </span>
                        )}
                    </div>

                    {/* AUTHOR INFO & ACTION LINKS */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted border border-border">
                                <Image
                                    src="/image/profile.png" // Fallback avatar image
                                    alt="Author Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold leading-tight">Md Nahid</p>
                                <p className="text-xs text-muted-foreground">@nahid</p>
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap gap-2">
                            {links.live && (
                                <Button asChild size="sm" className="rounded-md gap-1.5 font-semibold">
                                    <a href={links.live} target="_blank" rel="noreferrer">
                                        <FiExternalLink className="text-sm" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}

                            {links.githubClient && (
                                <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="rounded-md gap-1.5"
                                >
                                    <a href={links.githubClient} target="_blank" rel="noreferrer">
                                        <FiGithub className="text-sm" />
                                        Client Repo
                                    </a>
                                </Button>
                            )}

                            {links.githubServer && (
                                <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="rounded-md gap-1.5"
                                >
                                    <a href={links.githubServer} target="_blank" rel="noreferrer">
                                        <FiGithub className="text-sm" />
                                        Server Repo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                {/* HERO IMAGE SHOWCASE */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-black shadow-2xl">
                    <Image
                        src={thumbnail || "/assets/placeholder.png"}
                        alt={title}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover object-top"
                    />
                </div>

                {/* TECH STACK SECTION */}
                <section className="space-y-3 pt-4">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs font-medium px-3.5 py-1.5 rounded-lg border border-border bg-card text-card-foreground shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* DESCRIPTION SECTION */}
                <section className="space-y-4 pt-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        Description
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {longDescription || description}
                    </p>
                </section>

                {/* FEATURES / PAGE INFO SECTION */}
                {features.length > 0 && (
                    <section className="space-y-4 pt-2">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                            Key Features
                        </h2>
                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FiCheckCircle className="shrink-0 text-purple-500 mt-1 text-base" />
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </main>
    );
}
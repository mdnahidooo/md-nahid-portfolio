"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, ChevronDown, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Certification() {
    const [expanded, setExpanded] = useState(false);

    const certData = {
        title: "MERN Stack Development (Level 1)",
        issuer: "Programming Hero (PH)",
        period: "Jan 2026 – Present",
        status: "Active Trainee (Milestone 8)",
        certLink: "https://www.programming-hero.com", // Replace with your link
        skills: ["JavaScript", "React.js", "Next.js", "Authentication", "Node.js", "MongoDB"],
    };

    return (
        <section id="certification" className="py-10 px-6 max-w-3xl mx-auto">
            {/* MINIMAL INTERACTIVE TIMELINE NODE */}
            <div className="relative pl-6 border-l-2 border-primary/40">

                {/* GLOWING NODE PIN */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="absolute -left-2.75 top-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:scale-125 transition-transform duration-300"
                    aria-label="Toggle Certification Details"
                >
                    <span className="w-2 h-2 rounded-full bg-background" />
                </button>

                {/* INLINE HEADER BAR */}
                <div
                    onClick={() => setExpanded(!expanded)}
                    className="cursor-pointer flex items-center justify-between gap-4 group"
                >
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono font-bold text-primary flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4" />
                            {certData.issuer}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground/50">•</span>
                        <h3 className="text-sm md:text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                            {certData.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            {certData.status}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                        <span>{expanded ? "Close" : "Inspect"}</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180 text-primary" : ""
                                }`}
                        />
                    </div>
                </div>

                {/* EXPANDABLE COMMAND SHEET */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 pt-4 border-t border-border/60 space-y-4">
                                {/* PROGRESS METER */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                                        <span>Program Milestone Progress</span>
                                        <span className="text-primary font-bold">Milestone 08 / 12</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full w-[66%]" />
                                    </div>
                                </div>

                                {/* DETAILS & BULLETS */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                        <span>Focusing on Next.js & Auth</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                        <span>Upcoming: Express.js & MongoDB</span>
                                    </div>
                                </div>

                                {/* TECH STACK & ACTION LINK */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                    <div className="flex flex-wrap gap-1.5">
                                        {certData.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={certData.certLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
                                    >
                                        <span>Verify Link</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
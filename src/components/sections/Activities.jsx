"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Users, Award, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Activities() {
    const activitiesData = [
        {
            id: "log-01",
            cmd: "execute --event 'Take-Off Contest 2024'",
            role: "Assistant & Event Guard",
            organization: "DIU Computer & Programming Club (DIU CPC)",
            event: "Take-Off Programming Contest",
            period: "2024",
            icon: Shield,
            tag: "Academic Leadership",
            description:
                "Assisted faculty members in supervising 50+ contest participants, maintaining real-time logistics, and ensuring strict contest discipline.",
            metrics: ["50+ Participants Supervised", "Real-Time Logistics", "Faculty Coordination"],
            logs: [
                "Maintained contest hall quiet-zone integrity.",
                "Resolved on-site participant queries and system seating logistics.",
            ],
        },
        {
            id: "log-02",
            cmd: "run --distro 'DIU CSE Fest 2023'",
            role: "Volunteer (Logistics & Distribution)",
            organization: "DIU CSE Fest 2023",
            period: "2023",
            icon: Users,
            tag: "Crowd Operations",
            description:
                "Managed t-shirt and kit distribution for 1,000+ attendees at one of Daffodil International University's largest tech gatherings.",
            metrics: ["1,000+ Kits Distributed", "100% Delivery Accuracy", "Peak Crowd Control"],
            logs: [
                "Streamlined operational check-in queue to minimize wait times.",
                "Coordinated inventory supply between volunteer groups.",
            ],
        },
        {
            id: "log-03",
            cmd: "deploy --partner 'Moonton Technology'",
            role: "Volunteer Operations",
            organization: "DIU CPC × Shanghai Moonton Technology",
            event: "Summer Carnival 2022",
            period: "2022",
            icon: Award,
            tag: "Certificate Awarded",
            highlightTag: true,
            description:
                "Supported event operations and participant coordination for an international tech carnival hosted by Moonton Technology.",
            metrics: ["International Partner", "Certificate Awarded", "Event Operations"],
            logs: [
                "Awarded formal Certificate of Appreciation for operational execution.",
                "Facilitated event flow and international representative communication.",
            ],
        },
    ];

    const [activeLog, setActiveLog] = useState(activitiesData[0]);

    return (
        <section id="activities" className="py-20 px-6 max-w-5xl mx-auto">
            {/* HEADER */}
            <div className="text-center mb-14 space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                    [System.Logs] // Leadership & Activities
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                    Impact & <span className="text-primary">Contributions</span>
                </h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Interactive system log of campus activities, event coordination, and volunteer achievements.
                </p>
            </div>

            {/* TERMINAL CONTAINER */}
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                {/* TERMINAL TOP BAR */}
                <div className="bg-muted/80 border-b border-border px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                        <span className="text-xs font-mono text-muted-foreground ml-2 hidden sm:inline-block">
                            activities_matrix.sh
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>bash --interactive</span>
                    </div>
                </div>

                {/* TERMINAL BODY GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
                    {/* LEFT COMMAND SELECTOR (4 COLS) */}
                    <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border bg-muted/20 p-4 space-y-2">
                        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3 px-2">
                            Select Execution Log:
                        </p>

                        {activitiesData.map((item) => {
                            const isSelected = activeLog.id === item.id;
                            const IconComp = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveLog(item)}
                                    className={`w-full text-left p-3.5 rounded-xl font-mono text-xs transition-all duration-300 flex items-center justify-between gap-3 ${isSelected
                                            ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20 scale-[1.02]"
                                            : "bg-card/60 hover:bg-card border border-border/50 text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    <div className="flex items-center gap-2.5 overflow-hidden">
                                        <IconComp className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{item.period} - {item.role.split(" ")[0]}</span>
                                    </div>
                                    <ChevronRight
                                        className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-0.5 opacity-100" : "opacity-40"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT DETAILED LOG CONSOLE (7 COLS) */}
                    <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-card">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLog.id}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-5"
                            >
                                {/* COMMAND PROMPT HEADER */}
                                <div className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-2 rounded-lg inline-flex items-center gap-2">
                                    <span className="text-muted-foreground">$</span>
                                    <span>{activeLog.cmd}</span>
                                </div>

                                {/* ROLE & ORGANIZATION */}
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/60">
                                            {activeLog.period}
                                        </span>
                                        {activeLog.tag && (
                                            <span
                                                className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${activeLog.highlightTag
                                                        ? "bg-primary/20 text-primary border-primary/30"
                                                        : "bg-muted text-muted-foreground border-border/40"
                                                    }`}
                                            >
                                                {activeLog.highlightTag && <Sparkles className="w-3 h-3" />}
                                                {activeLog.tag}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground">
                                        {activeLog.role}
                                    </h3>
                                    <p className="text-xs font-mono text-primary font-medium mt-0.5">
                                        {activeLog.organization} {activeLog.event && `// ${activeLog.event}`}
                                    </p>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {activeLog.description}
                                </p>

                                {/* KEY LOG ENTRY BULLETS */}
                                <div className="space-y-2 pt-2 border-t border-border/50">
                                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                                        Execution Logs:
                                    </p>
                                    {activeLog.logs.map((log, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-2 text-xs font-mono text-foreground/90 bg-muted/30 p-2.5 rounded-lg border border-border/40"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                            <span>{log}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* METRICS PILLS */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {activeLog.metrics.map((m, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-secondary/80 text-secondary-foreground border border-border/40"
                                        >
                                            #{m}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
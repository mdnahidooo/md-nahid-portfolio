"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
    const educationData = [
        {
            id: 1,
            degree: "B.Sc in Computer Science and Engineering (CSE)",
            institution: "Daffodil International University",
            period: "2022 – 2025",
            result: "CGPA – 3.51",
            location: "Dhaka, Bangladesh",
            description: "Focused on core computer science fundamentals, programming languages, software engineering principles, and database management systems.",
            highlight: true,
        },
        {
            id: 2,
            degree: "Higher Secondary School Certificate (HSC)",
            group: "Science",
            institution: "Savar Cantonment Public School and College",
            period: "2020",
            result: "GPA – 5.00",
            location: "Savar, Dhaka",
            description: "Completed higher secondary education with a strong focus on Mathematics, Physics, and Chemistry.",
            highlight: false,
        },
        {
            id: 3,
            degree: "Secondary School Certificate (SSC)",
            group: "Science",
            institution: "Police Lines Adarsh High School",
            period: "2018",
            result: "GPA – 4.89",
            location: "Tangail, Bangladesh",
            description: "Foundational education in general science and core academic subjects.",
            highlight: false,
        },
    ];

    return (
        <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
            {/* SECTION HEADER */}
            <div className="text-center mb-16 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Academic Background
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                    Educational <span className="text-primary">Qualifications</span>
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                    A breakdown of my formal academic qualifications and educational milestones.
                </p>
            </div>

            {/* TIMELINE CONTAINER */}
            <div className="relative border-l-2 border-border/60 ml-4 md:ml-32 space-y-12">
                {educationData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative pl-8 md:pl-10 group"
                    >
                        {/* Timeline Dot/Icon */}
                        <div
                            className={`absolute -left-4.25 top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${item.highlight
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-110"
                                    : "bg-background text-muted-foreground border-border group-hover:border-primary group-hover:text-primary"
                                }`}
                        >
                            <GraduationCap className="w-4 h-4" />
                        </div>

                        {/* Left Year Badge (Desktop view) */}
                        <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                                {item.period}
                            </span>
                        </div>

                        {/* MAIN CARD */}
                        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md">
                            {/* Header Info */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {item.degree}
                                    </h3>
                                    <p className="text-sm font-medium text-foreground/80 mt-0.5">
                                        {item.institution} {item.group && `(${item.group})`}
                                    </p>
                                </div>

                                {/* Result / GPA Tag */}
                                <div className="self-start sm:self-center">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                        <Award className="w-3.5 h-3.5" />
                                        {item.result}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile Period & Location */}
                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50">
                                <span className="flex md:hidden items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {item.period}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {item.location}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
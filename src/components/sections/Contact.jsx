"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// UI icons (safe)
import {
    Mail,
    MapPin,
} from "lucide-react";

// brand icons (FIXED HERE)
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

export default function Contact() {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // GSAP ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".contact-title", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".contact-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // EMAIL SEND FUNCTION
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );

            setSuccess(true);
            formRef.current.reset();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
        >

            {/* TITLE */}
            <h2 className="contact-title text-3xl md:text-4xl font-bold text-center">
                Let's work <span className="text-primary">together</span>
            </h2>

            <div className="mt-14 grid md:grid-cols-2 gap-10">

                {/* FORM */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-4"
                >

                    <input
                        name="name"
                        required
                        placeholder="Your Name"
                        className="contact-card w-full p-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                    />

                    <input
                        name="email"
                        required
                        placeholder="Your Email"
                        className="contact-card w-full p-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                    />

                    <textarea
                        name="message"
                        required
                        rows="5"
                        placeholder="Your Message"
                        className="contact-card w-full p-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                    />

                    <Button
                        type="submit"
                        className="w-full py-5 rounded-lg"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>

                    {success && (
                        <p className="text-green-500 text-sm mt-2">
                            Message sent successfully 🚀
                        </p>
                    )}
                </form>

                {/* INFO SECTION */}
                <div className="space-y-4">

                    {/* LOCATION */}
                    <div className="contact-card p-5 rounded-xl bg-secondary border border-border flex items-center gap-3">
                        <MapPin className="text-primary" />
                        <div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-sm text-muted-foreground">
                                Savar, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="contact-card p-5 rounded-xl bg-secondary border border-border flex items-center gap-3">
                        <Mail className="text-blue-400" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground">
                                md.nahidofficial.cse@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="contact-card p-5 rounded-xl bg-secondary border border-border">

                        <h3 className="font-semibold mb-4">Social Links</h3>

                        <div className="flex flex-wrap gap-3">

                            {/* GITHUB */}
                            <a
                                href="https://github.com/mdnahidooo"
                                target="_blank"
                                className="flex items-center gap-2 px-3 py-2 rounded-md bg-black/30 hover:bg-black/50 transition"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>

                            {/* LINKEDIN */}
                            <a
                                href="https://www.linkedin.com/in/md-nahidul-islam-nahid/"
                                target="_blank"
                                className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
                            >
                                <FaLinkedin size={18} />
                                LinkedIn
                            </a>

                            {/* TWITTER */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="flex items-center gap-2 px-3 py-2 rounded-md bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition"
                            >
                                <FaTwitter size={18} />
                                Twitter
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
"use client";

import { useEffect, useState } from "react";
import gsap from "@/lib/motion";

export default function PageTransition({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gsap.fromTo(
            ".page-overlay",
            { y: 0 },
            {
                y: "-100%",
                duration: 1.2,
                ease: "power4.inOut",
                delay: 0.3,
                onComplete: () => setLoading(false),
            }
        );
    }, []);

    return (
        <>
            <div className="page-overlay fixed inset-0 bg-black z-9999" />
            {children}
        </>
    );
}
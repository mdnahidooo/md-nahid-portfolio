"use client";

import Lenis from "@studio-freight/lenis";

export function setupLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        smoothTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return lenis;
}
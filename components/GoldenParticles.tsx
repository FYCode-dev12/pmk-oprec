"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
}

export function GoldenParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate particles on client side to avoid hydration errors
        const newParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // vw
            size: Math.random() * 10 + 4, // px
            duration: Math.random() * 20 + 15, // sec
            delay: Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
            {/* Soft gradient overlay for the warm cream feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 opacity-70" />

            {/* Floating Gold Orbs */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-accent blur-[2px] opacity-30"
                    initial={{
                        x: `${p.x}vw`,
                        y: "110vh",
                        width: p.size,
                        height: p.size,
                        opacity: 0,
                    }}
                    animate={{
                        y: "-10vh",
                        x: `${p.x + (Math.random() * 10 - 5)}vw`,
                        opacity: [0, 0.4, 0.4, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}

            {/* Subtle Cross Watermark (SVG) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
                <svg
                    width="800"
                    height="800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A0522D"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2v20M5 8h14" />
                </svg>
            </div>
        </div>
    );
}

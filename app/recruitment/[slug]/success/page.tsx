"use client";

import { GoldenParticles } from "@/components/GoldenParticles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const blessings = [
    "Kiranya anugerah Tuhan Yesus Kristus, dan kasih Allah, dan persekutuan Roh Kudus menyertai engkau.",
    "Tuhan memberkati engkau dan melindungi engkau; Tuhan menyinari engkau dengan wajah-Nya.",
    "Semoga pelayanan yang akan kamu kerjakan menjadi berkat bagi sesama dan kemuliaan bagi-Nya.",
    "Tetaplah berakar di dalam Kristus dan dibangun di atas Dia 🙏",
];

export default function SuccessPage() {
    const [blessing, setBlessing] = useState("");

    useEffect(() => {
        setBlessing(blessings[Math.floor(Math.random() * blessings.length)]);
    }, []);

    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-4">
            {/* Golden Light Burst */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0.8], scale: [0.8, 1.2, 1] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-[100px]" />
            </motion.div>

            <GoldenParticles />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-10 bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[3rem] shadow-2xl border border-accent/30 max-w-lg w-full text-center flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
                    className="bg-primary/10 p-4 rounded-full mb-6 border-2 border-accent/20 shadow-inner"
                >
                    <Image
                        src="/pmk-logo.png"
                        alt="PMK ITERA Logo"
                        width={100}
                        height={100}
                        className="drop-shadow-md"
                    />
                </motion.div>

                <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4 drop-shadow-sm">Puji Tuhan!</h1>
                <p className="text-xl md:text-2xl font-serif text-foreground/80 mb-8 italic">
                    Pendaftaranmu telah berhasil kami terima.
                </p>

                {blessing && (
                    <div className="bg-[#FAF6F0] px-6 py-5 rounded-2xl border border-accent/40 mb-8 w-full shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                        <p className="text-foreground font-medium italic text-lg leading-relaxed">&quot;{blessing}&quot;</p>
                    </div>
                )}

                <Button asChild className="bg-accent hover:bg-[url('/gold-texture.jpg')] hover:bg-accent/90 text-accent-foreground rounded-2xl py-6 px-8 text-lg font-bold shadow-lg transition-transform hover:scale-105 w-full">
                    <Link href="/">Kembali ke Beranda</Link>
                </Button>
            </motion.div>
        </main>
    );
}

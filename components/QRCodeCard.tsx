"use client";

import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";

export function QRCodeCard({ url, title }: { url: string; title: string }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        alert("URL disalin ke clipboard!");
    };

    const handleDownload = () => {
        const svg = document.getElementById("qr-code-svg");
        if (!svg) return;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `QR-${title.replace(/\\s+/g, '-')}.png`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <div className="flex flex-col items-center bg-card p-6 rounded-2xl border-2 border-accent shadow-md max-w-sm w-full mx-auto">
            <h3 className="font-serif font-bold text-foreground mb-4 text-center">{title}</h3>
            <div className="bg-white p-4 rounded-xl mb-6 shadow-sm">
                <QRCode
                    id="qr-code-svg"
                    value={url}
                    size={200}
                    fgColor="#2C1810"
                    bgColor="#FFFFFF"
                />
            </div>
            <div className="flex flex-wrap gap-2 justify-center w-full">
                <Button variant="outline" onClick={handleCopy} className="flex-1 opacity-90 border-accent text-accent-foreground hover:bg-secondary">
                    <Copy className="w-4 h-4 mr-2" /> Salin Link
                </Button>
                <Button variant="default" onClick={handleDownload} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" /> Unduh QR
                </Button>
            </div>
        </div>
    );
}

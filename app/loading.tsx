import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0]">
            <div className="flex flex-col items-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin text-accent" />
                <p className="text-muted-foreground font-serif animate-pulse">Memuat halaman, mohon tunggu...</p>
            </div>
        </div>
    );
}

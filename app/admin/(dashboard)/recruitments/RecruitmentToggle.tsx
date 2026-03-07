"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { createClient } from "@/lib/supabase/client";
import { revalidateAdminData } from "@/app/actions/revalidate";


export function RecruitmentToggle({ id, initialStatus }: { id: string, initialStatus: boolean }) {
    const [isOpen, setIsOpen] = useState(initialStatus);
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    const handleToggle = async (checked: boolean) => {
        if (!confirm(`Apakah Anda yakin ingin ${checked ? 'MEMBUKA' : 'MENUTUP'} pendaftaran ini?`)) return;

        setLoading(true);
        // Optimistic UI
        setIsOpen(checked);

        const { error } = await supabase
            .from("recruitments")
            .update({ is_open: checked })
            .eq("id", id);

        if (error) {
            alert("Gagal mengubah status: " + error.message);
            setIsOpen(!checked); // revert
        } else {
            // Revalidate cache since we made a mutation
            await revalidateAdminData();
            // We can't easily revalidate the specific recruitment page because we don't have the slug here,
            // but revalidateAdminData revalidates the dashboard.
            // A more robust way would be fetching the slug, but refreshing the dashboard is good for now.
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center gap-3">
            <Switch
                checked={isOpen}
                onCheckedChange={handleToggle}
                disabled={loading}
                className="data-[state=checked]:bg-primary shadow-sm"
            />
            <span className={`text-xs font-bold px-2.5 py-1 rounded-md tracking-wider ${isOpen ? 'bg-green-100 text-green-800 border-green-200' : 'bg-destructive/10 text-destructive border-destructive/20'} border`}>
                {isOpen ? "BUKA" : "TUTUP"}
            </span>
        </div>
    );
}

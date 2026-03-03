"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function SignOutButton() {
    const router = useRouter();
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <Button onClick={handleSignOut} variant="outline" size="sm" className="border-accent text-foreground hover:bg-highlight rounded-xl">
            <LogOut className="w-4 h-4 md:mr-2 text-destructive" />
            <span className="hidden md:inline">Keluar</span>
        </Button>
    );
}

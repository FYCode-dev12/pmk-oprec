import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    return createBrowserClient(
        process.env.SUPABASE_URL || "https://dummy.supabase.co",
        process.env.SUPABASE_ANON_KEY || "dummy"
    )
}

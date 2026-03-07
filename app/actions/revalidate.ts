"use server";

import { revalidatePath } from "next/cache";

export async function revalidateRecruitment(slug: string) {
    // Revalidate the specific recruitment page
    revalidatePath(`/recruitment/${slug}`);
    // Revalidate the landing page to refresh the active recruitments list
    revalidatePath(`/`);
}

export async function revalidateAdminData(recruitmentId?: string) {
    // Revalidate dashboard stats
    revalidatePath(`/admin/dashboard`);
    // Revalidate recruitments list
    revalidatePath(`/admin/recruitments`);

    // If a specific recruitment ID is provided (e.g., new submission), revalidate its applicants list
    if (recruitmentId) {
        revalidatePath(`/admin/recruitments/${recruitmentId}/applicants`);
    }
}

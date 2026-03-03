import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

interface RecruitmentProps {
    slug: string;
    title: string;
    description: string;
    closeDate: string;
}

export function RecruitmentCard({ slug, title, description, closeDate }: RecruitmentProps) {
    const deadline = new Date(closeDate);
    const isClosingSoon = deadline.getTime() - new Date().getTime() < 3 * 24 * 60 * 60 * 1000; // 3 days

    return (
        <Card className="flex flex-col border-[#D4AF37] bg-[#FAF6F0] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent" />
            <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">{title}</CardTitle>
                <CardDescription className="line-clamp-2 text-muted-foreground">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-foreground/80 mb-2 font-medium">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Ditutup: {deadline.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                {isClosingSoon && (
                    <div className="flex items-center text-xs text-destructive font-semibold bg-destructive/10 w-fit px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 mr-1" /> Segera Ditutup
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl group-hover:scale-[1.02] transition-transform">
                    <Link href={`/recruitment/${slug}`}>
                        Daftar Sekarang <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

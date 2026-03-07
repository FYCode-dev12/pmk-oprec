export default function RecruitmentLoading() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full border border-border/40 shadow-xl rounded-3xl p-6 md:p-12 space-y-8 animate-pulse bg-white/50">
                <div className="flex items-center justify-center -mt-16 sm:-mt-20 mb-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/20" />
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="w-1/2 h-8 rounded-lg bg-accent/20" />
                    <div className="w-3/4 h-4 rounded-full bg-border/50" />
                    <div className="w-2/3 h-4 rounded-full bg-border/50" />
                </div>
                <div className="w-full mt-10 p-6 bg-highlight/20 border border-accent/20 rounded-2xl flex flex-col space-y-3">
                    <div className="w-full h-10 rounded-xl bg-primary/10" />
                    <div className="w-full h-10 rounded-xl bg-primary/10" />
                    <div className="w-full h-10 rounded-xl bg-primary/10" />
                    <div className="w-full h-24 rounded-xl bg-primary/10 mt-6" />
                </div>
                <div className="pt-6 w-full flex justify-end">
                    <div className="w-32 h-12 rounded-xl bg-accent/40" />
                </div>
            </div>
        </div>
    );
}

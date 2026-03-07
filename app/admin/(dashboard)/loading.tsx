export default function AdminDashboardLoading() {
    return (
        <div className="space-y-8 p-4 md:p-6 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 mb-4 border-b border-border animate-pulse">
                <div className="space-y-2">
                    <div className="w-48 h-8 rounded-xl bg-primary/20" />
                    <div className="w-64 h-4 rounded-md bg-border/50" />
                </div>
                <div className="w-full md:w-32 h-10 rounded-xl bg-accent/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-white rounded-2xl shadow-sm border border-border/50 p-6 flex flex-col justify-between">
                        <div className="w-24 h-4 rounded-md bg-muted" />
                        <div className="w-16 h-10 rounded-lg bg-primary/10" />
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white h-auto sm:h-96 rounded-3xl shadow-sm border border-border/50 p-6 animate-pulse space-y-4">
                <div className="w-40 h-6 bg-border/50 rounded-lg mb-6" />
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-border/30">
                        <div className="space-y-2">
                            <div className="w-48 h-5 bg-border/40 rounded-md" />
                            <div className="w-32 h-4 bg-muted/60 rounded-md" />
                        </div>
                        <div className="w-24 h-8 bg-highlight/30 rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
}

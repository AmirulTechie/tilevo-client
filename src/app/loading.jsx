export default function Loading() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">

            {/* Animated tile grid */}
            <div className="grid grid-cols-2 gap-1.5">
                <div className="w-6 h-6 rounded-sm bg-gray-200 animate-pulse" style={{ animationDelay: "0ms" }} />
                <div className="w-6 h-6 rounded-sm bg-gray-300 animate-pulse" style={{ animationDelay: "150ms" }} />
                <div className="w-6 h-6 rounded-sm bg-gray-300 animate-pulse" style={{ animationDelay: "300ms" }} />
                <div className="w-6 h-6 rounded-sm bg-gray-200 animate-pulse" style={{ animationDelay: "450ms" }} />
            </div>

            {/* Label */}
            <p className="text-xs text-gray-400 tracking-widest uppercase">
                Loading
            </p>

        </div>
    );
}
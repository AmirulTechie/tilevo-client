import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">

            {/* Large muted 404 */}
            <p className="text-[120px] md:text-[180px] font-medium text-gray-100 leading-none select-none tracking-tighter">
                404
            </p>

            {/* Tile icon */}
            <div className="grid grid-cols-2 gap-1.5 mb-8 -mt-6">
                <div className="w-7 h-7 rounded-sm bg-gray-200" />
                <div className="w-7 h-7 rounded-sm bg-gray-300" />
                <div className="w-7 h-7 rounded-sm bg-gray-300" />
                <div className="w-7 h-7 rounded-sm bg-gray-100 border border-dashed border-gray-300" />
            </div>

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-3">
                This tile is missing.
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
                The page you are looking for does not exist or has been moved.
                Let`s get you back to the collection.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                    href="/"
                    className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors duration-150"
                >
                    Back to home
                </Link>
                <Link
                    href="/all-tiles"
                    className="px-6 py-2.5 bg-transparent text-gray-600 text-sm border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors duration-150"
                >
                    Browse tiles
                </Link>
            </div>

            {/* Subtle brand */}
            <p className="mt-16 text-xs text-gray-300 tracking-widest uppercase">
                Tilevo
            </p>
        </div>
    );
}
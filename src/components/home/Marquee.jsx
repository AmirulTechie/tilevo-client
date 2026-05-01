import Marquee from "react-fast-marquee";

const marqueeItems = [
    { label: "New Arrivals", value: "Apollo BEIGE" },
    { label: "Weekly Feature", value: "Aston Series BLACK" },
    { label: "Editor's Pick", value: "Classic Series WHITE" },
    { label: "New Arrivals", value: "Matte Stone Grey" },
    { label: "Trending Now", value: "Arctic White Gloss" },
    { label: "Just Dropped", value: "Obsidian Black Matte" },
    { label: "Community Favourite", value: "Sandstone Beige" },
];

export default function TilevoMarquee() {
    return (
        <div className="border-y border-gray-200 bg-gray-50 py-3 overflow-hidden">
            <Marquee speed={40} gradient={false} pauseOnHover>
                {marqueeItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 mx-8">
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                            {item.label}
                        </span>
                        <span className="text-sm text-gray-800">
                            {item.value}
                        </span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
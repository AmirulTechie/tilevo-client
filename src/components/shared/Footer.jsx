import Link from "next/link";

const footerLinks = {
    Pages: [
        { label: "Home", href: "/" },
        { label: "All Tiles", href: "/all-tiles" },
        { label: "My Profile", href: "/my-profile" },
    ],
    Company: [
        { label: "About", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Privacy Policy", href: "#" },
    ],
    Follow: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter / X", href: "#" },
    ],
};

export default function Footer() {
    return (
        <div className="bg-gray-50 border-t border-gray-200 pt-12 pb-6 px-6 md:px-10 lg:px-16">

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

                <div className="col-span-2 md:col-span-1">
                    <p className="text-base font-medium text-gray-900 mb-2 tracking-tight">
                        Tilevo
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        Discover and explore premium tile collections for every space and style.
                    </p>
                </div>

                {Object.entries(footerLinks).map(([group, links]) => (
                    <div key={group}>
                        <p className="text-xs font-medium text-gray-900 uppercase tracking-widest mb-4">
                            {group}
                        </p>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Tilevo. All rights reserved.
                </p>

                <div className="flex items-center gap-5">
                    {["Instagram", "Facebook", "Twitter"].map((platform) => (
                        <Link
                            key={platform}
                            href="#"
                            className="text-xs text-gray-400 hover:text-gray-700 transition-colors duration-150"
                        >
                            {platform}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
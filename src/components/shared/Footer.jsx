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

            {/* Contact Us Section */}
            <div className="max-w-6xl mx-auto border-t border-gray-200 pt-8 mb-8">
                <p className="text-xs font-medium text-gray-900 uppercase tracking-widest mb-4">
                    Contact Us
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
                        </svg>
                        <div>
                            <p className="text-xs text-gray-400 mb-0.5">Email</p>
                            <a href="mailto:hello@tilevo.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150">
                                hello@tilevo.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <div>
                            <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                            <a href="tel:+11234567890" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150">
                                +1 (123) 456-7890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>
                            <p className="text-xs text-gray-400 mb-0.5">Address</p>
                            <p className="text-sm text-gray-500">
                                123 Tile Street, Suite 4<br />New York, NY 10001
                            </p>
                        </div>
                    </div>
                </div>
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
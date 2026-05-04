'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const NavBar = () => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user ?? null;
    return (
        <header className="w-full border-b border-stone-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

                <Link
                    href="/"
                    className="text-2xl font-medium text-stone-900 tracking-tight shrink-0 md:text-3xl"
                >
                    Tilevo
                </Link>

                <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <NavLink href="/">
                        <span className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                            Home
                        </span>
                    </NavLink>
                    <NavLink href="/all-tiles">
                        <span className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                            All Tiles
                        </span>
                    </NavLink>
                    <NavLink href="/my-profile">
                        <span className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                            My Profile
                        </span>
                    </NavLink>
                </nav>

                <div className="flex items-center gap-3">

                    <div className="hidden lg:flex items-center gap-3">
                        {
                            isPending ? (<span className="loading loading-dots loading-md"></span>) 
                            :
                            user ? (
                            <>
                                {/* Avatar */}
                                <h2>Hello, {user.name}</h2>
                                <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center shrink-0 hover:cursor-pointer">
                                    {user.image ? (
                                        <Link href="/my-profile"><Image src={user.image} alt={user.name} width={50} height={50} className="w-full h-full object-cover" /></Link>
                                    ) : (
                                        <span className="text-xs font-medium text-stone-500">
                                            {user.name?.[0]?.toUpperCase() ?? 'U'}
                                        </span>
                                    )}
                                </div>
                                {/* Logout */}
                                <Link href="/"> 
                                            <button className="text-sm text-stone-500 border border-stone-200 px-4 py-1.5 rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all cursor-pointer" onClick={async() =>await authClient.signOut({
                                            fetchOptions: {
                                                            onSuccess: () => {
                                                            router.push("/login"); // redirect to login page
                                                                            },
                                                                                },
                                                                                    })}>
                                    Log out
                                </button>
                                </Link>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="text-sm font-medium bg-stone-900 text-white px-5 py-1.5 rounded-full hover:bg-stone-700 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
                        onClick={() => setMobileOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-px w-5 bg-stone-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-0.75' : ''}`} />
                        <span className={`block h-px bg-stone-700 transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-3.5'}`} />
                        <span className={`block h-px w-5 bg-stone-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.25' : ''}`} />
                    </button>
                </div>
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-stone-100 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col px-6 py-4 gap-1 bg-white">
                    <NavLink href="/">
                        <span
                            className="block text-sm text-stone-600 hover:text-stone-900 py-2.5 border-b border-stone-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </span>
                    </NavLink>
                    <NavLink href="/all-tiles">
                        <span
                            className="block text-sm text-stone-600 hover:text-stone-900 py-2.5 border-b border-stone-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            All Tiles
                        </span>
                    </NavLink>
                    <NavLink href="/my-profile">
                        <span
                            className="block text-sm text-stone-600 hover:text-stone-900 py-2.5 border-b border-stone-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            My Profile
                        </span>
                    </NavLink>

                    <div className="pt-3 pb-1">
                        {user ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center">
                                        {user.image ? (
                                            <Image src={user.image} alt={user.name} width={50} height={50} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-xs font-medium text-stone-500">
                                                {user.name?.[0]?.toUpperCase() ?? 'U'}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm text-stone-700">{user.name}</span>
                                </div>
                                <button className="text-sm text-stone-500 border border-stone-200 px-4 py-1.5 rounded-full hover:bg-stone-50 transition-all">
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMobileOpen(false)}
                                className="block w-full text-center text-sm font-medium bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
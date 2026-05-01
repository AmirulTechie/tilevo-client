"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <Link href={href} className={`${isActive && "text-blue-400 underline"}`}>
            {children}
        </Link>
    );
};

export default NavLink;
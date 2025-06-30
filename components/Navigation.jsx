'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        {href: '/', label: 'Home', index: '00'},
        {href: '/destination', label: 'Destination', index: '01'},
        {href: '/crew', label: 'Crew', index: '02'},
        {href: '/technology', label: 'Technology', index: '03'},
    ];

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <a className="skip-to-content" href="#main">
                Skip to content
            </a>
            <header className="primary-header flex">
                <div>
                    <Image
                        src="/assets/shared/logo.svg"
                        alt="space tourism logo"
                        className="logo"
                        width={50}
                        height={50}
                    />
                </div>

                <button
                    type="button"
                    className="mobile-nav-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}>
                    <span className="sr-only">Menu</span>
                </button>

                <nav>
                    <ul
                        id="primary-navigation"
                        data-visible={menuOpen}
                        className="primary-navigation underline-indicators flex">
                        {navItems.map(({href, label, index}) => (
                            <li
                                key={href}
                                className={pathname === href ? 'active' : ''}>
                                <Link
                                    href={href}
                                    className="ff-sans-cond uppercase text-white letter-spacing-2">
                                    <span aria-hidden="true">{index}</span>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

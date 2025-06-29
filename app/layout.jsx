'use client';
import '@/app/ui/index.css';
import Navigation from '@/components/Navigation';
import {usePathname} from 'next/navigation';

export default function RootLayout({children}) {
    const pathname = usePathname();
    const classToUse =
        pathname === '/'
            ? 'home'
            : pathname === '/destination'
            ? 'destination'
            : pathname === '/crew'
            ? 'crew'
            : pathname === '/technology'
            ? 'technology'
            : '';

    return (
        <html lang="en">
            <body className={classToUse}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

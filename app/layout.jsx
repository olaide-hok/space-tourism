'use client';
import '@/app/ui/index.css';
import Navigation from '@/components/Navigation';
import {usePathname} from 'next/navigation';
import {Bellefair, Barlow_Condensed, Barlow} from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--ff-sans-cond',
    display: 'swap',
});

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--ff-sans-normal',
    display: 'swap',
});

const bellefair = Bellefair({
    subsets: ['latin'],
    weight: ['400'],
    variable: ' --ff-serif',
    display: 'swap',
});

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
        <html
            lang="en"
            className={`${barlowCondensed.variable} ${barlow.variable} ${bellefair.variable}`}>
            <title>Space Tourism</title>
            <body className={classToUse}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

import '@/app/ui/index.css';
import Navigation from '@/components/Navigation';

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className="home">
                <Navigation />
                {children}
            </body>
        </html>
    );
}

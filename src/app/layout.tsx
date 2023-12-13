import SessionProvider from '@/components/session-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: process.env.APP_NAME,
    description: 'Starterkir for NextJS 14 with authentication.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn('max-w-screen-2xl font-sans text-[0.900rem]/[1.35rem] antialiased', figtree.className)}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <SessionProvider>{children}</SessionProvider>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}

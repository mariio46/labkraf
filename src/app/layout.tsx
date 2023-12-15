import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Labkraf',
    description: 'Smart and Creative Solution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn('max-w-screen-2xl text-[0.900rem]/[1.35rem] antialiased', GeistSans.className)}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}

import ResponsiveNavigation from '@/components/responsive-navigation';
import SideNavigation from '@/components/side-navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <div className='flex'>
            <ResponsiveNavigation />
            <SideNavigation />
            <main className='min-h-screen w-full bg-accent/40 px-2 py-36 lg:w-4/5 lg:max-w-[80%] lg:px-8 lg:py-24'>
                {children}
            </main>
        </div>
    );
}

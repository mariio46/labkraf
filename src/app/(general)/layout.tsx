import SideNavigation from '@/components/side-navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <div className='flex'>
            <SideNavigation />
            <main className='min-h-screen w-full px-2 py-32 lg:w-4/5 lg:max-w-[80%] lg:px-8 lg:py-24'>{children}</main>
        </div>
    );
}

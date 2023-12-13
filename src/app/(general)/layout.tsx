import SideNavigation from '@/components/side-navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <div className='flex'>
            <SideNavigation />
            <main className='min-h-screen w-4/5 max-w-[80%] px-8 py-32 lg:py-24'>{children}</main>
        </div>
    );
}

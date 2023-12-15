import { ResponsiveApplicationLogo } from './responsive-application-logo';
import ResponsiveNavigationLink from './responsive-navigation-link';

export default function ResponsiveNavigation() {
    return (
        <header className='relative z-40 flex lg:hidden'>
            <div className='fixed left-1/2 top-0 w-full -translate-x-1/2 bg-transparent px-2 backdrop-blur-[2px]'>
                <div className='mt-5 flex flex-col items-center gap-3 lg:hidden'>
                    <div className='flex items-center justify-center'>
                        <ResponsiveApplicationLogo />
                    </div>
                    <nav className='flex w-full flex-col items-center justify-center rounded-full'>
                        <div className='flex w-auto items-center justify-center gap-2 rounded-full bg-accent p-[2px]'>
                            <ResponsiveNavigationLink href={'/'}>Explore</ResponsiveNavigationLink>
                            <ResponsiveNavigationLink href={'/about'}>About</ResponsiveNavigationLink>
                            <ResponsiveNavigationLink href={'/services'}>Services</ResponsiveNavigationLink>
                            <ResponsiveNavigationLink href={'/contact'}>Contact </ResponsiveNavigationLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

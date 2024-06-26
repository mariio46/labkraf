import { menus } from '@/lib/data/menus';
import { ApplicationLogo } from './application-logo';
import { Icon } from './icon';
import { SideNavigationLink } from './side-navigation-link';
import { ToggleTheme } from './theme-toggle';

export default function SideNavigation() {
    return (
        <nav className='hidden w-80 shrink-0 border-r lg:flex'>
            <div className='fixed flex h-screen w-80 shrink-0 flex-col bg-accent/50'>
                <div className='p-6'>
                    <div className='flex w-full items-center justify-end'>
                        <ApplicationLogo />
                    </div>
                </div>
                <div className='mb-8 flex h-full flex-1 flex-col justify-center space-y-3 overflow-y-auto'>
                    {menus.map((menu, i) => (
                        <SideNavigationLink key={i} href={menu.url} className='w-fit'>
                            {menu.name}
                            <Icon name={menu.icon} />
                        </SideNavigationLink>
                    ))}
                </div>
                <div className='px-6 py-3'>
                    <div className='flex items-center justify-end'>
                        <ToggleTheme />
                    </div>
                </div>
            </div>
        </nav>
    );
}

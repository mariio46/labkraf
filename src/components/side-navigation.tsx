import { menus } from '@/lib/data/menus';
import { SideNavigationLink } from './side-navigation-link';
import { Icon } from './icon';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';
import ApplicationLogo from './brands';

export default function SideNavigation() {
    return (
        <nav className='w-1/5 max-w-[20%] border-r'>
            <div className='fixed flex h-screen w-1/5 flex-col'>
                <div className='p-6'>
                    <div className='flex w-full items-center justify-end'>
                        {/* <Image
                            src={'/svg/labkraf-logo.svg'}
                            alt='Labkraf Logo'
                            width={1840}
                            height={574}
                            className='h-14 w-auto text-foreground'
                        /> */}
                        <ApplicationLogo />
                    </div>
                </div>
                <div className='flex h-full flex-1 flex-col justify-center space-y-3 overflow-y-auto'>
                    {menus.map((menu, i) => (
                        <SideNavigationLink key={i} href={menu.url} className='w-fit'>
                            {menu.name}
                            <Icon name={menu.icon} />
                        </SideNavigationLink>
                    ))}
                </div>
                <div className='px-6 py-3'>
                    <div className='flex w-full items-center justify-end'>
                        <ThemeToggle className='h-[2.5rem] w-[2.5rem]' />
                    </div>
                </div>
            </div>
        </nav>
    );
}

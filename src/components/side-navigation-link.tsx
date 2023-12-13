'use client';

import { cn } from '@/lib/utils';
import { NavLinkType } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlankLink } from './blank-link';

type SideNavigationSocialLinkType = React.LiHTMLAttributes<HTMLLIElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const SideNavigationLink = ({ href, className, children, ...props }: NavLinkType) => {
    const pathname: string = usePathname();
    const active: boolean = href === pathname;

    return (
        <div className='flex justify-end'>
            <Link
                href={href}
                className={cn(
                    'mr-4 flex items-center justify-end gap-x-2 rounded-full px-6 py-2 text-end text-base capitalize tracking-tight hover:bg-accent hover:text-foreground [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5]',
                    active ? 'bg-accent font-semibold text-foreground' : 'text-muted-foreground',
                    className,
                )}
                {...props}>
                {children}
                {/* {active && <span className='absolute bottom-0 right-0 w-full border-b' />} */}
            </Link>
        </div>
    );
};

export const SideNavigationSocialLink = ({ href, className, children, ...props }: SideNavigationSocialLinkType) => {
    return (
        <li className='-mx-4'>
            <BlankLink
                href={href}
                className={cn(
                    'flex items-center gap-x-2 rounded-md px-4 py-2 text-sm capitalize tracking-tight text-muted-foreground hover:bg-accent hover:text-foreground [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.3]',
                    className,
                )}
                {...props}>
                {children}
            </BlankLink>
        </li>
    );
};

'use client';

import { cn } from '@/lib/utils';
import { NavLinkType } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResponsiveNavigationLink({ href, className, ...props }: NavLinkType) {
    const pathname: string = usePathname();
    const active: boolean = href === pathname;
    return (
        <Link
            href={href}
            className={cn(
                'rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 ease-linear hover:bg-white dark:hover:bg-black',
                active && 'bg-white dark:bg-black ',
                className,
            )}
            {...props}
        />
    );
}

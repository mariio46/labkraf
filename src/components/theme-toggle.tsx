'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { TablerIconProps } from '@/types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icon } from './icon';

interface ThemeToggleProps {
    className?: string;
    align?: 'center' | 'start' | 'end';
}

interface ThemeVariantType extends TablerIconProps {
    label: string;
    action: string;
}

const ThemeVariant = [
    {
        label: 'Light',
        action: 'light',
        icon: 'IconSunLow',
    },
    {
        label: 'Dark',
        action: 'dark',
        icon: 'IconMoon',
    },
    {
        label: 'System',
        action: 'system',
        icon: 'IconDeviceDesktop',
    },
] satisfies ThemeVariantType[];

export function ThemeToggle({ className, align = 'start' }: ThemeToggleProps) {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    const IconName =
        theme === 'light'
            ? 'IconSunLow'
            : theme === 'dark'
              ? 'IconMoon'
              : theme === 'system'
                ? 'IconDeviceDesktop'
                : 'IconSunLow';

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    size='icon'
                    className={cn('h-[2rem] w-[2rem] rounded-full !outline-none', className)}>
                    <Icon name={IconName} />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={align} className='w-40'>
                {ThemeVariant.map((item, i) => (
                    <DropdownMenuItem key={i} onClick={() => setTheme(item.action)} className='justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Icon name={item.icon} />
                            {item.label}
                        </div>
                        {theme === item.action && <Icon name='IconCheck' className='h-4 w-4 stroke-2' />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

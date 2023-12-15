import type * as icons from '@tabler/icons-react';
import type { Route } from 'next';
import type { LinkProps } from 'next/link';

export interface NavLinkType extends LinkProps {
    href: Route | URL;
    className?: string;
    children: React.ReactNode;
}

export type Children = {
    children: React.ReactNode;
};

export interface TablerIconProps {
    icon?: keyof typeof icons;
}

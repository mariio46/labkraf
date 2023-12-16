import { cn } from '@/lib/utils';
import { NavLinkType, TablerIconProps } from '@/types';
import Link from 'next/link';
import { Icon } from './icon';

interface BlankLinkType extends React.AnchorHTMLAttributes<HTMLAnchorElement>, TablerIconProps {}

export function BlankLink({ children, className, icon, ...props }: BlankLinkType) {
    return (
        <a target='_blank' rel='noopener noreferrer' className={cn(className)} {...props}>
            {icon && <Icon name={icon} />}
            {children}
        </a>
    );
}

type SocialBlankLinkType = NavLinkType & TablerIconProps;

export const SocialBlankLink = ({ href, className, icon, ...props }: SocialBlankLinkType) => {
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={cn('group rounded-full p-1 transition-colors duration-300 hover:bg-brand', className)}
            {...props}>
            <Icon
                name={icon}
                className='stroke-[1.5] text-muted-foreground transition-colors duration-300 group-hover:text-white dark:group-hover:text-black'
            />
        </Link>
    );
};

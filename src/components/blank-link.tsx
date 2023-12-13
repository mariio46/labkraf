import { cn } from '@/lib/utils';
import { TablerIconProps } from '@/types';
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

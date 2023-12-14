import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Children } from '@/types';

interface TooltipInfoProps extends Children {
    className?: string;
    content: string;
}

export const TooltipInfo = ({ children, content, className }: TooltipInfoProps) => {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                    {/* <Icon
                        name='IconPointFilled'
                        className={cn('absolute -left-2 -top-2 z-[39] animate-pulse text-orange-500', className)}
                    /> */}
                </TooltipTrigger>
                <TooltipContent className='border bg-background text-foreground'>
                    <p className={cn(className)}>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

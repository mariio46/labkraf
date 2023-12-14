import { cn } from '@/lib/utils';

export const PrimaryParagraph = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p
            className={cn(
                'text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-muted-foreground lg:text-[1.063rem]',
                className,
            )}
            {...props}
        />
    );
};

export function SecondaryParagraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                'text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-muted-foreground lg:text-base',
                className,
            )}
            {...props}
        />
    );
}

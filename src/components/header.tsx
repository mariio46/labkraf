import { cn } from '@/lib/utils';

export const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('flex flex-col tracking-wide', className)} {...props} />;
};

export const HeaderTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            className={cn(
                'bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-[2.5rem]/[3.5rem] font-extrabold tracking-[-0.025em] text-transparent md:text-[2.9rem]/[4rem] lg:text-[3.438rem]/[1.2]',
                className,
            )}
            {...props}
        />
    );
};

export const HeaderDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={cn('text-lg font-semibold text-muted-foreground md:text-xl lg:text-2xl', className)} {...props} />
    );
};

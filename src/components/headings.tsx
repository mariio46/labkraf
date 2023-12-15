import { cn } from '@/lib/utils';

export const PrimaryHeading = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <h1 className={cn('text-3xl font-bold text-foreground', className)} {...props} />;
};

export const SecondaryHeading = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <h2 className={cn('text-xl font-semibold text-foreground lg:text-2xl', className)} {...props} />;
};

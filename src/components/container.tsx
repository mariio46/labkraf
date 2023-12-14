import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('mt-7 max-w-2xl', className)} {...props} />;
};

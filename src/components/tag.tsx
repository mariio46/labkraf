import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type TagProps = ImageProps & React.HTMLAttributes<HTMLSpanElement> & { value?: string };
interface BrandTagType extends React.HTMLAttributes<HTMLSpanElement> {
    value?: string;
}

export const Tag = ({ src, alt, className, children, value, ...props }: TagProps) => {
    return (
        <BrandTag>
            <TagImage src={src} alt={alt} className={cn(className)} {...props} />
            {value ?? children}
        </BrandTag>
    );
};

export const TagImage = ({ src, alt, className, ...props }: ImageProps) => {
    return <Image src={src} alt={alt} width={500} height={500} className={cn('h-3.5 w-3.5', className)} {...props} />;
};

export const BrandTag = ({ className, value, children, ...props }: BrandTagType) => {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-tight text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                className,
            )}
            {...props}>
            {value ?? children}
        </span>
    );
};

import { Container } from '@/components/container';
import { SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { BrandTag } from '@/components/tag';
import { HomeServices } from '@/lib/data/services';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function HomeServicesCollection() {
    return (
        <Container className='mt-16 w-full max-w-none lg:mt-20'>
            <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                <Icon name='IconStars' className='h-7 w-7 stroke-2 text-brand' />
                Layanan Kami
            </SecondaryHeading>
            <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
                {HomeServices.map((service, i) => (
                    <div
                        key={i}
                        className='flex w-full flex-col items-center justify-start gap-4 rounded-md p-4 transition-colors duration-300 hover:bg-accent/50 md:max-w-4xl md:flex-row'>
                        <Image
                            src={service.image}
                            loading='lazy'
                            alt={service.name}
                            width={2560}
                            height={1706}
                            className={cn(
                                'aspect-square h-full w-full rounded object-cover transition-transform duration-300 md:h-44 md:w-44',
                                service.image_class,
                            )}
                        />
                        <div className='flex h-full w-full flex-col justify-center'>
                            <h1 className='text-lg font-bold'>{service.name}</h1>
                            <p className='mb-4 mt-2 line-clamp-3 text-sm tracking-wide text-muted-foreground md:line-clamp-none'>
                                {service.description}
                            </p>
                            <div className='flex items-center gap-2'>
                                <BrandTag className='gap-x-1 border-muted-foreground/20 text-[0.65rem]/[1rem]'>
                                    {`${service.total_offer} Penawaran`}
                                </BrandTag>
                                <BrandTag className='gap-x-1 border-muted-foreground/20 text-[0.65rem]/[1rem]'>
                                    {`${service.total_project} Project`}
                                </BrandTag>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

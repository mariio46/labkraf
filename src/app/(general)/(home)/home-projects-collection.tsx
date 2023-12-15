import { Container } from '@/components/container';
import { SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { TagImage } from '@/components/tag';
import { TooltipInfo } from '@/components/tooltip-info';
import { HomeProjects } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function HomeProjectsCollection() {
    return (
        <Container className='mt-32 w-full max-w-none'>
            <SecondaryHeading className='inline-flex items-center gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 bg-clip-text text-transparent'>
                <Icon name='IconDeviceLaptop' className='h-7 w-7 stroke-[1.5] text-primary' />
                Project Terbaru
            </SecondaryHeading>
            <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1'>
                {HomeProjects.map((project, i) => (
                    <div
                        key={i}
                        className='group flex w-full flex-col items-start justify-start gap-4 rounded-md p-4 transition-colors duration-300 hover:bg-accent xl:max-w-4xl xl:flex-row'>
                        <Image
                            src={project.image}
                            loading='lazy'
                            alt={project.name}
                            width={2560}
                            height={1706}
                            className='aspect-video h-auto w-auto rounded object-cover transition-transform duration-300 lg:group-hover:-rotate-3 lg:group-hover:scale-90 xl:h-44'
                        />
                        <div className='flex h-full w-full flex-col'>
                            <h1 className='text-lg font-bold'>{project.name}</h1>
                            <p className='mb-4 mt-2 line-clamp-3 flex-1 text-sm tracking-wide text-muted-foreground xl:line-clamp-none'>
                                {project.description}
                            </p>
                            <div className='flex items-center justify-start'>
                                <TooltipInfo content={project.category.label}>
                                    <TagImage
                                        src={project.category.image}
                                        alt={project.category.label}
                                        className={cn('aspect-square h-8 w-8 rounded', project.category.image_class)}
                                    />
                                </TooltipInfo>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

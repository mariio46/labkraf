import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { PrimaryParagraph } from '@/components/paragraph';
import { BrandTag, TagImage } from '@/components/tag';
import { TooltipInfo } from '@/components/tooltip-info';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='h-[1000rem]'>
            <Header>
                <SecondaryHeading>Halo, Kami Labkraf.id</SecondaryHeading>
                <PrimaryHeading className='my-5 max-w-4xl bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 bg-clip-text text-4xl text-transparent'>
                    Berkolaborasi dengan mitra untuk capai tujuan bersama.
                </PrimaryHeading>
                <PrimaryParagraph className='max-w-2xl lg:text-base'>
                    Kami merupakan sebuah epicentrum kreatif yang fokus pada sektor industri kreatif, terutama pada
                    bidang desain grafis, arsitektur, lingkungan dan digital. Pada tahun 2022, Labkraf.id dibentuk
                    bersamaan dengan harapan-harapan baik untuk ikut serta dalam proses perubahan besar bangsa ini
                    &#40;Indonesia&#41; dan dunia.
                </PrimaryParagraph>
            </Header>
            <Container className='mt-3 flex flex-wrap items-center gap-2 capitalize'>
                <Link
                    href='/about'
                    className={buttonVariants({ variant: 'secondary', className: 'group items-center gap-x-1' })}>
                    Read More
                    <Icon
                        name='IconArrowNarrowRight'
                        className='transition-transform duration-300 group-hover:-rotate-45'
                    />
                </Link>
            </Container>
            <Container className='mt-32 w-full max-w-none'>
                <SecondaryHeading className='inline-flex items-center gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 bg-clip-text text-transparent'>
                    <Icon name='IconCategory' className='h-7 w-7 stroke-[1.5] text-primary' />
                    Layanan Kami
                </SecondaryHeading>
                <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
                    <div className='flex w-full flex-col items-start justify-start gap-4 rounded-md p-4 transition-colors duration-300 hover:bg-accent md:max-w-4xl md:flex-row'>
                        <Image
                            src={'/images/lab-apps.png'}
                            loading='lazy'
                            alt='Project 1'
                            width={2560}
                            height={1706}
                            className='aspect-square h-full w-full rounded bg-zinc-700 object-cover transition-transform duration-300 md:h-44 md:w-44'
                        />
                        <div className='flex h-full w-full flex-col'>
                            <h1 className='text-lg font-bold'>Lab Apps</h1>
                            <p className='mb-4 mt-2 line-clamp-3 text-sm tracking-wide text-muted-foreground md:line-clamp-none'>
                                Application Development & Digital Solution
                            </p>
                            <div className='flex items-center gap-2'>
                                <BrandTag className='gap-x-1 border-muted-foreground/20 text-[0.65rem]/[1rem]'>
                                    8 Penawaran
                                </BrandTag>
                                <BrandTag className='gap-x-1 border-muted-foreground/20 text-[0.65rem]/[1rem]'>
                                    35 Project
                                </BrandTag>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Container className='mt-32 w-full max-w-none'>
                <SecondaryHeading className='inline-flex items-center gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 bg-clip-text text-transparent'>
                    <Icon name='IconCategory' className='h-7 w-7 stroke-[1.5] text-primary' />
                    Layanan Kami
                </SecondaryHeading>
                <div className='mt-5 flex w-full flex-wrap items-center justify-center gap-4 min-[867px]:justify-start'>
                    <Image
                        src={'/images/lab-urben.png'}
                        alt='Lab Urben'
                        width={2048}
                        height={2048}
                        loading='lazy'
                        className='aspect-square h-60 w-60 rounded bg-white'
                    />
                    <Image
                        src={'/images/lab-apps.png'}
                        alt='Lab Apps'
                        width={2048}
                        height={2048}
                        loading='lazy'
                        className='aspect-square h-60 w-60 rounded bg-zinc-700'
                    />
                    <Image
                        src={'/images/lab-graph.png'}
                        alt='Lab Graph'
                        width={2048}
                        height={2048}
                        loading='lazy'
                        className='aspect-square h-60 w-60 rounded bg-[#EAD301]'
                    />
                </div>
            </Container> */}
            <Container className='mt-32 w-full max-w-none'>
                <SecondaryHeading className='inline-flex items-center gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 bg-clip-text text-transparent'>
                    <Icon name='IconDeviceLaptop' className='h-7 w-7 stroke-[1.5] text-primary' />
                    Project Terbaru
                </SecondaryHeading>
                <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1'>
                    <div className='group flex w-full flex-col items-start justify-start gap-4 rounded-md p-4 transition-colors duration-300 hover:bg-accent xl:max-w-4xl xl:flex-row'>
                        <Image
                            src={'/images/lamacca-1.png'}
                            loading='lazy'
                            alt='Project 1'
                            width={2560}
                            height={1706}
                            className='aspect-video h-auto w-auto rounded object-cover transition-transform duration-300 lg:group-hover:rotate-3 lg:group-hover:scale-90 xl:h-44'
                        />
                        <div className='flex h-full w-full flex-col xl:h-44'>
                            <h1 className='text-base font-bold'>La Macca</h1>
                            <p className='mb-4 mt-2 line-clamp-3 flex-1 text-sm tracking-wide text-muted-foreground xl:line-clamp-none'>
                                Lamacca merupakan akronim dari Layanan Informasi Perencanaan Kinerja. Aplikasi ini
                                mengintegrasikan dokumen-dokumen dalam lingkup Dinas Bina Marga, Cipta Karya, dan Tata
                                Ruang Kab. Pinrang.
                            </p>
                            <div className='flex items-center justify-end'>
                                <TooltipInfo content='Lab Apps Project'>
                                    <TagImage
                                        src='/images/lab-apps.png'
                                        alt='Lab Apps Project 1'
                                        className='aspect-square h-8 w-8 rounded bg-black'
                                    />
                                </TooltipInfo>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

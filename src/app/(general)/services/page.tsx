import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { PrimaryParagraph, SecondaryParagraph } from '@/components/paragraph';
import Image from 'next/image';

export default function Service() {
    return (
        <>
            <Header>
                <PrimaryHeading className='my-5 max-w-4xl text-4xl text-brand'>Layanan Kami</PrimaryHeading>
            </Header>
            <LabUrben />
            <LabApps />
        </>
    );
}

const LabUrben = () => {
    return (
        <Container className='mt-16 w-full max-w-none 2xl:my-40'>
            <div className='grid grid-cols-1 gap-5 2xl:grid-cols-2 2xl:gap-10'>
                <div className='col-auto flex h-full flex-col justify-center gap-4'>
                    <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                        <Image
                            src='/images/lab-urben.png'
                            alt='Lab Urben'
                            width={2560}
                            height={1706}
                            className='h-7 w-7 rounded-lg bg-white'
                        />
                        Lab Urben
                    </SecondaryHeading>
                    <PrimaryParagraph className='font-medium text-primary/80 lg:text-base'>
                        Architecture & Urban Design
                    </PrimaryParagraph>
                    <div className='flex justify-start gap-6'>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='Master Plan' />
                            <ServiceOfferItem value='Interior Design' />
                            <ServiceOfferItem value='Landscape Design' />
                            <ServiceOfferItem value='Architecture Design' />
                        </SecondaryParagraph>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='Mapping' />
                            <ServiceOfferItem value='Urban Planning' />
                            <ServiceOfferItem value='Tourism Specialist' />
                            <ServiceOfferItem value='Environmental Analyst' />
                        </SecondaryParagraph>
                    </div>
                </div>
                <div className='col-auto'>
                    <Image
                        src={'/images/about-1.png'}
                        alt='Tentang Safoto 1'
                        width={551}
                        height={830}
                        loading='lazy'
                        className='aspect-video h-full w-full rounded-lg object-cover'
                    />
                </div>
            </div>
        </Container>
    );
};

const LabApps = () => {
    return (
        <Container className='mt-16 w-full max-w-none 2xl:my-40'>
            <div className='grid grid-cols-1 gap-5 2xl:grid-cols-2 2xl:gap-10'>
                <div className='order-last col-auto 2xl:order-first'>
                    <Image
                        src={'/images/about-2.png'}
                        alt='Tentang Safoto 1'
                        width={551}
                        height={830}
                        loading='lazy'
                        className='aspect-video h-full w-full rounded-lg object-cover'
                    />
                </div>
                <div className='order-first col-auto flex h-full flex-col justify-center gap-4 2xl:order-last'>
                    <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                        <Image
                            src='/images/lab-apps.png'
                            alt='Lab Apps'
                            width={2560}
                            height={1706}
                            className='h-7 w-7 rounded-lg bg-white'
                        />
                        Lab Apps
                    </SecondaryHeading>
                    <PrimaryParagraph className='font-medium text-primary/80 lg:text-base'>
                        Application Development & Digital Solution
                    </PrimaryParagraph>
                    <div className='flex flex-col-reverse justify-start gap-3 2xl:flex-row'>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='E-Goverment' />
                            <ServiceOfferItem value='UI / UX Design' />
                            <ServiceOfferItem value='Custom Software Development' />
                            <ServiceOfferItem value='Web / Mobile Application Development' />
                        </SecondaryParagraph>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='GIS' />
                            <ServiceOfferItem value='IT Solution' />
                            <ServiceOfferItem value='Solution Architecture IT' />
                            <ServiceOfferItem value='Insfratruktur Management' />
                        </SecondaryParagraph>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const ServiceOfferItem = ({ value }: { value?: string }) => {
    return (
        <span className='inline-flex items-center gap-1'>
            <Icon name='IconArrowNarrowRight' className='h-3.5 w-3.5 text-muted-foreground' />
            {value}
        </span>
    );
};

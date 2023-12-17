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
            <LabGraph />
        </>
    );
}

const LabUrben = () => {
    return (
        <Container className='mt-16 w-full max-w-none 2xl:my-40'>
            <div className='grid grid-cols-1 gap-5 2xl:grid-cols-2 2xl:gap-10'>
                <div className='col-auto flex h-full flex-col justify-center gap-4'>
                    <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                        <Icon name='IconStar' className='h-7 w-7 stroke-2 text-brand' />
                        Lab Urben
                    </SecondaryHeading>
                    <PrimaryParagraph className='font-medium text-primary/80 lg:text-base'>
                        Architecture & Urban Design
                    </PrimaryParagraph>
                    <div className='flex flex-col justify-start gap-1.5 2xl:flex-row 2xl:gap-3'>
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
                        src={'/images/lab-urben.png'}
                        alt='Lab Urben Service'
                        width={551}
                        height={830}
                        loading='lazy'
                        className='aspect-video h-full w-full rounded-lg bg-white object-cover'
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
                        src={'/images/lab-apps.png'}
                        alt='Lab Apps Service'
                        width={551}
                        height={830}
                        loading='lazy'
                        className='aspect-video h-full w-full rounded-lg bg-zinc-700 object-cover'
                    />
                </div>
                <div className='order-first col-auto flex h-full flex-col justify-center gap-4 2xl:order-last'>
                    <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                        <Icon name='IconStar' className='h-7 w-7 stroke-2 text-brand' />
                        Lab Apps
                    </SecondaryHeading>
                    <PrimaryParagraph className='font-medium text-primary/80 lg:text-base'>
                        Application Development & Digital Solution
                    </PrimaryParagraph>
                    <div className='flex flex-col-reverse justify-start gap-1.5 2xl:flex-row 2xl:gap-3'>
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

const LabGraph = () => {
    return (
        <Container className='mt-16 w-full max-w-none 2xl:my-40'>
            <div className='grid grid-cols-1 gap-5 2xl:grid-cols-2 2xl:gap-10'>
                <div className='col-auto flex h-full flex-col justify-center gap-4'>
                    <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                        <Icon name='IconStar' className='h-7 w-7 stroke-2 text-brand' />
                        Lab Graph
                    </SecondaryHeading>
                    <PrimaryParagraph className='font-medium text-primary/80 lg:text-base'>
                        Digital Marketing & Visual Art
                    </PrimaryParagraph>
                    <div className='flex flex-col justify-start gap-1.5 2xl:flex-row 2xl:gap-3'>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='Brand Identity' />
                            <ServiceOfferItem value='Social Media Management' />
                            <ServiceOfferItem value='Social Media Analyst' />
                            <ServiceOfferItem value='Video & Motion Graphic' />
                        </SecondaryParagraph>
                        <SecondaryParagraph className='flex flex-col gap-1.5'>
                            <ServiceOfferItem value='Documentation' />
                            <ServiceOfferItem value='Digital Campaign' />
                            <ServiceOfferItem value='Digital Feature' />
                            <ServiceOfferItem value='Business Plan Management' />
                        </SecondaryParagraph>
                    </div>
                </div>
                <div className='col-auto'>
                    <Image
                        src={'/images/lab-graph.png'}
                        alt='Lab Graph Service'
                        width={551}
                        height={830}
                        loading='lazy'
                        className='aspect-video h-full w-full rounded-lg bg-[#EAD301] object-cover'
                    />
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

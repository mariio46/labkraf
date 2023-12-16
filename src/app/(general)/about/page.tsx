import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { PrimaryParagraph } from '@/components/paragraph';
import ProfileCard from '@/components/profile-card';
import { Teams } from '@/lib/data/teams';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Header>
                <PrimaryHeading className='my-5 max-w-4xl text-4xl text-brand'>Tentang Kami</PrimaryHeading>
                <PrimaryParagraph className='max-w-2xl lg:text-base'>
                    Di era disruptif yang serba cepat ini segalanya semakin tidak menentu dimana hanya ada dua cara
                    untuk bisa tetap bertahan dengan ketidakpastian tersebut, yaitu dengan teknologi dan juga
                    kreatifitas.
                </PrimaryParagraph>
                <div className='prose prose-zinc mx-auto w-full max-w-none lg:prose-lg'>
                    <blockquote className='text-foreground'>
                        <p>Berhentilah untuk mengutuk kegelapan dan mari bersama-sama nyalakan lilin.</p>
                    </blockquote>
                </div>
            </Header>

            <Container className='mt-16 w-full max-w-none lg:my-40'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10'>
                    <div className='col-auto flex h-full flex-col justify-center gap-4'>
                        <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                            <Icon name='IconCalendarClock' className='h-7 w-7 stroke-2 text-brand' />
                            Sejak 2022
                        </SecondaryHeading>
                        <PrimaryParagraph className='lg:text-base'>
                            Hadir sebagai solusi untuk mengubah hidup sebagian manusia agar lebih baik dan menyenangkan
                            dengan karsa, cinta dan kretifitas.
                        </PrimaryParagraph>
                    </div>
                    <div className='col-auto'>
                        <Image
                            src={'/images/about-1.png'}
                            alt='Tentang Safoto 1'
                            width={551}
                            height={830}
                            loading='eager'
                            className='aspect-video h-full w-full rounded-lg object-cover'
                        />
                    </div>
                </div>
            </Container>
            <Container className='mt-16 w-full max-w-none lg:my-40'>
                <div className='mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:mt-20'>
                    <div className='order-last col-auto md:order-first'>
                        <Image
                            src={'/images/about-2.png'}
                            alt='Tentang Safoto 1'
                            width={551}
                            height={830}
                            loading='eager'
                            className='aspect-video h-full w-full rounded-lg object-cover'
                        />
                    </div>
                    <div className='order-first col-auto flex h-full flex-col justify-center gap-4 md:order-last'>
                        <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                            <Icon name='IconLicense' className='h-7 w-7 stroke-2 text-brand' />
                            Misi Kami
                        </SecondaryHeading>
                        <PrimaryParagraph className='lg:text-base'>
                            Kami mengembangkan industri digital dengan tim yang kompak dan bertanggung jawab,
                            menciptakan lingkungan kreatif dan ruang belajar inovatif. Tujuan kami adalah menjadi pusat
                            kolaborasi menarik, menginspirasi pertumbuhan industri digital berkelanjutan, sambil
                            memegang teguh nilai kolaborasi, inovasi, dan tanggung jawab pada kekayaan budaya lokal.
                        </PrimaryParagraph>
                    </div>
                </div>
            </Container>

            <Container className='mt-16 w-full max-w-none lg:mt-20'>
                <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                    <Icon name='IconUsersGroup' className='h-7 w-7 stroke-2 text-brand' />
                    Team Kami
                </SecondaryHeading>
                <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
                    {Teams.map((team, i) => (
                        <ProfileCard
                            key={i}
                            name={team.name}
                            occupation={team.occupation}
                            image_path={team.image}
                            instagram={team.socials.instagram}
                            facebook={team.socials.facebook}
                            twitter={team.socials.twitter}
                            linkedin={team.socials.linkedin}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
}

import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { PrimaryParagraph } from '@/components/paragraph';
import ProfileCard from '@/components/profile-card';
import { Teams } from '@/lib/data/teams';

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
            </Header>

            <div className='prose prose-zinc mx-auto mt-16 w-full max-w-none lg:prose-lg lg:mt-20'>
                <blockquote className='text-foreground'>
                    <p>Berhentilah untuk mengutuk kegelapan dan mari bersama-sama nyalakan lilin.</p>
                </blockquote>
            </div>

            <Container className='mt-16 w-full max-w-none lg:mt-20'>
                <SecondaryHeading className='inline-flex items-center gap-2 text-brand'>
                    <Icon name='IconUsersGroup' className='h-7 w-7 stroke-2 text-brand' />
                    Team Kami
                </SecondaryHeading>
                <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
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

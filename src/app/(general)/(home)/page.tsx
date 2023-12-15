import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { PrimaryParagraph } from '@/components/paragraph';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import HomeFaqsCollection from './home-faqs-collection';
import HomeProjectsCollection from './home-projects-collection';
import HomeServicesCollection from './home-services-collection';

export default function Home() {
    return (
        <div>
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
            <Container className='mt-5 flex flex-wrap items-center gap-2 capitalize'>
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
            <HomeServicesCollection />
            <HomeProjectsCollection />
            <HomeFaqsCollection />
        </div>
    );
}

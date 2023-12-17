import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { TooltipInfo } from '@/components/tooltip-info';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function Contact() {
    return (
        <>
            <Header>
                <SecondaryHeading>Contact</SecondaryHeading>
                <PrimaryHeading className='my-5 max-w-4xl text-4xl text-brand'>
                    Ayo hubungi kami dan diskusikan apa yang anda inginkan.
                </PrimaryHeading>
            </Header>
            <Container className='mt-10 flex w-full max-w-none flex-col-reverse items-start gap-6 2xl:flex-row'>
                <section id='contact-form' className='w-full space-y-3 2xl:w-1/2'>
                    <div>
                        <Label htmlFor='name'>Name</Label>
                        <Input type='text' className='mt-1' id='name' />
                    </div>
                    <div>
                        <Label htmlFor='phone'>Nomor Hp</Label>
                        <Input type='text' className='mt-1' id='phone' />
                    </div>
                    <div>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' className='mt-1' id='email' />
                    </div>
                    <div>
                        <Label htmlFor='needs'>Kebutuhan Anda</Label>
                        <Textarea className='mt-1 h-28' id='needs' />
                    </div>
                    <div>
                        <Button type='button' className='bg-brand hover:bg-[#EAD301]'>
                            Kirim
                        </Button>
                    </div>
                </section>
                <section id='links' className='w-full 2xl:w-1/2'>
                    <div className='flex flex-wrap items-center gap-3'>
                        <TooltipInfo content='Email'>
                            <Link href='mailto:office@labkraf.id' className='rounded-full bg-accent p-5'>
                                <Icon name='IconMail' className='h-8 w-8 stroke-[1.5] text-muted-foreground' />
                            </Link>
                        </TooltipInfo>
                        <TooltipInfo content='Nomor Telepon'>
                            <Link
                                href='https://wa.me/6285398069499'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-full bg-accent p-5'>
                                <Icon name='IconBrandWhatsapp' className='h-8 w-8 stroke-[1.5] text-muted-foreground' />
                            </Link>
                        </TooltipInfo>
                        <TooltipInfo content='Alamat'>
                            <Link
                                href='https://wa.me/6285398069499'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-full bg-accent p-5'>
                                <Icon name='IconMapPin' className='h-8 w-8 stroke-[1.5] text-muted-foreground' />
                            </Link>
                        </TooltipInfo>
                    </div>
                </section>
            </Container>
        </>
    );
}

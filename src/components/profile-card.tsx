import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SocialType } from '@/lib/data/teams';
import Image from 'next/image';
import { PrimaryHeading } from './headings';
import { Icon } from './icon';

type ProfileCardType = {
    name: string;
    occupation: string;
    image_path: string;
} & SocialType;

export default function ProfileCard({
    name,
    occupation,
    image_path,
    instagram,
    facebook,
    twitter,
    linkedin,
}: ProfileCardType) {
    return (
        <Card className='mx-auto w-full max-w-sm rounded-lg border-0 bg-transparent shadow-none hover:bg-accent/50'>
            <CardHeader className='p-4'>
                <Image
                    alt={name}
                    className='w-full rounded-sm'
                    height={300}
                    src={image_path}
                    style={{
                        aspectRatio: '300/300',
                        objectFit: 'cover',
                    }}
                    width={300}
                />
            </CardHeader>
            <CardContent className='px-4 pb-4'>
                <PrimaryHeading className='text-xl font-semibold'>{name}</PrimaryHeading>
                <p className='text-[0.900rem]/[1.35rem] font-normal text-primary/70'>{occupation}</p>
                <div className='mt-4 flex justify-start gap-3'>
                    {instagram && <Icon name='IconBrandInstagram' className='text-muted-foreground' />}
                    {facebook && <Icon name='IconBrandFacebook' className='text-muted-foreground' />}
                    {twitter && <Icon name='IconBrandX' className='text-muted-foreground' />}
                    {linkedin && <Icon name='IconBrandLinkedin' className='text-muted-foreground' />}
                </div>
            </CardContent>
        </Card>
    );
}

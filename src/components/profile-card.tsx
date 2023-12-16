import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SocialType } from '@/lib/data/teams';
import Image from 'next/image';
import { SocialBlankLink } from './blank-link';
import { PrimaryHeading } from './headings';

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
        <Card className='mx-auto w-full max-w-sm rounded-lg border-0 bg-transparent shadow-none hover:bg-accent/50 '>
            <CardHeader className='p-4'>
                <Image
                    alt={name}
                    className='w-full rounded-sm bg-brand'
                    height={300}
                    src={image_path}
                    style={{
                        aspectRatio: '300/300',
                        objectFit: 'cover',
                    }}
                    width={300}
                />
            </CardHeader>
            <CardContent className='flex h-28 flex-col px-4 pb-4'>
                <PrimaryHeading className='text-lg font-semibold'>{name}</PrimaryHeading>
                <p className='h-full flex-1 text-[0.900rem]/[1.35rem] font-normal text-primary/70'>{occupation}</p>
                <div className='flex justify-start gap-1.5'>
                    {instagram && <SocialBlankLink href={instagram} icon='IconBrandInstagram' />}
                    {facebook && <SocialBlankLink href={facebook} icon='IconBrandFacebook' />}
                    {twitter && <SocialBlankLink href={twitter} icon='IconBrandX' />}
                    {linkedin && <SocialBlankLink href={linkedin} icon='IconBrandLinkedin' />}
                </div>
            </CardContent>
        </Card>
    );
}

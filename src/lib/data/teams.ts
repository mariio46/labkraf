export type SocialType = {
    linkedin?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    twitter?: string | null;
};

type TeamType = {
    image: string;
    name: string;
    occupation: string;
    socials: SocialType;
};

export const Teams = [
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: 'rafie_muiss',
            instagram: 'rafie_muiss',
            facebook: 'rafie_muiss',
            twitter: 'rafie_muiss',
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: null,
            instagram: 'rafie_muiss',
            facebook: 'rafie_muiss',
            twitter: 'rafie_muiss',
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: 'rafie_muiss',
            instagram: null,
            facebook: null,
            twitter: 'rafie_muiss',
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: 'rafie_muiss',
            instagram: 'rafie_muiss',
            facebook: null,
            twitter: null,
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: 'rafie_muiss',
            instagram: null,
            facebook: 'rafie_muiss',
            twitter: null,
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: null,
            instagram: 'rafie_muiss',
            facebook: null,
            twitter: 'rafie_muiss',
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: null,
            instagram: null,
            facebook: 'rafie_muiss',
            twitter: 'rafie_muiss',
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: null,
            instagram: 'rafie_muiss',
            facebook: 'rafie_muiss',
            twitter: null,
        },
    },
    {
        image: '/images/rafie.png',
        name: 'Rafie Muis',
        occupation: 'Rafie Muis',
        socials: {
            linkedin: null,
            instagram: null,
            facebook: null,
            twitter: null,
        },
    },
] satisfies TeamType[];

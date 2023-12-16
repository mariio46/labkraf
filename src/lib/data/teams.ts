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
        image: '/images/team-1.png',
        name: 'Edy Siswanto Syarif',
        occupation: 'Chief Executive Officer',
        socials: {
            linkedin: 'https://www.linkedin.com/in/edy-siswanto-syarif-72262a22b',
            instagram: 'https://www.instagram.com/edy.syarif',
            facebook: 'https://www.facebook.com/edysyarif09',
            twitter: 'https://www.twitter.com/_edysyarif',
        },
    },
    {
        image: '/images/team-2.png',
        name: 'Muhammad Rafie Muis',
        occupation: 'Chief Operating Officer',
        socials: {
            linkedin: 'https://www.linkedin.com/in/rafimuis',
            instagram: 'https://www.instagram.com/rafimuis',
            facebook: 'https://www.facebook.com/rafimuis',
            twitter: 'https://www.twitter.com/rafimuis',
        },
    },
    {
        image: '/images/team-3.png',
        name: 'Mutmainnah Yasmin',
        occupation: 'Chief Financial Officer',
        socials: {
            linkedin: null,
            instagram: 'https://www.instagram.com/innayasmin',
            facebook: 'https://www.facebook.com/masris2',
            twitter: null,
        },
    },
    {
        image: '/images/team-4.png',
        name: 'Ryan Rafli',
        occupation: 'Chief Technology Officer',
        socials: {
            linkedin: 'https://www.linkedin.com/in/ryan-rafli-80532913a',
            instagram: 'https://www.instagram.com/_ryanrafli',
            facebook: null,
            twitter: null,
        },
    },
    {
        image: '/images/team-5.png',
        name: 'Bayazid Sustami',
        occupation: 'Software Engineer',
        socials: {
            linkedin: 'https://www.linkedin.com/in/bayazid-sustami-m-n-aab979181',
            instagram: 'https://www.instagram.com/bayazid_sustami',
            facebook: 'https://www.facebook.com/amypazzolle',
            twitter: null,
        },
    },
    {
        image: '/images/team-6.png',
        name: 'Muhammad Al Muqtadir',
        occupation: 'UI/UX Designer',
        socials: {
            linkedin: null,
            instagram: 'https://www.instagram.com/muh.almuqtadir',
            facebook: 'https://www.facebook.com/muhammadalmuqtadir',
            twitter: null,
        },
    },
] satisfies TeamType[];

import type { TablerIconProps } from '@/types';

interface MenuType extends TablerIconProps {
    name: string;
    url: string;
}

export const menus = [
    {
        name: 'home',
        url: '/',
        icon: 'IconCompass',
    },
    {
        name: 'about',
        url: '/about',
        icon: 'IconInfoCircle',
    },
    {
        name: 'services',
        url: '/offers',
        icon: 'IconStars',
    },
    {
        name: 'contact',
        url: '/starterkits',
        icon: 'IconHeartHandshake',
    },
] satisfies MenuType[];

export const socials = [
    {
        name: 'github',
        url: 'https://github.com/mariio46/',
        icon: 'IconBrandGithub',
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/Mario46_',
        icon: 'IconBrandX',
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/maario46',
        icon: 'IconBrandFacebook',
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/mario46_',
        icon: 'IconBrandInstagram',
    },
] satisfies MenuType[];

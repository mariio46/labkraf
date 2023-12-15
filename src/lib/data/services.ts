type HomeServiceType = {
    image: string;
    image_class?: string;
    name: string;
    description: string;
    total_offer: number;
    total_project: number;
};

export const HomeServices = [
    {
        image: '/images/lab-urben.png',
        image_class: 'bg-white',
        name: 'Lab Urben',
        description: 'Architecture & Urban Design',
        total_offer: 8,
        total_project: 25,
    },
    {
        image: '/images/lab-apps.png',
        image_class: 'bg-zinc-700',
        name: 'Lab Apps',
        description: 'Application Development & Digital Solution',
        total_offer: 8,
        total_project: 25,
    },
    {
        image: '/images/lab-graph.png',
        image_class: 'bg-[#EAD301]',
        name: 'Lab Graph',
        description: 'Digital Marketing & Visual Art',
        total_offer: 8,
        total_project: 25,
    },
] satisfies HomeServiceType[];

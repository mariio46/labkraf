type HomeProjectType = {
    image: string;
    image_class?: string;
    name: string;
    slug: string;
    description: string;
    category: {
        image: string;
        image_class?: string;
        label: string;
        slug: string;
    };
};

export const HomeProjects = [
    {
        image: '/images/lamacca-1.png',
        name: 'La Macca',
        slug: 'la-macca-9274',
        description:
            'Lamacca merupakan akronim dari Layanan Informasi Perencanaan Kinerja. Aplikasi ini mengintegrasikan dokumen-dokumen dalam lingkup Dinas Bina Marga, Cipta Karya, dan Tata Ruang Kab. Pinrang.',
        category: {
            label: 'Lab Apps',
            slug: 'lab-apps-9723',
            image: '/images/lab-apps.png',
            image_class: 'bg-zinc-700',
        },
    },
    {
        image: '/images/semaja-1.png',
        name: 'Semaja',
        slug: 'semaja-0293',
        description:
            'SEMAJA lahir dari cinta akan keberagaman budaya Indonesia, mencerminkan kebanggaan kami terhadap warisan negara tercinta. Kami percaya makanan mencerminkan identitas kita, itulah mengapa kami berupaya menciptakan pengalaman kuliner yang istimewa.',
        category: {
            label: 'Lab Graph',
            slug: 'lab-graph-8832',
            image: '/images/lab-graph.png',
            image_class: 'bg-[#EAD301]',
        },
    },
] satisfies HomeProjectType[];

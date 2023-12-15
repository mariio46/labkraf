type HomeFaqType = {
    identifier: string;
    title: string;
    body: string;
};

export const HomeFaqs = [
    {
        identifier: 'question-1',
        title: 'Mengapa memilih kami?',
        body: 'Labkraf.id hadir sebagai kawan berbagi ide bersama para mitra untuk mencapai goals bersama. Kami membangun tim yang kompak dan kreatif untuk menciptakan lingkungan yang inovatif, kolaboratif, dan adaptif.',
    },
    {
        identifier: 'question-2',
        title: 'Apa yang kami lakukan?',
        body: 'Kami senang melakukan hal-hal baru yang berhubungan dengan seni, ekologi, dan teknologi yang kami beri nama sebagai laboratorium. arsitektur dan perancangan kota, aplikasi dan internet of things, ekologi dan lingkungan hidup, digital marketing dan visual art.',
    },
] satisfies HomeFaqType[];

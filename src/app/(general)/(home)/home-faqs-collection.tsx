import { Container } from '@/components/container';
import { SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HomeFaqs } from '@/lib/data/faqs';

export default function HomeFaqsCollection() {
    return (
        <Container className='mt-16 w-full max-w-none lg:mt-32'>
            <SecondaryHeading className='inline-flex items-center gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 bg-clip-text text-transparent'>
                <Icon name='IconHelp' className='h-7 w-7 stroke-[1.5] text-primary' />
                FAQ
            </SecondaryHeading>
            <div className='mt-5 max-w-4xl p-4'>
                <Accordion type='single' collapsible>
                    {HomeFaqs.map((faq, i) => (
                        <AccordionItem key={i} value={faq.identifier}>
                            <AccordionTrigger className='text-base'>{faq.title}</AccordionTrigger>
                            <AccordionContent className='max-w-xl leading-relaxed tracking-wide text-muted-foreground'>
                                {faq.body}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Container>
    );
}

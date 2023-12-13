import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return <main className='mx-auto min-h-[80vh] max-w-screen-2xl'>{children}</main>;
}

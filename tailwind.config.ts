import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { shadcnPreset } from './src/lib/shadcn/preset';

const config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    presets: [shadcnPreset],
    plugins: [require('tailwindcss-animate'), typography],
} satisfies Config;

export default config;

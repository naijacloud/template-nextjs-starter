import type { Metadata } from 'next';
import { Anton, Geist, Geist_Mono, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

import { siteName } from '@/lib/site';

export const dynamic = 'force-dynamic';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });

export function generateMetadata(): Metadata {
  return { title: siteName(), description: 'A Next.js app, deployed on Naijacloud.' };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} ${anton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

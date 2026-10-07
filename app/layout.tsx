import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

import { siteName } from '@/lib/site';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return { title: siteName(), description: 'A minimal Next.js App Router starter.' };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

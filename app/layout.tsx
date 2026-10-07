import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My app';

export const metadata: Metadata = {
  title: siteName,
  description: 'A minimal Next.js App Router starter.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

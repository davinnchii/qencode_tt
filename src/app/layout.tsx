import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';

import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

const grotes_dark = Darker_Grotesque(
  {
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-grotes_dark',
  });

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your Qencode account',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={grotes_dark.variable}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Darker_Grotesque, Space_Grotesk } from 'next/font/google';

import './globals.css';

const grotes_dark = Darker_Grotesque(
  {
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-grotes_dark',
  });

const grotes_space = Space_Grotesk(
  {
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-grotes_space',
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
    <body className={`${grotes_dark.variable} ${grotes_space.variable}`}>{children}</body>
    </html>
  );
}

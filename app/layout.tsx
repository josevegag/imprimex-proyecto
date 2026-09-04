import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});
const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Imprimex | Custom Printing in Passaic, NJ',
  description:
    'Screen printing, DTF transfers, embroidery, stickers, graphic design, and business printing in Passaic, New Jersey.',
  openGraph: {
    title: 'Imprimex | For All Your Printing Needs',
    description:
      'Custom apparel, branded essentials, and business printing in Passaic, New Jersey.',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 909,
        alt: 'Imprimex custom printed apparel and business materials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imprimex | For All Your Printing Needs',
    description:
      'Custom apparel, branded essentials, and business printing in Passaic, New Jersey.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}

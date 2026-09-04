import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';

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
  icons: { icon: '/images/imprimex-avatar.png' },
  openGraph: {
    title: 'Imprimex | For All Your Printing Needs',
    description:
      'Custom apparel, branded essentials, and business printing in Passaic, New Jersey.',
    images: [
      {
        url: '/images/imprimex-logo-horizontal.png',
        width: 910,
        height: 289,
        alt: 'Imprimex — For All Your Printing Needs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imprimex | For All Your Printing Needs',
    description:
      'Custom apparel, branded essentials, and business printing in Passaic, New Jersey.',
    images: ['/images/imprimex-logo-horizontal.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

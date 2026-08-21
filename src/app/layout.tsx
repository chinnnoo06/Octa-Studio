import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  // Réplica de un template comercial: no debe indexarse (ver src/app/robots.ts)
  robots: { index: false, follow: false, nocache: true },
  title: 'Livinor - Webflow Ecommerce Website Template',
  description:
    'Discover Livinor — a modern Webflow Ecommerce Website Template designed for stylish furniture and decor brands. Showcase elegant pieces, elevate everyday spaces.',
  openGraph: {
    title: 'Livinor - Webflow Ecommerce Website Template',
    description:
      'Discover Livinor — a modern Webflow Ecommerce Website Template designed for stylish furniture and decor brands. Showcase elegant pieces, elevate everyday spaces.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livinor - Webflow Ecommerce Website Template',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-page text-paragraph font-body antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

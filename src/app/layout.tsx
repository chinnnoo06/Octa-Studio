import type { Metadata } from 'next';
import { Sora, Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from '@/components/ui/footer/Footer';
import './globals.css';
import { Header } from '@/components/ui/header/Header';

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


/* Cuerpo de texto de Octa. */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const hirondelles = localFont({
  src: '../assets/fonts/Hirondelles des Alpes.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-hirondelles',
  display: 'swap',
});

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
  title: 'Octa Studio - Organizador de eventos, Compras y ventas minoristas',
  description:
    'Discover Livinor — a modern Webflow Ecommerce Website Template designed for stylish furniture and decor brands. Showcase elegant pieces, elevate everyday spaces.',
  openGraph: {
    title: 'Octa Studio - Organizador de eventos, Compras y ventas minoristas',
    description:
      'Discover Livinor — a modern Webflow Ecommerce Website Template designed for stylish furniture and decor brands. Showcase elegant pieces, elevate everyday spaces.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Octa Studio - Organizador de eventos, Compras y ventas minoristas',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${hirondelles.variable} ${poppins.variable}`}
    >
      <body className="bg-page text-paragraph font-body antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

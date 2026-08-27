import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Footer } from '@/components/ui/footer/Footer';
import './globals.css';
import { Header } from '@/components/ui/header/Header';
import { WhatsAppButton } from '@/components/ui/buttons/WhatsAppButton';

/** La base de todo el sitio. `--font-sans` de `globals.css` apunta aquí, y de
 *  ahí sale la fuente del documento entero sin escribir ninguna clase. */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const gentleman = localFont({
  src: '../assets/fonts/Gentleman on the Rainbow.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-gentleman-local',
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
      lang="es"
      className={`${inter.variable} ${gentleman.variable}`}
    >
      <body className="bg-primary text-fourth antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

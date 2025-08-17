import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress, ScrollIndicator } from '@/components/ui/scroll-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name - Art & Design Portfolio',
  description: 'Full-stack developer transitioning to UI/UX design. Showcasing photography, oil paintings, illustrations, and design projects.',
  keywords: ['portfolio', 'UI/UX design', 'full-stack developer', 'photography', 'oil paintings', 'illustrations'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.com',
    title: 'Your Name - Art & Design Portfolio',
    description: 'Full-stack developer transitioning to UI/UX design. Showcasing photography, oil paintings, illustrations, and design projects.',
    siteName: 'Your Name Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        <main className="pt-20">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

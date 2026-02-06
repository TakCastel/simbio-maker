import type { Metadata } from 'next';
import { Lexend, Quicksand } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-title',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Sims Maker',
  description: 'Create your Sim legacy card',
  icons: {
    icon: '/icon.webp',
    apple: '/icon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${quicksand.variable}`}>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

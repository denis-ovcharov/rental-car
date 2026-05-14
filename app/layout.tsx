import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rental car App',
  description: 'The best cars are here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}

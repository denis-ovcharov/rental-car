import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Manrope } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RentalCar — Find your perfect rental car',
  description:
    'Browse and book rental cars online. Filter by brand, price, and mileage. Reliable and budget-friendly rentals for any journey.',
  keywords: ['rental car', 'car booking', 'rent a car', 'car hire'],
  openGraph: {
    title: 'RentalCar — Find your perfect rental car',
    description: 'Browse and book rental cars online.',
    type: 'website',
    images: [{ url: '/home-bg.jpg', width: 1200, height: 630 }],
  },
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
          <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
}

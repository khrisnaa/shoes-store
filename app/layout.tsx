import type { Metadata } from 'next';
import { inter } from './font';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'mx-auto flex min-h-screen max-w-7xl flex-col',
          inter.className,
        )}
      >
        <Navbar />
        <main className="flex flex-1 flex-col justify-center">{children}</main>
      </body>
    </html>
  );
}

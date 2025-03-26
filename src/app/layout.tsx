import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dongzhou Li - Personal Portfolio',
  description: 'Welcome to my personal portfolio website. I am a graduate student at Columbia University specializing in software development and machine learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import React from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html>
      <main>      
        {children}
      </main>
    </html>
  );
};


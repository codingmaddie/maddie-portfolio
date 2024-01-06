import React from 'react';
import { Outfit } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <style></style> */}
      {/* <Navbar /> */}
      <div className={outfit.className}>{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;

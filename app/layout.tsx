import React from 'react';
import { Outfit } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';


import HomeBackground from '../components/homebackground';
import Gallery from '../components/gallery';
import Skills from "../components/skills";
import Projects from "../components/projects";
const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html>
      <main>
        <HomeBackground />
        <Skills />
        <Projects />
        <Gallery />
        {children}
      </main>
    </html>
  );
};

  //  {/* <style></style> */}
  //     {/* <Navbar /> */}
  //     {/* <div className={outfit.className}>{children}</div> */}
  //     {/* <Footer /> */}


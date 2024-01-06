import RootLayout from './layout';
import HomeBackground from '../components/homebackground';
import Gallery from '../components/gallery';
import './globals.css'
import { Metadata } from "next";
import Footer from '../components/footer';
import Skills from "../components/skills";
import Projects from "../components/projects";
import { Children } from 'react';

export const metadata: Metadata = {
  title: "Home - Madeline Tang",
}

const Home = () => {
  return (
      <div>
      <RootLayout>
      
        <HomeBackground />
        <Skills />
        <Projects />
        <Gallery />
        </RootLayout>
      </div>
  );
}

export default Home;

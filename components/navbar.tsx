import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-gray-100 z-50">
      <div className="flex items-center justify-between h-full w-full px-10 2xl:px-16">
        <Link href='/'>
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width="50" height="75" />
            <div className="ml-8 font-bold">
              <h2 className="text-xl text-gray-800">Madeline Tang</h2>
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="flex text-gray-800 font-bold">
            <Link href="/">
              <li className="ml-10 hover:border-b-2 hover:border-blue-600 hover:font-bold transition-all duration-600">
                Home
              </li>
            </Link>
            <Link href="/Skills">
              <li className="ml-10 hover:border-b-2 hover:border-blue-600 hover:font-bold  transition-all duration-600">
                Skills
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 hover:border-b-2 hover:border-blue-600 hover:font-bold  transition-all duration-600">
                Projects
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 hover:border-b-2 hover:border-blue-600 hover:font-bold transition-all duration-600">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

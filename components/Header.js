import React from 'react';
import Image from 'next/image';
import logo from '../public/LOGO HZ.png';

const Header = () => {
  return (
    <header className="bg-yellow-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={logo} alt="Hyaaz Clothing" width={150} height={50} />
        <nav>
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4">Products</a>
          <a href="#" className="px-4">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

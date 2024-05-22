import React from 'react';
import Image from 'next/image';
import heroImage from '../public/Aesthetic New Arrival Woman Jacket Instagram Post.jpg';

const Hero = () => {
  return (
    <section className="relative text-center">
      <Image src={heroImage} alt="Hero" layout="responsive" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hyaaz Clothing</h1>
        <p className="text-xl mb-8">Find the best products at amazing prices!</p>
        <a href="#" className="bg-white text-black px-4 py-2 rounded">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;

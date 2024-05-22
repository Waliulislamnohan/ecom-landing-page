import React from 'react';
import Image from 'next/image';
import menImage from '../public/White Simple Sale Men\'s Clothing Instagram Post.jpg';
import kidsImage from '../public/Kids Collection Photo Collage.jpg';

const products = [
  { id: 1, title: 'Product 1', description: 'This is a great product.', price: '$19.99' },
  { id: 2, title: 'Product 2', description: 'This is another great product.', price: '$29.99' },
  { id: 3, title: 'Product 3', description: 'This is the best product.', price: '$39.99' },
];
const ProductShowcase = () => {
    return (
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Image src={menImage} alt="Men's Fashion" layout="responsive" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold">
              Men's Fashion
            </div>
          </div>
          <div className="relative">
            <Image src={kidsImage} alt="Kids Collection" layout="responsive" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold">
              Kids Collection
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default ProductShowcase;

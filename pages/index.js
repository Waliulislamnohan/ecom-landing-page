import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hyaaz Clothing</title>
        <meta name="description" content="Welcome to Hyaaz Clothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}

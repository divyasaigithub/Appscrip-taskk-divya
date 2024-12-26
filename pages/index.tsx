import Head from 'next/head';
import ProductList from '../components/ProductList';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <Head>
        <title>PLP Page</title>
        <meta name="description" content="Explore our wide range of products." />
        <meta property="og:title" content="PLP Page" />
        <meta property="og:description" content="Explore our wide range of products." />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container">
        <h1>Products</h1>
        <h2>Explore our products</h2>
        <ProductList products={products} />
      </div>
    </>
  );
};

// Fetching data directly in getServerSideProps
export async function getServerSideProps() {
  // Fetch data from the API
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  // Map data to include the correct image path
  const products = data.map((product: any) => ({
    ...product,
    image: '/images/Design Task - PLP (1).avif', // Make sure this path matches the public folder structure
  }));

  return {
    props: { products },
  };
}

export default Home;







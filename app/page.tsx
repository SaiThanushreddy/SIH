import { headers } from 'next/headers';
import ProductList from '../components/ProductList';
import { getProducts } from '../utils/productUtils';

export default async function Home() {
  const products = getProducts();
  const ip = headers().get('x-client-ip') || 'Unknown';

  console.log("Visitor's IP Address:", ip);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <p>Your IP Address: {ip}</p>
      <ProductList products={products} />
    </div>
  );
}

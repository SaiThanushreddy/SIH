"use client"
import ProductList from '../components/ProductList'
import { getProducts } from '../utils/productUtils'

export default function Home() {
  const products = getProducts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <ProductList products={products} />
    </div>
  )
}


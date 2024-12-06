import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="border p-4 rounded hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  )
}

